import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../../services/rest-api.service";
import {Order } from "../../model/order";
import { DatePipe } from '@angular/common';


@Component({
  selector: 'order-browse',
  templateUrl: './order-browse.component.html',
  styleUrls: ['./order-browse.component.css']
})
export class OrderBrowseComponent implements OnInit {

  orders: Order[] = [];
  datePipe = new DatePipe('en');

  constructor(public restApi: RestApiService) { }




  // Get All Back TestStrategy list
  loadAllOrders() {
    this.restApi.getExecutedOrders(100,1000).subscribe((data : Order[]) => {
      this.orders = data ;
      for(let order of this.orders){
        order.filledAtFormatted = this.datePipe.transform(order.filledAt,'MM/dd/yyyy hh:mm');
      }
    }
    );
};

  ngOnInit() :void  {
    this.loadAllOrders();
  }


}
