import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { StockTradeStrategy } from '../shared/stockTradeStrategy';


@Component({
  selector: 'app-employees-list',
  templateUrl: './trade-strategy-browse.component.html',
  styleUrls: ['./trade-strategy-browse.component.css']
})
export class TradeStrategyBrowseComponent implements OnInit {

  stockTradeStrategies: StockTradeStrategy[] = [];

  constructor(public restApi: RestApiService) { }



  // Get AllStockStrategy list
  loadAllStockStrategy() {
    this.restApi.getAllStockTradeStrategy().subscribe((data : StockTradeStrategy[]) => {
      this.stockTradeStrategies = data ;
    }
    );



//      {next : stockTradeStrategies => {
//      this.stockTradeStrategies = stockTradeStrategies;
//    }
//  });
};

  ngOnInit() :void  {
    this.loadAllStockStrategy();
  }
  // Delete employee
//  deleteStockStrategy(id) {
//    if (window.confirm('Are you sure, you want to delete?')){
//      this.restApi.deleteStockTradeStrategy(id).subscribe(data => {
//        this.loadAllStockStrategy()
//      })
//    }
//  }

}
