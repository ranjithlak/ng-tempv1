(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./src/app/auth/auth.component.html":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-sidenav-container class=\"container\" fullscreen>\n    <mat-sidenav [mode]=\"sideNavMode\" class=\"sidenav\" #sidenav [opened]=\"sideNavOpened\" style=\"overflow: hidden;\">\n        <mat-toolbar color=\"primary\" class=\"mat-elevation-z4\">\n            <img src=\"./assets/logo.codetok.png\" width=\"36px\">\n            <h1 class=\"logo\">\n                CODETOK.\n                <span style=\"font-size: 12px;\">com</span>\n            </h1>\n        </mat-toolbar>\n\n        <cdk-sidemenu></cdk-sidemenu>\n    </mat-sidenav>\n    <mat-sidenav-content>\n        <cdk-toolbar [sidenav]=\"sidenav\" [drawer]=\"drawer\" [sidebar]=\"sidenav2\" [matDrawerShow]=\"matDrawerShow\" style=\"z-index: 500\"></cdk-toolbar>\n        <perfect-scrollbar>\n            <router-outlet></router-outlet>\n        </perfect-scrollbar>\n    </mat-sidenav-content>\n    <mat-sidenav #sidenav2 position=\"end\" mode=\"over\">\n        <cdk-sidebar></cdk-sidebar>\n    </mat-sidenav>\n</mat-sidenav-container> -->\n        \n <!-- Below is another example of the home page that has a smaller menu that shows up when the main menu is hidden -->\n\n<mat-sidenav-container class=\"container\" fullscreen>\n    <mat-sidenav [mode]=\"sideNavMode\" class=\"sidenav\" #sidenav [opened]=\"sideNavOpened\" style=\"overflow: hidden;\">\n        <mat-toolbar color=\"primary\" class=\"mat-elevation-z4\">\n            <img src=\"./assets/logo.codetok.png\" width=\"36px\">\n            <h1 class=\"logo\">\n                .ADVOCATE PORTAL\n                \n            </h1>\n        </mat-toolbar>\n        <cdk-sidemenu></cdk-sidemenu>\n    </mat-sidenav>\n    <mat-sidenav-content style=\"z-index: unset;overflow: hidden;\">\n        <mat-drawer-container fullscreen>\n            <mat-drawer mode=\"side\" #drawer class=\"drawer\" [opened]=\"matDrawerOpened\" style=\"overflow: hidden;\">\n                <mat-toolbar color=\"primary\" class=\"mat-elevation-z4\">\n                    <img src=\"./assets/logo.codetok.png\" width=\"36px\">\n                </mat-toolbar>\n                <cdk-sidemenu [iconOnly]=\"true\"></cdk-sidemenu>\n            </mat-drawer>\n            <mat-drawer-content style=\"overflow: hidden;\">\n\n                <cdk-toolbar [sidenav]=\"sidenav\" [drawer]=\"drawer\" [sidebar]=\"sidenav2\" [matDrawerShow]=\"matDrawerShow\" style=\"z-index: 500\"></cdk-toolbar>\n\n\n                <perfect-scrollbar  style=\"height: calc(100% - 33px);\" >\n                    <router-outlet></router-outlet>\n                </perfect-scrollbar>\n\n           \n            </mat-drawer-content>\n        </mat-drawer-container>\n    </mat-sidenav-content>\n\n    <mat-sidenav #sidenav2 position=\"end\" mode=\"over\">\n        <cdk-sidebar></cdk-sidebar>\n    </mat-sidenav>\n\n</mat-sidenav-container>\n                 \n            \n            \n    \n    \n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/auth/auth.component.scss":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 1200px) {\n  .container {\n    max-width: 1440px; } }\n"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthComponent = /** @class */ (function () {
    function AuthComponent(media) {
        this.media = media;
        this.isVisible = true;
        this.visibility = 'shown';
        this.sideNavOpened = true;
        this.matDrawerOpened = false;
        this.matDrawerShow = true;
        this.sideNavMode = 'side';
    }
    AuthComponent.prototype.ngOnChanges = function () {
        this.visibility = this.isVisible ? 'shown' : 'hidden';
    };
    AuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.media.subscribe(function (mediaChange) {
            _this.toggleView();
        });
    };
    AuthComponent.prototype.getRouteAnimation = function (outlet) {
        return outlet.activatedRouteData.animation;
        //return outlet.isActivated ? outlet.activatedRoute : ''
    };
    AuthComponent.prototype.toggleView = function () {
        if (this.media.isActive('gt-md')) {
            this.sideNavMode = 'side';
            this.sideNavOpened = true;
            this.matDrawerOpened = false;
            this.matDrawerShow = false;
        }
        else if (this.media.isActive('gt-xs')) {
            this.sideNavMode = 'side';
            this.sideNavOpened = false;
            this.matDrawerOpened = true;
            this.matDrawerShow = true;
        }
        else if (this.media.isActive('lt-sm')) {
            this.sideNavMode = 'over';
            this.sideNavOpened = false;
            this.matDrawerOpened = false;
            this.matDrawerShow = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AuthComponent.prototype, "isVisible", void 0);
    AuthComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.scss */ "./src/app/auth/auth.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["ObservableMedia"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _lazyloader_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lazyloader.routes */ "./src/app/auth/lazyloader.routes.ts");
/* harmony import */ var _dashboard_crm_dashboard_crm_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../dashboard-crm/dashboard-crm.module */ "./src/app/dashboard-crm/dashboard-crm.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};


var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_lazyloader_routes__WEBPACK_IMPORTED_MODULE_10__["appRoutes"]),
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _dashboard_crm_dashboard_crm_module__WEBPACK_IMPORTED_MODULE_11__["DashboardCrmModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_12__["CoreModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarModule"],
            ],
            declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_2__["AuthComponent"]],
            providers: [
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/lazyloader.routes.ts":
/*!*******************************************!*\
  !*** ./src/app/auth/lazyloader.routes.ts ***!
  \*******************************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _dashboard_crm_dashboard_crm_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dashboard-crm/dashboard-crm.component */ "./src/app/dashboard-crm/dashboard-crm.component.ts");


