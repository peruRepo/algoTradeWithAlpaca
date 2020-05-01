import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { ActivatedRoute, Router } from '@angular/router';
import {BackTestRequest } from "../shared/backTestRequest";
import {BackTestResponse } from "../shared/backTestResponse";
import {BackTestStrategy } from "../shared/backTestStrategy";
import { EChartOption } from 'echarts';
import { CSVUtil } from '../shared/csvUtil.service';
import { retry, catchError } from 'rxjs/operators';

@Component({
  selector: 'back-test-edit',
  templateUrl: './back-test-edit.component.html',
  styleUrls: ['./back-test-edit.component.css']
})

export class BackTestEditComponent implements OnInit {
  strategyName = this.actRoute.snapshot.params['strategyName'];
  backTestStrategy: any = {
        "strategyName": "Enter your Back test name here!!",
        "backTestRequest":{
        "strategyName": "Enter your Back test name here",
        "ticker": "Enter your Stock name here!!",
        "quantity": 10,
        "intervalDuration": "ONE_MIN",
        "tradeStrategy":{
          "entryConditions": "function(barSeries, stockWatch){ \n\tclosePriceIndicator = new ClosePriceIndicator(barSeries);\n\tif(closePriceIndicator.getValue(barSeries.getEndIndex()).floatValue() < 568){\n\t\tstockWatch.setStopLossPercentage(10.0);\n\t\treturn true;\n\t}\n\treturn false;\n};",
          "entrySignal": "buy",
          "exitSignal": "sell",
          "exitConditions": "function(barSeries, stockWatch){ \n\tclosePriceIndicator = new ClosePriceIndicator(barSeries);\n\tif(closePriceIndicator.getValue(barSeries.getEndIndex()).floatValue() > 569){\n\t\treturn true;\n\t}\n\treturn false;\n};"
        },
        "stockWatch":{
        "stopLossPercentage": -10.0,
        "profitPercentage": 0.0,
        "targetProfitPercentage": 15.0
        },
        "candleCount": 1000
        },
        "profitOrLoss": 0,
        "profitPercentage": 0
};
  backTestResponse : BackTestResponse = new BackTestResponse();
  profitDataSeries : number[] = [];
  timeSeriesData : Date[] = [];
  eChartDataSeries : any [] = [];
   dynamicData : any = {};
  intervalDurationOptions : string[] = ["ONE_MIN","FIVE_MINUTE","FIFTEEN_MINUTE","ONE_DAY"];
  loading : boolean = false;
  errorMessage : string = "";

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router,
    public csvUtil : CSVUtil
  ) {
    this.actRoute.params.subscribe( params => {
      console.log(params);
      this.strategyName = params["strategyName"];
       }
    );

  }

  ngOnInit() {
    this.getBackTestStrategyWithParam();
   }

  getBackTestStrategyWithParam() {
    this.restApi.getBackTestStrategy(this.strategyName).subscribe(data => {
      this.backTestStrategy = data;
    })
  }


  getBackTestStrategy() {
    this.restApi.getBackTestStrategy(this.backTestStrategy.backTestRequest.strategyName)
    .subscribe(data => {
      this.backTestStrategy = data;
    },
      error => {
        this.errorMessage = error.message;
      }
    )
  }

  // Update employee data
  executeBackTestStrategy() {
    this.loading = true;
    this.dynamicData = {};
    this.restApi.executeBackTestStrategy(this.backTestStrategy.backTestRequest).subscribe(data => {
      this.backTestResponse = data;
      this.backTestStrategy.profitOrLoss = this.backTestResponse.profitOrLoss;
      this.backTestStrategy.profitPercentage = this.backTestResponse.profitPercentage;
      this.formDataforChart(this.backTestResponse.trades);
          this.loading = false;
    },
    error =>
    {
        this.errorMessage = error;
        this.loading = false;
    }
  )
  //  this.loading = false;
  }

  formDataforChart(backTestTrades) {
    let i = 0;
    let eChartDataSeries :any[] = [];
    for(let backTestTrade of backTestTrades){
       let profitAndTime = [];
       profitAndTime.push(backTestTrade.exitTime);
       profitAndTime.push(backTestTrade.profitOrLoss);
       eChartDataSeries.push(profitAndTime);
    }
    let data = {
      data : eChartDataSeries,
      type : 'bar'
    };

    this.dynamicData=this.initialValue;
    this.dynamicData.series.push(data);
  }

   downloadCSV() {
     let headerList = ['entryTime', 'entrySignal', 'priceAtEntry', 'exitTime', 'exitSignal', 'priceAtExit','profitOrLoss'];
     let fileName = "ExecutedTradesFor-"+this.backTestStrategy.backTestRequest.ticker;
     this.csvUtil.downloadFile(this.backTestResponse.trades,fileName,headerList);
   }

   handleError(error){
     if(error.status == 0 || error.status == 200) {
       return;
     }
     if(error.error instanceof ErrorEvent) {
       this.errorMessage = error.error.message;
     } else {
       this.errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
   }

  initialValue: EChartOption = {
    xAxis: {
      type: 'time',
      splitNumber : 40
    },
    yAxis: {
      type: 'value',
      name : '$',
      nameLocation: 'middle'
    },
    series: [{
      data : [],
      type: 'line'
    }]
  }

}
