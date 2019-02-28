(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../auth/auth.module": [
		"./src/app/auth/auth.module.ts",
		"auth-auth-module~charts-charts-module~dashboard-crm-1-dashboard-crm-module",
		"auth-auth-module~dashboard-crm-1-dashboard-crm-module",
		"auth-auth-module"
	],
	"../charts/charts.module": [
		"./src/app/charts/charts.module.ts",
		"auth-auth-module~charts-charts-module~dashboard-crm-1-dashboard-crm-module",
		"charts-charts-module"
	],
	"../dashboard-crm.1/dashboard-crm.module": [
		"./src/app/dashboard-crm.1/dashboard-crm.module.ts",
		"auth-auth-module~charts-charts-module~dashboard-crm-1-dashboard-crm-module",
		"dashboard-crm-1-dashboard-crm-module~login-list-login-list-module~register-register-module",
		"auth-auth-module~dashboard-crm-1-dashboard-crm-module",
		"dashboard-crm-1-dashboard-crm-module"
	],
	"../forms/forms.module": [
		"./src/app/forms/forms.module.ts",
		"forms-forms-module"
	],
	"../guarded-routes/guarded-routes.module": [
		"./src/app/guarded-routes/guarded-routes.module.ts",
		"guarded-routes-guarded-routes-module"
	],
	"../login-list/login-list.module": [
		"./src/app/login-list/login-list.module.ts",
		"dashboard-crm-1-dashboard-crm-module~login-list-login-list-module~register-register-module",
		"login-list-login-list-module"
	],
	"../maps/maps.module": [
		"./src/app/maps/maps.module.ts",
		"maps-maps-module~tables-tables-module",
		"maps-maps-module"
	],
	"../pages/pages.module": [
		"./src/app/pages/pages.module.ts",
		"pages-pages-module"
	],
	"../register/register.module": [
		"./src/app/register/register.module.ts",
		"dashboard-crm-1-dashboard-crm-module~login-list-login-list-module~register-register-module",
		"register-register-module"
	],
	"../tables/tables.module": [
		"./src/app/tables/tables.module.ts",
		"maps-maps-module~tables-tables-module",
		"tables-tables-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet ></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.getRouteAnimation = function (outlet) {
        return outlet.activatedRouteData.animation;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _lazy_load_lazy_load_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lazy-load/lazy-load.module */ "./src/app/lazy-load/lazy-load.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _login_list_helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login-list/_helpers/jwt.interceptor */ "./src/app/login-list/_helpers/jwt.interceptor.ts");
/* harmony import */ var _login_list_helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login-list/_helpers/error.interceptor */ "./src/app/login-list/_helpers/error.interceptor.ts");
/* harmony import */ var _login_list_helpers_fake_backend__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login-list/_helpers/fake-backend */ "./src/app/login-list/_helpers/fake-backend.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _lazy_load_lazy_load_module__WEBPACK_IMPORTED_MODULE_3__["LazyLoadModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _login_list_helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_7__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"], useClass: _login_list_helpers_error_interceptor__WEBPACK_IMPORTED_MODULE_8__["ErrorInterceptor"], multi: true },
                // provider used to create fake backend
                _login_list_helpers_fake_backend__WEBPACK_IMPORTED_MODULE_9__["fakeBackendProvider"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidemenu/sidemenu.component */ "./src/app/core/sidemenu/sidemenu.component.ts");
/* harmony import */ var _sidemenu_item_sidemenu_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidemenu-item/sidemenu-item.component */ "./src/app/core/sidemenu-item/sidemenu-item.component.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _toolbar_notification_toolbar_notification_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./toolbar-notification/toolbar-notification.component */ "./src/app/core/toolbar-notification/toolbar-notification.component.ts");
/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/core/toolbar/toolbar.component.ts");
/* harmony import */ var _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./search-bar/search-bar.component */ "./src/app/core/search-bar/search-bar.component.ts");
/* harmony import */ var _fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./fullscreen/fullscreen.component */ "./src/app/core/fullscreen/fullscreen.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/core/sidebar/sidebar.component.ts");
/* harmony import */ var _user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./user-menu/user-menu.component */ "./src/app/core/user-menu/user-menu.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_2__["SidemenuComponent"],
                _sidemenu_item_sidemenu_item_component__WEBPACK_IMPORTED_MODULE_3__["SidemenuItemComponent"],
                _toolbar_notification_toolbar_notification_component__WEBPACK_IMPORTED_MODULE_15__["ToolbarNotificationComponent"],
                _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_16__["ToolbarComponent"],
                _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_17__["SearchBarComponent"],
                _fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_18__["FullscreenComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_19__["SidebarComponent"],
                _user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_20__["UserMenuComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__["PerfectScrollbarModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"],
            ],
            exports: [
                _sidemenu_sidemenu_component__WEBPACK_IMPORTED_MODULE_2__["SidemenuComponent"],
                _sidemenu_item_sidemenu_item_component__WEBPACK_IMPORTED_MODULE_3__["SidemenuItemComponent"],
                _toolbar_notification_toolbar_notification_component__WEBPACK_IMPORTED_MODULE_15__["ToolbarNotificationComponent"],
                _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_16__["ToolbarComponent"],
                _search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_17__["SearchBarComponent"],
                _fullscreen_fullscreen_component__WEBPACK_IMPORTED_MODULE_18__["FullscreenComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_19__["SidebarComponent"],
                _user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_20__["UserMenuComponent"]
            ],
            providers: [
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_13__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/fullscreen/fullscreen.component.html":
/*!***********************************************************!*\
  !*** ./src/app/core/fullscreen/fullscreen.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-icon-button [fxHide]=\"true\" [fxHide.gt-xs]=\"false\" (click)=\"toggleFullscreen()\">\n    <mat-icon *ngIf=\"!isFullscreen\">fullscreen</mat-icon>\n    <mat-icon *ngIf=\"isFullscreen\">fullscreen_exit</mat-icon>\n</button>"

/***/ }),

/***/ "./src/app/core/fullscreen/fullscreen.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/core/fullscreen/fullscreen.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/fullscreen/fullscreen.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/fullscreen/fullscreen.component.ts ***!
  \*********************************************************/
/*! exports provided: FullscreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullscreenComponent", function() { return FullscreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FullscreenComponent = /** @class */ (function () {
    function FullscreenComponent() {
        this.isFullscreen = false;
    }
    FullscreenComponent.prototype.ngOnInit = function () {
    };
    FullscreenComponent.prototype.toggleFullscreen = function () {
        if (screenfull__WEBPACK_IMPORTED_MODULE_1__["enabled"]) {
            screenfull__WEBPACK_IMPORTED_MODULE_1__["toggle"]();
            this.isFullscreen = !this.isFullscreen;
        }
    };
    FullscreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-fullscreen',
            template: __webpack_require__(/*! ./fullscreen.component.html */ "./src/app/core/fullscreen/fullscreen.component.html"),
            styles: [__webpack_require__(/*! ./fullscreen.component.scss */ "./src/app/core/fullscreen/fullscreen.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FullscreenComponent);
    return FullscreenComponent;
}());



/***/ }),

/***/ "./src/app/core/search-bar/search-bar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/core/search-bar/search-bar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"search\"  [ngClass]=\"{'search-open': open == true}\"> \n  <input matInput placeholder=\"Search\" autocomplete=\"off\" (focus)=\"bigMenu = true\" (focusout)=\"bigMenu = false\">\n</mat-form-field>"

/***/ }),

