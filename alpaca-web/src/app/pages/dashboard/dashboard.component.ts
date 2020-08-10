import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../../services/rest-api.service";
import {Position } from "../../model/position";
import { Order } from "../../model/order";
import Chart from 'chart.js';
import { DatePipe } from '@angular/common';
import { Account } from '../../model/account';
import { Status } from '../../model/status';
import { PortfolioHistory } from '../../model/portfolioHistory';

@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit{

  public canvas : any;
  public ctx;
  public chartColor;
  public chartEmail;
  public chartHours;
  public chartProfitAndFund;

  openPositions : Position[] = [];
  orders : Order[] = [];
  datePipe = new DatePipe('en');
  account: Account;
  unrealizedPl : number = 0;
  orderExecutedToday : number = 0;
  portfolioHistory : PortfolioHistory;
  profitValueDataSet : any;
  tradingActive : boolean = true;

  constructor(public restApi: RestApiService) {
  }

  populateOpenPositions()  {
    this.unrealizedPl = 0;
    this.restApi.getOpenPosition().subscribe((data : Position[]) => {
          this.openPositions = data ;
          for (let position of this.openPositions){
            this.unrealizedPl = this.unrealizedPl + parseFloat(position.unrealizedPl);
          }
        }
      );

  }

 refresh() {
   this.populateOpenPositions();
   this.populateExecutedOrders();
   this.populateAccount();
   this.populatePortfolio(6);
 }


  populateExecutedOrders()  {
    //this.datePipe = this.injector.get(DatePipe);
    this.orderExecutedToday = 0;
    let today = new Date().toDateString();
    this.restApi.getExecutedOrders(100,5).subscribe((data : Order[]) => {
          this.orders = data ;
          for(let order of this.orders){
            let thatDay = new Date(order.filledAt).toDateString()
            if(today === thatDay){
              this.orderExecutedToday = this.orderExecutedToday + 1;
            }
            order.filledAtFormatted = this.datePipe.transform(order.filledAt,'MM/dd/yyyy hh:mm');
          }
      }
      );

  }

 suspendAllTrade() {
   this.restApi.suspendAllTrade().subscribe((data : Status) => {
         this.tradingActive = false;
       }
     );
 }

 resumeAllTrade() {
   this.restApi.resumeAllTrade().subscribe((data : Status) => {
         this.tradingActive = true;
       }
     );
 }

 populateAccount() {
   this.restApi.getAccount().subscribe((data : Account) => {
         this.account = data ;
       }
     );
 }

  populatePortfolio(durationInMonth) {
    this.restApi.getPopulatePortfolio(durationInMonth).subscribe((data : PortfolioHistory) => {
          this.portfolioHistory = data;
          this.profitValueDataSet.data = [];


          for(let i = 0; i < this.portfolioHistory.equity.length; i++  ) {
             let timeSeriesData = { x : "", y : "" };

             timeSeriesData.x = new Date(parseInt(this.portfolioHistory.timestamp[i])*1000).toDateString();
             timeSeriesData.y = this.portfolioHistory.profitLoss[i];
             this.profitValueDataSet.data.push(timeSeriesData);
          }
          this.chartProfitAndFund.update();
        }
      );
  }



    ngOnInit(){

      this.populateOpenPositions();
      this.populateExecutedOrders();
      this.populateAccount();
      this.populatePortfolio(6);

      this.chartColor = "#FFFFFF";


      this.canvas = document.getElementById("chartProfitAndFund");
      this.ctx = this.canvas.getContext("2d");

      this.profitValueDataSet = {
            label: "Profit Or Loss",
                borderColor: "rgba(243, 174, 174, 0.5)",
                backgroundColor: "rgba(243, 174, 174, 0.5)",
                pointRadius: 0,
                pointHoverRadius: 0,
                borderWidth: 3,
                  data: [
                  ]
                };

      this.chartProfitAndFund = new Chart(this.ctx, {
        type: 'line',

        data: {
              datasets: [this.profitValueDataSet ]
        },
        options: {
          legend: {
            display: false
          },

          tooltips: {
            enabled: false
          },

          scales: {
            yAxes: [{
              stacked: false,
              ticks: {
                fontColor: "#9f9f9f",
                beginAtZero: false,
                maxTicksLimit: 5,
                //padding: 20
              },
              gridLines: {
                drawBorder: false,
                zeroLineColor: "#ccc",
                color: 'rgba(255,255,255,0.05)'
              }

            }],

            xAxes: [{
              stacked: true,
              type: 'time',
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: 'rgba(255,255,255,0.1)',
                zeroLineColor: "transparent",
                display: false,
              },
              ticks: {
                padding: 20,
                fontColor: "#9f9f9f"
              }
            }]
          },
        }
      });

    }
}
