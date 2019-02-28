(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tables-tables-module"],{

/***/ "./src/app/tables/feature-table/feature-table.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/tables/feature-table/feature-table.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\"  class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\n\t<div fxFlex class=\"table-component-holder mat-elevation-z4\">\n\t\t<mat-toolbar class=\"table-header\">\n\t\t\t<h1 class=\"mat-headline center-align\" >Featured Table</h1>\n\t\t</mat-toolbar>\n\t\t<div class=\"table-container\">\n\t\t\t<div class=\"example-header\" style=\"padding: 0 20px;\">\n\t\t\t\t<mat-form-field floatPlaceholder=\"never\" style=\"color: black; width: 100%;\">\n\t\t\t\t\t<input matInput #filter placeholder=\"Filter users\">\n\t\t\t\t</mat-form-field>\n\t\t\t</div>\n\t\t\t<div fxLayout=\"row\" class=\"example-header example-selection-header mat-headline center-align \"\n\t\t\t\t*ngIf=\"!selection.isEmpty()\">\n\t\t\t\t{{selection.selected.length}}\n\t\t\t\t{{selection.selected.length == 1 ? 'user' : 'users'}}\n\t\t\t\tselected\n\t\t\t</div>\n\n\t\t\t<mat-table #table [dataSource]=\"dataSource\" matSort style=\"margin-top: 20px;\">\n\n\t\t\t\t<!--- Note that these columns can be defined in any order.\n\t\t\t\tThe actual rendered columns are set as a property on the row definition\" -->\n\n\t\t\t\t<!-- Checkbox Column -->\n\t\t\t\t<ng-container matColumnDef=\"select\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef>\n\t\t\t\t\t\t<mat-checkbox (change)=\"$event ? masterToggle() : null\"\n\t\t\t\t\t\t\t[checked]=\"isAllSelected()\"\n\t\t\t\t\t\t\t[indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n\t\t\t\t\t\t\t</mat-checkbox>\n\t\t\t\t\t</mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let row\">\n\t\t\t\t\t\t<mat-checkbox (click)=\"$event.stopPropagation()\"\n\t\t\t\t\t\t\t(change)=\"$event ? selection.toggle(row.id) : null\"\n\t\t\t\t\t\t\t[checked]=\"selection.isSelected(row.id)\">\n\t\t\t\t\t\t\t</mat-checkbox>\n\t\t\t\t\t</mat-cell>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<!-- ID Column -->\n\t\t\t\t<ng-container matColumnDef=\"userId\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header> ID </mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let row\"> {{row.id}} </mat-cell>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<!-- Progress Column -->\n\t\t\t\t<ng-container matColumnDef=\"progress\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header> Progress </mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let row\"> {{row.progress}}% </mat-cell>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<!-- Name Column -->\n\t\t\t\t<ng-container matColumnDef=\"userName\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let row\"> {{row.name}} </mat-cell>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<!-- Color Column -->\n\t\t\t\t<ng-container matColumnDef=\"color\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header> Color </mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.color}} </mat-cell>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns;\"\n\t\t\t\t[class.example-selected-row]=\"selection.isSelected(row.id)\"\n\t\t\t\t(click)=\"selection.toggle(row.id)\">\n\t\t\t\t</mat-row>\n\t\t\t</mat-table>\n\n\t\t\t<div class=\"example-no-results\"\n\t\t\t\t[style.display]=\"dataSource?.renderedData.length == 0 ? '' : 'none'\">\n\t\t\t\tNo users found matching filter.\n\t\t\t</div>\n\n\t\t\t<mat-paginator #paginator\n\t\t\t\t[length]=\"100\"\n\t\t\t\t[pageIndex]=\"0\"\n\t\t\t\t[pageSize]=\"25\"\n\t\t\t\t[pageSizeOptions]=\"[5, 10, 25, 100]\">\n\t\t\t</mat-paginator>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/tables/feature-table/feature-table.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/tables/feature-table/feature-table.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-header {\n  background-color: #327ebd;\n  color: white;\n  padding: 0 5px; }\n\n.table-container {\n  padding: 5px 15px 15px 15px; }\n\n.table-component-holder {\n  border: 1px solid #327ebd;\n  background-color: white; }\n"

/***/ }),

/***/ "./src/app/tables/feature-table/feature-table.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/tables/feature-table/feature-table.component.ts ***!
  \*****************************************************************/
/*! exports provided: FeatureTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureTableComponent", function() { return FeatureTableComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers.data */ "./src/app/tables/feature-table/helpers.data.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FeatureTableComponent = /** @class */ (function () {
    function FeatureTableComponent() {
        this.displayedColumns = ['select', 'userId', 'userName', 'progress', 'color'];
        this.exampleDatabase = new _helpers_data__WEBPACK_IMPORTED_MODULE_3__["ExampleDatabase"]();
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_5__["SelectionModel"](true, []);
        this.allfeatures = _helpers_data__WEBPACK_IMPORTED_MODULE_3__["TABLE_HELPERS"];
    }
    FeatureTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new _helpers_data__WEBPACK_IMPORTED_MODULE_3__["ExampleDataSource"](this.exampleDatabase, this.paginator, this.sort);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(this.filter.nativeElement, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(150), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])())
            .subscribe(function () {
            if (!_this.dataSource) {
                return;
            }
            _this.dataSource.filter = _this.filter.nativeElement.value;
        });
    };
    FeatureTableComponent.prototype.isAllSelected = function () {
        if (!this.dataSource) {
            return false;
        }
        if (this.selection.isEmpty()) {
            return false;
        }
        if (this.filter.nativeElement.value) {
            return this.selection.selected.length == this.dataSource.renderedData.length;
        }
        else {
            return this.selection.selected.length == this.exampleDatabase.data.length;
        }
    };
    FeatureTableComponent.prototype.masterToggle = function () {
        var _this = this;
        if (!this.dataSource) {
            return;
        }
        if (this.isAllSelected()) {
            this.selection.clear();
        }
        else if (this.filter.nativeElement.value) {
            this.dataSource.renderedData.forEach(function (data) { return _this.selection.select(data.id); });
        }
        else {
            this.exampleDatabase.data.forEach(function (data) { return _this.selection.select(data.id); });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], FeatureTableComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], FeatureTableComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('filter'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
    ], FeatureTableComponent.prototype, "filter", void 0);
    FeatureTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'cdk-feature-table',
            template: __webpack_require__(/*! ./feature-table.component.html */ "./src/app/tables/feature-table/feature-table.component.html"),
            styles: [__webpack_require__(/*! ./feature-table.component.scss */ "./src/app/tables/feature-table/feature-table.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FeatureTableComponent);
    return FeatureTableComponent;
}());



/***/ }),

/***/ "./src/app/tables/feature-table/helpers.data.ts":
/*!******************************************************!*\
  !*** ./src/app/tables/feature-table/helpers.data.ts ***!
  \******************************************************/
