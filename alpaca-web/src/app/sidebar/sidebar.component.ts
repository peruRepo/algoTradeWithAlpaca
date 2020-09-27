import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../services/rest-api.service";
import { TitleCasePipe } from '@angular/common';
import { EnvProfile } from '../model/envProfile';

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
    { path: '/backtestbrowse',          title: 'Executed BackTest', icon:'nc-bulb-63',    class: '' },
    { path: '/orders',                  title: 'Executed Orders',   icon:'nc-bullet-list-67',  class: '' }
 
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    envProfile : string = '';
    titleCasePipe : TitleCasePipe = new TitleCasePipe();

    constructor(public restApi: RestApiService) {
    }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        this.populateEnvProfile();
    }

    populateEnvProfile() {
      this.restApi.getEnvProfile().subscribe((data : EnvProfile) => {
      this.envProfile =  this.titleCasePipe.transform(data.envProfile);
          }
      );
    }
}