var appRoutes = [{
        path: '', component: _auth_component__WEBPACK_IMPORTED_MODULE_0__["AuthComponent"], children: [
            { path: 'dashboard', component: _dashboard_crm_dashboard_crm_component__WEBPACK_IMPORTED_MODULE_1__["DashboardCrmComponent"] },
            { path: 'tables', loadChildren: '../tables/tables.module#TablesModule' },
            { path: 'maps', loadChildren: '../maps/maps.module#MapsModule' },
            { path: 'charts', loadChildren: '../charts/charts.module#ChartsModule' },
            // { path: 'chats', loadChildren: '../chats/chat.module#ChatsModule' }, // fix this
            //{ path: 'mail', loadChildren: '../mail/mail.module#MailModule' }, // fix this
            { path: 'pages', loadChildren: '../pages/pages.module#PagesModule' },
            { path: 'forms', loadChildren: '../forms/forms.module#FormModule' },
            { path: 'guarded-routes', loadChildren: '../guarded-routes/guarded-routes.module#GuardedRoutesModule' },
            // { path: 'editor', loadChildren: '../editor/editor.module#EditorModule' }, 
            { path: 'scrumboard', loadChildren: '../dashboard-crm.1/dashboard-crm.module#DashboardCrmModule' },
        ]
    }];


/***/ }),

/***/ "./src/app/dashboard-crm/dashboard-crm.component.html":
/*!************************************************************!*\
  !*** ./src/app/dashboard-crm/dashboard-crm.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayout=\"row wrap\">\n    <div *ngFor=\"let dash of dashCard\" fxFlex.lt-sm=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"25\">\n        <cdk-dashcard [dashData]=\"dash\"></cdk-dashcard>\n    </div>\n</div>\n <div fxLayout=\"row\" fxLayout=\"row wrap\">\n    <cdk-bar-graph fxFlex=\"100\" fxFlex.lt-sm=\"90\" fxFlex.sm=\"50\"></cdk-bar-graph >\n    \n</div>\n<div fxLayout=\"row\" fxLayout=\"row wrap\">\n    <cdk-line-graph fxFlex=\"100\" fxFlex.lt-sm=\"90\" fxFlex.sm=\"50\"></cdk-line-graph>\n    \n</div>\n<div fxLayout=\"row\" fxLayout=\"row wrap\">\n        <cdk-share-price fxFlex=\"100\" fxFlex.lt-sm=\"90\" fxFlex.sm=\"50\"></cdk-share-price> \n</div>\n\n<!--<div fxLayout=\"row\" fxLayout=\"row wrap\">\n    <cdk-sales-list fxFlex=\"60\" fxFlex.lt-sm=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"70\"></cdk-sales-list>\n    <cdk-profile-card fxFlex=\"40\" fxFlex.lt-sm=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"30\"></cdk-profile-card>\n</div>\n\n<div fxLayout=\"row\" fxLayout=\"row wrap\">\n    <div fxFlex.lt-sm=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"25\">\n        <cdk-round-progressbar [title]=\"'SALES'\" [current]=\"'23'\" [max]=\"'100'\" [background]=\"'#FFF968'\" [color]=\"'#B1A7FF'\" [boxcolor]=\"'#7986CB'\"></cdk-round-progressbar>\n    </div>\n    <div fxFlex.lt-sm=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"25\">\n        <cdk-round-progressbar [title]=\"'LEADS'\" [current]=\"'33'\" [max]=\"'100'\" [background]=\"'#FFE268'\" [color]=\"'#A7C1FF'\" [boxcolor]=\"'#42A5F5'\"></cdk-round-progressbar>\n    </div>\n    <div fxFlex.lt-sm=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"25\">\n        <cdk-round-progressbar [title]=\"'ASSETS'\" [current]=\"'78'\" [max]=\"'100'\" [background]=\"'#FFC368'\" [color]=\"'#A7F0FF'\" [boxcolor]=\"'#26A69A'\"></cdk-round-progressbar>\n    </div>\n    <div fxFlex.lt-sm=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"25\">\n        <cdk-round-progressbar [title]=\"'BANKING'\" [current]=\"'90'\" [max]=\"'100'\" [background]=\"'#FFCF68'\" [color]=\"'#A7DEFF'\" [boxcolor]=\"'#26C6DA'\"></cdk-round-progressbar>\n    </div>\n</div>\n -->\n"

/***/ }),

/***/ "./src/app/dashboard-crm/dashboard-crm.component.scss":
/*!************************************************************!*\
  !*** ./src/app/dashboard-crm/dashboard-crm.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  padding: 5px;\n  margin: 5px; }\n"

/***/ }),

/***/ "./src/app/dashboard-crm/dashboard-crm.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard-crm/dashboard-crm.component.ts ***!
  \**********************************************************/
/*! exports provided: DashboardCrmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardCrmComponent", function() { return DashboardCrmComponent; });
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

var DashboardCrmComponent = /** @class */ (function () {
    function DashboardCrmComponent() {
        this.dashCard = [
            { colorDark: '#5C6BC0', colorLight: '#7986CB', number: 120, title: 'CLIENTS', icon: 'supervisor_account' },
            { colorDark: '#5C6BC0', colorLight: '#7986CB', number: 70, title: 'ACTIVE CLIENTS', icon: 'people_outline' },
            { colorDark: '#5C6BC0', colorLight: '#7986CB', number: 20, title: 'APPONIMENT', icon: 'assignments' },
            { colorDark: '#5C6BC0', colorLight: '#7986CB', number: 15, title: 'TODAY APPONIMENT', icon: 'update' }
        ];
    }
    DashboardCrmComponent.prototype.ngOnInit = function () {
    };
    DashboardCrmComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard-crm',
            template: __webpack_require__(/*! ./dashboard-crm.component.html */ "./src/app/dashboard-crm/dashboard-crm.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-crm.component.scss */ "./src/app/dashboard-crm/dashboard-crm.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardCrmComponent);
    return DashboardCrmComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-crm/dashboard-crm.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard-crm/dashboard-crm.module.ts ***!
  \*******************************************************/
/*! exports provided: appRoutes, DashboardCrmModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardCrmModule", function() { return DashboardCrmModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_crm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-crm.component */ "./src/app/dashboard-crm/dashboard-crm.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _dashboard_widget_dashboard_widget_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dashboard-widget/dashboard-widget.module */ "./src/app/dashboard-widget/dashboard-widget.module.ts");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    { path: '', component: _dashboard_crm_component__WEBPACK_IMPORTED_MODULE_3__["DashboardCrmComponent"] },
];
var DashboardCrmModule = /** @class */ (function () {
    function DashboardCrmModule() {
    }
    DashboardCrmModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(appRoutes),
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
                _dashboard_widget_dashboard_widget_module__WEBPACK_IMPORTED_MODULE_6__["DashboardWidgetModule"]
            ],
            declarations: [_dashboard_crm_component__WEBPACK_IMPORTED_MODULE_3__["DashboardCrmComponent"]],
            exports: []
        })
    ], DashboardCrmModule);
    return DashboardCrmModule;
}());



