import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StockTradeStrategy } from './stockTradeStrategy';
import { BackTestStrategy } from './backTestStrategy';
import { BackTestRequest } from './backTestRequest';
import { BackTestResponse } from './backTestResponse';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import {TechnicalIndicatorTemplate} from "../shared/indicator-template";
import { TickerSuggestionResponse } from '../shared/stock-suggestion-response';

@Injectable({
  providedIn: 'root'
})

export class RestApiService {

  // Define API
  apiURL = 'http://localhost:8080';

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
