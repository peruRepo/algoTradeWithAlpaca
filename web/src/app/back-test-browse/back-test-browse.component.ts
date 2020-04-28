import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { BackTestStrategy } from '../shared/backTestStrategy';


@Component({
  selector: 'back-test-browse',
  templateUrl: './back-test-browse.component.html',
  styleUrls: ['./back-test-browse.component.css']
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