/***/ "./src/app/core/search-bar/search-bar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/core/search-bar/search-bar.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search {\n  width: 0;\n  overflow: hidden;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.4s cubic-bezier(0.35, 0, 0.25, 1);\n  margin-top: 7px; }\n\n.search.search-open {\n  width: 250px;\n  visibility: visible;\n  opacity: 1;\n  margin-top: 11px; }\n"

/***/ }),

/***/ "./src/app/core/search-bar/search-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/search-bar/search-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchBarComponent = /** @class */ (function () {
    function SearchBarComponent() {
    }
    SearchBarComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SearchBarComponent.prototype, "open", void 0);
    SearchBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-search-bar',
            template: __webpack_require__(/*! ./search-bar.component.html */ "./src/app/core/search-bar/search-bar.component.html"),
            styles: [__webpack_require__(/*! ./search-bar.component.scss */ "./src/app/core/search-bar/search-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchBarComponent);
    return SearchBarComponent;
}());



/***/ }),

/***/ "./src/app/core/sidebar/sidebar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/core/sidebar/sidebar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\n    <mat-tab label=\"Overview\">\n\n        <div class=\"sidebar\">\n\n            <div fxLayout=\"column\" fxLayoutAlign=\"center center\" style=\"padding: 30px 0; background: url('./assets/images/bg/city1.jpg');\">\n                <div style=\"width: 100%; height: 22%; position: absolute;background: #17161642;z-index: 1\"></div>\n                <div class=\"mat-display-2\" style=\"margin: 0; color: white;z-index: 2\">{{today | date:'shortTime'}}</div>\n                <div class=\"mat-subheading-2\" style=\"margin: 0;color: white;z-index: 2\">{{today | date:'EEEE'}}, {{today | date:'MMMM'}} {{today | date:'dd'}}\n                </div>\n            </div>\n\n\n            <mat-divider></mat-divider>\n\n            <h3 class=\"mat-subheading-2\" style=\"margin: 10px 14px 0;\">Upcoming Events</h3>\n            <mat-nav-list>\n                <div *ngFor=\"let event of events;\">\n                    <mat-list-item>\n                        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" mat-ripple>\n                            <div fxLayout=\"column\">\n                                <div class=\"mat-ubheading-2\" style=\"margin: 0; font-weight: bold;\">{{ event.title }}</div>\n                                <div style=\"font-size: 12px;\">{{ event.time }}</div>\n                            </div>\n                        </div>\n                    </mat-list-item>\n                </div>\n            </mat-nav-list>\n\n\n\n            <mat-divider></mat-divider>\n\n            <mat-nav-list>\n                <h3 class=\"mat-subheading-2\" style=\"margin: 10px 14px 0;\">Todo-List</h3>\n                <div *ngFor=\"let todolist of todolists;\">\n                    <mat-list-item>\n                        <div fxLayout=\"row\" fxLayoutAlign=\"start center\" mat-ripple>\n                            <div class=\"title\" fxLayout=\"column\">\n                                <div class=\"mat-ubheading-2\" style=\"margin: 0; font-weight: bold;\">{{ todolist.title }}</div>\n                                <div style=\"font-size: 12px;\">{{ todolist.time }}</div>\n                            </div>\n                        </div>\n                    </mat-list-item>\n                </div>\n            </mat-nav-list>\n\n            <mat-divider></mat-divider>\n\n\n        </div>\n    </mat-tab>\n\n    <mat-tab label=\"Notifications\">\n        <div class=\"sidebar\">\n            <div>\n                <h3 style=\"margin: 10px 14px 0;\">Friends</h3>\n\n                <mat-list>\n                    <mat-list-item *ngFor=\"let message of messages\">\n                        <img matListAvatar src=\"assets/images/avatars/friend1.jpeg\" alt=\"...\">\n                        <h3 matLine style=\"margin: 0; font-weight: bold;\"> {{message.from}} </h3>\n                        <p matLine>\n                            <span> {{message.subject}} </span>\n                            <span> -- {{message.content}} </span>\n                        </p>\n                    </mat-list-item>\n                </mat-list>\n\n            </div>\n        </div>\n\n    </mat-tab>\n</mat-tab-group>\n\n<mat-divider></mat-divider>\n\n<mat-nav-list>\n    <div>\n        <h3 class=\"mat-subheading-2\" style=\"margin: 10px 14px 0;\">Server Statistics</h3>\n        <div>\n            <mat-list-item>\n                <h5>CPU Load</h5>\n                <mat-progress-bar [color]=\"'accent'\" [mode]=\"'buffer'\" [value]=\"'70'\" [bufferValue]=\"100\">></mat-progress-bar>\n            </mat-list-item>\n        </div>\n\n\n        <div>\n            <mat-list-item>\n                <h5>RAM Usage</h5>\n                <mat-progress-bar [color]=\"'primary'\" [mode]=\"'buffer'\" [value]=\"'47'\" [bufferValue]=\"100\"></mat-progress-bar>\n            </mat-list-item>\n        </div>\n\n\n        <div>\n            <mat-list-item>\n                <h5>CPU Temp</h5>\n                <mat-progress-bar [color]=\"'warn'\" [mode]=\"'buffer'\" [value]=\"'43'\" [bufferValue]=\"100\"></mat-progress-bar>\n            </mat-list-item>\n        </div>\n\n    </div>\n</mat-nav-list>"

