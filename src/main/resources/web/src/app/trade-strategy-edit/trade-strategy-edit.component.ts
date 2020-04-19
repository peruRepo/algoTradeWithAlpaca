import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'trade-strategy-edit',
  templateUrl: './trade-strategy-edit.component.html',
  styleUrls: ['./trade-strategy-edit.component.css']
})

export class TradeStrategyEditComponent implements OnInit {
  ticker = this.actRoute.snapshot.params['ticker'];
  stockTradeStrategy: any = {};
  reEnterOptions : string[] = ["true","false"];

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) {
    this.actRoute.params.subscribe( params => {
      console.log(params);
      this.ticker = params["ticker"];
       }
    );
  }

  ngOnInit() {
    this.getStockTradeStrategyWithParam();
   }

  getStockTradeStrategyWithParam() {
    this.restApi.getStockTradeStrategy(this.ticker).subscribe(data => {
      this.stockTradeStrategy = data;
    })
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
