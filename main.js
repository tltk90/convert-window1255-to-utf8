(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+3mn":
/*!************************************************************!*\
  !*** ./src/app/file-converter/file-converter.component.ts ***!
  \************************************************************/
/*! exports provided: FileConverterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileConverterComponent", function() { return FileConverterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var encoding__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! encoding */ "M2TY");
/* harmony import */ var encoding__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(encoding__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file-saver */ "Iab2");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);






class FileConverterComponent {
    constructor() {
        this.reader = new FileReader();
    }
    ngOnInit() {
        this.readEvent = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.reader, 'load').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((text) => {
            const converter = Object(encoding__WEBPACK_IMPORTED_MODULE_3__["convert"])(this.reader.result, 'utf8', 'windows1255').toString();
            const fileConverter = new Blob(converter.split('/n'), { type: 'text/plain;charset=utf-8' });
            Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(fileConverter, `${this.fileName}-converter.txt`);
        })).subscribe();
    }
    ngOnDestroy() {
        this.readEvent.unsubscribe();
    }
    convertFile(files) {
        const file = files.item(0);
        if (file) {
            this.fileName = file.name.substring(0, file.name.lastIndexOf('.'));
            this.reader.readAsText(file);
        }
    }
}
FileConverterComponent.ɵfac = function FileConverterComponent_Factory(t) { return new (t || FileConverterComponent)(); };
FileConverterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FileConverterComponent, selectors: [["app-file-converter"]], decls: 6, vars: 0, consts: [[1, "converter"], ["type", "file", "accept", ".txt", 3, "change"]], template: function FileConverterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "convert file");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "support only txt file");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FileConverterComponent_Template_input_change_5_listener($event) { return ctx.convertFile($event.target.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 10px 0 0 0;\n  text-align: center;\n}\n[_nghost-%COMP%]   div.converter[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n[_nghost-%COMP%]   div.converter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: auto;\n  font-style: italic;\n  font-size: 12px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2NvbnZlcnQtd2luZG93MTI1NS10by11dGY4L2NvbnZlcnQtd2luZG93MTI1NS10by11dGY4L3NyYy9hcHAvZmlsZS1jb252ZXJ0ZXIvZmlsZS1jb252ZXJ0ZXIuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL2ZpbGUtY29udmVydGVyL2ZpbGUtY29udmVydGVyLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksa0JBQUE7RUFDQSxrQkFBQTtBQ0FKO0FESUk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDRk47QURGSTtFQU9JLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0ZSIiwiZmlsZSI6InNyYy9hcHAvZmlsZS1jb252ZXJ0ZXIvZmlsZS1jb252ZXJ0ZXIuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGgzIHtcbiAgICBtYXJnaW46IDEwcHggMCAwIDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgZGl2IHtcbiAgICAmLmNvbnZlcnRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgc3BhbiB7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCBoMyB7XG4gIG1hcmdpbjogMTBweCAwIDAgMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOmhvc3QgZGl2LmNvbnZlcnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuOmhvc3QgZGl2LmNvbnZlcnRlciBzcGFuIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FileConverterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-file-converter',
                templateUrl: './file-converter.component.html',
                styleUrls: ['./file-converter.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/convert-window1255-to-utf8/convert-window1255-to-utf8/src/main.ts */"zUnb");


/***/ }),

/***/ 1:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "Awk2":
/*!**************************************************************************!*\
  !*** ./src/app/single-line-converter/single-line-converter.component.ts ***!
  \**************************************************************************/
/*! exports provided: SingleLineConverterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleLineConverterComponent", function() { return SingleLineConverterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var encoding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! encoding */ "M2TY");
/* harmony import */ var encoding__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(encoding__WEBPACK_IMPORTED_MODULE_1__);