/*! exports provided: TABLE_HELPERS, ExampleDatabase, ExampleDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_HELPERS", function() { return TABLE_HELPERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleDatabase", function() { return ExampleDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleDataSource", function() { return ExampleDataSource; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var TABLE_HELPERS = {
    allFeaturesTablehtmlsource: "<div class=\"example-header\" [style.display]=\"selection.isEmpty() ? '' : 'none'\">\n  <mat-form-field floatPlaceholder=\"never\">\n    <input matInput #filter placeholder=\"Filter users\">\n  </mat-form-field>\n</div>\n<div class=\"example-header example-selection-header\"\n     *ngIf=\"!selection.isEmpty()\">\n  {{selection.selected.length}}\n  {{selection.selected.length == 1 ? 'user' : 'users'}}\n  selected\n</div>\n\n<div class=\"example-container mat-elevation-z8\">\n\n  <mat-table #table [dataSource]=\"dataSource\" matSort>\n\n    <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n\n    <!-- Checkbox Column -->\n    <ng-container matColumnDef=\"select\">\n      <mat-header-cell *matHeaderCellDef>\n        <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                     [checked]=\"isAllSelected()\"\n                     [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n        </mat-checkbox>\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">\n        <mat-checkbox (click)=\"$event.stopPropagation()\"\n                     (change)=\"$event ? selection.toggle(row.id) : null\"\n                     [checked]=\"selection.isSelected(row.id)\">\n        </mat-checkbox>\n      </mat-cell>\n    </ng-container>\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"userId\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> ID </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.id}} </mat-cell>\n    </ng-container>\n\n    <!-- Progress Column -->\n    <ng-container matColumnDef=\"progress\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Progress </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.progress}}% </mat-cell>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"userName\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.name}} </mat-cell>\n    </ng-container>\n\n    <!-- Color Column -->\n    <ng-container matColumnDef=\"color\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Color </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.color}} </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"\n            [class.example-selected-row]=\"selection.isSelected(row.id)\"\n            (click)=\"selection.toggle(row.id)\">\n    </mat-row>\n  </mat-table>\n\n  <div class=\"example-no-results\"\n       [style.display]=\"dataSource.renderedData.length == 0 ? '' : 'none'\">\n    No users found matching filter.\n  </div>\n\n  <mat-paginator #paginator\n                [length]=\"dataSource.filteredData.length\"\n                [pageIndex]=\"0\"\n                [pageSize]=\"25\"\n                [pageSizeOptions]=\"[5, 10, 25, 100]\">\n  </mat-paginator>\n</div>\n".trim(),
    allFeaturesTabletssource: "import {Component, ElementRef, ViewChild} from '@angular/core';\nimport {DataSource} from '@angular/cdk/collections';\nimport {MatPaginator, MatSort} from '@angular/material';\nimport {SelectionModel} from '@angular/cdk/collections';\nimport {BehaviorSubject} from 'rxjs/BehaviorSubject';\nimport {Observable} from 'rxjs/Observable';\nimport 'rxjs/add/operator/startWith';\nimport 'rxjs/add/observable/merge';\nimport 'rxjs/add/observable/fromEvent';\nimport 'rxjs/add/operator/map';\nimport 'rxjs/add/operator/distinctUntilChanged';\nimport 'rxjs/add/operator/debounceTime';\n\n/**\n * @title Feature-rich data table\n */\n@Component({\n  selector: 'table-overview-example',\n  styleUrls: ['table-overview-example.css'],\n  templateUrl: 'table-overview-example.html',\n})\nexport class TableOverviewExample {\n  displayedColumns = ['select', 'userId', 'userName', 'progress', 'color'];\n  exampleDatabase = new ExampleDatabase();\n  selection = new SelectionModel<string>(true, []);\n  dataSource: ExampleDataSource | null;\n\n  @ViewChild(MatPaginator) paginator: MatPaginator;\n  @ViewChild(MatSort) sort: MatSort;\n  @ViewChild('filter') filter: ElementRef;\n\n  ngOnInit() {\n    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);\n    Observable.fromEvent(this.filter.nativeElement, 'keyup')\n        .debounceTime(150)\n        .distinctUntilChanged()\n        .subscribe(() => {\n          if (!this.dataSource) { return; }\n          this.dataSource.filter = this.filter.nativeElement.value;\n        });\n  }\n\n  isAllSelected(): boolean {\n    if (!this.dataSource) { return false; }\n    if (this.selection.isEmpty()) { return false; }\n\n    if (this.filter.nativeElement.value) {\n      return this.selection.selected.length == this.dataSource.renderedData.length;\n    } else {\n      return this.selection.selected.length == this.exampleDatabase.data.length;\n    }\n  }\n\n  masterToggle() {\n    if (!this.dataSource) { return; }\n\n    if (this.isAllSelected()) {\n      this.selection.clear();\n    } else if (this.filter.nativeElement.value) {\n      this.dataSource.renderedData.forEach(data => this.selection.select(data.id));\n    } else {\n      this.exampleDatabase.data.forEach(data => this.selection.select(data.id));\n    }\n  }\n}\n\n/** Constants used to fill up our data base. */\nconst COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',\n  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];\nconst NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',\n  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',\n  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];\n\nexport interface UserData {\n  id: string;\n  name: string;\n  progress: string;\n  color: string;\n}\n\n/** An example database that the data source uses to retrieve data for the table. */\nexport class ExampleDatabase {\n  /** Stream that emits whenever the data has been modified. */\n  dataChange: BehaviorSubject<UserData[]> = new BehaviorSubject<UserData[]>([]);\n  get data(): UserData[] { return this.dataChange.value; }\n\n  constructor() {\n    // Fill up the database with 100 users.\n    for (let i = 0; i < 100; i++) { this.addUser(); }\n  }\n\n  /** Adds a new user to the database. */\n  addUser() {\n    const copiedData = this.data.slice();\n    copiedData.push(this.createNewUser());\n    this.dataChange.next(copiedData);\n  }\n\n  /** Builds and returns a new User. */\n  private createNewUser() {\n    const name =\n        NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +\n        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';\n\n    return {\n      id: (this.data.length + 1).toString(),\n      name: name,\n      progress: Math.round(Math.random() * 100).toString(),\n      color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]\n    };\n  }\n}\n\n/**\n * Data source to provide what data should be rendered in the table. Note that the data source\n * can retrieve its data in any way. In this case, the data source is provided a reference\n * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage\n * the underlying data. Instead, it only needs to take the data and send the table exactly what\n * should be rendered.\n */\nexport class ExampleDataSource extends DataSource<any> {\n  _filterChange = new BehaviorSubject('');\n  get filter(): string { return this._filterChange.value; }\n  set filter(filter: string) { this._filterChange.next(filter); }\n\n  filteredData: UserData[] = [];\n  renderedData: UserData[] = [];\n\n  constructor(private _exampleDatabase: ExampleDatabase,\n              private _paginator: MatPaginator,\n              private _sort: MatSort) {\n    super();\n\n    // Reset to the first page when the user changes the filter.\n    this._filterChange.subscribe(() => this._paginator.pageIndex = 0);\n  }\n\n  /** Connect function called by the table to retrieve one stream containing the data to render. */\n  connect(): Observable<UserData[]> {\n    // Listen for any changes in the base data, sorting, filtering, or pagination\n    const displayDataChanges = [\n      this._exampleDatabase.dataChange,\n      this._sort.sortChange,\n      this._filterChange,\n      this._paginator.page,\n    ];\n\n    return Observable.merge(...displayDataChanges).map(() => {\n      // Filter data\n      this.filteredData = this._exampleDatabase.data.slice().filter((item: UserData) => {\n        let searchStr = (item.name + item.color).toLowerCase();\n        return searchStr.indexOf(this.filter.toLowerCase()) != -1;\n      });\n\n      // Sort filtered data\n      const sortedData = this.sortData(this.filteredData.slice());\n\n      // Grab the page's slice of the filtered sorted data.\n      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;\n      this.renderedData = sortedData.splice(startIndex, this._paginator.pageSize);\n      return this.renderedData;\n    });\n  }\n\n  disconnect() {}\n\n  /** Returns a sorted copy of the database data. */\n  sortData(data: UserData[]): UserData[] {\n    if (!this._sort.active || this._sort.direction == '') { return data; }\n\n    return data.sort((a, b) => {\n      let propertyA: number|string = '';\n      let propertyB: number|string = '';\n\n      switch (this._sort.active) {\n        case 'userId': [propertyA, propertyB] = [a.id, b.id]; break;\n        case 'userName': [propertyA, propertyB] = [a.name, b.name]; break;\n        case 'progress': [propertyA, propertyB] = [a.progress, b.progress]; break;\n        case 'color': [propertyA, propertyB] = [a.color, b.color]; break;\n      }\n\n      let valueA = isNaN(+propertyA) ? propertyA : +propertyA;\n      let valueB = isNaN(+propertyB) ? propertyB : +propertyB;\n\n      return (valueA < valueB ? -1 : 1) * (this._sort.direction == 'asc' ? 1 : -1);\n    });\n  }\n}\n",
    allFeaturesTablecsssource: "/* Structure */\n.example-container {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px;\n}\n\n.example-header {\n  min-height: 56px;\n  max-height: 56px;\n  display: flex;\n  align-items: center;\n  padding: 8px 24px 0;\n  font-size: 20px;\n  justify-content: space-between;\n  border-bottom: 1px solid transparent;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  flex-grow: 1;\n  margin-top: 8px;\n}\n\n.example-no-results {\n  display: flex;\n  justify-content: center;\n  padding: 24px;\n  font-size: 12px;\n  font-style: italic;\n}\n\n/** Selection styles */\n.example-selection-header {\n  font-size: 18px;\n}\n\n.mat-column-select {\n  max-width: 54px;\n}\n\n.mat-row:hover, .example-selected-row {\n  background: #f5f5f5;\n}\n\n.mat-row:active, .mat-row.example-selected-row {\n  background: #eaeaea;\n}\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}\n"
};
/** Constants used to fill up our data base. */
var COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
var NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
/** An example database that the data source uses to retrieve data for the table. */
var ExampleDatabase = /** @class */ (function () {
    function ExampleDatabase() {
        /** Stream that emits whenever the data has been modified. */
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        // Fill up the database with 100 users.
        for (var i = 0; i < 100; i++) {
            this.addUser();
        }
    }
    Object.defineProperty(ExampleDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    /** Adds a new user to the database. */
    ExampleDatabase.prototype.addUser = function () {
        var copiedData = this.data.slice();
        copiedData.push(this.createNewUser());
        this.dataChange.next(copiedData);
    };
    /** Builds and returns a new User. */
    ExampleDatabase.prototype.createNewUser = function () {
        var name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
            NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
        return {
            id: (this.data.length + 1).toString(),
            name: name,
            progress: Math.round(Math.random() * 100).toString(),
            color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
        };
    };
    return ExampleDatabase;
}());

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
var ExampleDataSource = /** @class */ (function (_super) {
    __extends(ExampleDataSource, _super);
    function ExampleDataSource(_exampleDatabase, _paginator, _sort) {
        var _this = _super.call(this) || this;
        _this._exampleDatabase = _exampleDatabase;
        _this._paginator = _paginator;
        _this._sort = _sort;
        _this._filterChange = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]('');
        _this.filteredData = [];
        _this.renderedData = [];
        // Reset to the first page when the user changes the filter.
        _this._filterChange.subscribe(function () { return _this._paginator.pageIndex = 0; });
        return _this;
    }
    Object.defineProperty(ExampleDataSource.prototype, "filter", {
        get: function () { return this._filterChange.value; },
        set: function (filter) { this._filterChange.next(filter); },
        enumerable: true,
        configurable: true
    });
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ExampleDataSource.prototype.connect = function () {
        var _this = this;
        // Listen for any changes in the base data, sorting, filtering, or pagination
        var displayDataChanges = [
            this._exampleDatabase.dataChange,
            this._sort.sortChange,
            this._filterChange,
            this._paginator.page,
        ];
        return rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"].apply(void 0, displayDataChanges).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () {
            // Filter data
            _this.filteredData = _this._exampleDatabase.data.slice().filter(function (item) {
                var searchStr = (item.name + item.color).toLowerCase();
                return searchStr.indexOf(_this.filter.toLowerCase()) != -1;
            });
            // Sort filtered data
            var sortedData = _this.sortData(_this.filteredData.slice());
            // Grab the page's slice of the filtered sorted data.
            var startIndex = _this._paginator.pageIndex * _this._paginator.pageSize;
            _this.renderedData = sortedData.splice(startIndex, _this._paginator.pageSize);
            return _this.renderedData;
        }));
    };
    ExampleDataSource.prototype.disconnect = function () { };
    /** Returns a sorted copy of the database data. */
    ExampleDataSource.prototype.sortData = function (data) {
        var _this = this;
        if (!this._sort.active || this._sort.direction == '') {
            return data;
        }
        return data.sort(function (a, b) {
            var propertyA = '';
            var propertyB = '';
            switch (_this._sort.active) {
                case 'userId':
                    _a = [a.id, b.id], propertyA = _a[0], propertyB = _a[1];
                    break;
                case 'userName':
                    _b = [a.name, b.name], propertyA = _b[0], propertyB = _b[1];
                    break;
                case 'progress':
                    _c = [a.progress, b.progress], propertyA = _c[0], propertyB = _c[1];
                    break;
                case 'color':
                    _d = [a.color, b.color], propertyA = _d[0], propertyB = _d[1];
                    break;
            }
            var valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            var valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return (valueA < valueB ? -1 : 1) * (_this._sort.direction == 'asc' ? 1 : -1);
            var _a, _b, _c, _d;
        });
    };
    return ExampleDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["DataSource"]));



