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
    } }, styles: ["[_nghost-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 10px 0 0 0;\n  text-align: center;\n}\n[_nghost-%COMP%]   div.converter[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n[_nghost-%COMP%]   div.converter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: auto;\n  font-style: italic;\n  font-size: 12px;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsZS1jb252ZXJ0ZXIvQzovVXNlcnMvVHphaGkvUHJvamVjdHMvd2luZG93MTI1NS10by11dGY4LWNvbnZlcnRlci9zcmMvYXBwL2ZpbGUtY29udmVydGVyL2ZpbGUtY29udmVydGVyLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9maWxlLWNvbnZlcnRlci9maWxlLWNvbnZlcnRlci5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGtCQUFBO0VBQ0Esa0JBQUE7QUNBSjtBRElJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0ZOO0FERkk7RUFPSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNGUiIsImZpbGUiOiJzcmMvYXBwL2ZpbGUtY29udmVydGVyL2ZpbGUtY29udmVydGVyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBoMyB7XG4gICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIGRpdiB7XG4gICAgJi5jb252ZXJ0ZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgIHNwYW4ge1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiOmhvc3QgaDMge1xuICBtYXJnaW46IDEwcHggMCAwIDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IGRpdi5jb252ZXJ0ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbjpob3N0IGRpdi5jb252ZXJ0ZXIgc3BhbiB7XG4gIG1hcmdpbjogYXV0bztcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4iXX0= */"] });
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

module.exports = __webpack_require__(/*! C:\Users\Tzahi\Projects\window1255-to-utf8-converter\src\main.ts */"zUnb");


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
    } }, styles: ["[_nghost-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n}\n[_nghost-%COMP%]   div[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n[_nghost-%COMP%]   div.converter[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  align-items: center;\n}\n[_nghost-%COMP%]   div.converter[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 80%;\n}\n[_nghost-%COMP%]   div.converter[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  stroke-width: 0;\n  stroke: currentColor;\n  fill: currentColor;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2luZ2xlLWxpbmUtY29udmVydGVyL0M6L1VzZXJzL1R6YWhpL1Byb2plY3RzL3dpbmRvdzEyNTUtdG8tdXRmOC1jb252ZXJ0ZXIvc3JjL2FwcC9zaW5nbGUtbGluZS1jb252ZXJ0ZXIvc2luZ2xlLWxpbmUtY29udmVydGVyLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9zaW5nbGUtbGluZS1jb252ZXJ0ZXIvc2luZ2xlLWxpbmUtY29udmVydGVyLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksa0JBQUE7QUNBSjtBREZBO0VBS0ksV0FBQTtBQ0FKO0FERUk7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FDRE47QURKSTtFQVFJLFVBQUE7QUNEUjtBRFBJO0VBV0kscUJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDRFIiLCJmaWxlIjoic3JjL2FwcC9zaW5nbGUtbGluZS1jb252ZXJ0ZXIvc2luZ2xlLWxpbmUtY29udmVydGVyLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBoMyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIGRpdiB7XG4gICAgbWFyZ2luOiA1cHg7XG5cbiAgICAmLmNvbnZlcnRlciB7XG5cbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICBpbnB1dCB7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICB9XG4gICAgICAuaWNvbiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDFlbTtcbiAgICAgICAgaGVpZ2h0OiAxZW07XG4gICAgICAgIHN0cm9rZS13aWR0aDogMDtcbiAgICAgICAgc3Ryb2tlOiBjdXJyZW50Q29sb3I7XG4gICAgICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG59XG4iLCI6aG9zdCBoMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbjpob3N0IGRpdiB7XG4gIG1hcmdpbjogNXB4O1xufVxuOmhvc3QgZGl2LmNvbnZlcnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuOmhvc3QgZGl2LmNvbnZlcnRlciBpbnB1dCB7XG4gIHdpZHRoOiA4MCU7XG59XG46aG9zdCBkaXYuY29udmVydGVyIC5pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMWVtO1xuICBoZWlnaHQ6IDFlbTtcbiAgc3Ryb2tlLXdpZHRoOiAwO1xuICBzdHJva2U6IGN1cnJlbnRDb2xvcjtcbiAgZmlsbDogY3VycmVudENvbG9yO1xufVxuIl19 */"] });
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
/* harmony import */ var _single_line_converter_single_line_converter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./single-line-converter/single-line-converter.component */ "Awk2");
/* harmony import */ var _file_converter_file_converter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file-converter/file-converter.component */ "+3mn");




class AppComponent {
    constructor() {
        this.title = 'window1255 to utf8 converter';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 1, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-single-line-converter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-file-converter");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, "\n");
    } }, directives: [_single_line_converter_single_line_converter_component__WEBPACK_IMPORTED_MODULE_1__["SingleLineConverterComponent"], _file_converter_file_converter_component__WEBPACK_IMPORTED_MODULE_2__["FileConverterComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]   h1[_ngcontent-%COMP%], [_nghost-%COMP%]   h2[_ngcontent-%COMP%], [_nghost-%COMP%]   h3[_ngcontent-%COMP%], [_nghost-%COMP%]   h4[_ngcontent-%COMP%], [_nghost-%COMP%]   h5[_ngcontent-%COMP%], [_nghost-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 10px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzovVXNlcnMvVHphaGkvUHJvamVjdHMvd2luZG93MTI1NS10by11dGY4LWNvbnZlcnRlci9zcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0NGO0FETEE7Ozs7OztFQU9JLFlBQUE7RUFDQSxrQkFBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICBoMSxoMixoMyxoNCxoNSxoNiB7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbjpob3N0IGgxLFxuOmhvc3QgaDIsXG46aG9zdCBoMyxcbjpob3N0IGg0LFxuOmhvc3QgaDUsXG46aG9zdCBoNiB7XG4gIG1hcmdpbjogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */"] });
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