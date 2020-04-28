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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _trade_strategy_edit_trade_strategy_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trade-strategy-edit/trade-strategy-edit.component */ "./src/app/trade-strategy-edit/trade-strategy-edit.component.ts");
/* harmony import */ var _trade_strategy_browse_trade_strategy_browse_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trade-strategy-browse/trade-strategy-browse.component */ "./src/app/trade-strategy-browse/trade-strategy-browse.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _trade_strategy_browse_trade_strategy_browse_component__WEBPACK_IMPORTED_MODULE_3__["TradeStrategyBrowseComponent"] },
    { path: 'trade-strategy-edit', component: _trade_strategy_edit_trade_strategy_edit_component__WEBPACK_IMPORTED_MODULE_2__["TradeStrategyEditComponent"] },
    { path: 'trade-strategy-edit/:ticker', component: _trade_strategy_edit_trade_strategy_edit_component__WEBPACK_IMPORTED_MODULE_2__["TradeStrategyEditComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm\">\n  <h5 class=\"my-0 mr-md-auto font-weight-normal\">Alpca Trade TradeStrategy Management</h5>\n  <nav class=\"my-2 my-md-0 mr-md-3\">\n    <a class=\"btn btn-outline-primary\" routerLinkActive=\"active\" routerLink=\"/trade-strategy-edit\">Trade Strategy Edit</a>\n  </nav>\n</div>\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'alpca-tradeStrategy-app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _trade_strategy_edit_trade_strategy_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trade-strategy-edit/trade-strategy-edit.component */ "./src/app/trade-strategy-edit/trade-strategy-edit.component.ts");
/* harmony import */ var _trade_strategy_browse_trade_strategy_browse_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./trade-strategy-browse/trade-strategy-browse.component */ "./src/app/trade-strategy-browse/trade-strategy-browse.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// HttpClient module for RESTful API

// Routing module for router service

// Forms module

// Components


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _trade_strategy_edit_trade_strategy_edit_component__WEBPACK_IMPORTED_MODULE_6__["TradeStrategyEditComponent"],
                _trade_strategy_browse_trade_strategy_browse_component__WEBPACK_IMPORTED_MODULE_7__["TradeStrategyBrowseComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RestApiService = /** @class */ (function () {
    function RestApiService(http) {
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
    // HttpClient API get() method => Fetch employees list
    RestApiService.prototype.getAllStockTradeStrategy = function () {
        return this.http.get(this.apiURL + '/alpaca/strategy/getAllStrategy')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ;
    // HttpClient API get() method => Fetch StockTradeStrategy
    RestApiService.prototype.getStockTradeStrategy = function (ticker) {
        return this.http.get(this.apiURL + '/alpaca/strategy/getStrategy?ticker=' + ticker)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // HttpClient API post() method => Create StockTradeStrategy
    RestApiService.prototype.saveStockTradeStrategy = function (stockTradeStrategy) {
        return this.http.post(this.apiURL + '/alpaca/strategy/updateStrategy', JSON.stringify(stockTradeStrategy), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // HttpClient API delete() method => Delete StockTradeStrategy
    RestApiService.prototype.deleteStockTradeStrategy = function (ticker) {
        return this.http.delete(this.apiURL + '/alpaca/strategy/removeStrategy' + ticker)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    // Error handling
    RestApiService.prototype.handleError = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
        }
        window.alert(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    };
    RestApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RestApiService);
    return RestApiService;
}());



/***/ }),

/***/ "./src/app/trade-strategy-browse/trade-strategy-browse.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/trade-strategy-browse/trade-strategy-browse.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYWRlLXN0cmF0ZWd5LWJyb3dzZS90cmFkZS1zdHJhdGVneS1icm93c2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/trade-strategy-browse/trade-strategy-browse.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/trade-strategy-browse/trade-strategy-browse.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container custom-container-2\">\n\n  <!-- Show it when there is no employee -->\n  <div class=\"no-data text-center\">\n    <p>Click here to add more Stock Trade Strategy</p>\n    <button class=\"btn btn-outline-primary\" routerLink=\"trade-strategy-edit\">Add Stock Trade Strategy</button>\n  </div>\n\n  <!-- Employees list table, it hides when there is no employee -->\n  <div *ngIf=\"stockTradeStrategies.length !== 0\">\n    <h3 class=\"mb-3 text-center\">Browse Stock Trade Strategy</h3>\n\n    <div class=\"col-md-12\">\n      <table class=\"table table-bordered\">\n        <thead>\n          <tr>\n            <th scope=\"col\">Ticker</th>\n            <th scope=\"col\">Interval</th>\n            <th scope=\"col\">IntervalDuration</th>\n            <th scope=\"col\">TimeUnit</th>\n            <th scope=\"col\">State</th>\n            <th scope=\"col\">CandleCount</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let stockTradeStrategy of stockTradeStrategies\">\n            <td>{{stockTradeStrategy.ticker}}</td>\n            <td>{{stockTradeStrategy.interval}}</td>\n            <td>{{stockTradeStrategy.intervalDuration}}</td>\n            <td>{{stockTradeStrategy.timeUnit}}</td>\n            <td>{{stockTradeStrategy.state}}</td>\n            <td>{{stockTradeStrategy.candleCount}}</td>\n            <td>\n              <span class=\"edit\" routerLink=\"trade-strategy-edit/{{stockTradeStrategy.ticker}}\">Edit</span>\n              <span class=\"delete\" (click)=\"deleteStockStrategy(stockTradeStrategy.ticker)\">Delete</span>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n  </div>\n\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_rest_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/rest-api.service */ "./src/app/shared/rest-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TradeStrategyBrowseComponent = /** @class */ (function () {
    function TradeStrategyBrowseComponent(restApi) {
        this.restApi = restApi;
        this.stockTradeStrategies = [];
    }
    // Get AllStockStrategy list
    TradeStrategyBrowseComponent.prototype.loadAllStockStrategy = function () {
        var _this = this;
        this.restApi.getAllStockTradeStrategy().subscribe(function (data) {
            _this.stockTradeStrategies = data;
        });
        //      {next : stockTradeStrategies => {
        //      this.stockTradeStrategies = stockTradeStrategies;
        //    }
        //  });
    };
    ;
    TradeStrategyBrowseComponent.prototype.ngOnInit = function () {
        this.loadAllStockStrategy();
    };
    TradeStrategyBrowseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employees-list',
            template: __webpack_require__(/*! ./trade-strategy-browse.component.html */ "./src/app/trade-strategy-browse/trade-strategy-browse.component.html"),
            styles: [__webpack_require__(/*! ./trade-strategy-browse.component.css */ "./src/app/trade-strategy-browse/trade-strategy-browse.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_rest_api_service__WEBPACK_IMPORTED_MODULE_1__["RestApiService"]])
    ], TradeStrategyBrowseComponent);
    return TradeStrategyBrowseComponent;
}());



/***/ }),

/***/ "./src/app/trade-strategy-edit/trade-strategy-edit.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/trade-strategy-edit/trade-strategy-edit.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYWRlLXN0cmF0ZWd5LWVkaXQvdHJhZGUtc3RyYXRlZ3ktZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/trade-strategy-edit/trade-strategy-edit.component.html":
/*!************************************************************************!*\
  !*** ./src/app/trade-strategy-edit/trade-strategy-edit.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container custom-container\">\n  <div class=\"col-md-12\">\n\n    <h3 class=\"mb-3 text-center\">Update Trade Strategy</h3>\n\n    <div class=\"form-group\">\n      <label>Ticker</label>\n      <input type=\"text\" [(ngModel)]=\"stockTradeStrategy.ticker\" class=\"form-control\" placeholder=\"Ticker\">\n    </div>\n\n    <div class=\"form-group\">\n      <label>Quantity</label>\n      <input type=\"text\" [(ngModel)]=\"stockTradeStrategy.quantity\" class=\"form-control\" placeholder=\"Quantity\">\n    </div>\n\n    <div class=\"form-group\">\n      <label>Interval</label>\n      <input type=\"text\" [(ngModel)]=\"stockTradeStrategy.interval\" class=\"form-control\" placeholder=\"Interval\">\n    </div>\n\n    <div class=\"form-group\">\n      <label>IntervalDuration</label>\n      <input type=\"text\" [(ngModel)]=\"stockTradeStrategy.intervalDuration\" class=\"form-control\" placeholder=\"IntervalDuration\">\n    </div>\n\n    <div class=\"form-group\">\n      <label>State</label>\n      <input type=\"text\" [(ngModel)]=\"stockTradeStrategy.state\" class=\"form-control\" placeholder=\"State\">\n    </div>\n\n    <div class=\"form-group\">\n      <label>CandleCount</label>\n      <input type=\"text\" [(ngModel)]=\"stockTradeStrategy.candleCount\" class=\"form-control\" placeholder=\"Candle Count\">\n    </div>\n\n    <div class=\"form-group\">\n      <label>StopLossPercentage</label>\n      <input type=\"text\" [(ngModel)]=\"stockTradeStrategy.stockWatch.stopLossPercentage\" class=\"form-control\" placeholder=\"Stop Loss Percentage\">\n    </div>\n\n    <div class=\"form-group\">\n      <label>profitPercentage</label>\n      <input type=\"text\" [(ngModel)]=\"stockTradeStrategy.stockWatch.profitPercentage\" class=\"form-control\" placeholder=\"Profit Percentage\">\n    </div>\n\n    <div class=\"form-group\">\n      <label>EntryConditions</label>\n      <br>\n        <textarea rows = \"15\" cols = \"80\" [(ngModel)]=\"stockTradeStrategy.tradeStrategy.entryConditions\"  placeholder=\"Entry Condition\">\n          Enter entry condition here\n        </textarea>\n      <br>\n    </div>\n\n    <div class=\"form-group\">\n      <label>EntrySignal</label>\n      <input type=\"text\" [(ngModel)]=\"stockTradeStrategy.tradeStrategy.entrySignal\" class=\"form-control\" placeholder=\"Entry Signal\">\n    </div>\n\n    <div class=\"form-group\">\n      <label>ExitConditions</label>\n      <br>\n        <textarea rows = \"15\" cols = \"80\" [(ngModel)]=\"stockTradeStrategy.tradeStrategy.exitConditions\" placeholder=\"Exit Condition\">\n          Enter exit condition here\n        </textarea>\n      <br>\n    </div>\n\n    <div class=\"form-group\">\n      <label>ExitSignal</label>\n      <input type=\"text\" [(ngModel)]=\"stockTradeStrategy.tradeStrategy.exitSignal\" class=\"form-control\" placeholder=\"Exit Signal\">\n    </div>\n\n\n    <div class=\"form-group\">\n      <button class=\"btn btn-success btn-lg btn-block\" (click)=\"getStockTradeStrategy()\">fetch</button>\n    </div>\n\n    <div class=\"form-group\">\n      <button class=\"btn btn-success btn-lg btn-block\" (click)=\"saveStockTradeStrategy()\">Update</button>\n    </div>\n\n  </div>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_rest_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/rest-api.service */ "./src/app/shared/rest-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TradeStrategyEditComponent = /** @class */ (function () {
    function TradeStrategyEditComponent(restApi, actRoute, router) {
        var _this = this;
        this.restApi = restApi;
        this.actRoute = actRoute;
        this.router = router;
        this.ticker = this.actRoute.snapshot.params['ticker'];
        this.stockTradeStrategy = {};
        this.actRoute.params.subscribe(function (params) {
            console.log(params);
            _this.ticker = params["ticker"];
        });
    }
    TradeStrategyEditComponent.prototype.ngOnInit = function () {
        this.getStockTradeStrategyWithParam();
    };
    TradeStrategyEditComponent.prototype.getStockTradeStrategyWithParam = function () {
        var _this = this;
        this.restApi.getStockTradeStrategy(this.ticker).subscribe(function (data) {
            _this.stockTradeStrategy = data;
        });
    };
    TradeStrategyEditComponent.prototype.getStockTradeStrategy = function () {
        var _this = this;
        this.restApi.getStockTradeStrategy(this.stockTradeStrategy.ticker).subscribe(function (data) {
            _this.stockTradeStrategy = data;
        });
    };
    // Update employee data
    TradeStrategyEditComponent.prototype.saveStockTradeStrategy = function () {
        var _this = this;
        if (window.confirm('Are you sure, you want to save?')) {
            this.restApi.saveStockTradeStrategy(this.stockTradeStrategy).subscribe(function (data) {
                _this.stockTradeStrategy = data;
            });
        }
    };
    TradeStrategyEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'trade-strategy-edit',
            template: __webpack_require__(/*! ./trade-strategy-edit.component.html */ "./src/app/trade-strategy-edit/trade-strategy-edit.component.html"),
            styles: [__webpack_require__(/*! ./trade-strategy-edit.component.css */ "./src/app/trade-strategy-edit/trade-strategy-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_rest_api_service__WEBPACK_IMPORTED_MODULE_1__["RestApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TradeStrategyEditComponent);
    return TradeStrategyEditComponent;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sriram/Documents/Study/Projects/Algo/AlgoTradeWithAlpaca/src/main/resources/web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map