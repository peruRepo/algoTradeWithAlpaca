import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TradeStrategyEditComponent } from './trade-strategy-edit/trade-strategy-edit.component';
import { BackTestEditComponent } from './back-test-edit/back-test-edit.component';
import { BackTestBrowseComponent } from './back-test-browse/back-test-browse.component';
import { TradeStrategyBrowseComponent } from './trade-strategy-browse/trade-strategy-browse.component';

const routes: Routes = [
  { path: '', component: TradeStrategyBrowseComponent },
  { path: 'trade-strategy-edit', component: TradeStrategyEditComponent },
  { path: 'back-test-edit', component: BackTestEditComponent },
  { path: 'back-test-browse', component: BackTestBrowseComponent },
  { path: 'back-test-browse/back-test-edit/:strategyName', component: BackTestEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers : []
})

export class AppRoutingModule { }