/***/ }),

/***/ "./src/app/core/sidebar/sidebar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/core/sidebar/sidebar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  margin-top: 2px; }\n\n.example-margin {\n  margin: 0 10px; }\n\n.today {\n  width: 100%;\n  height: 22%;\n  position: absolute;\n  background: '#17161642';\n  z-index: 1; }\n\n.today-bg {\n  padding: 30px 0;\n  background: url('city1.jpg'); }\n\n.today-time {\n  margin: 0;\n  color: white;\n  z-index: 2; }\n\n.today-date {\n  margin: 0;\n  color: white;\n  z-index: 2; }\n"

/***/ }),

/***/ "./src/app/core/sidebar/sidebar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/sidebar/sidebar.component.ts ***!
  \***************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.today = Date.now();
        // public bufferValue;
        this.events = [
            {
                id: 'id',
                title: 'Business Meeting',
                time: '05:00 PM',
                state: 'state'
            },
            {
                id: 'id',
                title: 'Ask for a Vacation',
                time: '05:00 PM',
                state: 'state'
            },
            {
                id: 'id',
                title: 'Dinner with Micheal',
                time: '05:00 PM',
                state: 'state'
            },
            {
                id: 'id',
                title: 'Deadline for Project ABC',
                time: '05:00 PM',
                state: 'state'
            },
        ];
        this.todolists = [
            {
                id: 'id',
                title: 'Get to know Angular more',
                time: 'Added:4 days ago',
            },
            {
                id: 'id',
                title: 'Configure new Router',
                time: 'Added:4 days ago',
            },
            {
                id: 'id',
                title: 'Invite Joy to play Carroms',
                time: 'Added:4 days ago',
            },
            {
                id: 'id',
                title: 'Check SRS of Project X',
                time: 'Added:4 days ago',
            },
        ];
        this.messages = [
            { from: 'Catherin', subject: 'Shopping', content: 'hi there??' },
            { from: 'Jack', subject: 'Function', content: 'yes' },
            { from: 'Karina', subject: 'Get together', content: 'nice' },
            { from: 'Micheal', subject: 'Trip', content: 'ya.. I will' },
            { from: 'Ashik', subject: 'Meeting', content: 'Time??' },
            { from: 'Joy', subject: 'Party', content: 'Lets enjoy' },
        ];
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/core/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/core/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/core/sidemenu-item/sidemenu-item.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/core/sidemenu-item/sidemenu-item.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list [style.maxHeight]=\"(menu.open)?'1200px':'48px'\"  [ngClass]=\"{'secondaryMenu': secondaryMenu, 'primary': !secondaryMenu}\">\n    <mat-list-item *ngIf = \"menu.link==false\" (click)=\"menu.open = !menu.open\" >\n        <mat-icon matListIcon iconsmall  >{{menu.icon}} </mat-icon>\n        <h3 matLine *ngIf=\"!iconOnly\">{{ menu.name }} </h3>\n        <mat-chip-list *ngIf=\"menu?.chip && !iconOnly\">\n            <mat-chip >{{menu?.chip?.value}} </mat-chip>\n        </mat-chip-list>        \n        <mat-icon *ngIf=\"chechForChildMenu()\" class=\"sidenav-dropdown-indicator rotate \" [ngClass]=\"{'indicateOpen':menu.open}\"> expand_more</mat-icon>\n    </mat-list-item>\n\n    <mat-list-item *ngIf = \"menu.link!=false\" (click)=\"menu.open = !menu.open\" [routerLink]=\"[menu.link]\">\n    \t<mat-icon matListIcon iconsmall  >{{menu.icon}} </mat-icon>\n        <h3 matLine *ngIf=\"!iconOnly\">{{ menu.name }} </h3>\n    </mat-list-item>\n\n    <cdk-sidemenu-item *ngFor=\"let submenu of menu?.sub\" [menu]=\"submenu\" [iconOnly]=\"iconOnly\" [secondaryMenu]=\"true\"> </cdk-sidemenu-item>\n\n</mat-nav-list>\n"

/***/ }),

/***/ "./src/app/core/sidemenu-item/sidemenu-item.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/core/sidemenu-item/sidemenu-item.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/sidemenu-item/sidemenu-item.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/sidemenu-item/sidemenu-item.component.ts ***!
  \***************************************************************/