class SingleLineConverterComponent {
    constructor() {
        this.convertWord = '';
    }
    ngOnInit() {
    }
    convert(originalString) {
        this.convertWord = Object(encoding__WEBPACK_IMPORTED_MODULE_1__["convert"])(originalString, 'utf8', 'windows1255');
    }
    copyToClipboard(convertContent) {
        convertContent.disabled = false;
        convertContent.select();
        document.execCommand('copy');
        convertContent.disabled = true;
    }
}
SingleLineConverterComponent.ɵfac = function SingleLineConverterComponent_Factory(t) { return new (t || SingleLineConverterComponent)(); };
SingleLineConverterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SingleLineConverterComponent, selectors: [["app-single-line-converter"]], decls: 14, vars: 1, consts: [["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 2, "position", "absolute", "width", "0", "height", "0", "overflow", "hidden"], ["id", "icon-copy", "viewBox", "0 0 32 32"], ["d", "M20 8v-8h-14l-6 6v18h12v8h20v-24h-12zM6 2.828v3.172h-3.172l3.172-3.172zM2 22v-14h6v-6h10v6l-6 6v8h-10zM18 10.828v3.172h-3.172l3.172-3.172zM30 30h-16v-14h6v-6h10v20z"], [1, "original"], ["type", "text", 3, "input"], [1, "converter"], ["type", "text", "disabled", "", 3, "value"], ["convertContent", ""], ["title", "copy to clipboard", 3, "click"], [1, "icon", "icon-copy"], [0, "xlink", "href", "#icon-copy"]], template: function SingleLineConverterComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "defs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "symbol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "convert one line");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function SingleLineConverterComponent_Template_input_input_7_listener($event) { return ctx.convert($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleLineConverterComponent_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); return ctx.copyToClipboard(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "use", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.convertWord);
    } }, styles: ["[_nghost-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n}\n[_nghost-%COMP%]   div[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n[_nghost-%COMP%]   div.converter[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n}\n[_nghost-%COMP%]   div.converter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 80%;\n}\n[_nghost-%COMP%]   div.converter[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  stroke-width: 0;\n  stroke: currentColor;\n  fill: currentColor;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2NvbnZlcnQtd2luZG93MTI1NS10by11dGY4L2NvbnZlcnQtd2luZG93MTI1NS10by11dGY4L3NyYy9hcHAvc2luZ2xlLWxpbmUtY29udmVydGVyL3NpbmdsZS1saW5lLWNvbnZlcnRlci5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvc2luZ2xlLWxpbmUtY29udmVydGVyL3NpbmdsZS1saW5lLWNvbnZlcnRlci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGtCQUFBO0FDQUo7QURGQTtFQUtJLFdBQUE7QUNBSjtBREVJO0VBRUUsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ0ROO0FESkk7RUFRSSxVQUFBO0FDRFI7QURQSTtFQVdJLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvc2luZ2xlLWxpbmUtY29udmVydGVyL3NpbmdsZS1saW5lLWNvbnZlcnRlci5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgaDMge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICBkaXYge1xuICAgIG1hcmdpbjogNXB4O1xuXG4gICAgJi5jb252ZXJ0ZXIge1xuXG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgaW5wdXQge1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgfVxuICAgICAgLmljb24ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxZW07XG4gICAgICAgIGhlaWdodDogMWVtO1xuICAgICAgICBzdHJva2Utd2lkdGg6IDA7XG4gICAgICAgIHN0cm9rZTogY3VycmVudENvbG9yO1xuICAgICAgICBmaWxsOiBjdXJyZW50Q29sb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxufVxuIiwiOmhvc3QgaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG46aG9zdCBkaXYge1xuICBtYXJnaW46IDVweDtcbn1cbjpob3N0IGRpdi5jb252ZXJ0ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbjpob3N0IGRpdi5jb252ZXJ0ZXIgaW5wdXQge1xuICB3aWR0aDogODAlO1xufVxuOmhvc3QgZGl2LmNvbnZlcnRlciAuaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDFlbTtcbiAgaGVpZ2h0OiAxZW07XG4gIHN0cm9rZS13aWR0aDogMDtcbiAgc3Ryb2tlOiBjdXJyZW50Q29sb3I7XG4gIGZpbGw6IGN1cnJlbnRDb2xvcjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SingleLineConverterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-single-line-converter',
                templateUrl: './single-line-converter.component.html',
                styleUrls: ['./single-line-converter.component.less']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
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
    production: false,
    github_url: 'https://github.com/tltk90/convert-window1255-to-utf8'
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _single_line_converter_single_line_converter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./single-line-converter/single-line-converter.component */ "Awk2");
/* harmony import */ var _file_converter_file_converter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./file-converter/file-converter.component */ "+3mn");