/***/ }),

/***/ "./src/app/tables/filter-table/filter-table.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/tables/filter-table/filter-table.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"space-evenly stretch\" >\n\t\t\n\t<div class=\"\" style=\"background-color: #4e9814\" >\n\t\t<div class=\"table-header\" style=\"padding: 0 20px;\">\n\t\t\t<h1 class=\"mat-headline center-align\" >Tables with filtering</h1>\n\t\t</div>\n\t\t<div class=\"example-header\" style=\"padding: 0 20px;\">\n\t\t\t<mat-form-field floatPlaceholder=\"never\" style=\"color: white; width: 100%;\">\n\t\t\t\t<input matInput #filter placeholder=\"Filter users\">\n\t\t\t</mat-form-field>\n\t\t</div>\n\n\t\t<mat-table #table [dataSource]=\"dataSource\">\n\n\t\t\t<!--- Note that these columns can be defined in any order.\n\t\t\tThe actual rendered columns are set as a property on the row definition\" -->\n\n\t\t\t<!-- ID Column -->\n\t\t\t<ng-container matColumnDef=\"userId\">\n\t\t\t\t<mat-header-cell *matHeaderCellDef> ID </mat-header-cell>\n\t\t\t\t<mat-cell *matCellDef=\"let row\"> {{row.id}} </mat-cell>\n\t\t\t</ng-container>\n\n\t\t\t<!-- Progress Column -->\n\t\t\t<ng-container matColumnDef=\"progress\">\n\t\t\t\t<mat-header-cell *matHeaderCellDef> Progress </mat-header-cell>\n\t\t\t\t<mat-cell *matCellDef=\"let row\"> {{row.progress}}% </mat-cell>\n\t\t\t</ng-container>\n\n\t\t\t<!-- Name Column -->\n\t\t\t<ng-container matColumnDef=\"userName\">\n\t\t\t\t<mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n\t\t\t\t<mat-cell *matCellDef=\"let row\"> {{row.name}} </mat-cell>\n\t\t\t</ng-container>\n\n\t\t\t<!-- Color Column -->\n\t\t\t<ng-container matColumnDef=\"color\">\n\t\t\t\t<mat-header-cell *matHeaderCellDef> Color </mat-header-cell>\n\t\t\t\t<mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.color}} </mat-cell>\n\t\t\t</ng-container>\n\n\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\t\t\t\n\t\t</mat-table>\n\t</div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/tables/filter-table/filter-table.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/tables/filter-table/filter-table.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-header {\n  background-color: #327ebd;\n  color: white; }\n"