/*! exports provided: SidemenuItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidemenuItemComponent", function() { return SidemenuItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidemenuItemComponent = /** @class */ (function () {
    function SidemenuItemComponent() {
        this.secondaryMenu = false;
    }
    SidemenuItemComponent.prototype.ngOnInit = function () {
    };
    SidemenuItemComponent.prototype.openLink = function () {
        this.menu.open = this.menu.open;
    };
    SidemenuItemComponent.prototype.chechForChildMenu = function () {
        return (this.menu && this.menu.sub) ? true : false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SidemenuItemComponent.prototype, "menu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SidemenuItemComponent.prototype, "iconOnly", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SidemenuItemComponent.prototype, "secondaryMenu", void 0);
    SidemenuItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-sidemenu-item',
            template: __webpack_require__(/*! ./sidemenu-item.component.html */ "./src/app/core/sidemenu-item/sidemenu-item.component.html"),
            styles: [__webpack_require__(/*! ./sidemenu-item.component.scss */ "./src/app/core/sidemenu-item/sidemenu-item.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidemenuItemComponent);
    return SidemenuItemComponent;
}());



/***/ }),

/***/ "./src/app/core/sidemenu/menu-element.ts":
/*!***********************************************!*\
  !*** ./src/app/core/sidemenu/menu-element.ts ***!
  \***********************************************/
/*! exports provided: menus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menus", function() { return menus; });
var menus = [
    {
        'name': 'Home',
        'icon': 'dashboard',
        'link': 'dashboard',
        'open': false,
    },
    {
        'name': 'MyProfile',
        'icon': 'widgets',
        'link': '/auth/scrumboard',
        'open': false,
    },
    // {
    //     'name'   : 'Forms',
    //     'icon'   : 'mode_edit',
    //     'open'   : false,
    //     'link'   : false,
    //     'sub'    :  [
    //                     {
    //                         'name': 'Template Driven',
    //                         'icon': 'mode_edit',
    //                         'open'   : false,
    //                         'link':'forms/template_forms'
    //                     },
    //                     {
    //                         'name': 'Reactive Forms',
    //                         'icon': 'text_fields',
    //                         'open'   : false,
    //                         'link':'forms/reactive_forms'
    //                     }
    //                 ]
    // },
    {
        'name': 'Tables',
        'icon': 'list',
        'link': false,
        'open': false,
        'chip': { 'value': 2, 'color': 'accent' },
        'sub': [
            {
                'name': 'Fixed',
                'icon': 'filter_list',
                'link': 'tables/fixed',
                'open': false,
            },
            {
                'name': 'Feature',
                'icon': 'done_all',
                'link': 'tables/featured',
                'open': false,
            },
            {
                'name': 'Responsive Tables',
                'icon': 'filter_center_focus',
                'link': 'tables/responsive',
                'open': false,
            }
        ]
    },
    //   {
    //       'name': 'Scrumboard',
    //      'open': false,
    //      'link': '/auth/scrumboard',
    //      'icon': 'grade',
    //  }, 
    {
        'name': 'Applications',
        'icon': 'view_module',
        'open': false,
        'link': false,
        'sub': [
            {
                'name': 'chat',
                'icon': 'chat',
                'link': 'chats/chat',
                'open': false,
            },
            {
                'name': 'mail',
                'icon': 'mail',
                'link': 'mail/mail',
                'open': false,
            },
            {
                'name': 'Editor',
                'icon': 'editor',
                'link': 'editor/editor',
                'open': false,
            }
        ]
    }
    // , {
    //     'name': 'Pages',
    //     'icon': 'content_copy',
    //     'open': false,
    //     'link': false,
    //     'sub': [
    //         {
    //             'name': 'Login',
    //             'icon': 'work',
    //             'open': false,
    //             'link': '../login',
    //         }, {
    //             'name': 'Services',
    //             'icon': 'local_laundry_service',
    //             'open': false,
    //             'link': 'pages/services',
    //         }, {
    //             'name': 'Contact',
    //             'icon': 'directions',
    //             'open': false,
    //             'link': 'pages/contact'
    //         }
    //     ]
    // }
];


/***/ }),

/***/ "./src/app/core/sidemenu/sidemenu.component.html":
/*!*******************************************************!*\
  !*** ./src/app/core/sidemenu/sidemenu.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<perfect-scrollbar style=\"height: calc(100% - 33px);\">\n    <div fxLayout=\"column\" >\n        <div *ngIf=\"!iconOnly\" fxLayoutAlign=\"space-around center\" [style.margin]=\"'10px 0px'\" >\n          <img width=\"200\" [style.borderRadius]=\"'50%'\" src=\"./assets/user-image.jpg\">\n          \n        </div>\n        <div class=\"info-position\">\n            <h1 class=\"mat-headline center-align\"> {{currentUser.firstName}}</h1>\n            <h3 class=\"mat-headline1 center-align\" >Senior Lawyer</h3>\n            <h3 class=\"mat-headline2 center-align\" >Madras High Court</h3>\n        </div>\n        <div *ngIf=\"iconOnly\" style=\"height: 100px;\" fxLayoutAlign=\"space-around center\"  >\n            <img width=\"50\" [style.borderRadius]=\"'50%'\" src=\"./assets/user-image1.jpg\">\n        </div>\n        <cdk-sidemenu-item *ngFor=\"let menu of menus\" [menu]=\"menu\" [iconOnly]=\"iconOnly\"> </cdk-sidemenu-item>\n    </div>\n    \n</perfect-scrollbar>\n"

/***/ }),

/***/ "./src/app/core/sidemenu/sidemenu.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/core/sidemenu/sidemenu.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-headline {\n  font-size: 24px;\n  font-family: Roboto;\n  color: white;\n  margin-top: 8px;\n  font: center; }\n\n.mat-headline1 {\n  font-size: 15px;\n  font-family: Roboto;\n  color: white;\n  margin-top: 8px;\n  font: center; }\n\n.mat-headline2 {\n  font-size: 15px;\n  font-family: Roboto;\n  color: white;\n  margin-top: 8px;\n  font: center; }\n\n.info-position {\n  text-align: center !important; }\n"

/***/ }),

/***/ "./src/app/core/sidemenu/sidemenu.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/sidemenu/sidemenu.component.ts ***!
  \*****************************************************/
