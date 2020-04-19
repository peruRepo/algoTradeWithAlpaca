import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { ActivatedRoute, Router } from '@angular/router';
import {BackTestRequest } from "../shared/backTestRequest";
import {BackTestResponse } from "../shared/backTestResponse";
import {BackTestStrategy } from "../shared/backTestStrategy";

@Component({
  selector: 'back-test-edit',
  templateUrl: './back-test-edit.component.html',
  styleUrls: ['./back-test-edit.component.css']
})

export class BackTestEditComponent implements OnInit {
  strategyName = this.actRoute.snapshot.params['strategyName'];
  backTestStrategy: BackTestStrategy = {};
  backTestRequest: BackTestRequest = {};
  stockWatch : StockWatch = {};
  tradeStrategy : TradeStrategy = {};

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) {
    this.actRoute.params.subscribe( params => {
      console.log(params);
      this.strategyName = params["strategyName"];
       }
    );
  }

  ngOnInit() {
    this.backTestStrategy.backTestRequest = this.backTestRequest;
    this.backTestStrategy.backTestRequest.stockWatch = this.stockWatch;
    this.backTestStrategy.backTestRequest.tradeStrategy = this.tradeStrategy;

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
    })
  }


}
