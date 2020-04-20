import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// HttpClient module for RESTful API
import { HttpClientModule } from '@angular/common/http';

// Routing module for router service
import { AppRoutingModule } from './app-routing.module';

// Forms module
import { FormsModule } from '@angular/forms';

import { NgxEchartsModule } from 'ngx-echarts';

// Components
import { TradeStrategyEditComponent } from './trade-strategy-edit/trade-strategy-edit.component';
import { TradeStrategyBrowseComponent } from './trade-strategy-browse/trade-strategy-browse.component';
import { BackTestEditComponent } from './back-test-edit/back-test-edit.component';
import { BackTestBrowseComponent } from './back-test-browse/back-test-browse.component';


@NgModule({
  declarations: [
    AppComponent,
    TradeStrategyEditComponent,
    TradeStrategyBrowseComponent,
    BackTestEditComponent,
    BackTestBrowseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxEchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