/***/ }),

/***/ "./src/app/dashboard-widget/bar-graph/bar-graph.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard-widget/bar-graph/bar-graph.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"mat-elevation-z8\">\n    <header><button mat-raised-button color=\"primary\">No of clients</button></header>\n    <table mat-table [dataSource]=\"dataSource\">\n  \n      <!-- Position Column -->\n      <ng-container matColumnDef=\"position\">\n        <th mat-header-cell *matHeaderCellDef class=\"tab10\"> No. </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n      </ng-container>\n  \n      <!-- Name Column -->\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef class=\"tab10\"> Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n      </ng-container>\n  \n      <!-- Weight Column -->\n      <ng-container matColumnDef=\"case\">\n        <th mat-header-cell *matHeaderCellDef class=\"tab10\"> Case </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.case}} </td>\n      </ng-container>\n  \n      <!-- Symbol Column -->\n      <ng-container matColumnDef=\"status\">\n        <th mat-header-cell *matHeaderCellDef class=\"tab10\"> Status </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.status}} </td>\n      </ng-container>\n  \n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  \n    <mat-paginator [pageSizeOptions]=\"[3,5]\" showFirstLastButtons></mat-paginator>\n  </div>"

/***/ }),

/***/ "./src/app/dashboard-widget/bar-graph/bar-graph.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard-widget/bar-graph/bar-graph.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-elevation-z8 {\n  margin: 10px 5px;\n  background-color: white; }\n\n.nav-item {\n  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);\n  cursor: default; }\n\n.nav-item:hover {\n    -webkit-transform: translate(0, -8px);\n            transform: translate(0, -8px);\n    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.16); }\n\ntable {\n  width: 100%; }\n\n.tab10 {\n  font-weight: 900 !important;\n  font-family: \"Helvetica Neue\", sans-serif !important;\n  font-size: 14px; }\n"

/***/ }),

/***/ "./src/app/dashboard-widget/bar-graph/bar-graph.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard-widget/bar-graph/bar-graph.component.ts ***!
  \*******************************************************************/
/*! exports provided: BarGraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarGraphComponent", function() { return BarGraphComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BarGraphComponent = /** @class */ (function () {
    function BarGraphComponent() {
        this.displayedColumns = ['position', 'name', 'case', 'status'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
    }
    BarGraphComponent.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], BarGraphComponent.prototype, "paginator", void 0);
    BarGraphComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-bar-graph',
            template: __webpack_require__(/*! ./bar-graph.component.html */ "./src/app/dashboard-widget/bar-graph/bar-graph.component.html"),
            styles: [__webpack_require__(/*! ./bar-graph.component.scss */ "./src/app/dashboard-widget/bar-graph/bar-graph.component.scss")]
        })
    ], BarGraphComponent);
    return BarGraphComponent;
}());

var ELEMENT_DATA = [
    { position: 1, name: 'Ranjith', case: 'civil', status: 'closed' },
    { position: 2, name: 'Kumar', case: 'Criminal', status: 'Pending' },
    { position: 3, name: 'Arun', case: 'Criminal', status: 'InProgress' },
    { position: 4, name: 'Vinoth', case: 'Criminal', status: 'closed' },
    { position: 5, name: 'Kamal', case: 'Criminal', status: 'Pending' },
    { position: 6, name: 'Saravanan', case: 'Criminal', status: 'InProgress' },
    { position: 7, name: 'praba', case: 'civil', status: 'InProgress' },
    { position: 8, name: 'karan', case: 'Criminal', status: 'Pending' },
    { position: 9, name: 'Ranjith', case: 'civil', status: 'closed' },
    { position: 10, name: 'kumar', case: 'Criminal', status: 'Pending' },
    { position: 11, name: 'udayakumar', case: 'Criminal', status: 'InProgress' },
    { position: 12, name: 'vijay', case: 'civil', status: 'InProgress' },
    { position: 13, name: 'palani', case: 'Criminal', status: 'closed' },
    { position: 14, name: 'tamil', case: 'civil', status: 'Pending' },
    { position: 15, name: 'sarvanan', case: 'Criminal', status: 'closedP' },
    { position: 16, name: 'prabakaran', case: 'Criminal', status: 'Pending' },
    { position: 17, name: 'Arul', case: 'civil', status: 'Cl' },
    { position: 18, name: 'kamal', case: 'Criminal', status: 'closed' },
    { position: 19, name: 'Ajith', case: 'civil', status: 'Pending' },
    { position: 20, name: 'Vijay', case: 'civil', status: 'closed' },
];


/***/ }),

/***/ "./src/app/dashboard-widget/d3-usa/d3-usa.component.html":
/*!***************************************************************!*\
  !*** ./src/app/dashboard-widget/d3-usa/d3-usa.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <svg viewBox=\"0 0 1000 700\" preserveAspectRatio=\"xMinYMin slice\" width=\"100%\" height=\"100%\" style=\"width: 100%; overflow: hidden;\"></svg>\n\n -->"

/***/ }),

/***/ "./src/app/dashboard-widget/d3-usa/d3-usa.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/dashboard-widget/d3-usa/d3-usa.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".counties {\n  fill: none; }\n\n.states {\n  fill: none;\n  stroke: #fff;\n  stroke-linejoin: round; }\n"

/***/ }),

