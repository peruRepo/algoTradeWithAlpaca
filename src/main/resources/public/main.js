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
/* harmony import */ var _back_test_edit_back_test_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./back-test-edit/back-test-edit.component */ "./src/app/back-test-edit/back-test-edit.component.ts");
/* harmony import */ var _back_test_browse_back_test_browse_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./back-test-browse/back-test-browse.component */ "./src/app/back-test-browse/back-test-browse.component.ts");
/* harmony import */ var _trade_strategy_browse_trade_strategy_browse_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trade-strategy-browse/trade-strategy-browse.component */ "./src/app/trade-strategy-browse/trade-strategy-browse.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _trade_strategy_browse_trade_strategy_browse_component__WEBPACK_IMPORTED_MODULE_5__["TradeStrategyBrowseComponent"] },
    { path: 'trade-strategy-browse', component: _trade_strategy_browse_trade_strategy_browse_component__WEBPACK_IMPORTED_MODULE_5__["TradeStrategyBrowseComponent"] },
    { path: 'trade-strategy-edit', component: _trade_strategy_edit_trade_strategy_edit_component__WEBPACK_IMPORTED_MODULE_2__["TradeStrategyEditComponent"] },
    { path: 'back-test-edit', component: _back_test_edit_back_test_edit_component__WEBPACK_IMPORTED_MODULE_3__["BackTestEditComponent"] },
    { path: 'back-test-browse', component: _back_test_browse_back_test_browse_component__WEBPACK_IMPORTED_MODULE_4__["BackTestBrowseComponent"] },
    { path: 'back-test-browse/back-test-edit/:strategyName', component: _back_test_edit_back_test_edit_component__WEBPACK_IMPORTED_MODULE_3__["BackTestEditComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: []
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

module.exports = "<div class=\"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm\">\n  <nav class=\"my-2 my-md-0 mr-md-3\">\n    <a class=\"btn btn-outline-primary\" routerLinkActive=\"active\" routerLink=\"/back-test-browse\">Back Test Browse</a>\n  </nav>\n  <nav class=\"my-2 my-md-0 mr-md-3\">\n    <a class=\"btn btn-outline-primary\" routerLinkActive=\"active\" routerLink=\"/back-test-edit\">Back Test Edit</a>\n  </nav>\n  <nav class=\"my-2 my-md-0 mr-md-3\">\n    <a class=\"btn btn-outline-primary\" routerLinkActive=\"active\" routerLink=\"/trade-strategy-browse\">Trade Strategy Browse</a>\n  </nav>\n  <nav class=\"my-2 my-md-0 mr-md-3\">\n    <a class=\"btn btn-outline-primary\" routerLinkActive=\"active\" routerLink=\"/trade-strategy-edit\">Trade Strategy Edit</a>\n  </nav>\n</div>\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/fesm2015/ngx-echarts.js");
/* harmony import */ var _trade_strategy_edit_trade_strategy_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./trade-strategy-edit/trade-strategy-edit.component */ "./src/app/trade-strategy-edit/trade-strategy-edit.component.ts");
/* harmony import */ var _trade_strategy_browse_trade_strategy_browse_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./trade-strategy-browse/trade-strategy-browse.component */ "./src/app/trade-strategy-browse/trade-strategy-browse.component.ts");
/* harmony import */ var _back_test_edit_back_test_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./back-test-edit/back-test-edit.component */ "./src/app/back-test-edit/back-test-edit.component.ts");
/* harmony import */ var _back_test_browse_back_test_browse_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./back-test-browse/back-test-browse.component */ "./src/app/back-test-browse/back-test-browse.component.ts");
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
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/back-test-browse/back-test-browse.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/back-test-browse/back-test-browse.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhY2stdGVzdC1icm93c2UvYmFjay10ZXN0LWJyb3dzZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/back-test-browse/back-test-browse.component.html":
/*!******************************************************************!*\
  !*** ./src/app/back-test-browse/back-test-browse.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container custom-container-2\">\n\n  <!-- Show it when there is no employee -->\n  <div class=\"no-data text-center\">\n    <p>Click here to backtest more Strategy</p>\n    <button class=\"btn btn-outline-primary\" routerLink=\"/back-test-edit\">Add BackTest Strategy</button>\n  </div>\n\n  <!-- Employees list table, it hides when there is no employee -->\n  <div *ngIf=\"backTestStrategies.length !== 0\">\n    <h3 class=\"mb-3 text-center\">Browse BackTest Strategy</h3>\n\n    <div class=\"col-md-12\">\n      <table class=\"table table-bordered\">\n        <thead>\n          <tr>\n            <th scope=\"col\">Strategy Name</th>\n            <th scope=\"col\">Ticker</th>\n            <th scope=\"col\">IntervalDuration</th>\n            <th scope=\"col\">profit Percentage </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let backTestStrategy of backTestStrategies\">\n            <td>{{backTestStrategy.strategyName}}</td>\n            <td>{{backTestStrategy.backTestRequest.ticker}}</td>\n            <td>{{backTestStrategy.backTestRequest.intervalDuration}}</td>\n            <td>{{backTestStrategy.profitPercentage}}</td>\n            <td>\n              <span class=\"edit\" routerLink=\"back-test-edit/{{backTestStrategy.strategyName}}\">Edit</span>\n              <span class=\"delete\" (click)=\"deleteBackTestStrategy(backTestStrategy.strategyName)\">Delete</span>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n  </div>\n\n</div>\n"

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


var BackTestBrowseComponent = /** @class */ (function () {
    function BackTestBrowseComponent(restApi) {
        this.restApi = restApi;
        this.backTestStrategies = [];
    }
    // Get All Back TestStrategy list
    BackTestBrowseComponent.prototype.loadAllBackTestStrategy = function () {
        var _this = this;
        this.restApi.getAllBackTestStrategy().subscribe(function (data) {
            _this.backTestStrategies = data;
        });
    };
    ;
    BackTestBrowseComponent.prototype.ngOnInit = function () {
        this.loadAllBackTestStrategy();
    };
    // Delete Back Test Strategy
    BackTestBrowseComponent.prototype.deleteBackTestStrategy = function (strategyName) {
        var _this = this;
        if (window.confirm('Are you sure, you want to delete?')) {
            this.restApi.deleteBackTestStrategy(strategyName).subscribe(function (data) {
                _this.loadAllBackTestStrategy();
            });
        }
    };
    BackTestBrowseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'back-test-browse',
            template: __webpack_require__(/*! ./back-test-browse.component.html */ "./src/app/back-test-browse/back-test-browse.component.html"),
            styles: [__webpack_require__(/*! ./back-test-browse.component.css */ "./src/app/back-test-browse/back-test-browse.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_rest_api_service__WEBPACK_IMPORTED_MODULE_1__["RestApiService"]])
    ], BackTestBrowseComponent);
    return BackTestBrowseComponent;
}());



