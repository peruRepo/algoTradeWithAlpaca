(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _trade_strategy_edit_trade_strategy_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trade-strategy-edit/trade-strategy-edit.component */ "./src/app/trade-strategy-edit/trade-strategy-edit.component.ts");
/* harmony import */ var _back_test_edit_back_test_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./back-test-edit/back-test-edit.component */ "./src/app/back-test-edit/back-test-edit.component.ts");
/* harmony import */ var _back_test_browse_back_test_browse_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./back-test-browse/back-test-browse.component */ "./src/app/back-test-browse/back-test-browse.component.ts");
/* harmony import */ var _trade_strategy_browse_trade_strategy_browse_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trade-strategy-browse/trade-strategy-browse.component */ "./src/app/trade-strategy-browse/trade-strategy-browse.component.ts");








const routes = [
    { path: '', component: _trade_strategy_browse_trade_strategy_browse_component__WEBPACK_IMPORTED_MODULE_5__["TradeStrategyBrowseComponent"] },
    { path: 'trade-strategy-browse', component: _trade_strategy_browse_trade_strategy_browse_component__WEBPACK_IMPORTED_MODULE_5__["TradeStrategyBrowseComponent"] },
    { path: 'trade-strategy-edit', component: _trade_strategy_edit_trade_strategy_edit_component__WEBPACK_IMPORTED_MODULE_2__["TradeStrategyEditComponent"] },
    { path: 'back-test-edit', component: _back_test_edit_back_test_edit_component__WEBPACK_IMPORTED_MODULE_3__["BackTestEditComponent"] },
    { path: 'back-test-browse', component: _back_test_browse_back_test_browse_component__WEBPACK_IMPORTED_MODULE_4__["BackTestBrowseComponent"] },
    { path: 'back-test-browse/back-test-edit/:strategyName', component: _back_test_edit_back_test_edit_component__WEBPACK_IMPORTED_MODULE_3__["BackTestEditComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, providers: [], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                providers: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'alpca-tradeStrategy-app';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 14, vars: 0, consts: [[1, "d-flex", "flex-column", "flex-md-row", "align-items-center", "p-3", "px-md-4", "mb-3", "bg-white", "border-bottom", "shadow-sm"], [1, "my-2", "my-md-0", "mr-md-3"], ["routerLinkActive", "active", "routerLink", "/back-test-browse", 1, "btn", "btn-outline-primary"], ["routerLinkActive", "active", "routerLink", "/back-test-edit", 1, "btn", "btn-outline-primary"], ["routerLinkActive", "active", "routerLink", "/trade-strategy-browse", 1, "btn", "btn-outline-primary"], ["routerLinkActive", "active", "routerLink", "/trade-strategy-edit", 1, "btn", "btn-outline-primary"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Back Test Browse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Back Test Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Trade Strategy Browse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Trade Strategy Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/__ivy_ngcc__/fesm2015/ngx-echarts.js");
/* harmony import */ var _trade_strategy_edit_trade_strategy_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./trade-strategy-edit/trade-strategy-edit.component */ "./src/app/trade-strategy-edit/trade-strategy-edit.component.ts");
/* harmony import */ var _trade_strategy_browse_trade_strategy_browse_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./trade-strategy-browse/trade-strategy-browse.component */ "./src/app/trade-strategy-browse/trade-strategy-browse.component.ts");
/* harmony import */ var _back_test_edit_back_test_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./back-test-edit/back-test-edit.component */ "./src/app/back-test-edit/back-test-edit.component.ts");
/* harmony import */ var _back_test_browse_back_test_browse_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./back-test-browse/back-test-browse.component */ "./src/app/back-test-browse/back-test-browse.component.ts");



// HttpClient module for RESTful API

// Routing module for router service

// Forms module


