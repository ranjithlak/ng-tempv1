(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "./src/app/pages/about/about.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" >\n\t<mat-toolbar color=\"primary\">\n\t\tAbout Us\n\t</mat-toolbar>\n</div>\n<div fxLayout=\"row\"  >\n\t<p >A theme is the set of colors that will be applied to the Angular Material components. The library's approach to theming is based on the guidance from the Material Design spec.\n\nIn Angular Material, a theme is created by composing multiple palettes. In particular, a theme consists of:\n\nA primary palette: colors most widely used across all screens and components.\nAn accent palette: colors used for the floating action button and interactive elements.\nA warn palette: colors used to convey error state.\nA foreground palette: colors for text and icons.\nA background palette: colors used for element backgrounds </p>\n</div>\n<mat-toolbar >\n\t\tOur Team\n</mat-toolbar>\n<div fxLayout=\"row\" >\n\t\t <div fxFlex=\"100\" fxFlex.gt-md=\"20\" fxFlex.gt-sm=\"33.3\" fxFlex.gt-xs=\"50\" *ngFor=\"let navigation of navigations\">\n    <mat-card class=\"nav-item\">\n      <mat-card-title class=\"nav-title\"><a href=\"www.codetok.com\" target=\"_blank\">{{ navigation.name }}</a></mat-card-title>\n      <mat-card-content class=\"nav-desc\">{{ navigation.job }}</mat-card-content>\n      <mat-card-content class=\"nav-desc\">{{ navigation.experience }}</mat-card-content>\n      <img mat-card-avatar src=\"assets/user-image.jpg\">\n    </mat-card>\n  </div>\n</div> "

/***/ }),

/***/ "./src/app/pages/about/about.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n * @param target Which kind of high contrast setting to target. Defaults to `active`, can be\n *    `white-on-black` or `black-on-white`.\n */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\nmat-card {\n  padding: 10px;\n  margin: 10px; }\nmat-card .mat-card-avatar {\n    width: 100px;\n    height: 100px; }\n.nav-title {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n.nav-title a {\n    text-decoration: none; }\n.nav-desc {\n  height: 15px;\n  overflow: hidden; }\n.nav-item {\n  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);\n  cursor: default; }\n.nav-item:hover {\n    -webkit-transform: translate(0, -8px);\n            transform: translate(0, -8px);\n    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.16); }\n"