/***/ }),

/***/ "./src/app/back-test-edit/back-test-edit.component.css":
/*!*************************************************************!*\
  !*** ./src/app/back-test-edit/back-test-edit.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".demo-chart {\n  height: 400px;\n  width: 1200px\n}\n\n.tp-section {\n   display: flex;\n   align-content: center;\n   align-items: center;\n   height: 60px;\n}\n\n.tp-margin {\n   margin: 0 10px;\n}\n\nbody, html {\n  height: 100%;\n}\n\n.app-loading {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\n.app-loading .spinner {\n  height: 200px;\n  width: 200px;\n  -webkit-animation: rotate 2s linear infinite;\n          animation: rotate 2s linear infinite;\n  transform-origin: center center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n\n.app-loading .spinner .path {\n  stroke-dasharray: 1, 200;\n  stroke-dashoffset: 0;\n  -webkit-animation: dash 1.5s ease-in-out infinite;\n          animation: dash 1.5s ease-in-out infinite;\n  stroke-linecap: round;\n  stroke: #ddd;\n}\n\n@-webkit-keyframes rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -35px;\n  }\n  100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -124px;\n  }\n}\n\n@keyframes dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -35px;\n  }\n  100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -124px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFjay10ZXN0LWVkaXQvYmFjay10ZXN0LWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYjtBQUNGOztBQUVBO0dBQ0csYUFBYTtHQUNiLHFCQUFxQjtHQUNyQixtQkFBbUI7R0FDbkIsWUFBWTtBQUNmOztBQUNBO0dBQ0csY0FBYztBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWiw0Q0FBb0M7VUFBcEMsb0NBQW9DO0VBQ3BDLCtCQUErQjtFQUMvQixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsaURBQXlDO1VBQXpDLHlDQUF5QztFQUN6QyxxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0U7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFKQTtFQUNFO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHdCQUF3QjtJQUN4QixvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLHlCQUF5QjtJQUN6Qix3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLHlCQUF5QjtJQUN6Qix5QkFBeUI7RUFDM0I7QUFDRjs7QUFiQTtFQUNFO0lBQ0Usd0JBQXdCO0lBQ3hCLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLHlCQUF5QjtFQUMzQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYmFjay10ZXN0LWVkaXQvYmFjay10ZXN0LWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZW1vLWNoYXJ0IHtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgd2lkdGg6IDEyMDBweFxufVxuXG4udHAtc2VjdGlvbiB7XG4gICBkaXNwbGF5OiBmbGV4O1xuICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIGhlaWdodDogNjBweDtcbn1cbi50cC1tYXJnaW4ge1xuICAgbWFyZ2luOiAwIDEwcHg7XG59XG5cbmJvZHksIGh0bWwge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uYXBwLWxvYWRpbmcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5hcHAtbG9hZGluZyAuc3Bpbm5lciB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgYW5pbWF0aW9uOiByb3RhdGUgMnMgbGluZWFyIGluZmluaXRlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uYXBwLWxvYWRpbmcgLnNwaW5uZXIgLnBhdGgge1xuICBzdHJva2UtZGFzaGFycmF5OiAxLCAyMDA7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICBhbmltYXRpb246IGRhc2ggMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICBzdHJva2U6ICNkZGQ7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlIHtcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGRhc2gge1xuICAwJSB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMSwgMjAwO1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICB9XG4gIDUwJSB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogODksIDIwMDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTM1cHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogODksIDIwMDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTEyNHB4O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/back-test-edit/back-test-edit.component.html":
/*!**************************************************************!*\
  !*** ./src/app/back-test-edit/back-test-edit.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container custom-container\">\n  <div class=\"col-md-12\">\n\n    <h3 class=\"mb-3 text-center\">Back Test your Strategy </h3>\n\n    <div class=\"form-group\">\n      <label>Stratey Name</label>\n      <input type=\"text\" [(ngModel)]=\"backTestStrategy.backTestRequest.strategyName\" class=\"form-control\" placeholder=\"StrategyName\">\n    </div>\n\n    <div class=\"form-group\">\n      <label>Ticker</label>\n      <input type=\"text\" [(ngModel)]=\"backTestStrategy.backTestRequest.ticker\" class=\"form-control\" placeholder=\"Ticker\">\n    </div>\n\n    <div class=\"form-group\">\n      <label>IntervalDuration</label>\n      <select [(ngModel)]=\"backTestStrategy.backTestRequest.intervalDuration\" class=\"form-control\">\n        <option *ngFor=\"let option of intervalDurationOptions\">\n          {{option}}\n        </option>\n      </select>\n      <!--\n        <input type=\"text\" [(ngModel)]=\"backTestStrategy.backTestRequest.intervalDuration\" class=\"form-control\" placeholder=\"IntervalDuration\">\n        -->\n\n    </div>\n    <div class=\"form-group\">\n      <label>Quantity</label>\n      <input type=\"text\" [(ngModel)]=\"backTestStrategy.backTestRequest.quantity\" class=\"form-control\" placeholder=\"Quantity\">\n    </div>\n\n    <div class=\"form-group\">\n      <label>CandleCount</label>\n      <input type=\"text\" [(ngModel)]=\"backTestStrategy.backTestRequest.candleCount\" class=\"form-control\" placeholder=\"CandleCount\">\n    </div>\n\n\n\n    <div class=\"form-group\">\n      <label>StopLossPercentage</label>\n      <input type=\"text\" [(ngModel)]=\"backTestStrategy.backTestRequest.stockWatch.stopLossPercentage\" class=\"form-control\" placeholder=\"Stop Loss Percentage\">\n    </div>\n\n    <div class=\"form-group\">\n      <label>Target Profit Percentage</label>\n      <input type=\"text\" [(ngModel)]=\"backTestStrategy.backTestRequest.stockWatch.profitPercentage\" class=\"form-control\" placeholder=\"Target Profit Percentage\">\n    </div>\n\n    <div class=\"form-group\">\n      <label>Profit or Loss</label>\n      <input type=\"text\" [(ngModel)]=\"backTestStrategy.profitOrLoss\" class=\"form-control\" placeholder=\"Profit Or Loss\">\n    </div>\n\n    <div class=\"form-group\">\n      <label>Profit or Loss Percentage</label>\n      <input type=\"text\" [(ngModel)]=\"backTestStrategy.profitPercentage\" class=\"form-control\" placeholder=\"Profit Or Loss Percentage\">\n    </div>\n\n    <div class=\"form-group\">\n      <label>EntryConditions</label>\n      <br>\n        <textarea rows = \"15\" cols = \"80\" [(ngModel)]=\"backTestStrategy.backTestRequest.tradeStrategy.entryConditions\"  placeholder=\"Entry Condition\">\n          Enter entry condition here\n        </textarea>\n      <br>\n    </div>\n\n    <div class=\"form-group\">\n      <label>EntrySignal</label>\n      <input type=\"text\" [(ngModel)]=\"backTestStrategy.backTestRequest.tradeStrategy.entrySignal\" class=\"form-control\" placeholder=\"Entry Signal\">\n    </div>\n\n    <div class=\"form-group\">\n      <label>ExitConditions</label>\n      <br>\n        <textarea rows = \"15\" cols = \"80\" [(ngModel)]=\"backTestStrategy.backTestRequest.tradeStrategy.exitConditions\" placeholder=\"Exit Condition\">\n          Enter exit condition here\n        </textarea>\n      <br>\n    </div>\n\n    <div class=\"form-group\">\n      <label>ExitSignal</label>\n      <input type=\"text\" [(ngModel)]=\"backTestStrategy.backTestRequest.tradeStrategy.exitSignal\" class=\"form-control\" placeholder=\"Exit Signal\">\n    </div>\n\n\n    <div class=\"form-group\">\n      <button class=\"btn btn-success btn-lg btn-block\" (click)=\"getBackTestStrategy()\">fetch</button>\n    </div>\n\n    <div class=\"form-group\" *ngIf=\"!loading\">\n      <button class=\"btn btn-success btn-lg btn-block\" (click)=\"executeBackTestStrategy()\">Execute Back Test</button>\n    </div>\n\n    <div class=\"form-group\" *ngIf=\"!loading\">\n      <span class=\"btn btn-success btn-lg btn-block\" [routerLink]=\"['/trade-strategy-edit']\"  [queryParams]=\"{ strategyName: backTestStrategy.backTestRequest.strategyName }\">Deploy Back Test</span>\n    </div>\n\n    <div class=\"app-loading\" *ngIf=\"loading\">\n      <div class=\"logo\"></div>\n     <svg class=\"spinner\" viewBox=\"25 25 50 50\">\n       <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\"/>\n     </svg>\n   </div>\n\n\n    <div class=\"form-group\">\n    <button (click)=\"downloadCSV()\"> Download Trades </button>\n    </div>\n    <div echarts [options]=\"initialValue\" [merge]= \"dynamicData\" class=\"demo-chart\"></div>\n  </div>\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_rest_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/rest-api.service */ "./src/app/shared/rest-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_backTestResponse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/backTestResponse */ "./src/app/shared/backTestResponse.ts");
