(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-crm-1-dashboard-crm-module"],{

/***/ "./src/app/dashboard-crm.1/dashboard-crm.component.html":
/*!**************************************************************!*\
  !*** ./src/app/dashboard-crm.1/dashboard-crm.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n <div fxLayout=\"row\" fxLayout=\"row wrap\">\n    <cdk-bar-graph fxFlex=\"80\" fxFlex.lt-sm=\"90\" fxFlex.sm=\"50\"></cdk-bar-graph >\n        <cdk-sales-list fxFlex=\"20\" fxFlex.lt-sm=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"30\"></cdk-sales-list>\n</div>\n <div fxLayout=\"row\" fxLayout=\"row wrap\">\n    <cdk-line-graph fxFlex=\"80\" fxFlex.lt-sm=\"90\" fxFlex.sm=\"50\"></cdk-line-graph>\n    \n</div>\n<div fxLayout=\"row\" fxLayout=\"row wrap\">\n        <cdk-share-price fxFlex=\"80\" fxFlex.lt-sm=\"90\" fxFlex.sm=\"50\"></cdk-share-price> \n</div> \n<div fxLayout=\"row\" fxLayout=\"row wrap\">\n        <cdk-d3-usa fxFlex=\"80\" fxFlex.lt-sm=\"90\" fxFlex.sm=\"50\"></cdk-d3-usa> \n</div>\n<div fxLayout=\"row\" fxLayout=\"row wrap\">\n        <cdk-reviews fxFlex=\"80\" fxFlex.lt-sm=\"90\" fxFlex.sm=\"50\"></cdk-reviews> \n</div>\n\n<!--<div fxLayout=\"row\" fxLayout=\"row wrap\">\n    <cdk-sales-list fxFlex=\"60\" fxFlex.lt-sm=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"70\"></cdk-sales-list>\n    <cdk-profile-card fxFlex=\"40\" fxFlex.lt-sm=\"100\" fxFlex.sm=\"100\" fxFlex.md=\"30\"></cdk-profile-card>\n</div>\n\n<div fxLayout=\"row\" fxLayout=\"row wrap\">\n    <div fxFlex.lt-sm=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"25\">\n        <cdk-round-progressbar [title]=\"'SALES'\" [current]=\"'23'\" [max]=\"'100'\" [background]=\"'#FFF968'\" [color]=\"'#B1A7FF'\" [boxcolor]=\"'#7986CB'\"></cdk-round-progressbar>\n    </div>\n    <div fxFlex.lt-sm=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"25\">\n        <cdk-round-progressbar [title]=\"'LEADS'\" [current]=\"'33'\" [max]=\"'100'\" [background]=\"'#FFE268'\" [color]=\"'#A7C1FF'\" [boxcolor]=\"'#42A5F5'\"></cdk-round-progressbar>\n    </div>\n    <div fxFlex.lt-sm=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"25\">\n        <cdk-round-progressbar [title]=\"'ASSETS'\" [current]=\"'78'\" [max]=\"'100'\" [background]=\"'#FFC368'\" [color]=\"'#A7F0FF'\" [boxcolor]=\"'#26A69A'\"></cdk-round-progressbar>\n    </div>\n    <div fxFlex.lt-sm=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"25\">\n        <cdk-round-progressbar [title]=\"'BANKING'\" [current]=\"'90'\" [max]=\"'100'\" [background]=\"'#FFCF68'\" [color]=\"'#A7DEFF'\" [boxcolor]=\"'#26C6DA'\"></cdk-round-progressbar>\n    </div>\n</div>\n -->\n"

/***/ }),

/***/ "./src/app/dashboard-crm.1/dashboard-crm.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/dashboard-crm.1/dashboard-crm.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  padding: 5px;\n  margin: 5px; }\n"

/***/ }),

/***/ "./src/app/dashboard-crm.1/dashboard-crm.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard-crm.1/dashboard-crm.component.ts ***!
  \************************************************************/
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
            { colorDark: '#5C6BC0', colorLight: '#7986CB', number: 70, title: 'ACTIVE CLIENTS', icon: 'update' },
            { colorDark: '#5C6BC0', colorLight: '#7986CB', number: 20, title: 'APPONIMENT', icon: 'assignments' },
            { colorDark: '#5C6BC0', colorLight: '#7986CB', number: 15, title: 'TODAY APPONIMENT', icon: 'update' }
        ];
    }
    DashboardCrmComponent.prototype.ngOnInit = function () {
    };
    DashboardCrmComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard-crm',
            template: __webpack_require__(/*! ./dashboard-crm.component.html */ "./src/app/dashboard-crm.1/dashboard-crm.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-crm.component.scss */ "./src/app/dashboard-crm.1/dashboard-crm.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardCrmComponent);
    return DashboardCrmComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-crm.1/dashboard-crm.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/dashboard-crm.1/dashboard-crm.module.ts ***!
  \*********************************************************/
/*! exports provided: appRoutes, DashboardCrmModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardCrmModule", function() { return DashboardCrmModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _dashboard_crm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard-crm.component */ "./src/app/dashboard-crm.1/dashboard-crm.component.ts");
/* harmony import */ var _dashboard_widget_1_dashboard_widget_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dashboard-widget.1/dashboard-widget.module */ "./src/app/dashboard-widget.1/dashboard-widget.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var appRoutes = [
    { path: '', component: _dashboard_crm_component__WEBPACK_IMPORTED_MODULE_6__["DashboardCrmComponent"] },
];
var DashboardCrmModule = /** @class */ (function () {
    function DashboardCrmModule() {
    }
    DashboardCrmModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(appRoutes),
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_5__["CdkTableModule"],
                _dashboard_widget_1_dashboard_widget_module__WEBPACK_IMPORTED_MODULE_7__["DashboardWidgetModule"]
            ],
            declarations: [_dashboard_crm_component__WEBPACK_IMPORTED_MODULE_6__["DashboardCrmComponent"]],
            exports: []
        })
    ], DashboardCrmModule);
    return DashboardCrmModule;
}());