/***/ "./src/app/dashboard-widget/d3-usa/d3-usa.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/dashboard-widget/d3-usa/d3-usa.component.ts ***!
  \*************************************************************/
/*! exports provided: D3UsaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D3UsaComponent", function() { return D3UsaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var D3UsaComponent = /** @class */ (function () {
    function D3UsaComponent() {
    }
    D3UsaComponent.prototype.ngOnInit = function () {
    };
    D3UsaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-d3-usa',
            template: __webpack_require__(/*! ./d3-usa.component.html */ "./src/app/dashboard-widget/d3-usa/d3-usa.component.html"),
            styles: [__webpack_require__(/*! ./d3-usa.component.scss */ "./src/app/dashboard-widget/d3-usa/d3-usa.component.scss")]
        })
    ], D3UsaComponent);
    return D3UsaComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-widget/dashboard-widget.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/dashboard-widget/dashboard-widget.module.ts ***!
  \*************************************************************/
/*! exports provided: DashboardWidgetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardWidgetModule", function() { return DashboardWidgetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dashcard_dashcard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashcard/dashcard.component */ "./src/app/dashboard-widget/dashcard/dashcard.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _line_graph_line_graph_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./line-graph/line-graph.component */ "./src/app/dashboard-widget/line-graph/line-graph.component.ts");
/* harmony import */ var _bar_graph_bar_graph_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bar-graph/bar-graph.component */ "./src/app/dashboard-widget/bar-graph/bar-graph.component.ts");
/* harmony import */ var _doughnut_graph_doughnut_graph_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./doughnut-graph/doughnut-graph.component */ "./src/app/dashboard-widget/doughnut-graph/doughnut-graph.component.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _pricing_plan_pricing_plan_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pricing-plan/pricing-plan.component */ "./src/app/dashboard-widget/pricing-plan/pricing-plan.component.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var ng2_odometer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng2-odometer */ "./node_modules/ng2-odometer/dist/index.js");
/* harmony import */ var ng2_odometer__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(ng2_odometer__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _share_price_share_price_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./share-price/share-price.component */ "./src/app/dashboard-widget/share-price/share-price.component.ts");
/* harmony import */ var _round_progressbar_round_progressbar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./round-progressbar/round-progressbar.component */ "./src/app/dashboard-widget/round-progressbar/round-progressbar.component.ts");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angular-svg-round-progressbar */ "./node_modules/angular-svg-round-progressbar/dist/index.js");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _sales_list_sales_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./sales-list/sales-list.component */ "./src/app/dashboard-widget/sales-list/sales-list.component.ts");
/* harmony import */ var _d3_usa_d3_usa_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./d3-usa/d3-usa.component */ "./src/app/dashboard-widget/d3-usa/d3-usa.component.ts");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./table/table.component */ "./src/app/dashboard-widget/table/table.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var DashboardWidgetModule = /** @class */ (function () {
    function DashboardWidgetModule() {
    }
    DashboardWidgetModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
                ng2_odometer__WEBPACK_IMPORTED_MODULE_19__["Ng2OdometerModule"],
                angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_22__["RoundProgressModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_26__["MatTableModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_17__["CdkTableModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            declarations: [
                _dashcard_dashcard_component__WEBPACK_IMPORTED_MODULE_3__["DashcardComponent"],
                _line_graph_line_graph_component__WEBPACK_IMPORTED_MODULE_10__["LineGraphComponent"],
                _bar_graph_bar_graph_component__WEBPACK_IMPORTED_MODULE_11__["BarGraphComponent"],
                _doughnut_graph_doughnut_graph_component__WEBPACK_IMPORTED_MODULE_12__["DoughnutGraphComponent"],
                _pricing_plan_pricing_plan_component__WEBPACK_IMPORTED_MODULE_15__["PricingPlanComponent"],
                _share_price_share_price_component__WEBPACK_IMPORTED_MODULE_20__["SharePriceComponent"],
                _round_progressbar_round_progressbar_component__WEBPACK_IMPORTED_MODULE_21__["RoundProgressbarComponent"],
                _sales_list_sales_list_component__WEBPACK_IMPORTED_MODULE_23__["SalesListComponent"],
                _d3_usa_d3_usa_component__WEBPACK_IMPORTED_MODULE_24__["D3UsaComponent"],
                _table_table_component__WEBPACK_IMPORTED_MODULE_25__["TableComponent"],
            ],
            exports: [
                _dashcard_dashcard_component__WEBPACK_IMPORTED_MODULE_3__["DashcardComponent"],
                _line_graph_line_graph_component__WEBPACK_IMPORTED_MODULE_10__["LineGraphComponent"],
                _bar_graph_bar_graph_component__WEBPACK_IMPORTED_MODULE_11__["BarGraphComponent"],
                _doughnut_graph_doughnut_graph_component__WEBPACK_IMPORTED_MODULE_12__["DoughnutGraphComponent"],
                _pricing_plan_pricing_plan_component__WEBPACK_IMPORTED_MODULE_15__["PricingPlanComponent"],
                _share_price_share_price_component__WEBPACK_IMPORTED_MODULE_20__["SharePriceComponent"],
                _round_progressbar_round_progressbar_component__WEBPACK_IMPORTED_MODULE_21__["RoundProgressbarComponent"],
                _sales_list_sales_list_component__WEBPACK_IMPORTED_MODULE_23__["SalesListComponent"],
                _d3_usa_d3_usa_component__WEBPACK_IMPORTED_MODULE_24__["D3UsaComponent"],
            ]
        })
    ], DashboardWidgetModule);
    return DashboardWidgetModule;
}());



/***/ }),

/***/ "./src/app/dashboard-widget/dashcard/dashcard.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard-widget/dashcard/dashcard.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\"  class=\"dashcard mat-elevation-z4 \"  >\n    <div fxFlex=\"40\" fxLayout=\"row\"  fxLayoutAlign=\"center center\" [style.background]=\"dashData?.colorLight\">\n        <mat-icon  class=\"cardIcon\">{{dashData?.icon}}</mat-icon>\n    </div>\n    <div  fxFlex=\"60\" fxLayout=\"column\" fxLayoutAlign=\"center center\" [style.background]=\"dashData?.colorDark\" >\n         \n        <div style=\"color: white;font-size: 40px\">\n            <ng2-odometer [number]=\"dashData?.number\" [config]=\"{ }\"></ng2-odometer>\n            \n        </div>\n        <p class=\"mat-body-1 border-top\">\n            {{dashData?.title}}\n        </p>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard-widget/dashcard/dashcard.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard-widget/dashcard/dashcard.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-item {\n  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);\n  cursor: default; }\n  .nav-item:hover {\n    -webkit-transform: translate(0, -8px);\n            transform: translate(0, -8px);\n    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.16); }\n"