// Components





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            ngx_echarts__WEBPACK_IMPORTED_MODULE_6__["NgxEchartsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _trade_strategy_edit_trade_strategy_edit_component__WEBPACK_IMPORTED_MODULE_7__["TradeStrategyEditComponent"],
        _trade_strategy_browse_trade_strategy_browse_component__WEBPACK_IMPORTED_MODULE_8__["TradeStrategyBrowseComponent"],
        _back_test_edit_back_test_edit_component__WEBPACK_IMPORTED_MODULE_9__["BackTestEditComponent"],
        _back_test_browse_back_test_browse_component__WEBPACK_IMPORTED_MODULE_10__["BackTestBrowseComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        ngx_echarts__WEBPACK_IMPORTED_MODULE_6__["NgxEchartsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _trade_strategy_edit_trade_strategy_edit_component__WEBPACK_IMPORTED_MODULE_7__["TradeStrategyEditComponent"],
                    _trade_strategy_browse_trade_strategy_browse_component__WEBPACK_IMPORTED_MODULE_8__["TradeStrategyBrowseComponent"],
                    _back_test_edit_back_test_edit_component__WEBPACK_IMPORTED_MODULE_9__["BackTestEditComponent"],
                    _back_test_browse_back_test_browse_component__WEBPACK_IMPORTED_MODULE_10__["BackTestBrowseComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    ngx_echarts__WEBPACK_IMPORTED_MODULE_6__["NgxEchartsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/back-test-browse/back-test-browse.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/back-test-browse/back-test-browse.component.ts ***!
  \****************************************************************/
/*! exports provided: BackTestBrowseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackTestBrowseComponent", function() { return BackTestBrowseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_rest_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/rest-api.service */ "./src/app/shared/rest-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function BackTestBrowseComponent_div_6_tr_16_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BackTestBrowseComponent_div_6_tr_16_Template_span_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const backTestStrategy_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.deleteBackTestStrategy(backTestStrategy_r2.strategyName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const backTestStrategy_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](backTestStrategy_r2.strategyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](backTestStrategy_r2.backTestRequest.ticker);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](backTestStrategy_r2.backTestRequest.intervalDuration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](backTestStrategy_r2.profitPercentage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "back-test-edit/", backTestStrategy_r2.strategyName, "");
} }
function BackTestBrowseComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Browse BackTest Strategy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Strategy Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ticker");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "IntervalDuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "profit Percentage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, BackTestBrowseComponent_div_6_tr_16_Template, 14, 5, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.backTestStrategies);
} }
class BackTestBrowseComponent {
    constructor(restApi) {
        this.restApi = restApi;
        this.backTestStrategies = [];
    }
    // Get All Back TestStrategy list
    loadAllBackTestStrategy() {
        this.restApi.getAllBackTestStrategy().subscribe((data) => {
            this.backTestStrategies = data;
        });
    }
    ;
    ngOnInit() {
        this.loadAllBackTestStrategy();
    }
    // Delete Back Test Strategy
    deleteBackTestStrategy(strategyName) {
        if (window.confirm('Are you sure, you want to delete?')) {
            this.restApi.deleteBackTestStrategy(strategyName).subscribe(data => {
                this.loadAllBackTestStrategy();
            });
        }
    }
}
BackTestBrowseComponent.ɵfac = function BackTestBrowseComponent_Factory(t) { return new (t || BackTestBrowseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_rest_api_service__WEBPACK_IMPORTED_MODULE_1__["RestApiService"])); };
BackTestBrowseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BackTestBrowseComponent, selectors: [["back-test-browse"]], decls: 7, vars: 1, consts: [[1, "container", "custom-container-2"], [1, "no-data", "text-center"], ["routerLink", "/back-test-edit", 1, "btn", "btn-outline-primary"], [4, "ngIf"], [1, "mb-3", "text-center"], [1, "col-md-12"], [1, "table", "table-bordered"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "edit", 3, "routerLink"], [1, "delete", 3, "click"]], template: function BackTestBrowseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Click here to backtest more Strategy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add BackTest Strategy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BackTestBrowseComponent_div_6_Template, 17, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.backTestStrategies.length !== 0);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhY2stdGVzdC1icm93c2UvYmFjay10ZXN0LWJyb3dzZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackTestBrowseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'back-test-browse',
                templateUrl: './back-test-browse.component.html',
                styleUrls: ['./back-test-browse.component.css']
            }]
    }], function () { return [{ type: _shared_rest_api_service__WEBPACK_IMPORTED_MODULE_1__["RestApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/back-test-edit/back-test-edit.component.ts":
/*!************************************************************!*\
  !*** ./src/app/back-test-edit/back-test-edit.component.ts ***!
  \************************************************************/
/*! exports provided: BackTestEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackTestEditComponent", function() { return BackTestEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_backTestResponse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/backTestResponse */ "./src/app/shared/backTestResponse.ts");
/* harmony import */ var _shared_rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/rest-api.service */ "./src/app/shared/rest-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_csvUtil_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/csvUtil.service */ "./src/app/shared/csvUtil.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/__ivy_ngcc__/fesm2015/ngx-echarts.js");









function BackTestEditComponent_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r4, " ");
} }
function BackTestEditComponent_div_66_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BackTestEditComponent_div_66_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.executeBackTestStrategy(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Execute Back Test");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/trade-strategy-edit"]; };
const _c1 = function (a0) { return { strategyName: a0 }; };
function BackTestEditComponent_div_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Deploy Back Test");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx_r2.backTestStrategy.backTestRequest.strategyName));
} }
function BackTestEditComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "circle", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class BackTestEditComponent {
    constructor(restApi, actRoute, router, csvUtil) {
        this.restApi = restApi;
        this.actRoute = actRoute;
        this.router = router;
        this.csvUtil = csvUtil;
        this.strategyName = this.actRoute.snapshot.params['strategyName'];
        this.backTestStrategy = {
            "strategyName": "Enter your Back test name here!!",
            "backTestRequest": {
                "strategyName": "Enter your Back test name here",
                "ticker": "Enter your Stock name here!!",
                "quantity": 10,
                "intervalDuration": "ONE_MIN",
                "tradeStrategy": {
                    "entryConditions": "function(barSeries, stockWatch){ \n\tclosePriceIndicator = new ClosePriceIndicator(barSeries);\n\tif(closePriceIndicator.getValue(barSeries.getEndIndex()).floatValue() < 568){\n\t\tstockWatch.setStopLossPercentage(10.0);\n\t\treturn true;\n\t}\n\treturn false;\n};",
                    "entrySignal": "buy",
                    "exitSignal": "sell",
                    "exitConditions": "function(barSeries, stockWatch){ \n\tclosePriceIndicator = new ClosePriceIndicator(barSeries);\n\tif(closePriceIndicator.getValue(barSeries.getEndIndex()).floatValue() > 569){\n\t\treturn true;\n\t}\n\treturn false;\n};"
                },
                "stockWatch": {
                    "stopLossPercentage": -10.0,
                    "profitPercentage": 0.0,
                    "targetProfitPercentage": 15.0
                },
                "candleCount": 1000
            },
            "profitOrLoss": 0,
            "profitPercentage": 0
        };
        this.backTestResponse = new _shared_backTestResponse__WEBPACK_IMPORTED_MODULE_1__["BackTestResponse"]();
        this.profitDataSeries = [];
        this.timeSeriesData = [];
        this.eChartDataSeries = [];
        this.dynamicData = {};
        this.intervalDurationOptions = ["ONE_MIN", "FIVE_MINUTE", "FIFTEEN_MINUTE", "ONE_DAY"];
        this.loading = false;
        this.errorMessage = "";
        this.initialValue = {
            xAxis: {
                type: 'time',
                splitNumber: 40
            },
            yAxis: {
                type: 'value',
                name: '$',
                nameLocation: 'middle'
            },
            series: [{
                    data: [],
                    type: 'line'
                }]
        };
        this.actRoute.params.subscribe(params => {
            console.log(params);
            this.strategyName = params["strategyName"];
        });
    }
    ngOnInit() {
        this.getBackTestStrategyWithParam();
    }
    getBackTestStrategyWithParam() {
        this.restApi.getBackTestStrategy(this.strategyName).subscribe(data => {
            this.backTestStrategy = data;
        });
    }
    getBackTestStrategy() {
        this.restApi.getBackTestStrategy(this.backTestStrategy.backTestRequest.strategyName)
            .subscribe(data => {
            this.backTestStrategy = data;
        }, error => {
            this.errorMessage = error.message;
        });
    }
    // Update employee data
    executeBackTestStrategy() {
        this.loading = true;
        this.dynamicData = {};
        this.restApi.executeBackTestStrategy(this.backTestStrategy.backTestRequest).subscribe(data => {
            this.backTestResponse = data;
            this.backTestStrategy.profitOrLoss = this.backTestResponse.profitOrLoss;
            this.backTestStrategy.profitPercentage = this.backTestResponse.profitPercentage;
            this.formDataforChart(this.backTestResponse.trades);
            this.loading = false;
        }, error => {
            this.errorMessage = error;
            this.loading = false;
        });
        //  this.loading = false;
    }
    formDataforChart(backTestTrades) {
        let i = 0;
        let eChartDataSeries = [];
        for (let backTestTrade of backTestTrades) {
            let profitAndTime = [];
            profitAndTime.push(backTestTrade.exitTime);
            profitAndTime.push(backTestTrade.profitOrLoss);
            eChartDataSeries.push(profitAndTime);
        }
        let data = {
            data: eChartDataSeries,
            type: 'bar'
        };
        this.dynamicData = this.initialValue;
        this.dynamicData.series.push(data);
    }
    downloadCSV() {
        let headerList = ['entryTime', 'entrySignal', 'priceAtEntry', 'exitTime', 'exitSignal', 'priceAtExit', 'profitOrLoss'];
        let fileName = "ExecutedTradesFor-" + this.backTestStrategy.backTestRequest.ticker;
        this.csvUtil.downloadFile(this.backTestResponse.trades, fileName, headerList);
    }
    handleError(error) {
        if (error.status == 0 || error.status == 200) {
            return;
        }
        if (error.error instanceof ErrorEvent) {
            this.errorMessage = error.error.message;
        }
        else {
            this.errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
    }
}
BackTestEditComponent.ɵfac = function BackTestEditComponent_Factory(t) { return new (t || BackTestEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_csvUtil_service__WEBPACK_IMPORTED_MODULE_4__["CSVUtil"])); };
BackTestEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BackTestEditComponent, selectors: [["back-test-edit"]], decls: 73, vars: 20, consts: [[1, "container", "custom-container"], [1, "col-md-12"], [1, "mb-3", "text-center"], [1, "form-group"], ["type", "text", "placeholder", "StrategyName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Ticker", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-control", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Quantity", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "CandleCount", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Stop Loss Percentage", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Target Profit Percentage", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Profit Or Loss", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Profit Or Loss Percentage", 1, "form-control", 3, "ngModel", "ngModelChange"], ["rows", "15", "cols", "80", "placeholder", "Entry Condition", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Entry Signal", 1, "form-control", 3, "ngModel", "ngModelChange"], ["rows", "15", "cols", "80", "placeholder", "Exit Condition", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Exit Signal", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-success", "btn-lg", "btn-block", 3, "click"], ["class", "form-group", 4, "ngIf"], ["class", "app-loading", 4, "ngIf"], [3, "click"], ["echarts", "", 1, "demo-chart", 3, "options", "merge", "loading"], [1, "btn", "btn-success", "btn-lg", "btn-block", 3, "routerLink", "queryParams"], [1, "app-loading"], [1, "logo"], ["viewBox", "25 25 50 50", 1, "spinner"], ["cx", "50", "cy", "50", "r", "20", "fill", "none", "stroke", "#6495ED", "stroke-width", "2", "stroke-miterlimit", "10", 1, "path"]], template: function BackTestEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Back Test your Strategy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Stratey Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BackTestEditComponent_Template_input_ngModelChange_7_listener($event) { return ctx.backTestStrategy.backTestRequest.strategyName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ticker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BackTestEditComponent_Template_input_ngModelChange_11_listener($event) { return ctx.backTestStrategy.backTestRequest.ticker = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "IntervalDuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BackTestEditComponent_Template_select_ngModelChange_15_listener($event) { return ctx.backTestStrategy.backTestRequest.intervalDuration = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, BackTestEditComponent_option_16_Template, 2, 1, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BackTestEditComponent_Template_input_ngModelChange_20_listener($event) { return ctx.backTestStrategy.backTestRequest.quantity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "CandleCount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BackTestEditComponent_Template_input_ngModelChange_24_listener($event) { return ctx.backTestStrategy.backTestRequest.candleCount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "StopLossPercentage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BackTestEditComponent_Template_input_ngModelChange_28_listener($event) { return ctx.backTestStrategy.backTestRequest.stockWatch.stopLossPercentage = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Target Profit Percentage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BackTestEditComponent_Template_input_ngModelChange_32_listener($event) { return ctx.backTestStrategy.backTestRequest.stockWatch.profitPercentage = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Profit or Loss");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BackTestEditComponent_Template_input_ngModelChange_36_listener($event) { return ctx.backTestStrategy.profitOrLoss = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Profit or Loss Percentage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BackTestEditComponent_Template_input_ngModelChange_40_listener($event) { return ctx.backTestStrategy.profitPercentage = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "EntryConditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BackTestEditComponent_Template_textarea_ngModelChange_45_listener($event) { return ctx.backTestStrategy.backTestRequest.tradeStrategy.entryConditions = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "          Enter entry condition here\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "EntrySignal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BackTestEditComponent_Template_input_ngModelChange_51_listener($event) { return ctx.backTestStrategy.backTestRequest.tradeStrategy.entrySignal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "ExitConditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "textarea", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BackTestEditComponent_Template_textarea_ngModelChange_56_listener($event) { return ctx.backTestStrategy.backTestRequest.tradeStrategy.exitConditions = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "          Enter exit condition here\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "ExitSignal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BackTestEditComponent_Template_input_ngModelChange_62_listener($event) { return ctx.backTestStrategy.backTestRequest.tradeStrategy.exitSignal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BackTestEditComponent_Template_button_click_64_listener() { return ctx.getBackTestStrategy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "fetch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](66, BackTestEditComponent_div_66_Template, 3, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, BackTestEditComponent_div_67_Template, 3, 5, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, BackTestEditComponent_div_68_Template, 4, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BackTestEditComponent_Template_button_click_70_listener() { return ctx.downloadCSV(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " Download Trades ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.backTestStrategy.backTestRequest.strategyName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.backTestStrategy.backTestRequest.ticker);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.backTestStrategy.backTestRequest.intervalDuration);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.intervalDurationOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.backTestStrategy.backTestRequest.quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.backTestStrategy.backTestRequest.candleCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.backTestStrategy.backTestRequest.stockWatch.stopLossPercentage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.backTestStrategy.backTestRequest.stockWatch.profitPercentage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.backTestStrategy.profitOrLoss);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.backTestStrategy.profitPercentage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.backTestStrategy.backTestRequest.tradeStrategy.entryConditions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.backTestStrategy.backTestRequest.tradeStrategy.entrySignal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.backTestStrategy.backTestRequest.tradeStrategy.exitConditions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.backTestStrategy.backTestRequest.tradeStrategy.exitSignal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.initialValue)("merge", ctx.dynamicData)("loading", ctx.loading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ngx_echarts__WEBPACK_IMPORTED_MODULE_7__["ɵa"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_x"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".demo-chart[_ngcontent-%COMP%] {\n  height: 400px;\n  width: 1200px\n}\n\n.tp-section[_ngcontent-%COMP%] {\n   display: flex;\n   align-content: center;\n   align-items: center;\n   height: 60px;\n}\n\n.tp-margin[_ngcontent-%COMP%] {\n   margin: 0 10px;\n}\n\nbody[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.app-loading[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n\n}\n\n.app-loading[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  -webkit-animation: rotate 2s linear infinite;\n          animation: rotate 2s linear infinite;\n  transform-origin: center center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n\n.app-loading[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]   .path[_ngcontent-%COMP%] {\n  stroke-dasharray: 1, 200;\n  stroke-dashoffset: 0;\n  -webkit-animation: dash 1.5s ease-in-out infinite;\n          animation: dash 1.5s ease-in-out infinite;\n  stroke-linecap: round;\n  stroke: #6495ED;\n}\n\n@-webkit-keyframes rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -35px;\n  }\n  100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -124px;\n  }\n}\n\n@keyframes dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -35px;\n  }\n  100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -124px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFjay10ZXN0LWVkaXQvYmFjay10ZXN0LWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYjtBQUNGOztBQUVBO0dBQ0csYUFBYTtHQUNiLHFCQUFxQjtHQUNyQixtQkFBbUI7R0FDbkIsWUFBWTtBQUNmOztBQUNBO0dBQ0csY0FBYztBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTs7QUFFZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osNENBQW9DO1VBQXBDLG9DQUFvQztFQUNwQywrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLGlEQUF5QztVQUF6Qyx5Q0FBeUM7RUFDekMscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUpBO0VBQ0U7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usd0JBQXdCO0lBQ3hCLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLHlCQUF5QjtFQUMzQjtBQUNGOztBQWJBO0VBQ0U7SUFDRSx3QkFBd0I7SUFDeEIsb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIseUJBQXlCO0VBQzNCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9iYWNrLXRlc3QtZWRpdC9iYWNrLXRlc3QtZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbW8tY2hhcnQge1xuICBoZWlnaHQ6IDQwMHB4O1xuICB3aWR0aDogMTIwMHB4XG59XG5cbi50cC1zZWN0aW9uIHtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgaGVpZ2h0OiA2MHB4O1xufVxuLnRwLW1hcmdpbiB7XG4gICBtYXJnaW46IDAgMTBweDtcbn1cblxuYm9keSwgaHRtbCB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5hcHAtbG9hZGluZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcblxufVxuXG4uYXBwLWxvYWRpbmcgLnNwaW5uZXIge1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGFuaW1hdGlvbjogcm90YXRlIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmFwcC1sb2FkaW5nIC5zcGlubmVyIC5wYXRoIHtcbiAgc3Ryb2tlLWRhc2hhcnJheTogMSwgMjAwO1xuICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgYW5pbWF0aW9uOiBkYXNoIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgc3Ryb2tlOiAjNjQ5NUVEO1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBkYXNoIHtcbiAgMCUge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDEsIDIwMDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgfVxuICA1MCUge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDg5LCAyMDA7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0zNXB4O1xuICB9XG4gIDEwMCUge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDg5LCAyMDA7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMjRweDtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackTestEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'back-test-edit',
                templateUrl: './back-test-edit.component.html',
                styleUrls: ['./back-test-edit.component.css']
            }]
    }], function () { return [{ type: _shared_rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _shared_csvUtil_service__WEBPACK_IMPORTED_MODULE_4__["CSVUtil"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/backTestResponse.ts":
/*!********************************************!*\
  !*** ./src/app/shared/backTestResponse.ts ***!
  \********************************************/
/*! exports provided: BackTestResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackTestResponse", function() { return BackTestResponse; });
class BackTestResponse {
}


/***/ }),

/***/ "./src/app/shared/csvUtil.service.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/csvUtil.service.ts ***!
  \*******************************************/
/*! exports provided: CSVUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSVUtil", function() { return CSVUtil; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CSVUtil {
    downloadFile(data, filename, headerList) {
        let csvData = this.ConvertToCSV(data, headerList);
        console.log(csvData);
        let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
        let dwldLink = document.createElement("a");
        let url = URL.createObjectURL(blob);
        let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
        if (isSafariBrowser) { //if Safari open in new window to save file with random filename.
            dwldLink.setAttribute("target", "_blank");
        }
        dwldLink.setAttribute("href", url);
        dwldLink.setAttribute("download", filename + ".csv");
        dwldLink.style.visibility = "hidden";
        document.body.appendChild(dwldLink);
        dwldLink.click();
        document.body.removeChild(dwldLink);
    }
    ConvertToCSV(objArray, headerList) {
        let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        let str = '';
        let row = 'S.No,';
        for (let index in headerList) {
            row += headerList[index] + ',';
        }
        row = row.slice(0, -1);
        str += row + '\r\n';
        for (let i = 0; i < array.length; i++) {
            let line = (i + 1) + '';
            for (let index in headerList) {
                let head = headerList[index];
                line += ',' + array[i][head];
            }
            str += line + '\r\n';
        }
        return str;
    }
}
CSVUtil.ɵfac = function CSVUtil_Factory(t) { return new (t || CSVUtil)(); };
CSVUtil.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CSVUtil, factory: CSVUtil.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CSVUtil, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/rest-api.service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/rest-api.service.ts ***!
  \********************************************/
/*! exports provided: RestApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestApiService", function() { return RestApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






class RestApiService {
    constructor(http) {
        this.http = http;
        // Define API
        this.apiURL = 'http://localhost:8080';
        /*========================================
          CRUD Methods for consuming RESTful API
        =========================================*/
        // Http Options
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    getAllStockTradeStrategy() {
        return this.http.get(this.apiURL + '/alpaca/strategy/getAllStrategy')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    ;
    getAllBackTestStrategy() {
        return this.http.get(this.apiURL + '/alpaca/backtest/getAllBackTest')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    ;
    getStockTradeStrategy(ticker) {
        return this.http.get(this.apiURL + '/alpaca/strategy/getStrategy?ticker=' + ticker)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    getBackTestStrategy(strategyName) {
        return this.http.get(this.apiURL + '/alpaca/backtest/getBackTest?strategyName=' + strategyName)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    saveStockTradeStrategy(stockTradeStrategy) {
        return this.http.post(this.apiURL + '/alpaca/strategy/updateStrategy', JSON.stringify(stockTradeStrategy), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    executeBackTestStrategy(backTestRequest) {
        return this.http.post(this.apiURL + '/alpaca/backtest/execute', JSON.stringify(backTestRequest), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    deleteStockTradeStrategy(ticker) {
        return this.http.delete(this.apiURL + '/alpaca/strategy/removeStrategy?ticker=' + ticker)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    deleteBackTestStrategy(strategyName) {
        return this.http.delete(this.apiURL + '/alpaca/backtest/remove?strategyName=' + strategyName)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    handleError(error) {
        let errorMessage = '';
        if (error.status == 200) {
            return;
        }
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
        //  return errorMessage;
    }
}
RestApiService.ɵfac = function RestApiService_Factory(t) { return new (t || RestApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
RestApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RestApiService, factory: RestApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RestApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/stockTradeStrategy.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/stockTradeStrategy.ts ***!
  \**********************************************/
/*! exports provided: StockTradeStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockTradeStrategy", function() { return StockTradeStrategy; });
class StockTradeStrategy {
}


/***/ }),

/***/ "./src/app/trade-strategy-browse/trade-strategy-browse.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/trade-strategy-browse/trade-strategy-browse.component.ts ***!
  \**************************************************************************/
/*! exports provided: TradeStrategyBrowseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeStrategyBrowseComponent", function() { return TradeStrategyBrowseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_rest_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/rest-api.service */ "./src/app/shared/rest-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





const _c0 = function () { return ["/trade-strategy-edit"]; };
const _c1 = function (a0) { return { ticker: a0 }; };
function TradeStrategyBrowseComponent_div_6_tr_20_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TradeStrategyBrowseComponent_div_6_tr_20_Template_span_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const stockTradeStrategy_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.deleteStockStrategy(stockTradeStrategy_r2.ticker); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const stockTradeStrategy_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stockTradeStrategy_r2.ticker);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stockTradeStrategy_r2.interval);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stockTradeStrategy_r2.intervalDuration);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stockTradeStrategy_r2.timeUnit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stockTradeStrategy_r2.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](stockTradeStrategy_r2.candleCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, stockTradeStrategy_r2.ticker));
} }
function TradeStrategyBrowseComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Browse Stock Trade Strategy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Ticker");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Interval");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "IntervalDuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "TimeUnit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "CandleCount");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TradeStrategyBrowseComponent_div_6_tr_20_Template, 18, 11, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.stockTradeStrategies);
} }
class TradeStrategyBrowseComponent {
    constructor(restApi) {
        this.restApi = restApi;
        this.stockTradeStrategies = [];
    }
    // Get AllStockStrategy list
    loadAllStockStrategy() {
        this.restApi.getAllStockTradeStrategy().subscribe((data) => {
            this.stockTradeStrategies = data;
        });
        //      {next : stockTradeStrategies => {
        //      this.stockTradeStrategies = stockTradeStrategies;
        //    }
        //  });
    }
    ;
    ngOnInit() {
        this.loadAllStockStrategy();
    }
    deleteStockStrategy(id) {
        if (window.confirm('Are you sure, you want to delete?')) {
            this.restApi.deleteStockTradeStrategy(id).subscribe(data => {
                this.loadAllStockStrategy();
            });
        }
    }
}
TradeStrategyBrowseComponent.ɵfac = function TradeStrategyBrowseComponent_Factory(t) { return new (t || TradeStrategyBrowseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_rest_api_service__WEBPACK_IMPORTED_MODULE_1__["RestApiService"])); };
TradeStrategyBrowseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TradeStrategyBrowseComponent, selectors: [["app-employees-list"]], decls: 7, vars: 1, consts: [[1, "container", "custom-container-2"], [1, "no-data", "text-center"], ["routerLink", "trade-strategy-edit", 1, "btn", "btn-outline-primary"], [4, "ngIf"], [1, "mb-3", "text-center"], [1, "col-md-12"], [1, "table", "table-bordered"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "edit", 3, "routerLink", "queryParams"], [1, "delete", 3, "click"]], template: function TradeStrategyBrowseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Click here to add more Stock Trade Strategy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add Stock Trade Strategy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TradeStrategyBrowseComponent_div_6_Template, 21, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stockTradeStrategies.length !== 0);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".app-loading[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\n.app-loading[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  -webkit-animation: rotate 2s linear infinite;\n          animation: rotate 2s linear infinite;\n  transform-origin: center center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n\n.app-loading[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]   .path[_ngcontent-%COMP%] {\n  stroke-dasharray: 1, 200;\n  stroke-dashoffset: 0;\n  -webkit-animation: dash 1.5s ease-in-out infinite;\n          animation: dash 1.5s ease-in-out infinite;\n  stroke-linecap: round;\n  stroke: #ddd;\n}\n\n@-webkit-keyframes rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -35px;\n  }\n  100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -124px;\n  }\n}\n\n@keyframes dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -35px;\n  }\n  100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -124px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhZGUtc3RyYXRlZ3ktYnJvd3NlL3RyYWRlLXN0cmF0ZWd5LWJyb3dzZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLDRDQUFvQztVQUFwQyxvQ0FBb0M7RUFDcEMsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWTtBQUNkOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQixpREFBeUM7VUFBekMseUNBQXlDO0VBQ3pDLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUpBO0VBQ0U7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usd0JBQXdCO0lBQ3hCLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLHlCQUF5QjtFQUMzQjtBQUNGOztBQWJBO0VBQ0U7SUFDRSx3QkFBd0I7SUFDeEIsb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIseUJBQXlCO0VBQzNCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC90cmFkZS1zdHJhdGVneS1icm93c2UvdHJhZGUtc3RyYXRlZ3ktYnJvd3NlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLWxvYWRpbmcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5hcHAtbG9hZGluZyAuc3Bpbm5lciB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgYW5pbWF0aW9uOiByb3RhdGUgMnMgbGluZWFyIGluZmluaXRlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uYXBwLWxvYWRpbmcgLnNwaW5uZXIgLnBhdGgge1xuICBzdHJva2UtZGFzaGFycmF5OiAxLCAyMDA7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICBhbmltYXRpb246IGRhc2ggMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICBzdHJva2U6ICNkZGQ7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlIHtcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGRhc2gge1xuICAwJSB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMSwgMjAwO1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICB9XG4gIDUwJSB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogODksIDIwMDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTM1cHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogODksIDIwMDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTEyNHB4O1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TradeStrategyBrowseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-employees-list',
                templateUrl: './trade-strategy-browse.component.html',
                styleUrls: ['./trade-strategy-browse.component.css']
            }]
    }], function () { return [{ type: _shared_rest_api_service__WEBPACK_IMPORTED_MODULE_1__["RestApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/trade-strategy-edit/trade-strategy-edit.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/trade-strategy-edit/trade-strategy-edit.component.ts ***!
  \**********************************************************************/
/*! exports provided: TradeStrategyEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TradeStrategyEditComponent", function() { return TradeStrategyEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_stockTradeStrategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/stockTradeStrategy */ "./src/app/shared/stockTradeStrategy.ts");
/* harmony import */ var _shared_rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/rest-api.service */ "./src/app/shared/rest-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function TradeStrategyEditComponent_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r5, " ");
} }
function TradeStrategyEditComponent_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r6, " ");
} }
function TradeStrategyEditComponent_option_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r7, " ");
} }
function TradeStrategyEditComponent_option_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r8, " ");
} }
function TradeStrategyEditComponent_div_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "circle", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TradeStrategyEditComponent {
    constructor(restApi, actRoute, router) {
        this.restApi = restApi;
        this.actRoute = actRoute;
        this.router = router;
        this.stockTradeStrategy = {
            "ticker": "Enter your Ticker",
            "quantity": 10,
            "interval": 1,
            "timeUnit": "MINUTES",
            "intervalDuration": "ONE_MIN",
            "tradeStrategy": {
                "entryConditions": "function(barSeries, stockWatch){ \n\tclosePriceIndicator = new ClosePriceIndicator(barSeries);\n\tif(closePriceIndicator.getValue(barSeries.getEndIndex()).floatValue() < 568){\n\t\tstockWatch.setStopLossPercentage(10.0);\n\t\treturn true;\n\t}\n\treturn false;\n};",
                "entrySignal": "buy",
                "exitSignal": "sell",
                "exitConditions": "function(barSeries, stockWatch){ \n\tclosePriceIndicator = new ClosePriceIndicator(barSeries);\n\tif(closePriceIndicator.getValue(barSeries.getEndIndex()).floatValue() > 569){\n\t\treturn true;\n\t}\n\treturn false;\n};"
            },
            "state": "WATCHING",
            "stockWatch": {
                "stopLossPercentage": 5.0,
                "profitPercentage": 20.0,
                "reenter": true
            },
            "candleCount": 1000
        };
        this.reEnterOptions = ["true", "false"];
        this.intervalDurationOptions = ["ONE_MIN", "FIVE_MINUTE", "FIFTEEN_MINUTE", "ONE_DAY"];
        this.tradeStrategyStates = ["INACTIVE", "WATCHING", "ENTRY_ORDER_PENDING", "EXIT_ORDER_PENDING", "ENTERED", "COMPLETED"];
        this.timeUnit = ["DAYS", "MINUTES", "HOURS"];
        this.loading = false;
        this.actRoute.queryParams.subscribe(params => {
            console.log(params);
            this.ticker = params["ticker"];
            this.strategyName = params["strategyName"];
        });
    }
    ngOnInit() {
        this.getStockTradeStrategyFromParam();
    }
    getStockTradeStrategyFromParam() {
        if (this.ticker != null) {
            this.restApi.getStockTradeStrategy(this.ticker).subscribe(data => {
                this.stockTradeStrategy = data;
            });
        }
        else {
            this.restApi.getBackTestStrategy(this.strategyName).subscribe(data => {
                let backTestStrategy = data;
                this.stockTradeStrategy = new _shared_stockTradeStrategy__WEBPACK_IMPORTED_MODULE_1__["StockTradeStrategy"]();
                this.stockTradeStrategy.ticker = backTestStrategy.backTestRequest.ticker;
                this.stockTradeStrategy.quantity = backTestStrategy.backTestRequest.quantity;
                this.stockTradeStrategy.interval = 1;
                this.stockTradeStrategy.intervalDuration = backTestStrategy.backTestRequest.intervalDuration;
                this.stockTradeStrategy.state = "WATCHING";
                this.stockTradeStrategy.candleCount = backTestStrategy.backTestRequest.candleCount;
                this.stockTradeStrategy.tradeStrategy = backTestStrategy.backTestRequest.tradeStrategy;
                this.stockTradeStrategy.stockWatch = backTestStrategy.backTestRequest.stockWatch;
                this.stockTradeStrategy.stockWatch.reenter = true;
            });
        }
    }
    getStockTradeStrategy() {
        this.restApi.getStockTradeStrategy(this.stockTradeStrategy.ticker).subscribe(data => {
            this.stockTradeStrategy = data;
        });
    }
    // Update employee data
    saveStockTradeStrategy() {
        if (window.confirm('Are you sure, you want to save?')) {
            this.loading = true;
            this.restApi.saveStockTradeStrategy(this.stockTradeStrategy).subscribe(data => {
                this.stockTradeStrategy = data;
                this.loading = false;
            });
        }
    }
}
TradeStrategyEditComponent.ɵfac = function TradeStrategyEditComponent_Factory(t) { return new (t || TradeStrategyEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
TradeStrategyEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TradeStrategyEditComponent, selectors: [["trade-strategy-edit"]], decls: 77, vars: 19, consts: [[1, "container", "custom-container"], [1, "col-md-12"], [1, "mb-3", "text-center"], [1, "form-group"], ["type", "text", "placeholder", "Ticker", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Quantity", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Interval", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-control", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf"], ["type", "text", "placeholder", "Candle Count", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Stop Loss Percentage", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Profit Percentage", 1, "form-control", 3, "ngModel", "ngModelChange"], ["rows", "15", "cols", "80", "placeholder", "Entry Condition", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Entry Signal", 1, "form-control", 3, "ngModel", "ngModelChange"], ["rows", "15", "cols", "80", "placeholder", "Exit Condition", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Exit Signal", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "app-loading", 4, "ngIf"], [1, "btn", "btn-success", "btn-lg", "btn-block", 3, "click"], [1, "app-loading"], [1, "logo"], ["viewBox", "25 25 50 50", 1, "spinner"], ["cx", "50", "cy", "50", "r", "20", "fill", "none", "stroke-width", "2", "stroke-miterlimit", "10", 1, "path"]], template: function TradeStrategyEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Update Trade Strategy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Ticker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TradeStrategyEditComponent_Template_input_ngModelChange_7_listener($event) { return ctx.stockTradeStrategy.ticker = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TradeStrategyEditComponent_Template_input_ngModelChange_11_listener($event) { return ctx.stockTradeStrategy.quantity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Interval");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TradeStrategyEditComponent_Template_input_ngModelChange_15_listener($event) { return ctx.stockTradeStrategy.interval = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "TimeUnit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TradeStrategyEditComponent_Template_select_ngModelChange_19_listener($event) { return ctx.stockTradeStrategy.timeUnit = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, TradeStrategyEditComponent_option_20_Template, 2, 1, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "IntervalDuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TradeStrategyEditComponent_Template_select_ngModelChange_24_listener($event) { return ctx.stockTradeStrategy.intervalDuration = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, TradeStrategyEditComponent_option_25_Template, 2, 1, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "State");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TradeStrategyEditComponent_Template_select_ngModelChange_29_listener($event) { return ctx.stockTradeStrategy.state = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, TradeStrategyEditComponent_option_30_Template, 2, 1, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "CandleCount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TradeStrategyEditComponent_Template_input_ngModelChange_34_listener($event) { return ctx.stockTradeStrategy.candleCount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "StopLossPercentage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TradeStrategyEditComponent_Template_input_ngModelChange_38_listener($event) { return ctx.stockTradeStrategy.stockWatch.stopLossPercentage = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "profitPercentage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TradeStrategyEditComponent_Template_input_ngModelChange_42_listener($event) { return ctx.stockTradeStrategy.stockWatch.profitPercentage = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "ReEnter?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TradeStrategyEditComponent_Template_select_ngModelChange_46_listener($event) { return ctx.stockTradeStrategy.stockWatch.reenter = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, TradeStrategyEditComponent_option_47_Template, 2, 1, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "EntryConditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TradeStrategyEditComponent_Template_textarea_ngModelChange_52_listener($event) { return ctx.stockTradeStrategy.tradeStrategy.entryConditions = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "          Enter entry condition here\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "EntrySignal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TradeStrategyEditComponent_Template_input_ngModelChange_58_listener($event) { return ctx.stockTradeStrategy.tradeStrategy.entrySignal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "ExitConditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TradeStrategyEditComponent_Template_textarea_ngModelChange_63_listener($event) { return ctx.stockTradeStrategy.tradeStrategy.exitConditions = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "          Enter exit condition here\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "ExitSignal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TradeStrategyEditComponent_Template_input_ngModelChange_69_listener($event) { return ctx.stockTradeStrategy.tradeStrategy.exitSignal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](70, TradeStrategyEditComponent_div_70_Template, 4, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TradeStrategyEditComponent_Template_button_click_72_listener() { return ctx.getStockTradeStrategy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "fetch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TradeStrategyEditComponent_Template_button_click_75_listener() { return ctx.saveStockTradeStrategy(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Update");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.stockTradeStrategy.ticker);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.stockTradeStrategy.quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.stockTradeStrategy.interval);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.stockTradeStrategy.timeUnit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.timeUnit);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.stockTradeStrategy.intervalDuration);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.intervalDurationOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.stockTradeStrategy.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tradeStrategyStates);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.stockTradeStrategy.candleCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.stockTradeStrategy.stockWatch.stopLossPercentage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.stockTradeStrategy.stockWatch.profitPercentage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.stockTradeStrategy.stockWatch.reenter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.reEnterOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.stockTradeStrategy.tradeStrategy.entryConditions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.stockTradeStrategy.tradeStrategy.entrySignal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.stockTradeStrategy.tradeStrategy.exitConditions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.stockTradeStrategy.tradeStrategy.exitSignal);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]], styles: [".app-loading[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\n.app-loading[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  -webkit-animation: rotate 2s linear infinite;\n          animation: rotate 2s linear infinite;\n  transform-origin: center center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n\n.app-loading[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]   .path[_ngcontent-%COMP%] {\n  stroke-dasharray: 1, 200;\n  stroke-dashoffset: 0;\n  -webkit-animation: dash 1.5s ease-in-out infinite;\n          animation: dash 1.5s ease-in-out infinite;\n  stroke-linecap: round;\n  stroke: #ddd;\n}\n\n@-webkit-keyframes rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -35px;\n  }\n  100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -124px;\n  }\n}\n\n@keyframes dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -35px;\n  }\n  100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -124px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhZGUtc3RyYXRlZ3ktZWRpdC90cmFkZS1zdHJhdGVneS1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osNENBQW9DO1VBQXBDLG9DQUFvQztFQUNwQywrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLGlEQUF5QztVQUF6Qyx5Q0FBeUM7RUFDekMscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBSkE7RUFDRTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSx3QkFBd0I7SUFDeEIsb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBYkE7RUFDRTtJQUNFLHdCQUF3QjtJQUN4QixvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLHlCQUF5QjtJQUN6Qix3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLHlCQUF5QjtJQUN6Qix5QkFBeUI7RUFDM0I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RyYWRlLXN0cmF0ZWd5LWVkaXQvdHJhZGUtc3RyYXRlZ3ktZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1sb2FkaW5nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYXBwLWxvYWRpbmcgLnNwaW5uZXIge1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGFuaW1hdGlvbjogcm90YXRlIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmFwcC1sb2FkaW5nIC5zcGlubmVyIC5wYXRoIHtcbiAgc3Ryb2tlLWRhc2hhcnJheTogMSwgMjAwO1xuICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgYW5pbWF0aW9uOiBkYXNoIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgc3Ryb2tlOiAjZGRkO1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBkYXNoIHtcbiAgMCUge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDEsIDIwMDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgfVxuICA1MCUge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDg5LCAyMDA7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0zNXB4O1xuICB9XG4gIDEwMCUge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDg5LCAyMDA7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMjRweDtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TradeStrategyEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'trade-strategy-edit',
                templateUrl: './trade-strategy-edit.component.html',
                styleUrls: ['./trade-strategy-edit.component.css']
            }]
    }], function () { return [{ type: _shared_rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sriram/Documents/Study/Projects/Algo/AlgoTradeWithAlpaca/web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map