/***/ }),

/***/ "./src/app/dashboard-widget.1/bar-graph/bar-graph.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard-widget.1/bar-graph/bar-graph.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"mat-elevation-z8\">\n  <div class=\"profile-card-holder\">\n    <div fxLayout=\"column\" >\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-around\"  >\n            <div class=\"banner\">\n                 <img width=\"200\" [style.borderRadius]=\"'50%'\" src=\"./assets/user-image.jpg\">\n            </div>\n        </div>\n         <div class=\"profile-details mat-elevation-z8\" >\n            <span class=\"pull-right\">\n            <button mat-icon-button>\n              <mat-icon mat-icon (click)=\"openDialog()\">edit</mat-icon>\n            </button></span>\n            <div fxLayout=\"column\" class=\"profile-details-holder\">\n                <h1> <span class=\"tab\">HariKrishna S</span>\n                     <span class=\"tab2\">Language:English.Tamil</span>\n                </h1>\n                <h2> <span class=\"tab1\">Senior Lawyer</span>\n                     <span class=\"tab3\">Rating:<mat-icon class=\"tab5\">star_rate</mat-icon>\n                      <mat-icon class=\"tab5\">star_rate</mat-icon>\n                      <mat-icon class=\"tab5\">star_rate</mat-icon>\n                      <mat-icon class=\"tab5\">star_rate</mat-icon>\n                      <mat-icon >star_rate</mat-icon>\n                    </span>\n                </h2> \n                <h2><span class=\"left-align\"><mat-icon>location_on</mat-icon> Chennai</span> \n                  <span class=\"right-align\">Experience: 5 Years</span></h2>              \n            </div>\n        </div>        \n    </div>\n  </div>\n</div> \n      \n "

/***/ }),

/***/ "./src/app/dashboard-widget.1/bar-graph/bar-graph.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard-widget.1/bar-graph/bar-graph.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-elevation-z8 {\n  margin: 25px 35px;\n  background-color: white;\n  border: 1px solid black; }\n\n.nav-item {\n  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);\n  cursor: default; }\n\n.nav-item:hover {\n    -webkit-transform: translate(0, -8px);\n            transform: translate(0, -8px);\n    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.16); }\n\ntable {\n  width: 100%; }\n\n.nav-item {\n  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);\n  cursor: default; }\n\n.nav-item:hover {\n    -webkit-transform: translate(0, -8px);\n            transform: translate(0, -8px);\n    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.16); }\n\n.profilecontent {\n  text-align: center !important; }\n\n.left-align {\n  text-align: left;\n  margin-left: 10px;\n  font-size: 21px; }\n\n.right-align {\n  float: right;\n  margin-right: 10px;\n  font-size: 21px; }\n\n.tab {\n  text-align: left;\n  margin-left: 10px;\n  font-size: 23px; }\n\n.tab1 {\n  text-align: left;\n  margin-left: 10px;\n  font-size: 21px; }\n\n.tab2 {\n  float: right;\n  margin-right: 10px;\n  font-size: 21px; }\n\n.tab3 {\n  float: right;\n  margin-right: 10px;\n  font-size: 21px; }\n\n.pull-right {\n  float: right;\n  margin-right: 10px; }\n\n.tab5 {\n  color: yellow; }\n"

/***/ }),

/***/ "./src/app/dashboard-widget.1/bar-graph/bar-graph.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard-widget.1/bar-graph/bar-graph.component.ts ***!
  \*********************************************************************/
/*! exports provided: BarGraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarGraphComponent", function() { return BarGraphComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialog_bbox_dialog_bbox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dialog-bbox/dialog-bbox.component */ "./src/app/dashboard-widget.1/dialog-bbox/dialog-bbox.component.ts");
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
    function BarGraphComponent(dialog) {
        this.dialog = dialog;
        this.bio = true;
    }
    BarGraphComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_dialog_bbox_dialog_bbox_component__WEBPACK_IMPORTED_MODULE_2__["DialogBboxComponent"], {
            height: '450px',
            width: '700px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
        });
    };
    BarGraphComponent.prototype.ngOnInit = function () {
    };
    BarGraphComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-bar-graph',
            template: __webpack_require__(/*! ./bar-graph.component.html */ "./src/app/dashboard-widget.1/bar-graph/bar-graph.component.html"),
            styles: [__webpack_require__(/*! ./bar-graph.component.scss */ "./src/app/dashboard-widget.1/bar-graph/bar-graph.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], BarGraphComponent);
    return BarGraphComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-widget.1/d3-usa/d3-usa.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard-widget.1/d3-usa/d3-usa.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\">\n        <mat-toolbar>  \n           <mat-toolbar-row>\n            <button mat-raised-button color=\"primary\">COURTS\n            </button>\n            <span class=\"pull-right\"></span>\n                <button mat-icon-button>\n                  <mat-icon mat-icon (click)=\"openDialog()\">edit</mat-icon>\n                </button>\n        \n           </mat-toolbar-row>\n          </mat-toolbar>\n          <mat-list>\n                <mat-list-item><mat-icon>account_balance</mat-icon>Delhi High Court,  District Court, Gurgaon, </mat-list-item>\n                <mat-divider></mat-divider>\n                <mat-list-item><mat-icon>account_balance</mat-icon>District Court, Saket,  District Court</mat-list-item>\n                <mat-divider></mat-divider>\n                <mat-list-item><mat-icon>account_balance</mat-icon>Supreme Court Of India </mat-list-item>\n              </mat-list>\n            </div> "

/***/ }),

