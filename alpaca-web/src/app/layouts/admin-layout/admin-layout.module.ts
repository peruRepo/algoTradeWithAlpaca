import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { UserComponent }            from '../../pages/user/user.component';
import { TableComponent }           from '../../pages/table/table.component';
import { TypographyComponent }      from '../../pages/typography/typography.component';
import { IconsComponent }           from '../../pages/icons/icons.component';
import { MapsComponent }            from '../../pages/maps/maps.component';
import { NotificationsComponent }   from '../../pages/notifications/notifications.component';
import { UpgradeComponent }         from '../../pages/upgrade/upgrade.component';
import { BackTestCreateComponent } from '../../pages/backtest-create/backtest-create.component';
import { BackTestBrowseComponent } from '../../pages/backtest-browse/backtest-browse.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxEchartsModule } from 'ngx-echarts';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TradingStrategyBrowseComponent } from '../../pages/trading-strategy-browse/trading-strategy-browse.component'
import { TradeStrategyEditComponent } from '../../pages/trade-strategy-edit/trade-strategy-edit.component'
import { OrderBrowseComponent } from '../../pages/orders/order-browse.component';
import { StrategySuggestionModule } from '../../shared/modal/strategy-suggestion/strategy-suggestion.module';
import { DecimalPipe } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    NgxEchartsModule,
    TypeaheadModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    StrategySuggestionModule,
    ReactiveFormsModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TableComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    BackTestCreateComponent,
    BackTestBrowseComponent,
    TradingStrategyBrowseComponent,
    TradeStrategyEditComponent,
    OrderBrowseComponent
  ]
})

export class AdminLayoutModule {}