/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.navigations = [
            { name: "Hari", job: "Full Stack Developer", experience: "10 Yrs", link: "fdsg" },
            { name: "Sujith", job: "Full Stack Developer", experience: "6 Yrs", link: "fdsg" },
            { name: "Ramya", job: "Full Stack Developer", experience: "4 Yrs", link: "fdsg" },
            { name: "Sree", job: "Full Stack Developer", experience: "2 Yrs", link: "fdsg" },
            { name: "Sruthy", job: "Full Stack Developer", experience: "2 Yrs", link: "fdsg" },
            { name: "Fahad", job: "Full Stack Developer", experience: "2 Yrs", link: "fdsg" }
        ];
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/pages/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/pages/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/pages/contact/contact.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/contact/contact.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"space-between stretch\" fxFlexFil fxFill class=\"components-container-gt-xs \" >\n\n\t<div fxLayout=\"row\" fxLayoutAlign=\"space-between stretch\" fxFlexFil fxFill fxLayoutGap=\"20px\">\n\n\t\t<div fxFlex=\"65\" fxLayout=\"column\" class=\"mat-elevation-z2 contact-list-container\" >\n\t\t\t\n\t\t\t<div fxFlex=\"10\" fxLayoutAlign=\"start center\"  fxLayout=\"row\">\n\t\t\t\t\n\t\t\t\t<h3 class=\"mat-headline\">Contacts</h3> \n\t\t\t\t<h3 class=\"mat-headline\">|</h3> \n\t\t\t\t<h6 class=\"mat-title\"> 1335 contacts</h6>\n\n\t\t\t</div>\n\n\t\t\t<mat-divider></mat-divider>\n\n\t\t\t<div fxFlex=\"10\" fxLayout=\"row\" fxLayoutAlign=\"space-between stretch\" >\n\t\t\t\t\t\n\t\t\t\t\t<div fxflex=\"70\" class=\"full\">\n\t\t\t\t\t\t<mat-form-field class=\"full\">\n\t\t\t\t\t\t    <input matInput placeholder=\"search\" >\n\t\t\t\t\t\t     <mat-icon matSuffix>search</mat-icon>\n\t\t\t\t\t\t  </mat-form-field>\n\n\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div fxFlex=\"30\" fxLayout=\"row\" fxLayoutAlign=\"end center\">\n\t\t\t\t\t\t<button mat-raised-button color=\"primary\">ADD EMPLOYEE</button>\n\t\t\t\t\t</div>\n\n\t\t\t</div>\n\n\n\t\t\t<div fxFlex=\"10\" class=\"contact-list-header\" fxLayout=\"row\" fxLayoutAlign=\"space-around stretch\">\n\n\t\t\t\t<div fxFlex=\"10\">\n\t\t\t\t\t<mat-checkbox  class=\"checkbox\"></mat-checkbox>\n\t\t\t\t</div>\n\t\t\t\t<div fxFlex=\"10\">\n\t\t\t\t\t<button mat-icon-button> <mat-icon>sort</mat-icon> </button>\n\t\t\t\t</div>\n\t\t\t\t<div fxFlex=\"10\">\n\t\t\t\t\t<button mat-icon-button> <mat-icon>delete</mat-icon> </button>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t<div fxFlex=\"80\" fxLayoutAlign=\"end center\" >\n\t\t\t\t\t\n\t\t\t\t\t<button mat-raised-button >ADD TAGS</button>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t<div fxFlex=\"70\" fxLayout=\"column\" fxLayoutAlign=\"space-between stretch\" class=\"contact-list-container\">\n\n\t\t\t\t<div class=\"contact-list\">\n\t\t\t\t\t<div fxLayout=\"row\" *ngFor=\"let employee of employees\" fxLayoutAlign=\"space-around none\" class=\"mat-ripple\"  >\n\t\t\t\t\t\n\t\t\t\t\t\t<div fxFlex=\"10\" >\n\t\t\t\t\t\t\t<mat-checkbox  class=\"checkbox\"></mat-checkbox>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div fxFlex=\"10\">\n\t\t\t\t\t\t\t<img class=\"avatar\" src=\"{{employee?.image}}\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div fxFlex=\"50\">\n\t\t\t\t\t\t\t<h3 class=\"mat-subheading-1\" > {{employee?.select}} </h3>\n\t\t\t\t\t\t\t    <p class=\"mat-body-1\" >\n\t\t\t\t\t\t\t      {{employee?.position}} \n\t\t\t\t\t\t\t    </p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div fxFlex=\"20\" >\n\t\t\t\t\t\t\t<mat-chip-list>\n\t\t\t\t\t\t\t  <mat-chip>android</mat-chip>\n\t\t\t\t\t\t\t</mat-chip-list>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div fxFlex=\"10\" >\n\t\t\t\t\t\t\t<button mat-icon-button> <mat-icon>send</mat-icon> </button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\n\t\t\t\t</div>\n\n\t\t\t\t<mat-divider></mat-divider>\n\n\t\t\t\n    \t\t</div>\n\n\n\t\t</div>\n\n\t\t<div fxFlex=\"35\" fxLayout=\"column\" class=\"mat-elevation-z2 contact-add\" >\n\n\t\t\t<div fxFlex=\"10\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" >\n\t\t\t\t\t\n\t\t\t\t<h3  class=\"mat-headline\" fxFlex=\"80\">New Contact</h3> \n\t\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"end center\" fxFlex=\"10\">\n\t\t\t\t\t<button mat-icon-button> <mat-icon>close</mat-icon> </button>\n\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t\t\t\t\t\t<mat-divider></mat-divider>\n\n\t\t\t<div fxFlex=\"25\"  fxLayout=\"row\" fxLayoutAlign=\"space-between center\" >\n\t\t\t\t\n\t\t\t\t<div fxFlex=\"40\">\n\t\t\t\t\t\t\t\t\t\t<img class=\"avatar\" src=\"assets/user-image.jpg\"/>\n\n\t\t\t\t</div>\n\t\t\t\t<div fxFlex=\"60\" fxLayout=\"column\" fxLayoutAlign=\"center start\" >\n\t\t\t\t\t<h3 class=\"mat-title\" >Sujith</h3>\n\t\t\t\t\t<h3 class=\"mat-body-2\" >Developer</h3>\n\t\t\t\t</div>\n\n\n\t\t\t</div>\n\n\t\t\t<div fxFlex=\"10\" fxLayoutGap=\"10px\" fxLayout=\"row\" fxLayout.lt-lg=\"column\" fxLayoutAlign=\"center start\" >\n\t\t\t\t<div fxFlex=\"50\" fxLayout.lt-lg=\"100\">\n\t\t\t\t\t<mat-form-field >\n\t\t\t\t\t<input  matInput placeholder=\"phone\">\n\t\t\t\t</mat-form-field>\n\t\t\t\t</div>\n\t\t\t\t<div fxFlex=\"50\" fxLayout.lt-lg=\"100\">\n\t\t\t\t\t<mat-form-field >\n\t\t\t\t\t<input  matInput placeholder=\"Office\">\n\t\t\t\t</mat-form-field>\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</div>\n\n\t\t\t<div fxFlex=\"10\" fxLayoutGap=\"10px\" fxLayout=\"row\" fxLayout.lt-lg=\"column\"  fxLayoutAlign=\"center start\"  >\n\t\t\t\t<div fxFlex=\"50\" fxLayout.lt-lg=\"100\">\n\t\t\t\t\t<mat-form-field >\n\t            \t\t<input  matInput placeholder=\"skype\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</div>\n\t\t\t\t<div fxFlex=\"50\" fxLayout.lt-lg=\"100\">\n\t\t\t\t\t<mat-form-field >\n\t\t\t\t        <input  matInput placeholder=\"Email\">\n\t\t\t\t    </mat-form-field>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div fxFlex fxLayout=\"column\" fxLayoutAlign=\"end stretch\" >\n\t\t\t\t<div fxLayout=\"row\" fxLayoutAlign=\"space-between stretch\" >\n\t                \t<button mat-raised-button >CANCEL</button>\n\t\t\t            <button mat-raised-button color=\"primary\">SAVE</button>\n\t\t\t     </div>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\n</div>"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/contact/contact.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full {\n  width: 100%; }\n\n.contact-list-container {\n  background-color: white;\n  padding: 10px; }\n\n.contact-list-container .contact-list {\n    height: 400px;\n    overflow: auto; }\n\n.contact-list-container .contact-list div {\n      margin: 0; }\n\n.contact-list-container .contact-list h3 {\n      margin: 0; }\n\n.contact-list-container .contact-list p {\n      margin: 0; }\n\n.contact-list-container .contact-list .avatar {\n      width: 40px;\n      height: 40px;\n      border-radius: 50%; }\n\n.contact-list-container .contact-list-header {\n    background-color: #eee;\n    padding: 10px; }\n\n.contact-list-container .contact-list-header div {\n      margin: auto; }\n\n.contact-add {\n  padding: 10px;\n  background: white; }\n\n.contact-add .avatar {\n    width: 120px;\n    height: 120px;\n    border-radius: 50%; }\n\n.contact-add h3 {\n    margin: auto; }\n"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
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

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.checked = false;
        this.indeterminate = false;
        this.employees = [
            { select: 'Hari', position: 'Full stack developer', image: 'assets/profile.jpg' },
            { select: 'Sujith', position: 'Full stack developer', image: 'assets/man.jpeg' },
            { select: 'Ramya', position: 'Full stack developer', image: 'assets/noavatar.png' },
            { select: 'Sree', position: 'Full stack developer', image: 'assets/profile.jpg' },
            { select: 'Sruthy', position: 'Full stack developer', image: 'assets/noavatar.png' },
            { select: 'Fahad', position: 'Full stack developer', image: 'assets/profile.jpg' },
        ];
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/pages/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/pages/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _pages_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages.routes */ "./src/app/pages/pages.routes.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/services.component */ "./src/app/pages/services/services.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"],
                _pages_routes__WEBPACK_IMPORTED_MODULE_5__["PagesRouterModule"]
            ],
            declarations: [
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                _services_services_component__WEBPACK_IMPORTED_MODULE_8__["ServicesComponent"]
            ],
            exports: [],
            providers: []
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.routes.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.routes.ts ***!
  \***************************************/