/***/ "./src/app/dashboard-widget.1/d3-usa/d3-usa.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard-widget.1/d3-usa/d3-usa.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-elevation-z8 {\n  margin: 20px 35px;\n  background-color: white;\n  border: 1px solid black; }\n"

/***/ }),

/***/ "./src/app/dashboard-widget.1/d3-usa/d3-usa.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/dashboard-widget.1/d3-usa/d3-usa.component.ts ***!
  \***************************************************************/
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
            template: __webpack_require__(/*! ./d3-usa.component.html */ "./src/app/dashboard-widget.1/d3-usa/d3-usa.component.html"),
            styles: [__webpack_require__(/*! ./d3-usa.component.scss */ "./src/app/dashboard-widget.1/d3-usa/d3-usa.component.scss")]
        })
    ], D3UsaComponent);
    return D3UsaComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-widget.1/dashboard-widget.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/dashboard-widget.1/dashboard-widget.module.ts ***!
  \***************************************************************/
/*! exports provided: DashboardWidgetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardWidgetModule", function() { return DashboardWidgetModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dashcard_dashcard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashcard/dashcard.component */ "./src/app/dashboard-widget.1/dashcard/dashcard.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _line_graph_line_graph_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./line-graph/line-graph.component */ "./src/app/dashboard-widget.1/line-graph/line-graph.component.ts");
/* harmony import */ var _bar_graph_bar_graph_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bar-graph/bar-graph.component */ "./src/app/dashboard-widget.1/bar-graph/bar-graph.component.ts");
/* harmony import */ var _doughnut_graph_doughnut_graph_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./doughnut-graph/doughnut-graph.component */ "./src/app/dashboard-widget.1/doughnut-graph/doughnut-graph.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./reviews/reviews.component */ "./src/app/dashboard-widget.1/reviews/reviews.component.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var ng2_odometer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng2-odometer */ "./node_modules/ng2-odometer/dist/index.js");
/* harmony import */ var ng2_odometer__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(ng2_odometer__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _share_price_share_price_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./share-price/share-price.component */ "./src/app/dashboard-widget.1/share-price/share-price.component.ts");
/* harmony import */ var _round_progressbar_round_progressbar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./round-progressbar/round-progressbar.component */ "./src/app/dashboard-widget.1/round-progressbar/round-progressbar.component.ts");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! angular-svg-round-progressbar */ "./node_modules/angular-svg-round-progressbar/dist/index.js");
/* harmony import */ var angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _sales_list_sales_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./sales-list/sales-list.component */ "./src/app/dashboard-widget.1/sales-list/sales-list.component.ts");
/* harmony import */ var _d3_usa_d3_usa_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./d3-usa/d3-usa.component */ "./src/app/dashboard-widget.1/d3-usa/d3-usa.component.ts");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./table/table.component */ "./src/app/dashboard-widget.1/table/table.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./dialog-box/dialog-box.component */ "./src/app/dashboard-widget.1/dialog-box/dialog-box.component.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _dialog_abox_dialog_abox_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./dialog-abox/dialog-abox.component */ "./src/app/dashboard-widget.1/dialog-abox/dialog-abox.component.ts");
/* harmony import */ var _dialog_bbox_dialog_bbox_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./dialog-bbox/dialog-bbox.component */ "./src/app/dashboard-widget.1/dialog-bbox/dialog-bbox.component.ts");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
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
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
                ng2_odometer__WEBPACK_IMPORTED_MODULE_20__["Ng2OdometerModule"],
                angular_svg_round_progressbar__WEBPACK_IMPORTED_MODULE_23__["RoundProgressModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatTableModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_18__["CdkTableModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_29__["MatInputModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_32__["MatTreeModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_33__["MatRippleModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_34__["MatExpansionModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_35__["DragDropModule"]
            ],
            declarations: [
                _dashcard_dashcard_component__WEBPACK_IMPORTED_MODULE_3__["DashcardComponent"],
                _line_graph_line_graph_component__WEBPACK_IMPORTED_MODULE_10__["LineGraphComponent"],
                _bar_graph_bar_graph_component__WEBPACK_IMPORTED_MODULE_11__["BarGraphComponent"],
                _doughnut_graph_doughnut_graph_component__WEBPACK_IMPORTED_MODULE_12__["DoughnutGraphComponent"],
                _d3_usa_d3_usa_component__WEBPACK_IMPORTED_MODULE_25__["D3UsaComponent"],
                _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_16__["ReviewsComponent"],
                _share_price_share_price_component__WEBPACK_IMPORTED_MODULE_21__["SharePriceComponent"],
                _round_progressbar_round_progressbar_component__WEBPACK_IMPORTED_MODULE_22__["RoundProgressbarComponent"],
                _sales_list_sales_list_component__WEBPACK_IMPORTED_MODULE_24__["SalesListComponent"],
                _d3_usa_d3_usa_component__WEBPACK_IMPORTED_MODULE_25__["D3UsaComponent"],
                _table_table_component__WEBPACK_IMPORTED_MODULE_26__["TableComponent"],
                _dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_28__["DialogBoxComponent"],
                _dialog_abox_dialog_abox_component__WEBPACK_IMPORTED_MODULE_30__["DialogAboxComponent"],
                _dialog_bbox_dialog_bbox_component__WEBPACK_IMPORTED_MODULE_31__["DialogBboxComponent"],
            ],
            exports: [
                _dashcard_dashcard_component__WEBPACK_IMPORTED_MODULE_3__["DashcardComponent"],
                _line_graph_line_graph_component__WEBPACK_IMPORTED_MODULE_10__["LineGraphComponent"],
                _bar_graph_bar_graph_component__WEBPACK_IMPORTED_MODULE_11__["BarGraphComponent"],
                _doughnut_graph_doughnut_graph_component__WEBPACK_IMPORTED_MODULE_12__["DoughnutGraphComponent"],
                _d3_usa_d3_usa_component__WEBPACK_IMPORTED_MODULE_25__["D3UsaComponent"],
                _reviews_reviews_component__WEBPACK_IMPORTED_MODULE_16__["ReviewsComponent"],
                _share_price_share_price_component__WEBPACK_IMPORTED_MODULE_21__["SharePriceComponent"],
                _round_progressbar_round_progressbar_component__WEBPACK_IMPORTED_MODULE_22__["RoundProgressbarComponent"],
                _sales_list_sales_list_component__WEBPACK_IMPORTED_MODULE_24__["SalesListComponent"],
                _d3_usa_d3_usa_component__WEBPACK_IMPORTED_MODULE_25__["D3UsaComponent"],
            ],
            entryComponents: [
                _dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_28__["DialogBoxComponent"], _dialog_abox_dialog_abox_component__WEBPACK_IMPORTED_MODULE_30__["DialogAboxComponent"], _dialog_bbox_dialog_bbox_component__WEBPACK_IMPORTED_MODULE_31__["DialogBboxComponent"],
            ]
        })
    ], DashboardWidgetModule);
    return DashboardWidgetModule;
}());



