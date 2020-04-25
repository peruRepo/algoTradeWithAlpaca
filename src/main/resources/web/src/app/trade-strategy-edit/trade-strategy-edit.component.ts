import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { ActivatedRoute, Router } from '@angular/router';
import { StockTradeStrategy } from "../shared/stockTradeStrategy";
import { TradeStrategy } from "../shared/tradeStrategy";

@Component({
  selector: 'trade-strategy-edit',
  templateUrl: './trade-strategy-edit.component.html',
  styleUrls: ['./trade-strategy-edit.component.css']
})

export class TradeStrategyEditComponent implements OnInit {
//  ticker = this.actRoute.snapshot.params['ticker'];
  ticker : string;
  strategyName : string;
  stockTradeStrategy: any = {};
  reEnterOptions : string[] = ["true","false"];

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
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
      this.restApi.saveStockTradeStrategy(this.stockTradeStrategy).subscribe(data => {
        this.stockTradeStrategy = data;
      })
    }
  }


}
