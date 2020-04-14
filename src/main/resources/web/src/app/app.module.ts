import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// HttpClient module for RESTful API
import { HttpClientModule } from '@angular/common/http';

// Routing module for router service
import { AppRoutingModule } from './app-routing.module';

// Forms module
import { FormsModule } from '@angular/forms';

// Components
import { TradeStrategyEditComponent } from './trade-strategy-edit/trade-strategy-edit.component';
import { TradeStrategyBrowseComponent } from './trade-strategy-browse/trade-strategy-browse.component';

@NgModule({
  declarations: [
    AppComponent,
    TradeStrategyEditComponent,
    TradeStrategyBrowseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