/***/ }),

/***/ "./src/app/dashboard-widget.1/dashcard/dashcard.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard-widget.1/dashcard/dashcard.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\"  class=\"dashcard mat-elevation-z4 \"  >\n    <div fxFlex=\"40\" fxLayout=\"row\"  fxLayoutAlign=\"center center\" [style.background]=\"dashData?.colorLight\">\n        <mat-icon  class=\"cardIcon\">{{dashData?.icon}}</mat-icon>\n    </div>\n    <div  fxFlex=\"60\" fxLayout=\"column\" fxLayoutAlign=\"center center\" [style.background]=\"dashData?.colorDark\" >\n         \n        <div style=\"color: white;font-size: 40px\">\n            <ng2-odometer [number]=\"dashData?.number\" [config]=\"{ }\"></ng2-odometer>\n            \n        </div>\n        <p class=\"mat-body-1 border-top\">\n            {{dashData?.title}}\n        </p>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard-widget.1/dashcard/dashcard.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard-widget.1/dashcard/dashcard.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-item {\n  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);\n  cursor: default; }\n  .nav-item:hover {\n    -webkit-transform: translate(0, -8px);\n            transform: translate(0, -8px);\n    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.16); }\n"

/***/ }),

/***/ "./src/app/dashboard-widget.1/dashcard/dashcard.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard-widget.1/dashcard/dashcard.component.ts ***!
  \*******************************************************************/
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
            template: __webpack_require__(/*! ./dashcard.component.html */ "./src/app/dashboard-widget.1/dashcard/dashcard.component.html"),
            styles: [__webpack_require__(/*! ./dashcard.component.scss */ "./src/app/dashboard-widget.1/dashcard/dashcard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashcardComponent);
    return DashcardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-widget.1/dialog-abox/dialog-abox.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard-widget.1/dialog-abox/dialog-abox.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-header>SPECIALIZATION</h2>\n<mat-dialog-content class=\"mat-typography\">\n    <form class=\"example-form\">\n        <mat-form-field class=\"example-full-width\">\n          <textarea matInput placeholder=\"Leave a comment\"></textarea>\n        </mat-form-field>\n      </form>\n</mat-dialog-content>\n<br><br><br>\n<mat-dialog-actions align=\"end\">\n  <button mat-button mat-dialog-close  mat-raised-button color=\"primary\">Cancel</button>\n  <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial  mat-raised-button color=\"primary\">Add</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/dashboard-widget.1/dialog-abox/dialog-abox.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard-widget.1/dialog-abox/dialog-abox.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/dashboard-widget.1/dialog-abox/dialog-abox.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard-widget.1/dialog-abox/dialog-abox.component.ts ***!
  \*************************************************************************/
/*! exports provided: DialogAboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogAboxComponent", function() { return DialogAboxComponent; });
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

var DialogAboxComponent = /** @class */ (function () {
    function DialogAboxComponent() {
    }
    DialogAboxComponent.prototype.ngOnInit = function () {
    };
    DialogAboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog-abox',
            template: __webpack_require__(/*! ./dialog-abox.component.html */ "./src/app/dashboard-widget.1/dialog-abox/dialog-abox.component.html"),
            styles: [__webpack_require__(/*! ./dialog-abox.component.scss */ "./src/app/dashboard-widget.1/dialog-abox/dialog-abox.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DialogAboxComponent);
    return DialogAboxComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-widget.1/dialog-bbox/dialog-bbox.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard-widget.1/dialog-bbox/dialog-bbox.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-header>Profile</h2><hr>\n<mat-dialog-content class=\"mat-typography\">\n    <mat-form-field appearance=\"outline\" class=\"example-full-width\">\n        <mat-label>Name</mat-label>\n        <input matInput placeholder=\"Placeholder\">\n        <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n       \n      </mat-form-field>\n      <mat-form-field appearance=\"outline\" class=\"example-full-width\">\n          <mat-label>Language</mat-label>\n          <input matInput placeholder=\"Placeholder\">\n          <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n         \n        </mat-form-field>\n        <mat-form-field appearance=\"outline\" class=\"example-full-width\">\n            <mat-label>Experience</mat-label>\n            <input matInput placeholder=\"Placeholder\">\n            <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n           \n          </mat-form-field>\n          <mat-form-field appearance=\"outline\" class=\"example-full-width\">\n              <mat-label>Location</mat-label>\n              <input matInput placeholder=\"Placeholder\">\n              <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n             \n            </mat-form-field>\n            <mat-dialog-actions align=\"end\">\n                <button mat-button mat-dialog-close  mat-raised-button color=\"primary\">Cancel</button>\n                <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial  mat-raised-button color=\"primary\">Add</button>\n              </mat-dialog-actions>\n              \n\n</mat-dialog-content>"

/***/ }),

/***/ "./src/app/dashboard-widget.1/dialog-bbox/dialog-bbox.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard-widget.1/dialog-bbox/dialog-bbox.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-full-width {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/dashboard-widget.1/dialog-bbox/dialog-bbox.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard-widget.1/dialog-bbox/dialog-bbox.component.ts ***!
  \*************************************************************************/
/*! exports provided: DialogBboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogBboxComponent", function() { return DialogBboxComponent; });
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

var DialogBboxComponent = /** @class */ (function () {
    function DialogBboxComponent() {
    }
    DialogBboxComponent.prototype.ngOnInit = function () {
    };
    DialogBboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog-bbox',
            template: __webpack_require__(/*! ./dialog-bbox.component.html */ "./src/app/dashboard-widget.1/dialog-bbox/dialog-bbox.component.html"),
            styles: [__webpack_require__(/*! ./dialog-bbox.component.scss */ "./src/app/dashboard-widget.1/dialog-bbox/dialog-bbox.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DialogBboxComponent);
    return DialogBboxComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-widget.1/dialog-box/dialog-box.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard-widget.1/dialog-box/dialog-box.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-header>Summary</h2>\n<mat-dialog-content class=\"mat-typography\">\n    <form class=\"example-form\">\n        <mat-form-field class=\"example-full-width\">\n          <textarea matInput placeholder=\"Leave a comment\"></textarea>\n        </mat-form-field>\n      </form>\n</mat-dialog-content>\n<br><br><br>\n<mat-dialog-actions align=\"end\">\n  <button mat-button mat-dialog-close  mat-raised-button color=\"primary\">Cancel</button>\n  <button mat-button [mat-dialog-close]=\"true\" cdkFocusInitial  mat-raised-button color=\"primary\">Add</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/dashboard-widget.1/dialog-box/dialog-box.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard-widget.1/dialog-box/dialog-box.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/dashboard-widget.1/dialog-box/dialog-box.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard-widget.1/dialog-box/dialog-box.component.ts ***!
  \***********************************************************************/
/*! exports provided: DialogBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogBoxComponent", function() { return DialogBoxComponent; });
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

var DialogBoxComponent = /** @class */ (function () {
    function DialogBoxComponent() {
    }
    DialogBoxComponent.prototype.ngOnInit = function () {
    };
    DialogBoxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog-box',
            template: __webpack_require__(/*! ./dialog-box.component.html */ "./src/app/dashboard-widget.1/dialog-box/dialog-box.component.html"),
            styles: [__webpack_require__(/*! ./dialog-box.component.scss */ "./src/app/dashboard-widget.1/dialog-box/dialog-box.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DialogBoxComponent);
    return DialogBoxComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-widget.1/doughnut-graph/doughnut-graph.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/dashboard-widget.1/doughnut-graph/doughnut-graph.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"doughnut-graph-graph-holder mat-elevation-z4  \" [ngStyle]=\"{'height':'220px'}\">\n    <canvas id=\"doughnut-graph-graph\"></canvas>\n</div>"

/***/ }),

/***/ "./src/app/dashboard-widget.1/doughnut-graph/doughnut-graph.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/dashboard-widget.1/doughnut-graph/doughnut-graph.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".doughnut-graph-graph-holder {\n  margin: 10px 5px;\n  background-color: white; }\n\n.nav-item {\n  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);\n  cursor: default; }\n\n.nav-item:hover {\n    -webkit-transform: translate(0, -8px);\n            transform: translate(0, -8px);\n    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.16); }\n"

/***/ }),

/***/ "./src/app/dashboard-widget.1/doughnut-graph/doughnut-graph.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard-widget.1/doughnut-graph/doughnut-graph.component.ts ***!
  \*******************************************************************************/
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
            template: __webpack_require__(/*! ./doughnut-graph.component.html */ "./src/app/dashboard-widget.1/doughnut-graph/doughnut-graph.component.html"),
            styles: [__webpack_require__(/*! ./doughnut-graph.component.scss */ "./src/app/dashboard-widget.1/doughnut-graph/doughnut-graph.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DoughnutGraphComponent);
    return DoughnutGraphComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-widget.1/line-graph/line-graph.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard-widget.1/line-graph/line-graph.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\">\n <mat-toolbar >  \n<mat-toolbar-row class=\"rab\">\n  <span><button mat-raised-button color=\"primary\">Summary </button></span>\n    <span class=\"pull-right\"></span>\n            <button mat-icon-button>\n              <mat-icon mat-icon (click)=\"openDialog()\">edit</mat-icon>\n            </button>\n           \n</mat-toolbar-row>\n</mat-toolbar>        \n   \n  <p class=\"tab\">\n      Mr. Hari Krishna, Advocate, completed his law in the year 2003 and has been providing services in various fields of law, including, but not limited to Civil, Criminal, Arbitration, Labour & Service Matters, Intellectual Property Rights, Trademark, matters relating to Property Law, Copyright, inter-alia, Suits, Writs, Appeals, Revisions, Complaints relating to Debt Recovery, Dishonor of Cheques, Rent Control Act, Cheque Bounce Matters, Matrimonial disputes and drafting and vetting of various agreements, documents, will, MoU, and so on.</p>\n  <p class=\"tab\">He has extensive knowledge and expertise in consumer matters and has appeared before both SCDRC and NCDRC. He also specialises in corruption and CBI cases, and has dealt extensively in NDPS matters. \n\n      He started his practice with Mr. P.N LEKHI, Sr. Advocate and worked with him for four years, and since 2007 has been practicing and handling cases independently with a result oriented approach, both professionally and ethically.\n  </p>\n  \n  </div>"

/***/ }),

/***/ "./src/app/dashboard-widget.1/line-graph/line-graph.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard-widget.1/line-graph/line-graph.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-elevation-z8 {\n  margin: 20px 35px;\n  background-color: white;\n  border: 1px solid black; }\n\ntable {\n  width: 100%; }\n\n.tab {\n  font-size: 16px;\n  font-family: Roboto;\n  color: #030303;\n  margin-top: 20px;\n  font: center;\n  margin-left: 8px;\n  text-align: justify;\n  word-spacing: 4px; }\n\n.pull-right {\n  flex: 1 1 auto; }\n"

/***/ }),

/***/ "./src/app/dashboard-widget.1/line-graph/line-graph.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard-widget.1/line-graph/line-graph.component.ts ***!
  \***********************************************************************/
/*! exports provided: LineGraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineGraphComponent", function() { return LineGraphComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dialog-box/dialog-box.component */ "./src/app/dashboard-widget.1/dialog-box/dialog-box.component.ts");
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
    function LineGraphComponent(dialog) {
        this.dialog = dialog;
    }
    LineGraphComponent.prototype.ngOnInit = function () { };
    LineGraphComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_2__["DialogBoxComponent"], {
            height: '300px',
            width: '600px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
        });
    };
    LineGraphComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-line-graph',
            template: __webpack_require__(/*! ./line-graph.component.html */ "./src/app/dashboard-widget.1/line-graph/line-graph.component.html"),
            styles: [__webpack_require__(/*! ./line-graph.component.scss */ "./src/app/dashboard-widget.1/line-graph/line-graph.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], LineGraphComponent);
    return LineGraphComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-widget.1/reviews/reviews.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard-widget.1/reviews/reviews.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\">\r\n        <mat-toolbar >  \r\n       <mat-toolbar-row class=\"rab\">\r\n         <span><button mat-raised-button color=\"primary\">Reviews </button></span>\r\n           \r\n                  \r\n       </mat-toolbar-row>\r\n       </mat-toolbar>\r\n       <h3 class=\"tab9\">Ranjithkumar:</h3>\r\n       <div cdkDropList class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\r\n            <div class=\"example-box\">\r\n                <div class=\"tab8\">\r\n                Very cooperative & have a good understanding on every issues.\r\n                </div>  \r\n            </div>\r\n          </div>\r\n          <h3 class=\"tab9\">kumar:</h3>\r\n          <div cdkDropList class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\r\n               <div class=\"example-box\">\r\n                   <div class=\"tab8\">\r\n                        The lawyer was an expert in my legal issue. The lawyer gave me the right guidance. The lawyer helped me in taking the right decision going forward. Excellent\r\n                   </div>  \r\n               </div>\r\n             </div>  \r\n     \r\n            \r\n      \r\n       <mat-accordion>\r\n            <mat-expansion-panel>\r\n              <mat-expansion-panel-header align=\"end\" >\r\n                  <div class=\"tab7\">\r\n                    <button mat-raised-button color=\"primary\"> More</button>\r\n                </div>\r\n             </mat-expansion-panel-header>\r\n             <h3>Vinoth:</h3>\r\n             <div cdkDropList class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\r\n                  <div class=\"example-box\">\r\n                      <div class=\"tab8\">\r\n                            The lawyer helped me in taking the right decision going forward.\r\n                      </div>  \r\n                  </div>\r\n                </div> \r\n            </mat-expansion-panel>\r\n            <mat-expansion-panel (opened)=\"panelOpenState = true\"\r\n                                 (closed)=\"panelOpenState = false\">\r\n              \r\n            \r\n            </mat-expansion-panel>\r\n          </mat-accordion>\r\n        \r\n</div>"

/***/ }),

/***/ "./src/app/dashboard-widget.1/reviews/reviews.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/dashboard-widget.1/reviews/reviews.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\n.tab7 {\n  flex: 1 1 auto; }\n\n.example-list {\n  width: 90%;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 50px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  margin: 20px 10px; }\n\n.example-box {\n  padding: 20px 20px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  background: white;\n  font-size: 14px; }\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.cdk-drag-placeholder {\n  opacity: 0; }\n\n.cdk-drag-animating {\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\n.example-box:last-child {\n  border: none; }\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1); }\n\n.tab8 {\n  font-size: 19px; }\n\n.tab9 {\n  margin: 20px 10px; }\n"

/***/ }),