/***/ }),

/***/ "./src/app/tables/filter-table/filter-table.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/tables/filter-table/filter-table.component.ts ***!
  \***************************************************************/
/*! exports provided: FilterTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterTableComponent", function() { return FilterTableComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers.data */ "./src/app/tables/filter-table/helpers.data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FilterTableComponent = /** @class */ (function () {
    function FilterTableComponent() {
        this.displayedColumns = ['userId', 'userName', 'progress', 'color'];
        this.exampleDatabase = new _helpers_data__WEBPACK_IMPORTED_MODULE_3__["ExampleDatabase"]();
    }
    FilterTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new _helpers_data__WEBPACK_IMPORTED_MODULE_3__["ExampleDataSource"](this.exampleDatabase);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(this.filter.nativeElement, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(150), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])())
            .subscribe(function () {
            if (!_this.dataSource) {
                return;
            }
            _this.dataSource.filter = _this.filter.nativeElement.value;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('filter'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
    ], FilterTableComponent.prototype, "filter", void 0);
    FilterTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'cdk-filter-table',
            template: __webpack_require__(/*! ./filter-table.component.html */ "./src/app/tables/filter-table/filter-table.component.html"),
            styles: [__webpack_require__(/*! ./filter-table.component.scss */ "./src/app/tables/filter-table/filter-table.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FilterTableComponent);
    return FilterTableComponent;
}());



/***/ }),

/***/ "./src/app/tables/filter-table/helpers.data.ts":
/*!*****************************************************!*\
  !*** ./src/app/tables/filter-table/helpers.data.ts ***!
  \*****************************************************/
/*! exports provided: ExampleDatabase, ExampleDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleDatabase", function() { return ExampleDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleDataSource", function() { return ExampleDataSource; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
var NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
/** An example database that the data source uses to retrieve data for the table. */
var ExampleDatabase = /** @class */ (function () {
    function ExampleDatabase() {
        /** Stream that emits whenever the data has been modified. */
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        // Fill up the database with 100 users.
        for (var i = 0; i < 100; i++) {
            this.addUser();
        }
    }
    Object.defineProperty(ExampleDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    /** Adds a new user to the database. */
    ExampleDatabase.prototype.addUser = function () {
        var copiedData = this.data.slice();
        copiedData.push(this.createNewUser());
        this.dataChange.next(copiedData);
    };
    /** Builds and returns a new User. */
    ExampleDatabase.prototype.createNewUser = function () {
        var name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
            NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
        return {
            id: (this.data.length + 1).toString(),
            name: name,
            progress: Math.round(Math.random() * 100).toString(),
            color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
        };
    };
    return ExampleDatabase;
}());

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
var ExampleDataSource = /** @class */ (function (_super) {
    __extends(ExampleDataSource, _super);
    function ExampleDataSource(_exampleDatabase) {
        var _this = _super.call(this) || this;
        _this._exampleDatabase = _exampleDatabase;
        _this._filterChange = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]('');
        return _this;
    }
    Object.defineProperty(ExampleDataSource.prototype, "filter", {
        get: function () { return this._filterChange.value; },
        set: function (filter) { this._filterChange.next(filter); },
        enumerable: true,
        configurable: true
    });
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ExampleDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this._exampleDatabase.dataChange,
            this._filterChange,
        ];
        return rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"].apply(void 0, displayDataChanges).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () {
            return _this._exampleDatabase.data.slice().filter(function (item) {
                var searchStr = (item.name + item.color).toLowerCase();
                return searchStr.indexOf(_this.filter.toLowerCase()) != -1;
            });
        }));
    };
    ExampleDataSource.prototype.disconnect = function () { };
    return ExampleDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["DataSource"]));



/***/ }),

