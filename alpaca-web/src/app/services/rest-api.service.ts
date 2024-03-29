import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StockTradeStrategy } from '../model/stockTradeStrategy';
import { BackTestStrategy } from '../model/backTestStrategy';
import { BackTestRequest } from '../model/backTestRequest';
import { EnvProfile } from '../model/envProfile';
import { Position } from '../model/position';
import { Status } from '../model/status';
import { Account } from '../model/account';
import { Order } from '../model/order';
import { BackTestResponse } from '../model/backTestResponse';
import { Observable, throwError } from 'rxjs';
import { map,retry, catchError } from 'rxjs/operators';
import {TechnicalIndicatorTemplate} from "../model/indicator-template";
import { TickerSuggestionResponse } from '../model/stock-suggestion-response';
import { PortfolioHistory } from '../model/portfolioHistory';


@Injectable({
  providedIn: 'root'
})

export class RestApiService {

  // Define API
  apiURL = '';
  //apiURL = '';

  constructor(private http: HttpClient) { }

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getEnvProfile (): Observable<EnvProfile> {
    return this.http.get<EnvProfile>(this.apiURL + '/alpaca/getProfile')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  };

  getAllStockTradeStrategy (): Observable<StockTradeStrategy[]> {
    return this.http.get<StockTradeStrategy[]>(this.apiURL + '/alpaca/strategy/getAllStrategy')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  };

  getAllBackTestStrategy (): Observable<BackTestStrategy[]> {
    return this.http.get<BackTestStrategy[]>(this.apiURL + '/alpaca/backtest/getAllBackTest')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  };

  getStockTradeStrategy(ticker): Observable<StockTradeStrategy> {
    return this.http.get<StockTradeStrategy>(this.apiURL + '/alpaca/strategy/getStrategy?ticker=' + ticker)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getBackTestStrategy(strategyName): Observable<BackTestStrategy> {
    return this.http.get<BackTestStrategy>(this.apiURL + '/alpaca/backtest/getBackTest?strategyName=' + strategyName)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  saveStockTradeStrategy(stockTradeStrategy): Observable<StockTradeStrategy> {
    return this.http.post<StockTradeStrategy>(this.apiURL + '/alpaca/strategy/updateStrategy', JSON.stringify(stockTradeStrategy), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getOpenPosition() : Observable<Position[]> {
    return this.http.get<Position[]>(this.apiURL + '/alpaca/getOpenPosition')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getAccount() : Observable<Account> {
    return this.http.get<Account>(this.apiURL + '/alpaca/getAccount')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }


  suspendAllTrade(): Observable<Status> {
    return this.http.get<Status>(this.apiURL + '/alpaca/suspendAllTrade')
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }


  resumeAllTrade(): Observable<Status> {
    return this.http.get<Status>(this.apiURL + '/alpaca/resumeAllTrade')
    .pipe(
      retry(1),
      catchError(this.handleError)
    );
  }


  getExecutedOrders(maxDays,maxRows) : Observable<Order[]> {
    return this.http.get<Order[]>(this.apiURL + '/alpaca/getOrders?days=' + maxDays+'&maxRows='+maxRows)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getPopulatePortfolio(durationInMonth) : Observable<PortfolioHistory> {
    return this.http.get<PortfolioHistory>(this.apiURL + '/alpaca/getPortFolioHistory?month=' + durationInMonth)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  executeBackTestStrategy(backTestRequest): Observable<BackTestResponse> {
    return this.http.post<BackTestResponse>(this.apiURL + '/alpaca/backtest/execute', JSON.stringify(backTestRequest), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  getStockSuggestion(tickerSearchString): Observable<TickerSuggestionResponse> {
    return this.http.get<TickerSuggestionResponse>(this.apiURL + '/alpaca/getTickerSuggestion?tickerSearchString=' + tickerSearchString)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }


  deleteStockTradeStrategy(ticker) : Observable<any> {
    return this.http.delete<any>(this.apiURL + '/alpaca/strategy/removeStrategy?ticker=' + ticker)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  deleteBackTestStrategy(strategyName) : Observable<any> {
    return this.http.delete<any>(this.apiURL + '/alpaca/backtest/remove?strategyName=' + strategyName)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  handleError(error) {
     let errorMessage = '';
     if(error.status == 200) {
       return;
     }
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     window.alert(errorMessage);
    return throwError(errorMessage);
  //  return errorMessage;
  }


  public getTechnicalIndicatorTemplate(): Observable<TechnicalIndicatorTemplate[]> {
      return this.http.get<TechnicalIndicatorTemplate[]>("../trade-repository/technical-indicator-template.json")
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }


}