/*! exports provided: SidemenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidemenuComponent", function() { return SidemenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _menu_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-element */ "./src/app/core/sidemenu/menu-element.ts");
/* harmony import */ var _login_list_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../login-list/_services */ "./src/app/login-list/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidemenuComponent = /** @class */ (function () {
    function SidemenuComponent(authenticationService, userService) {
        var _this = this;
        this.authenticationService = authenticationService;
        this.userService = userService;
        this.iconOnly = false;
        this.menus = _menu_element__WEBPACK_IMPORTED_MODULE_1__["menus"];
        this.users = [];
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(function (user) {
            _this.currentUser = user;
        });
    }
    SidemenuComponent.prototype.ngOnInit = function () {
    };
    SidemenuComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SidemenuComponent.prototype, "iconOnly", void 0);
    SidemenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-sidemenu',
            template: __webpack_require__(/*! ./sidemenu.component.html */ "./src/app/core/sidemenu/sidemenu.component.html"),
            styles: [__webpack_require__(/*! ./sidemenu.component.scss */ "./src/app/core/sidemenu/sidemenu.component.scss")]
        }),
        __metadata("design:paramtypes", [_login_list_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _login_list_services__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], SidemenuComponent);
    return SidemenuComponent;
}());



/***/ }),

/***/ "./src/app/core/toolbar-notification/toolbar-notification.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/core/toolbar-notification/toolbar-notification.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar-notification-container\">\n\t<button mat-icon-button (click)=\"isOpen = !isOpen;\" [ngClass]=\"[cssPrefix+'-btn']\" [class.open]=\"isOpen\">\n    \t<mat-icon>notifications_none</mat-icon>\n    \t<span class=\"badge\" *ngIf=\"notifications && notifications?.length !== 0\">{{ notifications?.length }}</span>\n  </button>\n\n\n\t<div class=\"dropdown mat-elevation-z4\" [class.open]=\"isOpen\">\n\n\t<div class=\"card\">\n      \t<div class=\"header\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n        \t<div class=\"title\">\n         \t\t <div class=\"name\">Notifications</div>\n          \t\t<div class=\"extra\">\nYou have {{ notifications?.length }} new notifications</div>\n        \t</div>\n        \t<button type=\"button\" mat-icon-button>\n          \t\t<mat-icon class=\"icon\">settings</mat-icon>\n        \t</button>\n      \t</div>\n      \t<div *ngIf=\"notifications?.length !== 0; then thenBlock else elseBlock;\"></div>\n      \t<div class=\"footer\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        \t<div class=\"action\">Mark all as read</div>\n    \t</div>\n    </div>\n\n\t</div>\n\n</div>\n\n<ng-template #thenBlock>\n  <perfect-scrollbar class=\"content\">\n    <div *ngFor=\"let notification of notifications; last as isLast\">\n      <div class=\"notification\" fxLayout=\"row\" fxLayoutAlign=\"start center\" mat-ripple>\n        <mat-icon class=\"icon\">notifications</mat-icon>\n        <div class=\"title\" fxLayout=\"column\">\n          <div class=\"name\">{{ notification.title }}</div>\n          <div class=\"time\">{{ notification.lastTime }}</div>\n        </div>\n        <span fxFlex></span>\n        <button type=\"button\" mat-icon-button (click)=\"delete(notification)\">\n          <mat-icon class=\"close\">close</mat-icon>\n        </button>\n      </div>\n      <div class=\"divider\" *ngIf=\"!isLast\"></div>\n    </div>\n  </perfect-scrollbar>\n</ng-template>\n\n<ng-template #elseBlock>\n  <div class=\"no\" fxLayout=\"row\" fxLayoutAlign=\"center center\">ranjith\n    \n  </div>\n</ng-template>\n\n"

/***/ }),

/***/ "./src/app/core/toolbar-notification/toolbar-notification.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/core/toolbar-notification/toolbar-notification.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".badge {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  font-weight: 700;\n  line-height: 13px;\n  height: 13px;\n  padding: 5px;\n  border-radius: 26%;\n  width: 30%;\n  background-color: #f44336;\n  color: #fff;\n  border-color: #f44336; }\n\n.toolbar-notification-container {\n  position: relative;\n  display: flex;\n  align-items: center; }\n\n.toolbar-notification-btn {\n  display: flex;\n  justify-content: center;\n  margin-right: 10px; }\n\n.dropdown {\n  background: white;\n  position: absolute;\n  top: 42px;\n  right: 28px;\n  min-width: 350px;\n  z-index: 2;\n  -webkit-transform: translateY(0) scale(0);\n          transform: translateY(0) scale(0);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n  visibility: hidden;\n  transition: visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }\n\n@media screen and (max-width: 599px) {\n    .dropdown {\n      min-width: 50vw;\n      right: 5px;\n      -webkit-transform: translateY(0);\n              transform: translateY(0);\n      visibility: hidden;\n      transition: visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n      transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n      transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), visibility 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); } }\n\n.dropdown.open {\n    -webkit-transform: translateY(0) scale(1);\n            transform: translateY(0) scale(1);\n    visibility: visible; }\n\n.dropdown .card .header {\n    background: #EEEEEE;\n    min-height: 54px;\n    padding-left: 16px;\n    padding-right: 8px;\n    color: #555;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    align-content: center;\n    border-bottom: 1px solid #e0e0e0; }\n\n.dropdown .card .header .extra {\n      font-size: 12px;\n      color: #888; }\n\n.dropdown .content {\n    overflow: hidden;\n    max-height: 256px; }\n\n.dropdown .content .notification {\n      min-height: 64px;\n      padding: 0 16px 0 14px;\n      position: relative;\n      color: #666;\n      cursor: pointer; }\n\n.dropdown .content .notification .icon {\n        height: 28px;\n        width: 28px;\n        line-height: 28px;\n        font-size: 18px;\n        margin-right: 13px;\n        text-align: center;\n        border-radius: 50%;\n        background: #FFF;\n        color: #888;\n        border: 1px solid #EEE; }\n\n.dropdown .content .notification .title {\n        font-weight: 500;\n        font-size: 14px; }\n\n.dropdown .content .notification .time {\n        font-size: 12px; }\n\n.dropdown .content .notification .close {\n        font-size: 18px;\n        width: 18px;\n        height: 18px;\n        line-height: 18px; }\n\n.dropdown .content .notification.primary .icon {\n        background: #ccc;\n        color: #ddd; }\n\n.dropdown .content .notification.accent .icon {\n        background: #aaa;\n        color: #bbb; }\n\n.dropdown .content .notification.warn .icon {\n        background: #eee;\n        color: #ddd; }\n\n.dropdown .content .notification.read {\n        color: #999; }\n\n.dropdown .content .notification.read .name {\n          font-weight: normal; }\n\n.dropdown .footer {\n    min-height: 42px;\n    border-top: 1px solid #EEE; }\n\n.dropdown .footer .action {\n      cursor: pointer;\n      color: #AAA;\n      text-align: center;\n      font-size: 13px; }\n\n.dropdown .divider {\n    width: calc(100% - 30px);\n    height: 1px;\n    background: #EEE;\n    margin: 0 16px 0 14px; }\n"

/***/ }),

