import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../../services/rest-api.service";
import { ActivatedRoute, Router } from '@angular/router';
import { StockTradeStrategy } from "../../model/stockTradeStrategy";
import { TradeStrategy } from "../../model/tradeStrategy";
import { TickerSuggestion } from '../../model/stock-suggestion';
import { FieldSuggestionService } from "../../services/field-suggestion.service";
import { noop, Observable, Observer, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { TickerSuggestionResponse } from '../../model/stock-suggestion-response';

@Component({
  selector: 'trade-strategy-edit',
  templateUrl: './trade-strategy-edit.component.html',
  styleUrls: ['./trade-strategy-edit.component.css']
})

export class TradeStrategyEditComponent implements OnInit {

  ticker : string;
  strategyName : string;
  stockTradeStrategy: any = {
      "ticker": "",
      "quantity": 10,
      "interval": 1,
      "timeUnit": "MINUTES",
      "intervalDuration": "ONE_MIN",
      "tradeStrategy":{
      "entryConditions": "function(barSeries, stockWatch){ \n\tclosePriceIndicator = new ClosePriceIndicator(barSeries);\n\tif(closePriceIndicator.getValue(barSeries.getEndIndex()).floatValue() < 568){\n\t\tstockWatch.setStopLossPercentage(10.0);\n\t\treturn true;\n\t}\n\treturn false;\n};",
      "entrySignal": "buy",
      "exitSignal": "sell",
      "exitConditions": "function(barSeries, stockWatch){ \n\tclosePriceIndicator = new ClosePriceIndicator(barSeries);\n\tif(closePriceIndicator.getValue(barSeries.getEndIndex()).floatValue() > 569){\n\t\treturn true;\n\t}\n\treturn false;\n};"
      },
      "state": "WATCHING",
      "stockWatch":{
      "stopLossPercentage": 5.0,
      "profitPercentage": 20.0,
      "reenter" : true
      },
      "candleCount": 1000
    };
  reEnterOptions : string[] = ["true","false"];
  intervalDurationOptions : string[] = ["ONE_MIN","FIVE_MINUTE","FIFTEEN_MINUTE","ONE_DAY"];
  tradeStrategyStates : string[] = ["INACTIVE","WATCHING","ENTRY_ORDER_PENDING","EXIT_ORDER_PENDING","ENTERED","COMPLETED"];
  timeUnit : string[] = ["DAYS","MINUTES","HOURS"];
  loading : boolean = false;
  tickerSuggestion$: Observable<TickerSuggestion[]>;
  errorMessage : string = "";
  tickerSuggestionList : TickerSuggestion[] = [];
  tickerSearchString : string;

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router,
    public fieldSuggestionService : FieldSuggestionService
  ) {
    this.actRoute.queryParams.subscribe( params => {
      console.log(params);
      this.ticker = params["ticker"];
      this.strategyName = params["strategyName"];
       }
    );

  }

  ngOnInit() {
    this.getStockTradeStrategyFromParam();
     this.createTickerSuggestionObservable();
   }


   createTickerSuggestionObservable () {
     this.tickerSuggestion$ =  new Observable((observer: Observer<string>) => {
       observer.next(this.stockTradeStrategy.ticker);
     }).pipe(
       switchMap((tickerSearchString: string) => {
         if (tickerSearchString) {

           return this.restApi.getStockSuggestion(tickerSearchString)
           .pipe(
             map((data: TickerSuggestionResponse) => data && data.tickers || [] ),
             tap(
             () => noop,
             err => {
                         // in case of http error
                         this.errorMessage = err && err.message || 'Something goes wrong';
                       })
                 );
        }
         else {
           return of([]);
       }

       })
     );
   }

  getStockTradeStrategyFromParam() {
    if(this.ticker != null) {
      this.restApi.getStockTradeStrategy(this.ticker).subscribe(data => {
        this.stockTradeStrategy = data;
      })
    } else {
      this.restApi.getBackTestStrategy(this.strategyName).subscribe(data => {
        let backTestStrategy = data;
        this.stockTradeStrategy = new StockTradeStrategy();
        this.stockTradeStrategy.ticker = backTestStrategy.backTestRequest.ticker;
        this.stockTradeStrategy.quantity = backTestStrategy.backTestRequest.quantity;
        this.stockTradeStrategy.interval = 1;
        this.stockTradeStrategy.timeUnit = "MINUTES";
        this.stockTradeStrategy.intervalDuration = backTestStrategy.backTestRequest.intervalDuration;
        this.stockTradeStrategy.state = "WATCHING";
        this.stockTradeStrategy.candleCount=backTestStrategy.backTestRequest.candleCount;
        this.stockTradeStrategy.tradeStrategy = backTestStrategy.backTestRequest.tradeStrategy;
        this.stockTradeStrategy.stockWatch = backTestStrategy.backTestRequest.stockWatch;
        this.stockTradeStrategy.stockWatch.reenter = true;
      })
    }
  }


  getStockTradeStrategy() {
    this.restApi.getStockTradeStrategy(this.stockTradeStrategy.ticker).subscribe(data => {
      this.stockTradeStrategy = data;
    })
  }

  // Update employee data
  saveStockTradeStrategy() {
    if(window.confirm('Are you sure, you want to save?')){
      this.loading = true;
      this.restApi.saveStockTradeStrategy(this.stockTradeStrategy).subscribe(data => {
        this.stockTradeStrategy = data;
        this.loading = false;
      });
    }
  }


}
