"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_secc_secc_module_ts"],{

/***/ 7201:
/*!***************************************************!*\
  !*** ./src/app/pages/secc/secc-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeccPageRoutingModule": () => (/* binding */ SeccPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _secc_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./secc.page */ 9948);




const routes = [
    {
        path: '',
        component: _secc_page__WEBPACK_IMPORTED_MODULE_0__.SeccPage
    }
];
let SeccPageRoutingModule = class SeccPageRoutingModule {
};
SeccPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SeccPageRoutingModule);



/***/ }),

/***/ 2516:
/*!*******************************************!*\
  !*** ./src/app/pages/secc/secc.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeccPageModule": () => (/* binding */ SeccPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _secc_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./secc-routing.module */ 7201);
/* harmony import */ var _secc_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./secc.page */ 9948);







let SeccPageModule = class SeccPageModule {
};
SeccPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _secc_routing_module__WEBPACK_IMPORTED_MODULE_0__.SeccPageRoutingModule
        ],
        declarations: [_secc_page__WEBPACK_IMPORTED_MODULE_1__.SeccPage]
    })
], SeccPageModule);



/***/ }),

/***/ 9948:
/*!*****************************************!*\
  !*** ./src/app/pages/secc/secc.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeccPage": () => (/* binding */ SeccPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _secc_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./secc.page.html?ngResource */ 7718);
/* harmony import */ var _secc_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./secc.page.scss?ngResource */ 8147);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let SeccPage = class SeccPage {
    constructor() { }
    ngOnInit() {
    }
};
SeccPage.ctorParameters = () => [];
SeccPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-secc',
        template: _secc_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_secc_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SeccPage);



/***/ }),

/***/ 8147:
/*!******************************************************!*\
  !*** ./src/app/pages/secc/secc.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWNjLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 7718:
/*!******************************************************!*\
  !*** ./src/app/pages/secc/secc.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>secc</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-accordion-group>\r\n    <ion-accordion value=\"first\">\r\n      <ion-item slot=\"header\">\r\n        <ion-label>First Accordion</ion-label>\r\n      </ion-item>\r\n      <div class=\"ion-padding\" slot=\"content\">\r\n        First Content\r\n      </div>\r\n    </ion-accordion>\r\n    <ion-accordion value=\"second\">\r\n      <ion-item slot=\"header\">\r\n        <ion-label>Second Accordion</ion-label>\r\n      </ion-item>\r\n      <div class=\"ion-padding\" slot=\"content\">\r\n        Second Content\r\n      </div>\r\n    </ion-accordion>\r\n\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_secc_secc_module_ts.js.map