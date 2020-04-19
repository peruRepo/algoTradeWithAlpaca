import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { ActivatedRoute, Router } from '@angular/router';
import {BackTestRequest } from "../shared/backTestRequest";
import {BackTestResponse } from "../shared/backTestResponse";
import {BackTestStrategy } from "../shared/backTestStrategy";
import { EChartOption } from 'echarts';
import { CSVUtil } from '../shared/csvUtil.service';

@Component({
  selector: 'back-test-edit',
  templateUrl: './back-test-edit.component.html',
  styleUrls: ['./back-test-edit.component.css']
})

export class BackTestEditComponent implements OnInit {
  strategyName = this.actRoute.snapshot.params['strategyName'];
  backTestStrategy: BackTestStrategy = new BackTestStrategy();
  backTestResponse : BackTestResponse = new BackTestResponse();
  profitDataSeries : number[] = [];
  timeSeriesData : Date[] = [];
  eChartDataSeries : any [] = [];
   dynamicData : any = {};

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
    this.restApi.getBackTestStrategy(this.backTestStrategy.backTestRequest.strategyName).subscribe(data => {
      this.backTestStrategy = data;
    })
  }

  // Update employee data
  executeBackTestStrategy() {
    this.restApi.executeBackTestStrategy(this.backTestStrategy.backTestRequest).subscribe(data => {
      this.backTestResponse = data;
      this.backTestStrategy.profitOrLoss = this.backTestResponse.profitOrLoss;
      this.backTestStrategy.profitPercentage = this.backTestResponse.profitPercentage;
      this.downloadCSV(this.backTestResponse.trades);
      this.formDataforChart(this.backTestResponse.trades);
    })
  }

  formDataforChart(backTestTrades) {
    let i = 0;
    for(let backTestTrade of backTestTrades){
       let profitAndTime = [];
       profitAndTime.push(backTestTrade.exitTime);
       profitAndTime.push(backTestTrade.profitOrLoss);
       this.eChartDataSeries.push(profitAndTime);
    }
    let data = {
      data : this.eChartDataSeries,
      type : 'bar'
    };
    this.dynamicData=this.initialValue;
    this.dynamicData.series = [];
    this.dynamicData.series.push(data);
  }

   downloadCSV(backTestTrades) {
     let headerList = ['entryTime', 'entrySignal', 'priceAtEntry', 'exitTime', 'exitSignal', 'priceAtExit','profitOrLoss'];
     let fileName = "ExecutedTradesFor-"+this.backTestStrategy.backTestRequest.ticker;
     this.csvUtil.downloadFile(backTestTrades,fileName,headerList);
   }

  initialValue: EChartOption = {
    xAxis: {
      type: 'time',
      splitNumber : 20
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