/***/ "./src/app/core/toolbar-notification/toolbar-notification.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/core/toolbar-notification/toolbar-notification.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ToolbarNotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarNotificationComponent", function() { return ToolbarNotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolbarNotificationComponent = /** @class */ (function () {
    // @HostListener('document:click', ['$event', '$event.target'])
    // onClick(event: MouseEvent, targetElement: HTMLElement) {
    //     if (!targetElement) {
    //           return;
    //     }
    //     const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    //     if (!clickedInside) {
    //          this.isOpen = false;
    //     }
    // }
    function ToolbarNotificationComponent(elementRef) {
        this.elementRef = elementRef;
        this.cssPrefix = 'toolbar-notification';
        this.isOpen = false;
        this.notifications = [];
    }
    ToolbarNotificationComponent.prototype.ngOnInit = function () {
    };
    ToolbarNotificationComponent.prototype.select = function () {
    };
    ToolbarNotificationComponent.prototype.delete = function (notification) {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ToolbarNotificationComponent.prototype, "notifications", void 0);
    ToolbarNotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-toolbar-notification',
            template: __webpack_require__(/*! ./toolbar-notification.component.html */ "./src/app/core/toolbar-notification/toolbar-notification.component.html"),
            styles: [__webpack_require__(/*! ./toolbar-notification.component.scss */ "./src/app/core/toolbar-notification/toolbar-notification.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ToolbarNotificationComponent);
    return ToolbarNotificationComponent;
}());



/***/ }),

/***/ "./src/app/core/toolbar/toolbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/core/toolbar/toolbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <stbui-loading *ngIf=\"showLoading\"></stbui-loading> -->\n<mat-toolbar   class=\"mat-elevation-z4\">  \n\t<button mat-icon-button (click)=\"sidenav.toggle();drawer.toggle();\" *ngIf=\"matDrawerShow\">\n        <i class=\"material-icons app-toolbar-menu\">menu </i>\n    </button> \n    <button mat-icon-button (click)=\"sidenav.toggle();\" *ngIf=\"!matDrawerShow\">\n        <i class=\"material-icons app-toolbar-menu\">menu </i>\n    </button>\n\n    <span class=\"spacer\"></span>\n\n    <button  mat-icon-button (click)=\"searchOpen = !searchOpen\" fxHide=\"true\" [fxHide.gt-xs]=\"false\">\n        <i class=\"material-icons\">search</i>\n    </button>\n    <cdk-search-bar [open]=\"searchOpen\"></cdk-search-bar>\n\n    <cdk-fullscreen></cdk-fullscreen>\n\n    <cdk-toolbar-notification [notifications]=\"toolbarHelpers?.notifications\"></cdk-toolbar-notification>\n\n    <cdk-user-menu [currentUser]=\"toolbarHelpers?.currentUser\"></cdk-user-menu>\n    \n     <button mat-icon-button (click)=\"sidebar.toggle();\">\n        <i class=\"material-icons app-toolbar-menu\">menu </i>\n    </button>\n    \n</mat-toolbar>"

/***/ }),

/***/ "./src/app/core/toolbar/toolbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/core/toolbar/toolbar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  z-index: 4; }\n\n.main-toolbar {\n  height: 64px;\n  padding-left: 16px; }\n\n.more-btn {\n  height: 100%;\n  min-width: 70px; }\n\n.mat-icon-button {\n  margin-right: 10px; }\n"

/***/ }),

/***/ "./src/app/core/toolbar/toolbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/toolbar/toolbar.component.ts ***!
  \***************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _toolbar_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toolbar.helpers */ "./src/app/core/toolbar/toolbar.helpers.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
        this.searchOpen = false;
        this.toolbarHelpers = _toolbar_helpers__WEBPACK_IMPORTED_MODULE_1__["ToolbarHelpers"];
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "sidenav", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "sidebar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "drawer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "matDrawerShow", void 0);
    ToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/core/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.scss */ "./src/app/core/toolbar/toolbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/core/toolbar/toolbar.helpers.ts":
/*!*************************************************!*\
  !*** ./src/app/core/toolbar/toolbar.helpers.ts ***!
  \*************************************************/
/*! exports provided: ToolbarHelpers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarHelpers", function() { return ToolbarHelpers; });
var ToolbarHelpers = {
    notifications: [
        {
            id: 'id',
            title: 'Mail 5',
            lastTime: '23 Minutes ago',
            state: 'state'
        },
        {
            id: 'id',
            title: 'Mail 5',
            lastTime: '23 Minutes ago',
            state: 'state'
        },
        {
            id: 'id',
            title: 'Mail 5',
            lastTime: '23 Minutes ago',
            state: 'state'
        },
    ],
    currentUser: {
        photoURL: 'assets/images/avatars/hari.jpg',
        currentUserName: 'Hari Krishna'
    }
};


/***/ }),