/***/ }),

/***/ "./src/app/dashboard-widget/dashcard/dashcard.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard-widget/dashcard/dashcard.component.ts ***!
  \*****************************************************************/
/*! exports provided: DashcardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashcardComponent", function() { return DashcardComponent; });
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

var DashcardComponent = /** @class */ (function () {
    function DashcardComponent() {
    }
    DashcardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DashcardComponent.prototype, "dashData", void 0);
    DashcardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-dashcard',
            template: __webpack_require__(/*! ./dashcard.component.html */ "./src/app/dashboard-widget/dashcard/dashcard.component.html"),
            styles: [__webpack_require__(/*! ./dashcard.component.scss */ "./src/app/dashboard-widget/dashcard/dashcard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashcardComponent);
    return DashcardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-widget/doughnut-graph/doughnut-graph.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard-widget/doughnut-graph/doughnut-graph.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"doughnut-graph-graph-holder mat-elevation-z4  \" [ngStyle]=\"{'height':'220px'}\">\n    <canvas id=\"doughnut-graph-graph\"></canvas>\n</div>"

/***/ }),

/***/ "./src/app/dashboard-widget/doughnut-graph/doughnut-graph.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard-widget/doughnut-graph/doughnut-graph.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".doughnut-graph-graph-holder {\n  margin: 10px 5px;\n  background-color: white; }\n\n.nav-item {\n  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);\n  cursor: default; }\n\n.nav-item:hover {\n    -webkit-transform: translate(0, -8px);\n            transform: translate(0, -8px);\n    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.16); }\n"

/***/ }),

/***/ "./src/app/dashboard-widget/doughnut-graph/doughnut-graph.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard-widget/doughnut-graph/doughnut-graph.component.ts ***!
  \*****************************************************************************/
/*! exports provided: DoughnutGraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoughnutGraphComponent", function() { return DoughnutGraphComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/src/chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DoughnutGraphComponent = /** @class */ (function () {
    function DoughnutGraphComponent() {
    }
    DoughnutGraphComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.createDoughnutGraph();
        }, 500);
    };
    DoughnutGraphComponent.prototype.randomNumber = function (min, max) {
        if (min === void 0) { min = 0; }
        if (max === void 0) { max = 0; }
        if (min == 0 || max == 0)
            return Math.round(Math.random() * 100);
        else
            return Math.random() * (max - min) + min;
    };
    ;
    DoughnutGraphComponent.prototype.randomBar = function (date, lastClose) {
        var open = this.randomNumber(lastClose * .95, lastClose * 1.05);
        var close = this.randomNumber(open * .95, open * 1.05);
        var high = this.randomNumber(Math.max(open, close), Math.max(open, close) * 1.1);
        var low = this.randomNumber(Math.min(open, close) * .9, Math.min(open, close));
        return {
            t: date.valueOf(),
            y: close
        };
    };
    DoughnutGraphComponent.prototype.createDoughnutGraph = function () {
        new chart_js__WEBPACK_IMPORTED_MODULE_1__["Chart"]('doughnut-graph-graph', {
            type: 'doughnut',
            data: {
                labels: ['Data '],
                datasets: [{
                        data: [
                            this.randomNumber(),
                            this.randomNumber(),
                            this.randomNumber(),
                            this.randomNumber(),
                        ],
                        backgroundColor: [
                            'rgba(255, 99, 132,.7)',
                            'rgba(92, 107, 192,.7)',
                            'rgba(66, 165, 245,.7)',
                            'rgba(38, 166, 154,.7)',
                            'rgba(102, 187, 106,.7)'
                        ],
                    }]
            },
            options: {
                elements: {
                    line: {
                        tension: 0.000001
                    }
                },
                legend: {
                    display: false
                },
                maintainAspectRatio: false,
                responsive: true,
                plugins: {
                    filler: {
                        propagate: false
                    }
                },
                title: {
                    display: true,
                    text: 'LEAD GRAPH'
                }
            }
        });
    };
    DoughnutGraphComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-doughnut-graph',
            template: __webpack_require__(/*! ./doughnut-graph.component.html */ "./src/app/dashboard-widget/doughnut-graph/doughnut-graph.component.html"),
            styles: [__webpack_require__(/*! ./doughnut-graph.component.scss */ "./src/app/dashboard-widget/doughnut-graph/doughnut-graph.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DoughnutGraphComponent);
    return DoughnutGraphComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-widget/line-graph/line-graph.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard-widget/line-graph/line-graph.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\">\n    <header><button mat-raised-button color=\"primary\">NO of Active Clients</button></header>\n    <table mat-table [dataSource]=\"dataSource\">\n  \n      <!-- Position Column -->\n      <ng-container matColumnDef=\"position\">\n        <th mat-header-cell *matHeaderCellDef class=\"tab10\"> No. </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n      </ng-container>\n  \n      <!-- Name Column -->\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef class=\"tab10\"> Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n      </ng-container>\n  \n      <!-- Weight Column -->\n      <ng-container matColumnDef=\"case\">\n        <th mat-header-cell *matHeaderCellDef class=\"tab10\"> Case </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.case}} </td>\n      </ng-container>\n  \n      <!-- Symbol Column -->\n      <ng-container matColumnDef=\"status\">\n        <th mat-header-cell *matHeaderCellDef class=\"tab10\"> Status </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.status}} </td>\n      </ng-container>\n  \n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  \n    <mat-paginator [pageSizeOptions]=\"[3,5]\" showFirstLastButtons></mat-paginator>\n  </div>"

/***/ }),

