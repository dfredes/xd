"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_olv_olv_module_ts"],{

/***/ 9043:
/*!*******************************************!*\
  !*** ./src/app/olv/olv-routing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OlvPageRoutingModule": () => (/* binding */ OlvPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _olv_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./olv.page */ 4684);




const routes = [
    {
        path: '',
        component: _olv_page__WEBPACK_IMPORTED_MODULE_0__.OlvPage
    }
];
let OlvPageRoutingModule = class OlvPageRoutingModule {
};
OlvPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OlvPageRoutingModule);



/***/ }),

/***/ 5729:
/*!***********************************!*\
  !*** ./src/app/olv/olv.module.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OlvPageModule": () => (/* binding */ OlvPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _olv_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./olv-routing.module */ 9043);
/* harmony import */ var _olv_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./olv.page */ 4684);







let OlvPageModule = class OlvPageModule {
};
OlvPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _olv_routing_module__WEBPACK_IMPORTED_MODULE_0__.OlvPageRoutingModule
        ],
        declarations: [_olv_page__WEBPACK_IMPORTED_MODULE_1__.OlvPage]
    })
], OlvPageModule);



/***/ }),

/***/ 4684:
/*!*********************************!*\
  !*** ./src/app/olv/olv.page.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OlvPage": () => (/* binding */ OlvPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _olv_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./olv.page.html?ngResource */ 9719);
/* harmony import */ var _olv_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./olv.page.scss?ngResource */ 3172);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let OlvPage = class OlvPage {
    constructor() { }
    ngOnInit() {
    }
};
OlvPage.ctorParameters = () => [];
OlvPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-olv',
        template: _olv_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_olv_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OlvPage);



/***/ }),

/***/ 3172:
/*!**********************************************!*\
  !*** ./src/app/olv/olv.page.scss?ngResource ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvbHYucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 9719:
/*!**********************************************!*\
  !*** ./src/app/olv/olv.page.html?ngResource ***!
  \**********************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-back-button slot=\"start\">\r\n      <ion-icon name=\"arrow-back-circle-outline\"></ion-icon>\r\n    </ion-back-button>\r\n    <ion-title class=\"centro\"></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content class=\"background\" padding>\r\n\r\n  \r\n    \r\n  \r\n\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_olv_olv_module_ts.js.map