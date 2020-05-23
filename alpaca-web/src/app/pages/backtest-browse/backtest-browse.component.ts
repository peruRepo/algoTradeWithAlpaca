import { Component, OnInit, PipeTransform } from '@angular/core';
import { RestApiService } from "../../services/rest-api.service";
import {BackTestRequest } from "../../model/backTestRequest";
import {BackTestResponse } from "../../model/backTestResponse";
import {BackTestStrategy } from "../../model/backTestStrategy";
import { FormControl } from '@angular/forms';

import { DecimalPipe } from '@angular/common';

import { Observable } from 'rxjs';
import { map, startWith, filter } from 'rxjs/operators';
import { from } from 'rxjs';


@Component({
  selector: 'backtest-browse',
  templateUrl: './backtest-browse.component.html',
  styleUrls: ['./backtest-browse.component.css']
})
export class BackTestBrowseComponent implements OnInit {


  backTestStrategies: BackTestStrategy[] = [];

  //pipeData: DecimalPipe = new DecimalPipe("");
  direction: string = 'desc';

  constructor(public restApi: RestApiService, public pipeData: DecimalPipe) {
  }

  filter = new FormControl('');

  backTestStrategiesObserve$: Observable<BackTestStrategy[]>;

  // Get All Back TestStrategy list
  loadAllBackTestStrategy() {
    this.restApi.getAllBackTestStrategy().subscribe((data : BackTestStrategy[]) => {
      this.backTestStrategies = data ;
      this.registerObservable();
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


  registerObservable() {
    this.backTestStrategiesObserve$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => this.search(text, this.pipeData))
    );
  }



  search(text: string, pipe: PipeTransform): BackTestStrategy[] {
        console.log(text);
      //  return  this.backTestStrategies;
        let filteredbackTestStrategies : BackTestStrategy[] = [];
        this.backTestStrategies.forEach((backTestStrategy, index) => {
          if(backTestStrategy.strategyName &&
            (
              backTestStrategy.strategyName.toLowerCase().includes(text.toLowerCase())
              || backTestStrategy.backTestRequest.ticker.toLowerCase().includes(text.toLowerCase())
            )){
                filteredbackTestStrategies.push(backTestStrategy);
          }
        });
      filteredbackTestStrategies.sort((a, b) => {

          const res = this.compare(a.profitPercentage, b.profitPercentage);
          return this.direction === 'asc' ? res : -res;
        });
      return  filteredbackTestStrategies;

  }

    private compare(v1: number, v2: number) {
        return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
    }
/*
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  onSort({column, direction}: SortEvent) {

      // resetting other headers
      this.headers.forEach(header => {
        if (header.sortable !== column) {
          header.direction = '';
        }
      });

      // sorting countries
    //  if (!(direction === '' || column === '')) {
        this.backTestStrategiesObserve$.pipe(map((data) => {
            data.sort((a, b) => {
              const res = compare(`${a[column]}`, `${b[column]}`);
              return direction === 'asc' ? res : -res;
            });
            return data;
          }));
    //  }
    }
*/
//  search(text: string, pipe: PipeTransform): BackTestStrategy[] {
//        return this.restApi.getAllBackTestStrategy().pipe(map( (backTestStrategies:BackTestStrategy[])  => {
//          backTestStrategies.filter( (backTestStrategy:BackTestStrategy) => backTestStrategy.strategyName.toLowerCase().includes(text.toLowerCase()))
//        }
//        ));
//  }

//



}