/*! exports provided: PagesRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRouterModule", function() { return PagesRouterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/services.component */ "./src/app/pages/services/services.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var pagesRoutes = [
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"], data: { animation: 'contact' } },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"], data: { animation: 'about' } },
    { path: 'services', component: _services_services_component__WEBPACK_IMPORTED_MODULE_4__["ServicesComponent"], data: { animation: 'services' } },
];
var PagesRouterModule = /** @class */ (function () {
    function PagesRouterModule() {
    }
    PagesRouterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(pagesRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], PagesRouterModule);
    return PagesRouterModule;
}());



/***/ }),

/***/ "./src/app/pages/services/services.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/services/services.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" >\n\t\n\t<div class=\"service-header\" fxLayout=\"column\" fxLayoutAlign=\"center stretch\" >\n\n\t\t<div fxFlex class=\"content\" fxLayout.lt-sm=\"column\" style=\"padding: 20px;\n}\" fxLayout=\"row\" fxLayoutAlign=\"center stretch\">\n\n\t\t\t<div fxFlex=\"35\"  fxFlex.lt-sm=\"100\" fxLayout=\"row\" style=\"background-color: #45aae3; padding: 20px;\"  fxLayoutAlign=\"center stretch\" >\n\t\t\t\t<div>\n\t\t\t\t\t<h3 class=\"mat-display-1\">Our Services</h3>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t<p class=\"mat-body-2\">\n\t\t\t\t\tFrom ideation to market research:Discover, Design, plan your product!From ideation to market research:Discover, Design, plan your product!From ideation to market research:Discover, Design, plan your product!\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t\n\t\t\t</div>\n\t\t\t<div fxFlex=\"65\" fxHide.lt-sm fxLayout=\"row\" fxLayoutAlign=\"center center\">\n\t\t\t\t<img style=\"width: 400px;\" src=\"./assets/images/bg/cdk.png\">\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\t</div>\n\n\t<div fxLayout=\"column\" class=\"service-card-content\">\n\n\t\t<div fxLayout=\"row\" class=\"service-card-container\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\"  >\n\n\t\t\t<div fxFlex.lt-md=\"100\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\" fxFlex.gt-sm=\"32\" class=\"mat-elevation-z4 service-card \" >\n\t\t\t\t<img src=\"/assets/pages/webdesign.png\" fxFlex>\n\n\t\t\t\t<h3 class=\"mat-title\" fxFlex>Title1</h3>\n\t\t\t\t<p class=\"mat-body-2\"  fxFlex>From ideation to market research:Discover, Design, plan your product!</p>\n\n\n\t\t\t</div>\n\n\t\t\n\n\t\t\t<div fxFlex.lt-md=\"100\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\" fxFlex.gt-sm=\"32\" class=\"mat-elevation-z4 service-card \"  >\n\t\t\t\t<img src=\"/assets/pages/mobile.png\" fxFlex>\n\n\t\t\t\t<h3 class=\"mat-title\" fxFlex>Title3</h3>\n\t\t\t\t<p class=\"mat-body-2\"  fxFlex>From ideation to market research:Discover, Design, plan your product!</p>\n\n\n\t\t\t</div>\n\n\t\t\t<div fxFlex.lt-md=\"100\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\" fxFlex.gt-sm=\"32\" class=\"mat-elevation-z4 service-card \"  >\n\t\t\t\t<img src=\"/assets/pages/custom.png\" fxFlex>\n\n\t\t\t\t<h3 class=\"mat-title\"  fxFlex>Title4</h3>\n\t\t\t\t<p class=\"mat-body-2\"  fxFlex>From ideation to market research:Discover, Design, plan your product!</p>\n\n\n\t\t\t</div>\n\n\t\t</div>\n\n\n\t\t<div fxLayout=\"row\" class=\"service-card-container\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\"  >\n\n\t\t\t<div fxFlex.lt-md=\"100\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\" fxFlex.gt-sm=\"32\" class=\"mat-elevation-z4 service-card \" >\n\t\t\t\t<img src=\"/assets/pages/strategy.png\" fxFlex>\n\n\t\t\t\t<h3 class=\"mat-title\" fxFlex>Title1</h3>\n\t\t\t\t<p class=\"mat-body-2\"  fxFlex>From ideation to market research:Discover, Design, plan your product!</p>\n\n\n\t\t\t</div>\n\n\t\t\n\n\t\t\t<div fxFlex.lt-md=\"100\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\" fxFlex.gt-sm=\"32\" class=\"mat-elevation-z4 service-card \"  >\n\t\t\t\t<img src=\"/assets/pages/mobile.png\" fxFlex>\n\n\t\t\t\t<h3 class=\"mat-title\" fxFlex>Title3</h3>\n\t\t\t\t<p class=\"mat-body-2\"  fxFlex>From ideation to market research:Discover, Design, plan your product!</p>\n\n\n\t\t\t</div>\n\n\t\t\t<div fxFlex.lt-md=\"100\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\" fxFlex.gt-sm=\"32\" class=\"mat-elevation-z4 service-card \"  >\n\t\t\t\t<img src=\"/assets/pages/prototype.png\" fxFlex>\n\n\t\t\t\t<h3 class=\"mat-title\"  fxFlex>Title4</h3>\n\t\t\t\t<p class=\"mat-body-2\"  fxFlex>From ideation to market research:Discover, Design, plan your product!</p>\n\n\n\t\t\t</div>\n\n\t\t</div>\n\n\t\t\n\n\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/pages/services/services.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/services/services.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".service-header {\n  height: 350px;\n  width: 100%;\n  padding: 30px 0 0 0;\n  color: white; }\n  .service-header .content {\n    background-color: white; }\n  .service-header h3 {\n    margin: 0;\n    margin-bottom: 10px;\n    text-align: center; }\n  .service-header p {\n    margin: 0;\n    text-align: center; }\n  .service-header mat-divider {\n    border-top-color: white; }\n  .service-card-content .service-card-container {\n  padding: 20px; }\n  .service-card-content .service-card-container .service-card {\n    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);\n    cursor: default;\n    background-color: white;\n    padding: 20px; }\n  .service-card-content .service-card-container .service-card img {\n      height: 200px; }\n  .service-card-content .service-card-container .service-card h3 {\n      margin: 0; }\n  .service-card-content .service-card-container .service-card p {\n      margin: 0;\n      text-align: center; }\n  .service-card-content .service-card-container .service-card:hover {\n      -webkit-transform: translate(0, -8px);\n              transform: translate(0, -8px);\n      box-shadow: 0 20px 20px rgba(0, 0, 0, 0.16); }\n"

/***/ }),

/***/ "./src/app/pages/services/services.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/services/services.component.ts ***!
  \******************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
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

var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/pages/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.scss */ "./src/app/pages/services/services.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pages-module.js.map