/***/ "./src/app/tables/fixed-table/fixed-table.component.html":
/*!***************************************************************!*\
  !*** ./src/app/tables/fixed-table/fixed-table.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div fxLayout=\"column\"  class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\n\t<div fxFlex class=\"table-component-holder mat-elevation-z4\">\n\t\t<mat-toolbar class=\"table-header\">\n\t\t\t<h1 class=\"mat-headline center-align\" >Fixed Table</h1>\n\t\t</mat-toolbar>\n\t\t<div class=\"table-container\">\n\t\t\t<mat-table #table [dataSource]=\"dataSource\">\n\n\t\t\t\t<!--- Note that these columns can be defined in any order.\n\t\t\t\tThe actual rendered columns are set as a property on the row definition\" -->\n\n\t\t\t\t<!-- ID Column -->\n\t\t\t\t<ng-container matColumnDef=\"userId\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef> ID </mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let row\"> {{row.id}} </mat-cell>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<!-- Progress Column -->\n\t\t\t\t<ng-container matColumnDef=\"progress\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef> Progress </mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let row\"> {{row.progress}}% </mat-cell>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<!-- Name Column -->\n\t\t\t\t<ng-container matColumnDef=\"userName\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let row\"> {{row.name}} </mat-cell>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<!-- Color Column -->\n\t\t\t\t<ng-container matColumnDef=\"color\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef> Color </mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.color}} </mat-cell>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\t\t\t\t\n\t\t\t</mat-table>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/tables/fixed-table/fixed-table.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/tables/fixed-table/fixed-table.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-container {\n  position: relative;\n  margin-top: 50px; }\n\n.table-container .mat-table {\n  max-height: calc(100vh - 200px);\n  overflow-y: auto; }\n\n.table-container .mat-table .mat-header-row {\n  position: absolute;\n  top: -50px;\n  left: 0px;\n  right: 18px;\n  background: #fff; }\n\n.table-header {\n  background-color: #327ebd;\n  color: white;\n  padding: 0 5px; }\n\n.table-container {\n  padding: 5px 15px 15px 15px; }\n\n.table-component-holder {\n  border: 1px solid #327ebd;\n  background-color: white; }\n"

/***/ }),

/***/ "./src/app/tables/fixed-table/fixed-table.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/tables/fixed-table/fixed-table.component.ts ***!
  \*************************************************************/
/*! exports provided: FixedTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedTableComponent", function() { return FixedTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers.data */ "./src/app/tables/fixed-table/helpers.data.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FixedTableComponent = /** @class */ (function () {
    function FixedTableComponent() {
        this.displayedColumns = ['userId', 'userName', 'progress', 'color'];
        this.exampleDatabase = new _helpers_data__WEBPACK_IMPORTED_MODULE_1__["ExampleDatabase"]();
    }
    FixedTableComponent.prototype.ngOnInit = function () {
        this.dataSource = new _helpers_data__WEBPACK_IMPORTED_MODULE_1__["ExampleDataSource"](this.exampleDatabase);
    };
    FixedTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fixed-table',
            template: __webpack_require__(/*! ./fixed-table.component.html */ "./src/app/tables/fixed-table/fixed-table.component.html"),
            styles: [__webpack_require__(/*! ./fixed-table.component.scss */ "./src/app/tables/fixed-table/fixed-table.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FixedTableComponent);
    return FixedTableComponent;
}());



/***/ }),

/***/ "./src/app/tables/fixed-table/helpers.data.ts":
/*!****************************************************!*\
  !*** ./src/app/tables/fixed-table/helpers.data.ts ***!
  \****************************************************/
/*! exports provided: ExampleDatabase, ExampleDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleDatabase", function() { return ExampleDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleDataSource", function() { return ExampleDataSource; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
var NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
/** An example database that the data source uses to retrieve data for the table. */
var ExampleDatabase = /** @class */ (function () {
    function ExampleDatabase() {
        /** Stream that emits whenever the data has been modified. */
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        // Fill up the database with 100 users.
        for (var i = 0; i < 100; i++) {
            this.addUser();
        }
    }
    Object.defineProperty(ExampleDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    /** Adds a new user to the database. */
    ExampleDatabase.prototype.addUser = function () {
        var copiedData = this.data.slice();
        copiedData.push(this.createNewUser());
        this.dataChange.next(copiedData);
    };
    /** Builds and returns a new User. */
    ExampleDatabase.prototype.createNewUser = function () {
        var name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
            NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
        return {
            id: (this.data.length + 1).toString(),
            name: name,
            progress: Math.round(Math.random() * 100).toString(),
            color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
        };
    };
    return ExampleDatabase;
}());

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
var ExampleDataSource = /** @class */ (function (_super) {
    __extends(ExampleDataSource, _super);
    function ExampleDataSource(_exampleDatabase) {
        var _this = _super.call(this) || this;
        _this._exampleDatabase = _exampleDatabase;
        _this._filterChange = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]('');
        return _this;
    }
    Object.defineProperty(ExampleDataSource.prototype, "filter", {
        get: function () { return this._filterChange.value; },
        set: function (filter) { this._filterChange.next(filter); },
        enumerable: true,
        configurable: true
    });
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ExampleDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this._exampleDatabase.dataChange,
            this._filterChange,
        ];
        return rxjs__WEBPACK_IMPORTED_MODULE_0__["merge"].apply(void 0, displayDataChanges).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function () {
            return _this._exampleDatabase.data.slice().filter(function (item) {
                var searchStr = (item.name + item.color).toLowerCase();
                return searchStr.indexOf(_this.filter.toLowerCase()) != -1;
            });
        }));
    };
    ExampleDataSource.prototype.disconnect = function () { };
    return ExampleDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["DataSource"]));



/***/ }),

/***/ "./src/app/tables/responsive-table/helpers.data.ts":
/*!*********************************************************!*\
  !*** ./src/app/tables/responsive-table/helpers.data.ts ***!
  \*********************************************************/
