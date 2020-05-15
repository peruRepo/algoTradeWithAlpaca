import { RestApiService } from "./rest-api.service";
import { noop, Observable, Observer, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { TickerSuggestion } from '../model/stock-suggestion';
import { TickerSuggestionResponse } from '../model/stock-suggestion-response';
import { TypeaheadMatch } from 'ngx-bootstrap/typeahead/typeahead-match.class';
import { Injectable } from '@angular/core';
import { StockTradeStrategy } from "../model/stockTradeStrategy";


@Injectable({
  providedIn: 'root'
})
export class FieldSuggestionService {


  tickerSuggestion$: Observable<TickerSuggestion[]>;
  tickerSuggestionList : TickerSuggestion[] = [];
  tickerSearchString : string;
  errorMessage : string = "";

  constructor(public restApi: RestApiService){

  }

  createTickerSuggestionObservable (stockTradeStrategy : StockTradeStrategy) : Observable<TickerSuggestion[]> {
    return new Observable((observer: Observer<string>) => {
      observer.next(stockTradeStrategy.ticker);
    }).pipe(
      switchMap((tickerSearchString: string) => {
        if (tickerSearchString) {

          return this.restApi.getStockSuggestion(tickerSearchString)
          .pipe(
            map((data: TickerSuggestionResponse) => data && data.tickers || [] ),
            tap(
            () => noop,
            err => {
                        // in case of http error
                        this.errorMessage = err && err.message || 'Something goes wrong';
                      })
                );
       }
        else {
          return of([]);
      }

      })
    );
  }

}
