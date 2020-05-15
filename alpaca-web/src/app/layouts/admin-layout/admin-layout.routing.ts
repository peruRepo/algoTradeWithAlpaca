import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { BackTestCreateComponent } from '../../pages/backtest-create/backtest-create.component';
import { BackTestBrowseComponent } from '../../pages/backtest-browse/backtest-browse.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { TradingStrategyBrowseComponent } from '../../pages/trading-strategy-browse/trading-strategy-browse.component'
import { TradeStrategyEditComponent } from '../../pages/trade-strategy-edit/trade-strategy-edit.component'


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: 'backtest',       component: BackTestCreateComponent },
    { path: 'backtestbrowse', component: BackTestBrowseComponent },
    { path: 'trading-strategy-browse', component: TradingStrategyBrowseComponent },
    { path: 'trading-strategy-edit', component: TradeStrategyEditComponent },
    { path: 'backtestbrowse/backtest/:strategyName', component: BackTestCreateComponent },
    { path: 'table',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent }
];