/***/ "./src/app/dashboard-widget/line-graph/line-graph.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard-widget/line-graph/line-graph.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-elevation-z8 {\n  margin: 10px 5px;\n  background-color: white; }\n\ntable {\n  width: 100%; }\n\n.tab10 {\n  font-weight: 900 !important;\n  font-family: \"Helvetica Neue\", sans-serif !important;\n  font-size: 14px; }\n"

/***/ }),

/***/ "./src/app/dashboard-widget/line-graph/line-graph.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard-widget/line-graph/line-graph.component.ts ***!
  \*********************************************************************/
/*! exports provided: LineGraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineGraphComponent", function() { return LineGraphComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LineGraphComponent = /** @class */ (function () {
    function LineGraphComponent() {
        this.displayedColumns = ['position', 'name', 'case', 'status'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
    }
    LineGraphComponent.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], LineGraphComponent.prototype, "paginator", void 0);
    LineGraphComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-line-graph',
            template: __webpack_require__(/*! ./line-graph.component.html */ "./src/app/dashboard-widget/line-graph/line-graph.component.html"),
            styles: [__webpack_require__(/*! ./line-graph.component.scss */ "./src/app/dashboard-widget/line-graph/line-graph.component.scss")]
        })
    ], LineGraphComponent);
    return LineGraphComponent;
}());

var ELEMENT_DATA = [
    { position: 1, name: 'Ranjith', case: 'civil', status: 'closed' },
    { position: 2, name: 'Kumar', case: 'Criminal', status: 'Pending' },
    { position: 3, name: 'Arun', case: 'Criminal', status: 'InProgress' },
    { position: 4, name: 'Vinoth', case: 'Criminal', status: 'closed' },
    { position: 5, name: 'Kamal', case: 'Criminal', status: 'Pending' },
    { position: 6, name: 'Saravanan', case: 'Criminal', status: 'InProgress' },
    { position: 7, name: 'praba', case: 'civil', status: 'InProgress' },
    { position: 8, name: 'karan', case: 'Criminal', status: 'Pending' },
    { position: 9, name: 'Ranjith', case: 'civil', status: 'closed' },
    { position: 10, name: 'kumar', case: 'Criminal', status: 'Pending' },
    { position: 11, name: 'udayakumar', case: 'Criminal', status: 'InProgress' },
    { position: 12, name: 'vijay', case: 'civil', status: 'InProgress' },
    { position: 13, name: 'palani', case: 'Criminal', status: 'closed' },
    { position: 14, name: 'tamil', case: 'civil', status: 'Pending' },
    { position: 15, name: 'sarvanan', case: 'Criminal', status: 'closedP' },
    { position: 16, name: 'prabakaran', case: 'Criminal', status: 'Pending' },
    { position: 17, name: 'Arul', case: 'civil', status: 'Cl' },
    { position: 18, name: 'kamal', case: 'Criminal', status: 'closed' },
    { position: 19, name: 'Ajith', case: 'civil', status: 'Pending' },
    { position: 20, name: 'Vijay', case: 'civil', status: 'closed' },
];


/***/ }),

/***/ "./src/app/dashboard-widget/pricing-plan/pricing-plan.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard-widget/pricing-plan/pricing-plan.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"pricing-card-holder mat-elevation-z4 \">\n    <mat-toolbar>\n      Pricing\n    </mat-toolbar>\n    <mat-nav-list>\n        <mat-list-item *ngFor=\"let link of [1,2,3,4,5]\">\n            <a matLine href=\"...\">{{ link }}</a>\n                <button mat-icon-button >\n                <mat-icon>info</mat-icon>\n            </button>\n        </mat-list-item>\n    </mat-nav-list>\n</div>"

/***/ }),

/***/ "./src/app/dashboard-widget/pricing-plan/pricing-plan.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard-widget/pricing-plan/pricing-plan.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pricing-card-holder {\n  margin: 10px 5px;\n  background: white; }\n"

/***/ }),

/***/ "./src/app/dashboard-widget/pricing-plan/pricing-plan.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard-widget/pricing-plan/pricing-plan.component.ts ***!
  \*************************************************************************/
