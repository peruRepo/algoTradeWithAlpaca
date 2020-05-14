import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',               title: 'Dashboard',         icon:'nc-bank',       class: '' },
    { path: '/backtest',                title: 'New Strategy',      icon:'nc-simple-add', class: '' },
    { path: '/trading-strategy-browse', title: 'Deployed Triggers', icon:'nc-sound-wave', class: '' },
    { path: '/backtestbrowse',          title: 'BackTest',          icon:'nc-bulb-63',    class: '' },
    { path: '/user',                    title: 'User Profile',      icon:'nc-single-02',  class: '' },
    { path: '/table',                   title: 'Table List',        icon:'nc-tile-56',    class: '' },
    { path: '/typography',              title: 'Typography',        icon:'nc-caps-small', class: '' },
    { path: '/notifications',           title: 'Notification',   icon:'nc-bullet-list-67',    class: '' },
    { path: '/icons',                   title: 'Icons',             icon:'nc-bell-55', class: '' },
    { path: '/upgrade',                 title: 'Switch to Live Trade',    icon:'nc-spaceship',  class: 'active-pro' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