/***/ "./src/app/dashboard-widget.1/reviews/reviews.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/dashboard-widget.1/reviews/reviews.component.ts ***!
  \*****************************************************************/
/*! exports provided: ReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsComponent", function() { return ReviewsComponent; });
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

var ReviewsComponent = /** @class */ (function () {
    function ReviewsComponent() {
        this.panelOpenState = false;
    }
    ReviewsComponent.prototype.ngOnInit = function () {
    };
    ReviewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-reviews',
            template: __webpack_require__(/*! ./reviews.component.html */ "./src/app/dashboard-widget.1/reviews/reviews.component.html"),
            styles: [__webpack_require__(/*! ./reviews.component.scss */ "./src/app/dashboard-widget.1/reviews/reviews.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ReviewsComponent);
    return ReviewsComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-widget.1/round-progressbar/round-progressbar.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/dashboard-widget.1/round-progressbar/round-progressbar.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"round-progressbar mat-elevation-z4 \"  fxLayout=\"column\" [style.background]=\"boxcolor\">\n    <h1 class=\"mat-headline header\">\n            {{title}}\n    </h1>\n    <div  fxLayout=\"row\" >\n\n        <div fxFlex=\"10\">\n        </div>\n        <div fxFlex=\"80\" >\n              <div class=\"progress-wrapper\">\n                    <div class=\"current mat-headline \" [ngStyle]=\"getOverlayStyle()\">{{ current }}/{{ max }}</div>\n                    <round-progress  [current]=\"current\"\n                    [max]=\"max\"\n                    [color]=\"color\"\n                    [background]=\"background\"\n                    [radius]=\"125\"\n                    [stroke]=\"30\"\n                    [semicircle]=\"semicircle\"\n                    [rounded]=\"rounded\"\n                    [clockwise]=\"clockwise\"\n                    [responsive]=\"responsive\"\n                    [duration]=\"800\"\n                    [animation]=\"animation\"\n                    [animationDelay]=\"1\"\n                     ></round-progress>\n              </div>\n           \n        </div>\n        <div  fxFlex=\"10\"></div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/dashboard-widget.1/round-progressbar/round-progressbar.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/dashboard-widget.1/round-progressbar/round-progressbar.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard-widget.1/round-progressbar/round-progressbar.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/dashboard-widget.1/round-progressbar/round-progressbar.component.ts ***!
  \*************************************************************************************/
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
            template: __webpack_require__(/*! ./round-progressbar.component.html */ "./src/app/dashboard-widget.1/round-progressbar/round-progressbar.component.html"),
            styles: [__webpack_require__(/*! ./round-progressbar.component.scss */ "./src/app/dashboard-widget.1/round-progressbar/round-progressbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RoundProgressbarComponent);
    return RoundProgressbarComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-widget.1/sales-list/sales-list.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard-widget.1/sales-list/sales-list.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"sales-list mat-elevation-z4 \"  >\n    <mat-toolbar>\n        \n        <mat-toolbar-row>\n            <span>PEOPLE</span>\n            <span class=\"pull-right\"></span>\n            <button mat-icon-button>\n              <mat-icon (click)=\"reload();\" >refresh</mat-icon>\n            </button>\n           <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n                  <mat-icon>more_vert</mat-icon>\n                </button>\n                <mat-menu #menu=\"matMenu\">\n                  <button mat-menu-item>\n                    <mat-icon>list</mat-icon>\n                    <span>List</span>\n                  </button>\n                 \n                </mat-menu>\n          </mat-toolbar-row>\n    </mat-toolbar>\n    <mat-progress-bar *ngIf=\"showLoader\"\n          [color]=\"'primary'\"\n          [mode]=\"'indeterminate'\"\n          [value]=\"90\"\n          [bufferValue]=\"'10'\">\n      </mat-progress-bar>\n    <mat-list >\n    <mat-list-item *ngFor=\"let sale of sales\"   >\n        <img  matListAvatar [src]=\"sale.companyIcon\" alt=\"Image of {{sale.name}}\">\n        <h3  > {{sale.companyName}} </h3>\n        <span class=\"pull-right\"></span>\n        \n    </mat-list-item>\n</mat-list>\n\n</div>"

/***/ }),

/***/ "./src/app/dashboard-widget.1/sales-list/sales-list.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard-widget.1/sales-list/sales-list.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-elevation-z4 {\n  margin: 23px 1px;\n  background-color: white;\n  border: 1px solid black; }\n\n.nav-item {\n  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);\n  cursor: default; }\n\n.nav-item:hover {\n    -webkit-transform: translate(0, -8px);\n            transform: translate(0, -8px);\n    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.16); }\n"

/***/ }),

/***/ "./src/app/dashboard-widget.1/sales-list/sales-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard-widget.1/sales-list/sales-list.component.ts ***!
  \***********************************************************************/
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
                companyIcon: "./assets/user-image1.jpg",
                companyName: 'Ranjith',
                star: '20',
                fork: false,
                watch: false,
            },
            {
                companyIcon: "./assets/user-image.jpg",
                companyName: 'kumar',
                star: '2k',
                fork: false,
                watch: false,
            },
            {
                companyIcon: "./assets/user-image1.jpg",
                companyName: 'prabakran',
                star: false,
                fork: false,
                watch: 22,
            },
            {
                companyIcon: "./assets/user-image.jpg",
                companyName: 'vijay',
                star: false,
                watch: false,
                fork: '22',
            },
            {
                companyIcon: './assets/user-image1.jpg',
                companyName: 'Ranjith',
                star: '20',
                fork: false,
                watch: false,
            },
            {
                companyIcon: "./assets/user-image.jpg",
                companyName: 'kumar',
                star: '2k',
                fork: false,
                watch: false,
            },
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
            template: __webpack_require__(/*! ./sales-list.component.html */ "./src/app/dashboard-widget.1/sales-list/sales-list.component.html"),
            styles: [__webpack_require__(/*! ./sales-list.component.scss */ "./src/app/dashboard-widget.1/sales-list/sales-list.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SalesListComponent);
    return SalesListComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-widget.1/share-price/share-price.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard-widget.1/share-price/share-price.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z8\">\n    <mat-toolbar>  \n       <mat-toolbar-row>\n        <button mat-raised-button color=\"primary\">SPECIALIZATION\n        </button>\n        <span class=\"pull-right\"></span>\n            <button mat-icon-button>\n              <mat-icon mat-icon (click)=\"openDialog()\">edit</mat-icon>\n            </button>\n    \n       </mat-toolbar-row>\n      </mat-toolbar>  \n        <mat-list>\n          <mat-list-item><mat-icon>account_balance</mat-icon> Dowry Demand / Domestic Violence / Abuse,  Child Custody Issue, </mat-list-item>\n          <mat-divider></mat-divider>\n          <mat-list-item><mat-icon>account_balance</mat-icon>Gifting of Property</mat-list-item>\n          <mat-divider></mat-divider>\n          <mat-list-item><mat-icon>account_balance</mat-icon>Lawyer for Summons / Warrants ,  Wrongful Arrest</mat-list-item>\n        </mat-list>\n      </div>"

/***/ }),

/***/ "./src/app/dashboard-widget.1/share-price/share-price.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/dashboard-widget.1/share-price/share-price.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-elevation-z8 {\n  margin: 20px 35px;\n  background-color: white;\n  border: 1px solid black; }\n\n.nav-item {\n  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);\n  cursor: default; }\n\n.nav-item:hover {\n    -webkit-transform: translate(0, -8px);\n            transform: translate(0, -8px);\n    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.16); }\n\ntable {\n  width: 100%; }\n\n.pull-right {\n  flex: 1 1 auto; }\n"

/***/ }),

