import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../../services/rest-api.service";
import { StockTradeStrategy } from "../../model/stockTradeStrategy";


@Component({
  selector: 'trading-strategy-browse',
  templateUrl: './trading-strategy-browse.component.html',
  styleUrls: ['./trading-strategy-browse.component.css']
})
export class TradingStrategyBrowseComponent implements OnInit {

  stockTradeStrategies: StockTradeStrategy[] = [];

  constructor(public restApi: RestApiService) { }



  // Get AllStockStrategy list
  loadAllStockStrategy() {
    this.restApi.getAllStockTradeStrategy().subscribe((data: StockTradeStrategy[]) => {
      this.stockTradeStrategies = data;
    }
    );
  };

  ngOnInit(): void {
    this.loadAllStockStrategy();
  }

  deleteStockStrategy(id) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.restApi.deleteStockTradeStrategy(id).subscribe(data => {
        this.loadAllStockStrategy()
      })
    }
  }

}
