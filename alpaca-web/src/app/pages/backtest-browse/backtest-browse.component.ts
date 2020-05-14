import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../../services/rest-api.service";
import {BackTestRequest } from "../../model/backTestRequest";
import {BackTestResponse } from "../../model/backTestResponse";
import {BackTestStrategy } from "../../model/backTestStrategy";


@Component({
  selector: 'backtest-browse',
  templateUrl: './backtest-browse.component.html',
  styleUrls: ['./backtest-browse.component.css']
})
export class BackTestBrowseComponent implements OnInit {

  backTestStrategies: BackTestStrategy[] = [];

  constructor(public restApi: RestApiService) { }



  // Get All Back TestStrategy list
  loadAllBackTestStrategy() {
    this.restApi.getAllBackTestStrategy().subscribe((data : BackTestStrategy[]) => {
      this.backTestStrategies = data ;
    }
    );
};

  ngOnInit() :void  {
    this.loadAllBackTestStrategy();
  }
  // Delete Back Test Strategy
 deleteBackTestStrategy(strategyName) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.restApi.deleteBackTestStrategy(strategyName).subscribe( data => {
         this.loadAllBackTestStrategy();
      });

    }
  }

}