/*! exports provided: ResponsiveTableHelpers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveTableHelpers", function() { return ResponsiveTableHelpers; });
var ResponsiveTableHelpers = {
    header: [
        {
            name: 'ID',
            key: 'id',
            order: 'asc'
        },
        {
            name: 'Name',
            key: 'name',
            order: 'asc'
        },
        {
            name: 'Progress',
            key: 'progress',
            order: 'asc'
        },
        {
            name: 'Color',
            key: 'color',
            order: 'asc'
        }
    ],
    rows: [{
            id: "1",
            name: "Isla A.",
            progress: "0",
            color: "aqua"
        }, {
            id: "2",
            name: "Arthur C.",
            progress: "56",
            color: "blue"
        }, {
            id: "3",
            name: "Theodore T.",
            progress: "67",
            color: "black"
        }, {
            id: "4",
            name: "Amelia O.",
            progress: "73",
            color: "black"
        }, {
            id: "5",
            name: "Mia T.",
            progress: "99",
            color: "red"
        }, {
            id: "6",
            name: "Maia A.",
            progress: "6",
            color: "red"
        }, {
            id: "7",
            name: "Isabella A.",
            progress: "31",
            color: "black"
        }, {
            id: "8",
            name: "Asher O.",
            progress: "35",
            color: "red"
        }, {
            id: "9",
            name: "Atticus V.",
            progress: "56",
            color: "purple"
        }, {
            id: "10",
            name: "Arthur I.",
            progress: "54",
            color: "purple"
        }, {
            id: "11",
            name: "Asher A.",
            progress: "77",
            color: "purple"
        }, {
            id: "12",
            name: "Arthur T.",
            progress: "48",
            color: "green"
        }, {
            id: "13",
            name: "Levi I.",
            progress: "12",
            color: "purple"
        }, {
            id: "14",
            name: "Thomas M.",
            progress: "16",
            color: "green"
        }, {
            id: "15",
            name: "Jasper C.",
            progress: "7",
            color: "orange"
        }, {
            id: "16",
            name: "Asher A.",
            progress: "98",
            color: "yellow"
        }, {
            id: "17",
            name: "Isla O.",
            progress: "27",
            color: "olive"
        }, {
            id: "18",
            name: "Atticus M.",
            progress: "17",
            color: "teal"
        }, {
            id: "19",
            name: "Asher A.",
            progress: "22",
            color: "olive"
        }, {
            id: "20",
            name: "Violet T.",
            progress: "29",
            color: "black"
        }, {
            id: "21",
            name: "Amelia M.",
            progress: "70",
            color: "black"
        }, {
            id: "22",
            name: "Atticus A.",
            progress: "61",
            color: "orange"
        }, {
            id: "23",
            name: "Cora A.",
            progress: "48",
            color: "olive"
        }, {
            id: "24",
            name: "Asher M.",
            progress: "94",
            color: "blue"
        }, {
            id: "25",
            name: "Cora T.",
            progress: "35",
            color: "navy"
        }, {
            id: "26",
            name: "Theodore O.",
            progress: "58",
            color: "aqua"
        }, {
            id: "27",
            name: "Atticus A.",
            progress: "12",
            color: "yellow"
        }, {
            id: "28",
            name: "Oliver J.",
            progress: "25",
            color: "black"
        }, {
            id: "29",
            name: "Jack I.",
            progress: "14",
            color: "green"
        }, {
            id: "30",
            name: "Jasper C.",
            progress: "27",
            color: "aqua"
        }, {
            id: "31",
            name: "Levi C.",
            progress: "16",
            color: "navy"
        }, {
            id: "32",
            name: "Olivia V.",
            progress: "45",
            color: "fuchsia"
        }, {
            id: "33",
            name: "Isabella V.",
            progress: "31",
            color: "orange"
        }, {
            id: "34",
            name: "Jasper J.",
            progress: "21",
            color: "yellow"
        }, {
            id: "35",
            name: "Atticus E.",
            progress: "44",
            color: "navy"
        }, {
            id: "36",
            name: "Isabella M.",
            progress: "21",
            color: "aqua"
        }, {
            id: "37",
            name: "Jasper T.",
            progress: "7",
            color: "orange"
        }, {
            id: "38",
            name: "Theodore A.",
            progress: "97",
            color: "aqua"
        }, {
            id: "39",
            name: "Amelia O.",
            progress: "6",
            color: "aqua"
        }, {
            id: "40",
            name: "Mia J.",
            progress: "30",
            color: "blue"
        }, {
            id: "41",
            name: "Theodore J.",
            progress: "87",
            color: "maroon"
        }, {
            id: "42",
            name: "Levi O.",
            progress: "38",
            color: "black"
        }, {
            id: "43",
            name: "Thomas T.",
            progress: "60",
            color: "maroon"
        }, {
            id: "44",
            name: "Olivia T.",
            progress: "80",
            color: "yellow"
        }, {
            id: "45",
            name: "Violet C.",
            progress: "66",
            color: "olive"
        }, {
            id: "46",
            name: "Elizabeth I.",
            progress: "4",
            color: "green"
        }, {
            id: "47",
            name: "Olivia T.",
            progress: "41",
            color: "yellow"
        }, {
            id: "48",
            name: "Amelia A.",
            progress: "75",
            color: "blue"
        }, {
            id: "49",
            name: "Isla A.",
            progress: "65",
            color: "aqua"
        }, {
            id: "50",
            name: "Oliver O.",
            progress: "29",
            color: "fuchsia"
        }, {
            id: "51",
            name: "Levi V.",
            progress: "10",
            color: "blue"
        }, {
            id: "52",
            name: "Asher V.",
            progress: "84",
            color: "teal"
        }, {
            id: "53",
            name: "Isla T.",
            progress: "75",
            color: "fuchsia"
        }, { id: "54",
            name: "Arthur C.",
            progress: "70",
            color: "teal"
        }, {
            id: "55",
            name: "Isabella I.",
            progress: "64",
            color: "teal"
        }, {
            id: "56",
            name: "Mia A.",
            progress: "37",
            color: "red"
        }, {
            id: "57",
            name: "Mia T.",
            progress: "38",
            color: "olive"
        }, {
            id: "58",
            name: "Arthur J.",
            progress: "52",
            color: "black"
        }, {
            id: "59",
            name: "Isla A.",
            progress: "61",
            color: "blue"
        }, {
            id: "60",
            name: "Theodore J.",
            progress: "63",
            color: "green"
        }, {
            id: "61",
            name: "Atticus O.",
            progress: "4",
            color: "olive"
        }, {
            id: "62",
            name: "Maia E.",
            progress: "61",
            color: "olive"
        }, {
            id: "63",
            name: "Mia T.",
            progress: "52",
            color: "olive"
        }, {
            id: "64",
            name: "Levi I.",
            progress: "51",
            color: "navy"
        }, {
            id: "65",
            name: "Amelia C.",
            progress: "34",
            color: "green"
        }, {
            id: "66",
            name: "Olivia A.",
            progress: "48",
            color: "maroon"
        }, {
            id: "67",
            name: "Charlotte J.",
            progress: "95",
            color: "green"
        }, {
            id: "68",
            name: "Jasper I.",
            progress: "36",
            color: "blue"
        }, {
            id: "69",
            name: "Isla J.",
            progress: "81",
            color: "fuchsia"
        }, {
            id: "70",
            name: "Jack A.",
            progress: "57",
            color: "aqua"
        }, {
            id: "71",
            name: "Theodore C.",
            progress: "92",
            color: "red"
        }, {
            id: "72",
            name: "Arthur V.",
            progress: "41",
            color: "green"
        }, {
            id: "73",
            name: "Isabella O.",
            progress: "98",
            color: "maroon"
        }, {
            id: "74",
            name: "Atticus J.",
            progress: "94",
            color: "blue"
        }, {
            id: "75",
            name: "Maia V.",
            progress: "93",
            color: "orange"
        }, {
            id: "76",
            name: "Thomas O.",
            progress: "87",
            color: "aqua"
        }, {
            id: "77",
            name: "Asher J.",
            progress: "0",
            color: "yellow"
        }, {
            id: "78",
            name: "Mia C.",
            progress: "21",
            color: "gray"
        }, {
            id: "79",
            name: "Isla T.",
            progress: "36",
            color: "teal"
        }, {
            id: "80",
            name: "Cora A.",
            progress: "23",
            color: "orange"
        }, {
            id: "81",
            name: "Jasper T.",
            progress: "41",
            color: "navy"
        }, {
            id: "82",
            name: "Theodore I.",
            progress: "6",
            color: "yellow"
        }, {
            id: "83",
            name: "Oliver O.",
            progress: "87",
            color: "red"
        }, {
            id: "84",
            name: "Asher O.",
            progress: "2",
            color: "blue"
        }, {
            id: "85",
            name: "Maia C.",
            progress: "2",
            color: "purple"
        }, {
            id: "86",
            name: "Olivia A.",
            progress: "4",
            color: "teal"
        }, {
            id: "87",
            name: "Jasper E.",
            progress: "21",
            color: "fuchsia"
        }, {
            id: "88",
            name: "Amelia I.",
            progress: "40",
            color: "teal"
        }, {
            id: "89",
            name: "Jack O.",
            progress: "4",
            color: "green"
        }, {
            id: "90",
            name: "Asher C.",
            progress: "22",
            color: "black"
        }, {
            id: "91",
            name: "Oliver A.",
            progress: "75",
            color: "teal"
        }, {
            id: "92",
            name: "Mia J.",
            progress: "10",
            color: "red"
        }, {
            id: "93",
            name: "Jasper A.",
            progress: "92",
            color: "yellow"
        }, {
            id: "94",
            name: "Atticus I.",
            progress: "1",
            color: "navy"
        }, {
            id: "95",
            name: "Jasper I.",
            progress: "46",
            color: "red"
        }, {
            id: "96",
            name: "Violet I.",
            progress: "85",
            color: "gray"
        }, {
            id: "97",
            name: "Olivia A.",
            progress: "33",
            color: "lime"
        }, {
            id: "98",
            name: "Atticus C.",
            progress: "24",
            color: "lime"
        }, {
            id: "99",
            name: "Asher V.",
            progress: "37",
            color: "aqua"
        }, {
            id: "100",
            name: "Isabella C.",
            progress: "10",
            color: "black"
        }]
};
/** Constants used to fill up our data base. */


