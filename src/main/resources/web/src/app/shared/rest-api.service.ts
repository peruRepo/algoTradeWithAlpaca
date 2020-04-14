import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StockTradeStrategy } from './stockTradeStrategy';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

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

  // HttpClient API get() method => Fetch employees list
  getAllStockTradeStrategy (): Observable<StockTradeStrategy[]> {
    return this.http.get<StockTradeStrategy[]>(this.apiURL + '/alpaca/strategy/getAllStrategy')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  };

  // HttpClient API get() method => Fetch StockTradeStrategy
  getStockTradeStrategy(ticker): Observable<StockTradeStrategy> {
    return this.http.get<StockTradeStrategy>(this.apiURL + '/alpaca/strategy/getStrategy?ticker=' + ticker)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API post() method => Create StockTradeStrategy
  saveStockTradeStrategy(stockTradeStrategy): Observable<StockTradeStrategy> {
    return this.http.post<StockTradeStrategy>(this.apiURL + '/alpaca/strategy/updateStrategy', JSON.stringify(stockTradeStrategy), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API delete() method => Delete StockTradeStrategy
  deleteStockTradeStrategy(ticker){
    return this.http.delete<StockTradeStrategy>(this.apiURL + '/alpaca/strategy/removeStrategy' + ticker)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // Error handling
  handleError(error) {
     let errorMessage = '';
     if(error.errorCode == 200) {
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
  }

}
