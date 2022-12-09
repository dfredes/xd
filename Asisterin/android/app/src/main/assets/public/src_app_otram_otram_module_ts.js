"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_otram_otram_module_ts"],{

/***/ 8952:
/*!***********************************************!*\
  !*** ./src/app/otram/otram-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtramPageRoutingModule": () => (/* binding */ OtramPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _otram_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otram.page */ 8622);




const routes = [
    {
        path: '',
        component: _otram_page__WEBPACK_IMPORTED_MODULE_0__.OtramPage
    }
];
let OtramPageRoutingModule = class OtramPageRoutingModule {
};
OtramPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OtramPageRoutingModule);



/***/ }),

/***/ 8126:
/*!***************************************!*\
  !*** ./src/app/otram/otram.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtramPageModule": () => (/* binding */ OtramPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _otram_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otram-routing.module */ 8952);
/* harmony import */ var _otram_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otram.page */ 8622);







let OtramPageModule = class OtramPageModule {
};
OtramPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _otram_routing_module__WEBPACK_IMPORTED_MODULE_0__.OtramPageRoutingModule
        ],
        declarations: [_otram_page__WEBPACK_IMPORTED_MODULE_1__.OtramPage]
    })
], OtramPageModule);



/***/ }),

/***/ 8622:
/*!*************************************!*\
  !*** ./src/app/otram/otram.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtramPage": () => (/* binding */ OtramPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _otram_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otram.page.html?ngResource */ 4516);
/* harmony import */ var _otram_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otram.page.scss?ngResource */ 2986);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let OtramPage = class OtramPage {
    constructor() { }
    ngOnInit() {
    }
};
OtramPage.ctorParameters = () => [];
OtramPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-otram',
        template: _otram_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_otram_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OtramPage);



/***/ }),

/***/ 2986:
/*!**************************************************!*\
  !*** ./src/app/otram/otram.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdHJhbS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 4516:
/*!**************************************************!*\
  !*** ./src/app/otram/otram.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-back-button slot=\"start\">\r\n      <ion-icon name=\"arrow-back-circle-outline\"></ion-icon>\r\n    </ion-back-button>\r\n    <ion-title></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-card>  \r\n    <ion-item> \r\n      <p>Su ticket se ha enviado de forma exitosa</p>\r\n    </ion-item> \r\n    \r\n  </ion-card>\r\n \r\n  <div id=\"xd\">\r\n  <ion-button color=\"tertiary\" [routerLink]=\"['/inicio']\" *ngIf=\"user !='Desconocido'\">Volver\r\n  </ion-button>\r\n  </div>\r\n\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_otram_otram_module_ts.js.map