class AppComponent {
    constructor() {
        this.title = 'window1255 to utf8 converter';
    }
    openGitHub() {
        window.open(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].github_url, '_blank');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 11, vars: 1, consts: [[2, "position", "absolute", "width", "0", "height", "0", "overflow", "hidden"], ["id", "icon-github", "viewBox", "0 0 32 32"], ["d", "M16 0.395c-8.836 0-16 7.163-16 16 0 7.069 4.585 13.067 10.942 15.182 0.8 0.148 1.094-0.347 1.094-0.77 0-0.381-0.015-1.642-0.022-2.979-4.452 0.968-5.391-1.888-5.391-1.888-0.728-1.849-1.776-2.341-1.776-2.341-1.452-0.993 0.11-0.973 0.11-0.973 1.606 0.113 2.452 1.649 2.452 1.649 1.427 2.446 3.743 1.739 4.656 1.33 0.143-1.034 0.558-1.74 1.016-2.14-3.554-0.404-7.29-1.777-7.29-7.907 0-1.747 0.625-3.174 1.649-4.295-0.166-0.403-0.714-2.030 0.155-4.234 0 0 1.344-0.43 4.401 1.64 1.276-0.355 2.645-0.532 4.005-0.539 1.359 0.006 2.729 0.184 4.008 0.539 3.054-2.070 4.395-1.64 4.395-1.64 0.871 2.204 0.323 3.831 0.157 4.234 1.026 1.12 1.647 2.548 1.647 4.295 0 6.145-3.743 7.498-7.306 7.895 0.574 0.497 1.085 1.47 1.085 2.963 0 2.141-0.019 3.864-0.019 4.391 0 0.426 0.288 0.925 1.099 0.768 6.354-2.118 10.933-8.113 10.933-15.18 0-8.837-7.164-16-16-16z"], [1, "header"], ["title", "show on github", 3, "click"], [1, "icon", "icon-github"], [0, "xlink", "href", "#icon-github"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "symbol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_4_listener() { return ctx.openGitHub(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "use", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-single-line-converter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-file-converter");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, "\n");
    } }, directives: [_single_line_converter_single_line_converter_component__WEBPACK_IMPORTED_MODULE_2__["SingleLineConverterComponent"], _file_converter_file_converter_component__WEBPACK_IMPORTED_MODULE_3__["FileConverterComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]   h1[_ngcontent-%COMP%], [_nghost-%COMP%]   h2[_ngcontent-%COMP%], [_nghost-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   h4[_ngcontent-%COMP%], [_nghost-%COMP%]   h5[_ngcontent-%COMP%], [_nghost-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 10px;\n  text-align: center;\n}\n[_nghost-%COMP%]   .header[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 10px;\n  top: 10px;\n  transform: rotateZ(20deg);\n}\n[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border: none;\n  background: none;\n}\n[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  stroke-width: 0;\n  stroke: currentColor;\n  fill: currentColor;\n}\n[_nghost-%COMP%]   .header[_ngcontent-%COMP%]   .icon-github[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL2NvbnZlcnQtd2luZG93MTI1NS10by11dGY4L2NvbnZlcnQtd2luZG93MTI1NS10by11dGY4L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7QURMQTs7Ozs7O0VBT0ksWUFBQTtFQUNBLGtCQUFBO0FDTUo7QURkQTtFQVlJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0FDS0o7QURwQkE7RUFrQk0sZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0tOO0FEekJBO0VBd0JNLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ0lOO0FEakNBO0VBaUNNLGVBQUE7QUNHTiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgaDEsaDIsaDMsaDQsaDUsaDYge1xuICAgIG1hcmdpbjogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuaGVhZGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdG9wOiAxMHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlWigyMGRlZyk7XG5cbiAgICBidXR0b24ge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICB9XG5cbiAgICAuaWNvbiB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogMWVtO1xuICAgICAgaGVpZ2h0OiAxZW07XG4gICAgICBzdHJva2Utd2lkdGg6IDA7XG4gICAgICBzdHJva2U6IGN1cnJlbnRDb2xvcjtcbiAgICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcbiAgICB9XG5cbiAgICAuaWNvbi1naXRodWIge1xuICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbjpob3N0IGgxLFxuOmhvc3QgaDIsXG46aG9zdCBoMyxcbjpob3N0IGg0LFxuOmhvc3QgaDUsXG46aG9zdCBoNiB7XG4gIG1hcmdpbjogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOmhvc3QgLmhlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogMTBweDtcbiAgdHJhbnNmb3JtOiByb3RhdGVaKDIwZGVnKTtcbn1cbjpob3N0IC5oZWFkZXIgYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG46aG9zdCAuaGVhZGVyIC5pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMWVtO1xuICBoZWlnaHQ6IDFlbTtcbiAgc3Ryb2tlLXdpZHRoOiAwO1xuICBzdHJva2U6IGN1cnJlbnRDb2xvcjtcbiAgZmlsbDogY3VycmVudENvbG9yO1xufVxuOmhvc3QgLmhlYWRlciAuaWNvbi1naXRodWIge1xuICBmb250LXNpemU6IDQwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.less']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _single_line_converter_single_line_converter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./single-line-converter/single-line-converter.component */ "Awk2");
/* harmony import */ var _file_converter_file_converter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./file-converter/file-converter.component */ "+3mn");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _single_line_converter_single_line_converter_component__WEBPACK_IMPORTED_MODULE_3__["SingleLineConverterComponent"],
        _file_converter_file_converter_component__WEBPACK_IMPORTED_MODULE_4__["FileConverterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _single_line_converter_single_line_converter_component__WEBPACK_IMPORTED_MODULE_3__["SingleLineConverterComponent"],
                    _file_converter_file_converter_component__WEBPACK_IMPORTED_MODULE_4__["FileConverterComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map