/***/ "./src/app/core/user-menu/user-menu.component.html":
/*!*********************************************************!*\
  !*** ./src/app/core/user-menu/user-menu.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar-user-container\">\n\t<button mat-button (click)=\"isOpen = !isOpen\" class=\"toolbar-user-btn\" [class.open]=\"isOpen\" [ngStyle.xs]=\"{'min-width': '70px'}\">\n  \t\t<span fxLayout=\"row\" fxLayoutAlign=\"start center\">\n    \t\t<img class=\"avatar\" [src]=\"currentUser?.photoURL || 'assets/images/avatars/siva.png'\">\n    \t\t<span class=\"name\" fxHide fxShow.gt-xs>{{currentUser?.currentUserName || siva}}</span>\n    \t\t<mat-icon class=\"icon\" fxHide fxShow.gt-xs>keyboard_arrow_down</mat-icon>\n  \t\t</span>\n  \t</button>\n\n\n  \t<div class=\"dropdown mat-elevation-z1\" [class.open]=\"isOpen\">\n    \t<div class=\"content\">\n      \t\t<mat-nav-list>\n      \t\t   <mat-list-item>\n      \t\t\t\t<a matLine >Settings</a>\n\t\t\t\t    <button mat-icon-button>\n\t\t\t\t       <mat-icon>settings</mat-icon>\n\t\t\t\t    </button>\n      \t\t\t</mat-list-item>\n      \t\t\t<mat-list-item>\n      \t\t\t\t<a matLine >Help</a>\n\t\t\t\t    <button mat-icon-button>\n\t\t\t\t       <mat-icon>help</mat-icon>\n\t\t\t\t    </button>\n      \t\t\t</mat-list-item>\n\n      \t\t\t<mat-divider></mat-divider>\n\n      \t\t\t<mat-list-item>\n      \t\t\t\t<a matLine class=\"nav-item nav-link\" (click)=\"logout()\">Logout</a>\n\t\t\t\t    <button mat-icon-button>\n\t\t\t\t       <mat-icon>exit_to_app</mat-icon>\n\t\t\t\t    </button>\n      \t\t\t</mat-list-item>\n      \t\t</mat-nav-list>\n    \t</div>\n  \t</div>\n</div>"

/***/ }),

/***/ "./src/app/core/user-menu/user-menu.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/core/user-menu/user-menu.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100%; }\n\n.toolbar-user-container {\n  height: 100%;\n  position: relative; }\n\n.toolbar-user-container .toolbar-user-btn {\n    display: flex;\n    justify-content: center;\n    height: 100%;\n    min-width: 160px; }\n\n.toolbar-user-container .toolbar-user-btn .avatar {\n      width: 30px;\n      height: 30px;\n      border-radius: 50%; }\n\n.toolbar-user-container .toolbar-user-btn .name {\n      margin: 0 8px 0 10px; }\n\n.toolbar-user-container .toolbar-user-btn .icon {\n      width: 16px;\n      height: 16px;\n      font-size: 16px;\n      -webkit-transform: rotate(0);\n              transform: rotate(0);\n      transition: -webkit-transform 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);\n      transition: transform 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);\n      transition: transform 0.25s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.25s cubic-bezier(0.25, 0.8, 0.25, 1); }\n\n.toolbar-user-container .toolbar-user-btn.open {\n      background: rgba(0, 0, 0, 0.05); }\n\n.toolbar-user-container .toolbar-user-btn.open .icon {\n        -webkit-transform: rotate(-180deg);\n                transform: rotate(-180deg); }\n\n.toolbar-user-container .dropdown {\n    background: white;\n    z-index: 2;\n    position: absolute;\n    width: 100%;\n    min-width: 160px;\n    opacity: 0;\n    visibility: hidden;\n    transition: all .25s linear, max-height .25s linear, opacity .25s linear; }\n\n@media screen and (max-width: 599px) {\n      .toolbar-user-container .dropdown {\n        min-width: 65px; } }\n\n.toolbar-user-container .dropdown.open {\n      opacity: 1;\n      visibility: visible; }\n"

/***/ }),

/***/ "./src/app/core/user-menu/user-menu.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/user-menu/user-menu.component.ts ***!
  \*******************************************************/
/*! exports provided: UserMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMenuComponent", function() { return UserMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_list_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../login-list/_services/authentication.service */ "./src/app/login-list/_services/authentication.service.ts");
/* harmony import */ var _login_list_models_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../login-list/_models/user */ "./src/app/login-list/_models/user.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserMenuComponent = /** @class */ (function () {
    function UserMenuComponent(elementRef, router, authenticationService) {
        var _this = this;
        this.elementRef = elementRef;
        this.router = router;
        this.authenticationService = authenticationService;
        this.isOpen = false;
        this.authenticationService.currentUser.subscribe(function (x) { return _this.currentUser = x; });
    }
    UserMenuComponent.prototype.onClick = function (event, targetElement) {
        if (!targetElement) {
            return;
        }
        var clickedInside = this.elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.isOpen = false;
        }
    };
    UserMenuComponent.prototype.ngOnInit = function () {
    };
    UserMenuComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login-list/login']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _login_list_models_user__WEBPACK_IMPORTED_MODULE_3__["User"])
    ], UserMenuComponent.prototype, "currentUser", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event', '$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent, HTMLElement]),
        __metadata("design:returntype", void 0)
    ], UserMenuComponent.prototype, "onClick", null);
    UserMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-user-menu',
            template: __webpack_require__(/*! ./user-menu.component.html */ "./src/app/core/user-menu/user-menu.component.html"),
            styles: [__webpack_require__(/*! ./user-menu.component.scss */ "./src/app/core/user-menu/user-menu.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _login_list_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], UserMenuComponent);
    return UserMenuComponent;
}());



