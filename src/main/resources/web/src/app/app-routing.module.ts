import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TradeStrategyEditComponent } from './trade-strategy-edit/trade-strategy-edit.component';
import { TradeStrategyBrowseComponent } from './trade-strategy-browse/trade-strategy-browse.component';

const routes: Routes = [
  { path: '', component: TradeStrategyBrowseComponent },
  { path: 'trade-strategy-edit', component: TradeStrategyEditComponent },
  { path: 'trade-strategy-edit/:ticker', component: TradeStrategyEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
