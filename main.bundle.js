webpackJsonp([2,4],{

/***/ 148:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 148;


/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(161);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(81);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    // Inject HttpClient into your component or service.
    function AppComponent(http) {
        this.http = http;
        this.p = 1;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        /**
         * This returns the total of all flights in the flights
         * object.  Currently this is static at 7000.
         */
        this.http.get('http://localhost:1337/flight/getCount').subscribe(function (data) {
            // Read the result field from the JSON response.
            _this.count = data;
        });
        /**
         * This returns a data object containing an array of objects.  This will
         * eventually pull from a mongo database but is currently static stored
         * in the FlightController.
         */
        var index = '0';
        var itemsPerPage = '5';
        // const urlSearchParams = new URLSearchParams();
        // urlSearchParams.append('index', index);
        // urlSearchParams.append('itemsPerPage', itemsPerPage);
        var body = { index: index, itemsPerPage: itemsPerPage };
        this.http.post('http://localhost:1337/flight/getFlights', body)
            .subscribe(function (data) {
            // Read the result field from the JSON response.
            _this.flights = data;
        }, function (error) {
            console.log(JSON.stringify(error.json()));
        });
    };
    AppComponent.prototype.pageChanged = function ($event) {
        var _this = this;
        console.log('page changed to: ' + this.p);
        var itemsPerPage = '5';
        var index = this.p * parseInt(itemsPerPage, 0) - parseInt(itemsPerPage, 0) + 1;
        var body = { index: index, itemsPerPage: itemsPerPage };
        this.http.post('http://localhost:1337/flight/getFlights', body)
            .subscribe(function (data) {
            // Read the result field from the JSON response.
            _this.flights = data;
        }, function (error) {
            console.log(JSON.stringify(error.json()));
        });
    };
    AppComponent.prototype.onSelectFlight = function ($event) {
        // This is the flight selected from the array of flights, diplayed
        // in pagination.  It trims the white space from the card title.
        var flight_selected = $event.srcElement.firstChild.data.trim();
        // If a new flight has been selected, remove the active class
        var i = 0;
        for (i; i < this.flights.length; i++) {
            var currentActive = document.querySelectorAll('.card.marked');
            if (currentActive.length > 0) {
                currentActive[0].classList.remove('marked');
            }
        }
        // @Todo  There should be a better method for identifying the card,
        // the following lines determine where the user has clicked and
        // identifies the information contained in card title.
        if (flight_selected === '' || flight_selected === undefined) {
            flight_selected = $event.srcElement.parentNode.children[1].children[0].firstChild.data.trim();
            console.log(flight_selected);
            $event.srcElement.parentNode.setAttribute('class', 'card marked');
        }
        else {
            console.log(flight_selected);
            $event.srcElement.parentNode.parentNode.setAttribute('class', 'card marked');
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(217),
        styles: [__webpack_require__(215)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_pagination__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__(157);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 // <-- import the module



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClientModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(73)(false);
// imports


// module
exports.push([module.i, "h1, p {\r\n   font-family: \"HelveticaNeue-Light\", \"Helvetica Neue Light\", \"Helvetica Neue\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\r\n   font-weight: 300;\r\n}\r\n\r\n.card {\r\n  cursor: pointer;\r\n  float:left;\r\n  padding: .5em;\r\n  margin: .5em;\r\n  height: 75px;\r\n  width: 125px;\r\n  border: 1px solid lightblue;\r\n  box-shadow: 1px 1px 7px lightblue;\r\n}\r\n\r\n.card p {\r\n  margin:0;\r\n  -webkit-margin-before:0em;\r\n  -webkit-margin-after:0em;\r\n}\r\n\r\n.pagination-control {\r\n  clear: both;\r\n  position: absolute;\r\n  bottom: 1.5em;\r\n  margin:0 25%;\r\n}\r\n\r\n.marked {\r\n  border: 1px solid blue;\r\n  -webkit-animation: marked 0.5s ease-out forwards;\r\n          animation: marked 0.5s ease-out forwards;\r\n}\r\n@-webkit-keyframes marked {\r\n  0% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1)\r\n  }\r\n  50% {\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1)\r\n  }\r\n  100% {\r\n    transofrm: scale(1.0)\r\n  }\r\n}\r\n@keyframes marked {\r\n  0% {\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1)\r\n  }\r\n  50% {\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1)\r\n  }\r\n  100% {\r\n    transofrm: scale(1.0)\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 217:
/***/ (function(module, exports) {

module.exports = "<h1>Complete Flight Listing by Pagination</h1>\n<p style=\"float: right\">Total Flight:  {{count}}</p>\n<div class=\"wrapper\" style=\"margin: 0 5%;\">\n  <div\n    style=\"margin: 0 auto;\"\n    class=\"row\"\n    *ngFor=\"let flight of flights | paginate: { itemsPerPage: 6, currentPage: p, totalItems: count }\">\n    <div class=\"card\" (click)=\"onSelectFlight($event)\">\n      <div class=\"col\">\n        <p>ID: {{ flight.id }}</p>\n        <p>Flight from: {{ flight.flight_from }}</p>\n        <p>Flight to: {{ flight.flight_to }}</p>\n        <p>Price: {{ flight.price }}</p>\n      </div>\n    </div>\n  </div>\n</div>\n<br />\n<div class=\"pagination-control\">\n  <pagination-controls (pageChange)=\"p = $event\" (click)=\"pageChanged(p);\"></pagination-controls>\n   <!-- <pagination-controls  id=\"foo\"\n    (pageChange)=\"p = $event\"\n    maxSize=\"9\"\n    directionLinks=\"true\"\n    autoHide=\"false\"\n    previousLabel=\"Previous\"\n    nextLabel=\"Next\"\n    screenReaderPaginationLabel=\"Pagination\"\n    screenReaderPageLabel=\"page\"\n    screenReaderCurrentLabel=\"You're on page\">\n  </pagination-controls> -->\n</div>\n\n"

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(149);


/***/ })

},[246]);
//# sourceMappingURL=main.bundle.js.map