/***/ }),

/***/ "./src/app/lazy-load/lazy-load.module.ts":
/*!***********************************************!*\
  !*** ./src/app/lazy-load/lazy-load.module.ts ***!
  \***********************************************/
/*! exports provided: LazyLoadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyLoadModule", function() { return LazyLoadModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_list_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login-list/_guards/auth.guard */ "./src/app/login-list/_guards/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'auth', loadChildren: '../auth/auth.module#AuthModule', canActivate: [_login_list_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'register', loadChildren: '../register/register.module#RegisterModule' },
    //{path: 'login', loadChildren: '../pages/login/login.module#LoginModule'},
    // {path: 'editor', loadChildren: '../editor/editor.module#EditorModule'},
    { path: 'login-list', loadChildren: '../login-list/login-list.module#LoginListModule' },
    { path: '**', redirectTo: 'login-list/welcome' }
];
var LazyLoadModule = /** @class */ (function () {
    function LazyLoadModule() {
    }
    LazyLoadModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LazyLoadModule);
    return LazyLoadModule;
}());



/***/ }),

/***/ "./src/app/login-list/_guards/auth.guard.ts":
/*!**************************************************!*\
  !*** ./src/app/login-list/_guards/auth.guard.ts ***!
  \**************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services */ "./src/app/login-list/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            // authorised so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login-list/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/login-list/_helpers/error.interceptor.ts":
/*!**********************************************************!*\
  !*** ./src/app/login-list/_helpers/error.interceptor.ts ***!
  \**********************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services */ "./src/app/login-list/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                _this.authenticationService.logout();
                location.reload(true);
            }
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/login-list/_helpers/fake-backend.ts":
/*!*****************************************************!*\
  !*** ./src/app/login-list/_helpers/fake-backend.ts ***!
  \*****************************************************/
/*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return FakeBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return fakeBackendProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FakeBackendInterceptor = /** @class */ (function () {
    function FakeBackendInterceptor() {
    }
    FakeBackendInterceptor.prototype.intercept = function (request, next) {
        // array in local storage for registered users
        var users = JSON.parse(localStorage.getItem('users')) || [];
        // wrap in delayed observable to simulate server api call
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function () {
            // authenticate
            if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
                // find if any user matches login credentials
                var filteredUsers = users.filter(function (user) {
                    return user.username === request.body.username && user.password === request.body.password;
                });
                if (filteredUsers.length) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    var user = filteredUsers[0];
                    var body = {
                        id: user.id,
                        username: user.username,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        token: 'fake-jwt-token'
                    };
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: body }));
                }
                else {
                    // else return 400 bad request
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: 'Username or password is incorrect' } });
                }
            }
            // get users
            if (request.url.endsWith('/users') && request.method === 'GET') {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: users }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // get user by id
            if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    var urlParts = request.url.split('/');
                    var id_1 = parseInt(urlParts[urlParts.length - 1]);
                    var matchedUsers = users.filter(function (user) { return user.id === id_1; });
                    var user = matchedUsers.length ? matchedUsers[0] : null;
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200, body: user }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // register user
            if (request.url.endsWith('/users/register') && request.method === 'POST') {
                // get new user object from post body
                var newUser_1 = request.body;
                // validation
                var duplicateUser = users.filter(function (user) { return user.username === newUser_1.username; }).length;
                if (duplicateUser) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ error: { message: 'Username "' + newUser_1.username + '" is already taken' } });
                }
                // save new user
                newUser_1.id = users.length + 1;
                users.push(newUser_1);
                localStorage.setItem('users', JSON.stringify(users));
                // respond 200 OK
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200 }));
            }
            // delete user
            if (request.url.match(/\/users\/\d+$/) && request.method === 'DELETE') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    var urlParts = request.url.split('/');
                    var id = parseInt(urlParts[urlParts.length - 1]);
                    for (var i = 0; i < users.length; i++) {
                        var user = users[i];
                        if (user.id === id) {
                            // delete user
                            users.splice(i, 1);
                            localStorage.setItem('users', JSON.stringify(users));
                            break;
                        }
                    }
                    // respond 200 OK
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({ status: 200 }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // pass through any requests not handled above
            return next.handle(request);
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["materialize"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["dematerialize"])());
    };
    FakeBackendInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FakeBackendInterceptor);
    return FakeBackendInterceptor;
}());

var fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
    useClass: FakeBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/login-list/_helpers/jwt.interceptor.ts":
/*!********************************************************!*\
  !*** ./src/app/login-list/_helpers/jwt.interceptor.ts ***!
  \********************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_services */ "./src/app/login-list/_services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/login-list/_models/user.ts":
/*!********************************************!*\
  !*** ./src/app/login-list/_models/user.ts ***!
  \********************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/login-list/_services/alert.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/login-list/_services/alert.service.ts ***!
  \*******************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/login-list/_services/authentication.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/login-list/_services/authentication.service.ts ***!
  \****************************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl + "/users/authenticate", { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                _this.currentUserSubject.next(user);
            }
            return user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/login-list/_services/index.ts":
/*!***********************************************!*\
  !*** ./src/app/login-list/_services/index.ts ***!
  \***********************************************/
/*! exports provided: AuthenticationService, AlertService, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.service */ "./src/app/login-list/_services/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]; });

/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/login-list/_services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/login-list/_services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]; });






/***/ }),

/***/ "./src/app/login-list/_services/user.service.ts":
/*!******************************************************!*\
  !*** ./src/app/login-list/_services/user.service.ts ***!
  \******************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getAll = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users");
    };
    UserService.prototype.getById = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users/" + id);
    };
    UserService.prototype.register = function (user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users/register", user);
    };
    UserService.prototype.update = function (user) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users/" + user.id, user);
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/users/" + id);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
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
var environment = {
    production: true,
    apiUrl: 'http://localhost:4000'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ng-tempv1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map