/*! exports provided: PricingPlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingPlanComponent", function() { return PricingPlanComponent; });
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

var PricingPlanComponent = /** @class */ (function () {
    function PricingPlanComponent() {
    }
    PricingPlanComponent.prototype.ngOnInit = function () {
    };
    PricingPlanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-pricing-plan',
            template: __webpack_require__(/*! ./pricing-plan.component.html */ "./src/app/dashboard-widget/pricing-plan/pricing-plan.component.html"),
            styles: [__webpack_require__(/*! ./pricing-plan.component.scss */ "./src/app/dashboard-widget/pricing-plan/pricing-plan.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PricingPlanComponent);
    return PricingPlanComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-widget/round-progressbar/round-progressbar.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/dashboard-widget/round-progressbar/round-progressbar.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"round-progressbar mat-elevation-z4 \"  fxLayout=\"column\" [style.background]=\"boxcolor\">\n    <h1 class=\"mat-headline header\">\n            {{title}}\n    </h1>\n    <div  fxLayout=\"row\" >\n\n        <div fxFlex=\"10\">\n        </div>\n        <div fxFlex=\"80\" >\n              <div class=\"progress-wrapper\">\n                    <div class=\"current mat-headline \" [ngStyle]=\"getOverlayStyle()\">{{ current }}/{{ max }}</div>\n                    <round-progress  [current]=\"current\"\n                    [max]=\"max\"\n                    [color]=\"color\"\n                    [background]=\"background\"\n                    [radius]=\"125\"\n                    [stroke]=\"30\"\n                    [semicircle]=\"semicircle\"\n                    [rounded]=\"rounded\"\n                    [clockwise]=\"clockwise\"\n                    [responsive]=\"responsive\"\n                    [duration]=\"800\"\n                    [animation]=\"animation\"\n                    [animationDelay]=\"1\"\n                     ></round-progress>\n              </div>\n           \n        </div>\n        <div  fxFlex=\"10\"></div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/dashboard-widget/round-progressbar/round-progressbar.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/dashboard-widget/round-progressbar/round-progressbar.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard-widget/round-progressbar/round-progressbar.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/dashboard-widget/round-progressbar/round-progressbar.component.ts ***!
  \***********************************************************************************/
/*! exports provided: RoundProgressbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundProgressbarComponent", function() { return RoundProgressbarComponent; });
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

var RoundProgressbarComponent = /** @class */ (function () {
    function RoundProgressbarComponent() {
        this.radius = 250;
        this.stroke = "20";
        this.semicircle = false;
        this.rounded = true;
        this.clockwise = false;
        this.responsive = true;
        this.duration = "800";
        this.animation = 'easeInOutQuart';
    }
    RoundProgressbarComponent.prototype.ngOnInit = function () {
    };
    RoundProgressbarComponent.prototype.getOverlayStyle = function () {
        var isSemi = this.semicircle;
        var transform = (isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';
        return {
            'top': isSemi ? 'auto' : '50%',
            'bottom': isSemi ? '5%' : 'auto',
            'left': '50%',
            'transform': transform,
            '-moz-transform': transform,
            '-webkit-transform': transform,
            'font-size': this.radius / 7 + 'px'
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RoundProgressbarComponent.prototype, "current", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RoundProgressbarComponent.prototype, "max", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RoundProgressbarComponent.prototype, "background", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RoundProgressbarComponent.prototype, "color", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RoundProgressbarComponent.prototype, "boxcolor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], RoundProgressbarComponent.prototype, "title", void 0);
    RoundProgressbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-round-progressbar',
            template: __webpack_require__(/*! ./round-progressbar.component.html */ "./src/app/dashboard-widget/round-progressbar/round-progressbar.component.html"),
            styles: [__webpack_require__(/*! ./round-progressbar.component.scss */ "./src/app/dashboard-widget/round-progressbar/round-progressbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RoundProgressbarComponent);
    return RoundProgressbarComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-widget/sales-list/sales-list.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard-widget/sales-list/sales-list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"sales-list mat-elevation-z4 \"  >\n    <mat-toolbar>\n        \n        <mat-toolbar-row>\n            <span>Sales List</span>\n            <span class=\"pull-right\"></span>\n            <button mat-icon-button>\n              <mat-icon (click)=\"reload();\" >refresh</mat-icon>\n            </button>\n           <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n                  <mat-icon>more_vert</mat-icon>\n                </button>\n                <mat-menu #menu=\"matMenu\">\n                  <button mat-menu-item>\n                    <mat-icon>list</mat-icon>\n                    <span>List</span>\n                  </button>\n                  <button mat-menu-item>\n                    <mat-icon>print</mat-icon>\n                    <span>Print</span>\n                  </button>\n                </mat-menu>\n          </mat-toolbar-row>\n    </mat-toolbar>\n    <mat-progress-bar *ngIf=\"showLoader\"\n          [color]=\"'primary'\"\n          [mode]=\"'indeterminate'\"\n          [value]=\"90\"\n          [bufferValue]=\"'10'\">\n      </mat-progress-bar>\n    <mat-list >\n    <mat-list-item *ngFor=\"let sale of sales\"   >\n        <img  matListAvatar [src]=\"sale.companyIcon\" alt=\"Image of {{sale.name}}\">\n        <h3  > {{sale.companyName}} </h3>\n        <span class=\"pull-right\"></span>\n        <mat-chip-list    >\n            <mat-chip  *ngIf=\"sale.star\" color=\"primary\" selected=\"true\" >\n                {{sale.star}} &nbsp; <mat-icon>star</mat-icon> \n            </mat-chip>\n            <mat-chip *ngIf=\"sale.watch\"  color=\"warn\" selected=\"true\" >\n                {{sale.watch}}  &nbsp;<mat-icon>remove_red_eye</mat-icon> \n            </mat-chip>\n            <mat-chip *ngIf=\"sale.fork\"  color=\"accent\" selected=\"true\" >\n                {{sale.fork}}  &nbsp;<mat-icon>content_copy</mat-icon> \n            </mat-chip>\n        </mat-chip-list>\n    </mat-list-item>\n</mat-list>\n\n</div>"

/***/ }),

/***/ "./src/app/dashboard-widget/sales-list/sales-list.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard-widget/sales-list/sales-list.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-item {\n  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);\n  cursor: default; }\n  .nav-item:hover {\n    -webkit-transform: translate(0, -8px);\n            transform: translate(0, -8px);\n    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.16); }\n"

/***/ }),

/***/ "./src/app/dashboard-widget/sales-list/sales-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard-widget/sales-list/sales-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: SalesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesListComponent", function() { return SalesListComponent; });
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

var SalesListComponent = /** @class */ (function () {
    function SalesListComponent() {
        this.showLoader = false;
        this.sales = [
            {
                companyIcon: 'https://www.bugsplat.com/images/icons/angular_icon_blue.png',
                companyName: 'Codetok',
                star: '20',
                fork: false,
                watch: false,
            },
            {
                companyIcon: 'https://firebase.google.com/_static/4d0ad1dc9e/images/firebase/logo.png',
                companyName: 'Firebase',
                star: '2k',
                fork: false,
                watch: false,
            },
            {
                companyIcon: 'https://crunchbase-production-res.cloudinary.com/image/upload/c_lpad,h_256,w_256,f_jpg/v1481031537/j9c8urpwe7uabwmt2qau.png',
                companyName: 'Ionic',
                star: false,
                fork: false,
                watch: 22,
            },
            {
                companyIcon: 'https://www.gstatic.com/images/branding/product/2x/app_maker_64dp.png',
                companyName: 'google dev',
                star: false,
                watch: false,
                fork: '22',
            }
        ];
    }
    SalesListComponent.prototype.ngOnInit = function () {
    };
    SalesListComponent.prototype.reload = function () {
        var _this = this;
        this.showLoader = true;
        setTimeout(function () {
            _this.showLoader = false;
        }, 2000);
    };
    SalesListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-sales-list',
            template: __webpack_require__(/*! ./sales-list.component.html */ "./src/app/dashboard-widget/sales-list/sales-list.component.html"),
            styles: [__webpack_require__(/*! ./sales-list.component.scss */ "./src/app/dashboard-widget/sales-list/sales-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SalesListComponent);
    return SalesListComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-widget/share-price/share-price.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard-widget/share-price/share-price.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\">\n    <header><button mat-raised-button color=\"primary\">Today Appointment</button></header>\n    <table mat-table [dataSource]=\"dataSource\">\n  \n      <!-- Position Column -->\n      <ng-container matColumnDef=\"position\">\n        <th mat-header-cell *matHeaderCellDef class=\"tab10\"> No. </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n      </ng-container>\n  \n      <!-- Name Column -->\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef  class=\"tab10\"> Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n      </ng-container>\n  \n      <!-- Weight Column -->\n      <ng-container matColumnDef=\"case\">\n        <th mat-header-cell *matHeaderCellDef class=\"tab10\"> Case </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.case}} </td>\n      </ng-container>\n  \n      <!-- Symbol Column -->\n      <ng-container matColumnDef=\"status\">\n        <th mat-header-cell *matHeaderCellDef class=\"tab10\"> Status </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.status}} </td>\n      </ng-container>\n  \n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  \n    <mat-paginator [pageSizeOptions]=\"[3,5]\" showFirstLastButtons></mat-paginator>\n  </div>"

/***/ }),

/***/ "./src/app/dashboard-widget/share-price/share-price.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard-widget/share-price/share-price.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-elevation-z8 {\n  margin: 10px 5px;\n  background-color: white; }\n\n.nav-item {\n  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);\n  cursor: default; }\n\n.nav-item:hover {\n    -webkit-transform: translate(0, -8px);\n            transform: translate(0, -8px);\n    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.16); }\n\ntable {\n  width: 100%; }\n\n.tab10 {\n  font-weight: 900 !important;\n  font-family: \"Helvetica Neue\", sans-serif !important;\n  font-size: 14px; }\n"

/***/ }),

/***/ "./src/app/dashboard-widget/share-price/share-price.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard-widget/share-price/share-price.component.ts ***!
  \***********************************************************************/
/*! exports provided: SharePriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharePriceComponent", function() { return SharePriceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SharePriceComponent = /** @class */ (function () {
    function SharePriceComponent() {
        this.displayedColumns = ['position', 'name', 'case', 'status'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
    }
    SharePriceComponent.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], SharePriceComponent.prototype, "paginator", void 0);
    SharePriceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-share-price',
            template: __webpack_require__(/*! ./share-price.component.html */ "./src/app/dashboard-widget/share-price/share-price.component.html"),
            styles: [__webpack_require__(/*! ./share-price.component.scss */ "./src/app/dashboard-widget/share-price/share-price.component.scss")]
        })
    ], SharePriceComponent);
    return SharePriceComponent;
}());

var ELEMENT_DATA = [
    { position: 1, name: 'Ranjith', case: 'civil', status: 'closed' },
    { position: 2, name: 'Kumar', case: 'Criminal', status: 'Pending' },
    { position: 3, name: 'Arun', case: 'Criminal', status: 'InProgress' },
    { position: 4, name: 'Vinoth', case: 'Criminal', status: 'closed' },
    { position: 5, name: 'Kamal', case: 'Criminal', status: 'Pending' },
    { position: 6, name: 'Saravanan', case: 'Criminal', status: 'InProgress' },
    { position: 7, name: 'praba', case: 'civil', status: 'InProgress' },
    { position: 8, name: 'karan', case: 'Criminal', status: 'Pending' },
    { position: 9, name: 'Ranjith', case: 'civil', status: 'closed' },
    { position: 10, name: 'kumar', case: 'Criminal', status: 'Pending' },
    { position: 11, name: 'udayakumar', case: 'Criminal', status: 'InProgress' },
    { position: 12, name: 'vijay', case: 'civil', status: 'InProgress' },
    { position: 13, name: 'palani', case: 'Criminal', status: 'closed' },
    { position: 14, name: 'tamil', case: 'civil', status: 'Pending' },
    { position: 15, name: 'sarvanan', case: 'Criminal', status: 'closedP' },
    { position: 16, name: 'prabakaran', case: 'Criminal', status: 'Pending' },
    { position: 17, name: 'Arul', case: 'civil', status: 'Cl' },
    { position: 18, name: 'kamal', case: 'Criminal', status: 'closed' },
    { position: 19, name: 'Ajith', case: 'civil', status: 'Pending' },
    { position: 20, name: 'Vijay', case: 'civil', status: 'closed' },
];


/***/ }),