/***/ "./src/app/dashboard-widget.1/share-price/share-price.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard-widget.1/share-price/share-price.component.ts ***!
  \*************************************************************************/
/*! exports provided: SharePriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharePriceComponent", function() { return SharePriceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialog_abox_dialog_abox_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dialog-abox/dialog-abox.component */ "./src/app/dashboard-widget.1/dialog-abox/dialog-abox.component.ts");
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
    function SharePriceComponent(dialog) {
        this.dialog = dialog;
    }
    SharePriceComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_dialog_abox_dialog_abox_component__WEBPACK_IMPORTED_MODULE_2__["DialogAboxComponent"], {
            height: '300px',
            width: '600px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
        });
    };
    SharePriceComponent.prototype.ngOnInit = function () { };
    SharePriceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-share-price',
            template: __webpack_require__(/*! ./share-price.component.html */ "./src/app/dashboard-widget.1/share-price/share-price.component.html"),
            styles: [__webpack_require__(/*! ./share-price.component.scss */ "./src/app/dashboard-widget.1/share-price/share-price.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], SharePriceComponent);
    return SharePriceComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-widget.1/table/table.component.html":
/*!***************************************************************!*\
  !*** ./src/app/dashboard-widget.1/table/table.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"dash-table-holder mat-elevation-z4 \" [ngStyle]=\"{'height':'220px'}\">\n  <canvas id=\"dash-table\">\n    \n   \n    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n      <!--- Note that these columns can be defined in any order.\n            The actual rendered columns are set as a property on the row definition\" -->\n    \n      <!-- Position Column -->\n      <ng-container matColumnDef=\"position\">\n        <th mat-header-cell *matHeaderCellDef> No. </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n      </ng-container>\n    \n      <!-- Name Column -->\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef> Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n      </ng-container>\n    \n      <!-- Weight Column -->\n      <ng-container matColumnDef=\"weight\">\n        <th mat-header-cell *matHeaderCellDef> Weight </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n      </ng-container>\n    \n      <!-- Symbol Column -->\n      <ng-container matColumnDef=\"symbol\">\n        <th mat-header-cell *matHeaderCellDef> Symbol </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n      </ng-container>\n    \n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </canvas>\n</div>\n    "

/***/ }),

/***/ "./src/app/dashboard-widget.1/table/table.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/dashboard-widget.1/table/table.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dash-table-holder {\n  margin: 10px 5px;\n  background-color: white; }\n"

/***/ }),

/***/ "./src/app/dashboard-widget.1/table/table.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/dashboard-widget.1/table/table.component.ts ***!
  \*************************************************************/
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
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/dashboard-widget.1/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.scss */ "./src/app/dashboard-widget.1/table/table.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TableComponent);
    return TableComponent;
}());



/***/ })

}]);
//# sourceMappingURL=dashboard-crm-1-dashboard-crm-module.js.map