/***/ }),

/***/ "./src/app/tables/responsive-table/responsive-table.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/tables/responsive-table/responsive-table.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div fxLayout=\"column\"  class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\n\t<div fxFlex class=\"table-component-holder mat-elevation-z4\">\n\t\t<mat-toolbar class=\"table-header\">\n\t\t\t<h1 class=\"mat-headline center-align\" >Responsive Tables</h1>\n\t\t</mat-toolbar>\n\t\t<div class=\"table-container\">\n\t\t\n\t\t<table  matSort (matSortChange)=\"sortData($event)\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th mat-sort-header=\"{{th.key}}\" scope=\"col\" *ngFor=\"let th of helpers?.header\">{{th.name}}</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr *ngFor=\"let row of rows let i=index\" >\n\t\t\t\t\t\t\t<td [attr.data-label]=\"th.name\" *ngFor=\"let th of helpers?.header\" >\n\n\t\t\t\t\t\t\t\t<span *ngIf=\"th.key!='action'\">\n\n\t\t\t\t\t\t\t\t\t{{row[th.key]}}\n\n\t\t\t\t\t\t\t\t\t<mat-chip  (click)=\"findDuplicates(row)\"\n\t\t\t\t\t\t\t\t\tselected=\"true\"\n\t\t\t\t\t\t\t\t\tcolor=\"warn\"  matTooltip=\"{{row['duplicate_applications'].length}} duplicate entries\" matTooltipPosition=\"right\" *ngIf=\"th.key=='applicationNumber' && row['duplicate_applications'] != 'undefined' && row['duplicate_applications'] && row['duplicate_applications'].length > 0\" >\n\t\t\t\t\t\t\t\t\t{{row['duplicate_applications'].length }}\n\t\t\t\t\t\t\t\t\t</mat-chip>\n\n\t\t\t\t\t\t\t\t</span>\n          \n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr *ngIf=\"rows?.length==0 && status==false\">\n\t\t\t\t\t\t\t\t<td [colSpan]=\"header.length\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t\tNo records found\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t\t<thead *matHeaderRowDef=\"displayedColumns\"></thead>\n\t\t\t\t\t<tr *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\t\t\t\t</table>\n\t\t\t\t<mat-paginator [length]=\"pageLength\"\n\t\t              [pageSize]=\"pageSize\"\n\t\t              [pageSizeOptions]=\"[1, 5, 10, 25, 100, 150, 200]\"  (page)=\"next($event)\">\n\t\t\t\t</mat-paginator>\n\n\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/tables/responsive-table/responsive-table.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/tables/responsive-table/responsive-table.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-header {\n  background-color: #327ebd;\n  color: white;\n  padding: 0 5px; }\n\n.table-container {\n  padding: 5px 15px 15px 15px; }\n\n.table-component-holder {\n  border: 1px solid #327ebd;\n  background-color: white; }\n\ntable {\n  border: 1px solid #ccc;\n  border-collapse: collapse;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  table-layout: fixed; }\n\ntable caption {\n  font-size: 1.5em;\n  margin: .5em 0 .75em;\n  font-family: Roboto,\"Helvetica Neue\",sans-serif; }\n\ntable tr {\n  background: #f8f8f8;\n  border: 1px solid #ddd;\n  padding: .35em; }\n\ntable tr:nth-child(odd) td {\n  font-family: Roboto,\"Helvetica Neue\",sans-serif; }\n\ntable tr:nth-child(even) td {\n  background: rgba(145, 151, 187, 0.34);\n  font-family: Roboto,\"Helvetica Neue\",sans-serif; }\n\n/deep/ .mat-sort-header-container {\n  justify-content: center; }\n\ntable th,\ntable td {\n  padding: .625em;\n  text-align: center;\n  font-family: Roboto,\"Helvetica Neue\",sans-serif; }\n\ntable th {\n  background: #cfcfcf;\n  font-size: .85em;\n  letter-spacing: .1em;\n  text-transform: uppercase; }\n\n@media screen and (max-width: 600px) {\n  table {\n    border: 0; }\n  table caption {\n    font-size: 1.3em; }\n  table thead {\n    border: none;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px; }\n  table tr {\n    border-bottom: 3px solid #ddd;\n    display: block;\n    margin-bottom: .625em; }\n  table td {\n    border-bottom: 1px solid #ddd;\n    display: block;\n    font-size: .8em;\n    text-align: right; }\n  table td:before {\n    /*\n        * aria-label has no advantage, it won't be read inside a table\n        content: attr(aria-label);\n        */\n    content: attr(data-label);\n    float: left;\n    font-weight: bold;\n    text-transform: uppercase; }\n  table td:last-child {\n    border-bottom: 0; } }\n\nmat-button-toggle-group {\n  cursor: pointer; }\n\n::ng-deep .mat-sort-header-container {\n  justify-content: center; }\n\n/* Structure */\n\n.example-container {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px; }\n\n.example-header {\n  min-height: 64px;\n  display: flex;\n  align-items: center;\n  padding-left: 24px;\n  font-size: 20px; }\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px; }\n\n.widgetHolder {\n  margin: 0 auto; }\n\n.widgetHolder .widgetHolder-content {\n    padding: 20px; }\n"