/***/ "./src/app/dashboard-widget/table/table.component.html":
/*!*************************************************************!*\
  !*** ./src/app/dashboard-widget/table/table.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"dash-table-holder mat-elevation-z4 \" [ngStyle]=\"{'height':'220px'}\">\n  <canvas id=\"dash-table\">\n    \n   \n    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n      <!--- Note that these columns can be defined in any order.\n            The actual rendered columns are set as a property on the row definition\" -->\n    \n      <!-- Position Column -->\n      <ng-container matColumnDef=\"position\">\n        <th mat-header-cell *matHeaderCellDef> No. </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n      </ng-container>\n    \n      <!-- Name Column -->\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef> Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n      </ng-container>\n    \n      <!-- Weight Column -->\n      <ng-container matColumnDef=\"weight\">\n        <th mat-header-cell *matHeaderCellDef> Weight </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n      </ng-container>\n    \n      <!-- Symbol Column -->\n      <ng-container matColumnDef=\"symbol\">\n        <th mat-header-cell *matHeaderCellDef> Symbol </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n      </ng-container>\n    \n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </canvas>\n</div>\n    "

/***/ }),

/***/ "./src/app/dashboard-widget/table/table.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/dashboard-widget/table/table.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dash-table-holder {\n  margin: 10px 5px;\n  background-color: white; }\n"

/***/ }),

/***/ "./src/app/dashboard-widget/table/table.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/dashboard-widget/table/table.component.ts ***!
  \***********************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
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

var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
/**
 * @title Basic use of `<table mat-table>`
 */
var TableComponent = /** @class */ (function () {
    function TableComponent() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA;
    }
    TableComponent.prototype.ngOnInit = function () {
    };
    TableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/dashboard-widget/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.scss */ "./src/app/dashboard-widget/table/table.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TableComponent);
    return TableComponent;
}());



/***/ })

}]);
//# sourceMappingURL=auth-auth-module.js.map