/* harmony import */ var _shared_csvUtil_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/csvUtil.service */ "./src/app/shared/csvUtil.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BackTestEditComponent = /** @class */ (function () {
    function BackTestEditComponent(restApi, actRoute, router, csvUtil) {
        var _this = this;
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
        this.backTestResponse = new _shared_backTestResponse__WEBPACK_IMPORTED_MODULE_3__["BackTestResponse"]();
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
                splitNumber: 20
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
        this.actRoute.params.subscribe(function (params) {
            console.log(params);
            _this.strategyName = params["strategyName"];
        });
    }
    BackTestEditComponent.prototype.ngOnInit = function () {
        this.getBackTestStrategyWithParam();
    };
    BackTestEditComponent.prototype.getBackTestStrategyWithParam = function () {
        var _this = this;
        this.restApi.getBackTestStrategy(this.strategyName).subscribe(function (data) {
            _this.backTestStrategy = data;
        });
    };
    BackTestEditComponent.prototype.getBackTestStrategy = function () {
        var _this = this;
        this.restApi.getBackTestStrategy(this.backTestStrategy.backTestRequest.strategyName).subscribe(function (data) {
            _this.backTestStrategy = data;
        });
    };
    // Update employee data
    BackTestEditComponent.prototype.executeBackTestStrategy = function () {
        var _this = this;
        this.loading = true;
        this.restApi.executeBackTestStrategy(this.backTestStrategy.backTestRequest).subscribe(function (data) {
            _this.backTestResponse = data;
            _this.backTestStrategy.profitOrLoss = _this.backTestResponse.profitOrLoss;
            _this.backTestStrategy.profitPercentage = _this.backTestResponse.profitPercentage;
            _this.formDataforChart(_this.backTestResponse.trades);
            _this.loading = false;
        }, function (error) {
            _this.errorMessage = error;
            _this.loading = false;
        });
        //  this.loading = false;
    };
    BackTestEditComponent.prototype.formDataforChart = function (backTestTrades) {
        var i = 0;
        var eChartDataSeries = [];
        for (var _i = 0, backTestTrades_1 = backTestTrades; _i < backTestTrades_1.length; _i++) {
            var backTestTrade = backTestTrades_1[_i];
            var profitAndTime = [];
            profitAndTime.push(backTestTrade.exitTime);
            profitAndTime.push(backTestTrade.profitOrLoss);
            eChartDataSeries.push(profitAndTime);
        }
        var data = {
            data: eChartDataSeries,
            type: 'bar'
        };
        this.dynamicData = this.initialValue;
        this.dynamicData.series = [];
        this.dynamicData.series.push(data);
    };
    BackTestEditComponent.prototype.downloadCSV = function () {
        var headerList = ['entryTime', 'entrySignal', 'priceAtEntry', 'exitTime', 'exitSignal', 'priceAtExit', 'profitOrLoss'];
        var fileName = "ExecutedTradesFor-" + this.backTestStrategy.backTestRequest.ticker;
        this.csvUtil.downloadFile(this.backTestResponse.trades, fileName, headerList);
    };
    BackTestEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'back-test-edit',
            template: __webpack_require__(/*! ./back-test-edit.component.html */ "./src/app/back-test-edit/back-test-edit.component.html"),
            styles: [__webpack_require__(/*! ./back-test-edit.component.css */ "./src/app/back-test-edit/back-test-edit.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_rest_api_service__WEBPACK_IMPORTED_MODULE_1__["RestApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_csvUtil_service__WEBPACK_IMPORTED_MODULE_4__["CSVUtil"]])
    ], BackTestEditComponent);
    return BackTestEditComponent;
}());



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
var BackTestResponse = /** @class */ (function () {
    function BackTestResponse() {
    }
    return BackTestResponse;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CSVUtil = /** @class */ (function () {
    function CSVUtil() {
    }
    CSVUtil.prototype.downloadFile = function (data, filename, headerList) {
        var csvData = this.ConvertToCSV(data, headerList);
        console.log(csvData);
        var blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
        var dwldLink = document.createElement("a");
        var url = URL.createObjectURL(blob);
        var isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
        if (isSafariBrowser) { //if Safari open in new window to save file with random filename.
            dwldLink.setAttribute("target", "_blank");
        }
        dwldLink.setAttribute("href", url);
        dwldLink.setAttribute("download", filename + ".csv");
        dwldLink.style.visibility = "hidden";
        document.body.appendChild(dwldLink);
        dwldLink.click();
        document.body.removeChild(dwldLink);
    };
    CSVUtil.prototype.ConvertToCSV = function (objArray, headerList) {
        var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        var str = '';
        var row = 'S.No,';
        for (var index in headerList) {
            row += headerList[index] + ',';
        }
        row = row.slice(0, -1);
        str += row + '\r\n';
        for (var i = 0; i < array.length; i++) {
            var line = (i + 1) + '';
            for (var index in headerList) {
                var head = headerList[index];
                line += ',' + array[i][head];
            }
            str += line + '\r\n';
        }
        return str;
    };
    CSVUtil = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], CSVUtil);
    return CSVUtil;
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
    RestApiService.prototype.getAllStockTradeStrategy = function () {
        return this.http.get(this.apiURL + '/alpaca/strategy/getAllStrategy')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ;
    RestApiService.prototype.getAllBackTestStrategy = function () {
        return this.http.get(this.apiURL + '/alpaca/backtest/getAllBackTest')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ;
    RestApiService.prototype.getStockTradeStrategy = function (ticker) {
        return this.http.get(this.apiURL + '/alpaca/strategy/getStrategy?ticker=' + ticker)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    RestApiService.prototype.getBackTestStrategy = function (strategyName) {
        return this.http.get(this.apiURL + '/alpaca/backtest/getBackTest?strategyName=' + strategyName)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    RestApiService.prototype.saveStockTradeStrategy = function (stockTradeStrategy) {
        return this.http.post(this.apiURL + '/alpaca/strategy/updateStrategy', JSON.stringify(stockTradeStrategy), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    RestApiService.prototype.executeBackTestStrategy = function (backTestRequest) {
        return this.http.post(this.apiURL + '/alpaca/backtest/execute', JSON.stringify(backTestRequest), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    RestApiService.prototype.deleteStockTradeStrategy = function (ticker) {
        return this.http.delete(this.apiURL + '/alpaca/strategy/removeStrategy?ticker=' + ticker)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    RestApiService.prototype.deleteBackTestStrategy = function (strategyName) {
        return this.http.delete(this.apiURL + '/alpaca/backtest/remove?strategyName=' + strategyName)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    RestApiService.prototype.handleError = function (error) {
        var errorMessage = '';
        if (error.status == 0 || error.status == 200) {
            return;
        }
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
        //  return errorMessage;
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

/***/ "./src/app/shared/stockTradeStrategy.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/stockTradeStrategy.ts ***!
  \**********************************************/
/*! exports provided: StockTradeStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockTradeStrategy", function() { return StockTradeStrategy; });
var StockTradeStrategy = /** @class */ (function () {
    function StockTradeStrategy() {
    }
    return StockTradeStrategy;
}());



/***/ }),

/***/ "./src/app/trade-strategy-browse/trade-strategy-browse.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/trade-strategy-browse/trade-strategy-browse.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-loading {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\n.app-loading .spinner {\n  height: 200px;\n  width: 200px;\n  -webkit-animation: rotate 2s linear infinite;\n          animation: rotate 2s linear infinite;\n  transform-origin: center center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n\n.app-loading .spinner .path {\n  stroke-dasharray: 1, 200;\n  stroke-dashoffset: 0;\n  -webkit-animation: dash 1.5s ease-in-out infinite;\n          animation: dash 1.5s ease-in-out infinite;\n  stroke-linecap: round;\n  stroke: #ddd;\n}\n\n@-webkit-keyframes rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -35px;\n  }\n  100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -124px;\n  }\n}\n\n@keyframes dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -35px;\n  }\n  100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -124px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhZGUtc3RyYXRlZ3ktYnJvd3NlL3RyYWRlLXN0cmF0ZWd5LWJyb3dzZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLDRDQUFvQztVQUFwQyxvQ0FBb0M7RUFDcEMsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWTtBQUNkOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLG9CQUFvQjtFQUNwQixpREFBeUM7VUFBekMseUNBQXlDO0VBQ3pDLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUpBO0VBQ0U7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usd0JBQXdCO0lBQ3hCLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLHlCQUF5QjtFQUMzQjtBQUNGOztBQWJBO0VBQ0U7SUFDRSx3QkFBd0I7SUFDeEIsb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIseUJBQXlCO0VBQzNCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC90cmFkZS1zdHJhdGVneS1icm93c2UvdHJhZGUtc3RyYXRlZ3ktYnJvd3NlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLWxvYWRpbmcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5hcHAtbG9hZGluZyAuc3Bpbm5lciB7XG4gIGhlaWdodDogMjAwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgYW5pbWF0aW9uOiByb3RhdGUgMnMgbGluZWFyIGluZmluaXRlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uYXBwLWxvYWRpbmcgLnNwaW5uZXIgLnBhdGgge1xuICBzdHJva2UtZGFzaGFycmF5OiAxLCAyMDA7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICBhbmltYXRpb246IGRhc2ggMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICBzdHJva2U6ICNkZGQ7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlIHtcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGRhc2gge1xuICAwJSB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMSwgMjAwO1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICB9XG4gIDUwJSB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogODksIDIwMDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTM1cHg7XG4gIH1cbiAgMTAwJSB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogODksIDIwMDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTEyNHB4O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/trade-strategy-browse/trade-strategy-browse.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/trade-strategy-browse/trade-strategy-browse.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container custom-container-2\">\n\n  <!-- Show it when there is no employee -->\n  <div class=\"no-data text-center\">\n    <p>Click here to add more Stock Trade Strategy</p>\n    <button class=\"btn btn-outline-primary\" routerLink=\"trade-strategy-edit\">Add Stock Trade Strategy</button>\n  </div>\n\n  <!-- Employees list table, it hides when there is no employee -->\n  <div *ngIf=\"stockTradeStrategies.length !== 0\">\n    <h3 class=\"mb-3 text-center\">Browse Stock Trade Strategy</h3>\n\n    <div class=\"col-md-12\">\n      <table class=\"table table-bordered\">\n        <thead>\n          <tr>\n            <th scope=\"col\">Ticker</th>\n            <th scope=\"col\">Interval</th>\n            <th scope=\"col\">IntervalDuration</th>\n            <th scope=\"col\">TimeUnit</th>\n            <th scope=\"col\">State</th>\n            <th scope=\"col\">CandleCount</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let stockTradeStrategy of stockTradeStrategies\">\n            <td>{{stockTradeStrategy.ticker}}</td>\n            <td>{{stockTradeStrategy.interval}}</td>\n            <td>{{stockTradeStrategy.intervalDuration}}</td>\n            <td>{{stockTradeStrategy.timeUnit}}</td>\n            <td>{{stockTradeStrategy.state}}</td>\n            <td>{{stockTradeStrategy.candleCount}}</td>\n            <td>\n              <span class=\"edit\"\n                [routerLink]=\"['/trade-strategy-edit']\"  [queryParams]=\"{ ticker: stockTradeStrategy.ticker}\">Edit</span>\n              <!-- routerLink=\"trade-strategy-edit/{{stockTradeStrategy.ticker}}\">Edit</span> -->\n              <span class=\"delete\" (click)=\"deleteStockStrategy(stockTradeStrategy.ticker)\">Delete</span>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n  </div>\n\n</div>\n"

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
    TradeStrategyBrowseComponent.prototype.deleteStockStrategy = function (id) {
        var _this = this;
        if (window.confirm('Are you sure, you want to delete?')) {
            this.restApi.deleteStockTradeStrategy(id).subscribe(function (data) {
                _this.loadAllStockStrategy();
            });
        }
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

module.exports = ".app-loading {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n\n.app-loading .spinner {\n  height: 200px;\n  width: 200px;\n  -webkit-animation: rotate 2s linear infinite;\n          animation: rotate 2s linear infinite;\n  transform-origin: center center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n}\n\n.app-loading .spinner .path {\n  stroke-dasharray: 1, 200;\n  stroke-dashoffset: 0;\n  -webkit-animation: dash 1.5s ease-in-out infinite;\n          animation: dash 1.5s ease-in-out infinite;\n  stroke-linecap: round;\n  stroke: #ddd;\n}\n\n@-webkit-keyframes rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -35px;\n  }\n  100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -124px;\n  }\n}\n\n@keyframes dash {\n  0% {\n    stroke-dasharray: 1, 200;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -35px;\n  }\n  100% {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: -124px;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhZGUtc3RyYXRlZ3ktZWRpdC90cmFkZS1zdHJhdGVneS1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osNENBQW9DO1VBQXBDLG9DQUFvQztFQUNwQywrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLGlEQUF5QztVQUF6Qyx5Q0FBeUM7RUFDekMscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBSkE7RUFDRTtJQUNFLHlCQUF5QjtFQUMzQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSx3QkFBd0I7SUFDeEIsb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBYkE7RUFDRTtJQUNFLHdCQUF3QjtJQUN4QixvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLHlCQUF5QjtJQUN6Qix3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLHlCQUF5QjtJQUN6Qix5QkFBeUI7RUFDM0I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3RyYWRlLXN0cmF0ZWd5LWVkaXQvdHJhZGUtc3RyYXRlZ3ktZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1sb2FkaW5nIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYXBwLWxvYWRpbmcgLnNwaW5uZXIge1xuICBoZWlnaHQ6IDIwMHB4O1xuICB3aWR0aDogMjAwcHg7XG4gIGFuaW1hdGlvbjogcm90YXRlIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmFwcC1sb2FkaW5nIC5zcGlubmVyIC5wYXRoIHtcbiAgc3Ryb2tlLWRhc2hhcnJheTogMSwgMjAwO1xuICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgYW5pbWF0aW9uOiBkYXNoIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgc3Ryb2tlOiAjZGRkO1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZSB7XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBkYXNoIHtcbiAgMCUge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDEsIDIwMDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgfVxuICA1MCUge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDg5LCAyMDA7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0zNXB4O1xuICB9XG4gIDEwMCUge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDg5LCAyMDA7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMjRweDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/trade-strategy-edit/trade-strategy-edit.component.html":
/*!************************************************************************!*\
  !*** ./src/app/trade-strategy-edit/trade-strategy-edit.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container custom-container\">\n  <div class=\"col-md-12\">\n\n    <h3 class=\"mb-3 text-center\">Update Trade Strategy</h3>\n\n    <div class=\"form-group\">\n      <label>Ticker</label>\n      <input type=\"text\" [(ngModel)]=\"stockTradeStrategy.ticker\" class=\"form-control\" placeholder=\"Ticker\">\n    </div>\n\n    <div class=\"form-group\">\n      <label>Quantity</label>\n      <input type=\"text\" [(ngModel)]=\"stockTradeStrategy.quantity\" class=\"form-control\" placeholder=\"Quantity\">\n    </div>\n\n    <div class=\"form-group\">\n      <label>Interval</label>\n      <input type=\"text\" [(ngModel)]=\"stockTradeStrategy.interval\" class=\"form-control\" placeholder=\"Interval\">\n    </div>\n\n    <div class=\"form-group\">\n      <label>TimeUnit</label>\n      <select [(ngModel)]=\"stockTradeStrategy.timeUnit\" class=\"form-control\">\n        <option *ngFor=\"let option of timeUnit\">\n          {{option}}\n        </option>\n        </select>\n    </div>\n\n    <div class=\"form-group\">\n      <label>IntervalDuration</label>\n      <select [(ngModel)]=\"stockTradeStrategy.intervalDuration\" class=\"form-control\">\n        <option *ngFor=\"let option of intervalDurationOptions\">\n          {{option}}\n        </option>\n        </select>\n    </div>\n\n    <div class=\"form-group\">\n      <label>State</label>\n      <select [(ngModel)]=\"stockTradeStrategy.state\" class=\"form-control\">\n        <option *ngFor=\"let option of tradeStrategyStates\">\n          {{option}}\n        </option>\n        </select>\n    </div>\n\n    <div class=\"form-group\">\n      <label>CandleCount</label>\n      <input type=\"text\" [(ngModel)]=\"stockTradeStrategy.candleCount\" class=\"form-control\" placeholder=\"Candle Count\">\n    </div>\n\n    <div class=\"form-group\">\n      <label>StopLossPercentage</label>\n      <input type=\"text\" [(ngModel)]=\"stockTradeStrategy.stockWatch.stopLossPercentage\" class=\"form-control\" placeholder=\"Stop Loss Percentage\">\n    </div>\n\n    <div class=\"form-group\">\n      <label>profitPercentage</label>\n      <input type=\"text\" [(ngModel)]=\"stockTradeStrategy.stockWatch.profitPercentage\" class=\"form-control\" placeholder=\"Profit Percentage\">\n    </div>\n\n    <div class=\"form-group\">\n      <label>ReEnter?</label>\n      <select [(ngModel)]=\"stockTradeStrategy.stockWatch.reenter\" class=\"form-control\">\n        <option *ngFor=\"let option of reEnterOptions\">\n          {{option}}\n        </option>\n        </select>\n    </div>\n\n    <div class=\"form-group\">\n      <label>EntryConditions</label>\n      <br>\n        <textarea rows = \"15\" cols = \"80\" [(ngModel)]=\"stockTradeStrategy.tradeStrategy.entryConditions\"  placeholder=\"Entry Condition\">\n          Enter entry condition here\n        </textarea>\n      <br>\n    </div>\n\n    <div class=\"form-group\">\n      <label>EntrySignal</label>\n      <input type=\"text\" [(ngModel)]=\"stockTradeStrategy.tradeStrategy.entrySignal\" class=\"form-control\" placeholder=\"Entry Signal\">\n    </div>\n\n    <div class=\"form-group\">\n      <label>ExitConditions</label>\n      <br>\n        <textarea rows = \"15\" cols = \"80\" [(ngModel)]=\"stockTradeStrategy.tradeStrategy.exitConditions\" placeholder=\"Exit Condition\">\n          Enter exit condition here\n        </textarea>\n      <br>\n    </div>\n\n    <div class=\"form-group\">\n      <label>ExitSignal</label>\n      <input type=\"text\" [(ngModel)]=\"stockTradeStrategy.tradeStrategy.exitSignal\" class=\"form-control\" placeholder=\"Exit Signal\">\n    </div>\n\n    <div class=\"app-loading\" *ngIf=\"loading\">\n      <div class=\"logo\"></div>\n     <svg class=\"spinner\" viewBox=\"25 25 50 50\">\n       <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\"/>\n     </svg>\n   </div>\n\n    <div class=\"form-group\">\n      <button class=\"btn btn-success btn-lg btn-block\" (click)=\"getStockTradeStrategy()\">fetch</button>\n    </div>\n\n    <div class=\"form-group\">\n      <button class=\"btn btn-success btn-lg btn-block\" (click)=\"saveStockTradeStrategy()\">Update</button>\n    </div>\n\n  </div>\n</div>\n"

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
/* harmony import */ var _shared_stockTradeStrategy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/stockTradeStrategy */ "./src/app/shared/stockTradeStrategy.ts");
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
        this.actRoute.queryParams.subscribe(function (params) {
            console.log(params);
            _this.ticker = params["ticker"];
            _this.strategyName = params["strategyName"];
        });
    }
    TradeStrategyEditComponent.prototype.ngOnInit = function () {
        this.getStockTradeStrategyFromParam();
    };
    TradeStrategyEditComponent.prototype.getStockTradeStrategyFromParam = function () {
        var _this = this;
        if (this.ticker != null) {
            this.restApi.getStockTradeStrategy(this.ticker).subscribe(function (data) {
                _this.stockTradeStrategy = data;
            });
        }
        else {
            this.restApi.getBackTestStrategy(this.strategyName).subscribe(function (data) {
                var backTestStrategy = data;
                _this.stockTradeStrategy = new _shared_stockTradeStrategy__WEBPACK_IMPORTED_MODULE_3__["StockTradeStrategy"]();
                _this.stockTradeStrategy.ticker = backTestStrategy.backTestRequest.ticker;
                _this.stockTradeStrategy.quantity = backTestStrategy.backTestRequest.quantity;
                _this.stockTradeStrategy.interval = 1;
                _this.stockTradeStrategy.intervalDuration = backTestStrategy.backTestRequest.intervalDuration;
                _this.stockTradeStrategy.state = "WATCHING";
                _this.stockTradeStrategy.candleCount = backTestStrategy.backTestRequest.candleCount;
                _this.stockTradeStrategy.tradeStrategy = backTestStrategy.backTestRequest.tradeStrategy;
                _this.stockTradeStrategy.stockWatch = backTestStrategy.backTestRequest.stockWatch;
                _this.stockTradeStrategy.stockWatch.reenter = true;
            });
        }
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
            this.loading = true;
            this.restApi.saveStockTradeStrategy(this.stockTradeStrategy).subscribe(function (data) {
                _this.stockTradeStrategy = data;
                _this.loading = false;
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