/***/ }),

/***/ "./src/app/tables/responsive-table/responsive-table.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/tables/responsive-table/responsive-table.component.ts ***!
  \***********************************************************************/
/*! exports provided: ResponsiveTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveTableComponent", function() { return ResponsiveTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers.data */ "./src/app/tables/responsive-table/helpers.data.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResponsiveTableComponent = /** @class */ (function () {
    function ResponsiveTableComponent() {
        this.displayedColumns = ['userId', 'userName', 'progress', 'color'];
        this.rows = [];
        this.pageLength = 0;
        this.pageSize = 15;
        this.helpers = _helpers_data__WEBPACK_IMPORTED_MODULE_1__["ResponsiveTableHelpers"];
        this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.view = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ResponsiveTableComponent.prototype.ngOnInit = function () {
        this.getRows();
    };
    ResponsiveTableComponent.prototype.next = function (event) {
        this.rows = [];
        for (var i = 1 * event.pageIndex * event.pageSize; i < event.pageSize + event.pageIndex * event.pageSize; i++) {
            this.rows = this.rows.concat([this.helpers.rows[i]]);
        }
    };
    ResponsiveTableComponent.prototype.getRows = function () {
        for (var i = 0; i < this.pageSize; i++) {
            this.rows = this.rows.concat([this.helpers.rows[i]]);
        }
        this.pageLength = this.helpers.rows.length;
    };
    ResponsiveTableComponent.prototype.sortData = function (val) {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ResponsiveTableComponent.prototype, "paginator1", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ResponsiveTableComponent.prototype, "status", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ResponsiveTableComponent.prototype, "actionStatus", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ResponsiveTableComponent.prototype, "edit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ResponsiveTableComponent.prototype, "delete", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ResponsiveTableComponent.prototype, "view", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ResponsiveTableComponent.prototype, "page", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ResponsiveTableComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ResponsiveTableComponent.prototype, "dup", void 0);
    ResponsiveTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cdk-responsive-table',
            template: __webpack_require__(/*! ./responsive-table.component.html */ "./src/app/tables/responsive-table/responsive-table.component.html"),
            styles: [__webpack_require__(/*! ./responsive-table.component.scss */ "./src/app/tables/responsive-table/responsive-table.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ResponsiveTableComponent);
    return ResponsiveTableComponent;
}());



/***/ }),

/***/ "./src/app/tables/tables.module.ts":
/*!*****************************************!*\
  !*** ./src/app/tables/tables.module.ts ***!
  \*****************************************/
/*! exports provided: highlightJsFactory, TablesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highlightJsFactory", function() { return highlightJsFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesModule", function() { return TablesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _tables_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tables.router */ "./src/app/tables/tables.router.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var angular_highlight_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-highlight-js */ "./node_modules/angular-highlight-js/dist/esm/src/index.js");
/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! highlight.js/lib/languages/typescript */ "./node_modules/highlight.js/lib/languages/typescript.js");
/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _filter_table_filter_table_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./filter-table/filter-table.component */ "./src/app/tables/filter-table/filter-table.component.ts");
/* harmony import */ var _feature_table_feature_table_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./feature-table/feature-table.component */ "./src/app/tables/feature-table/feature-table.component.ts");
/* harmony import */ var _responsive_table_responsive_table_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./responsive-table/responsive-table.component */ "./src/app/tables/responsive-table/responsive-table.component.ts");
/* harmony import */ var _fixed_table_fixed_table_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./fixed-table/fixed-table.component */ "./src/app/tables/fixed-table/fixed-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























function highlightJsFactory() {
    highlight_js__WEBPACK_IMPORTED_MODULE_17__["registerLanguage"]('typescript', highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_19__);
    return highlight_js__WEBPACK_IMPORTED_MODULE_17__;
}
var TablesModule = /** @class */ (function () {
    function TablesModule() {
    }
    TablesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatButtonToggleModule"],
                angular_highlight_js__WEBPACK_IMPORTED_MODULE_18__["HighlightJsModule"].forRoot({
                    provide: angular_highlight_js__WEBPACK_IMPORTED_MODULE_18__["HIGHLIGHT_JS"],
                    useFactory: highlightJsFactory
                }),
                _tables_router__WEBPACK_IMPORTED_MODULE_4__["TablesRouterModule"]
            ],
            declarations: [
                _filter_table_filter_table_component__WEBPACK_IMPORTED_MODULE_20__["FilterTableComponent"],
                _feature_table_feature_table_component__WEBPACK_IMPORTED_MODULE_21__["FeatureTableComponent"],
                _responsive_table_responsive_table_component__WEBPACK_IMPORTED_MODULE_22__["ResponsiveTableComponent"],
                _fixed_table_fixed_table_component__WEBPACK_IMPORTED_MODULE_23__["FixedTableComponent"]
            ],
            exports: []
        })
    ], TablesModule);
    return TablesModule;
}());



/***/ }),

/***/ "./src/app/tables/tables.router.ts":
/*!*****************************************!*\
  !*** ./src/app/tables/tables.router.ts ***!
  \*****************************************/
/*! exports provided: TablesRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesRouterModule", function() { return TablesRouterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fixed_table_fixed_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fixed-table/fixed-table.component */ "./src/app/tables/fixed-table/fixed-table.component.ts");
/* harmony import */ var _feature_table_feature_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./feature-table/feature-table.component */ "./src/app/tables/feature-table/feature-table.component.ts");
/* harmony import */ var _responsive_table_responsive_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./responsive-table/responsive-table.component */ "./src/app/tables/responsive-table/responsive-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var materialWidgetRoutes = [
    { path: 'fixed', component: _fixed_table_fixed_table_component__WEBPACK_IMPORTED_MODULE_2__["FixedTableComponent"], data: { animation: 'fixed' } },
    { path: 'featured', component: _feature_table_feature_table_component__WEBPACK_IMPORTED_MODULE_3__["FeatureTableComponent"], data: { animation: 'featured' } },
    { path: 'responsive', component: _responsive_table_responsive_table_component__WEBPACK_IMPORTED_MODULE_4__["ResponsiveTableComponent"], data: { animation: 'responsive' } }
];
var TablesRouterModule = /** @class */ (function () {
    function TablesRouterModule() {
    }
    TablesRouterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(materialWidgetRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], TablesRouterModule);
    return TablesRouterModule;
}());



/***/ })

}]);
//# sourceMappingURL=tables-tables-module.js.map