"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_generador_generador_module_ts"],{

/***/ 2457:
/*!*******************************************************!*\
  !*** ./src/app/generador/generador-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneradorPageRoutingModule": () => (/* binding */ GeneradorPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _generador_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generador.page */ 5402);




const routes = [
    {
        path: '',
        component: _generador_page__WEBPACK_IMPORTED_MODULE_0__.GeneradorPage
    }
];
let GeneradorPageRoutingModule = class GeneradorPageRoutingModule {
};
GeneradorPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GeneradorPageRoutingModule);



/***/ }),

/***/ 4635:
/*!***********************************************!*\
  !*** ./src/app/generador/generador.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneradorPageModule": () => (/* binding */ GeneradorPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _generador_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generador-routing.module */ 2457);
/* harmony import */ var _generador_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generador.page */ 5402);







let GeneradorPageModule = class GeneradorPageModule {
};
GeneradorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _generador_routing_module__WEBPACK_IMPORTED_MODULE_0__.GeneradorPageRoutingModule
        ],
        declarations: [_generador_page__WEBPACK_IMPORTED_MODULE_1__.GeneradorPage]
    })
], GeneradorPageModule);



/***/ }),

/***/ 5402:
/*!*********************************************!*\
  !*** ./src/app/generador/generador.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneradorPage": () => (/* binding */ GeneradorPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _generador_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generador.page.html?ngResource */ 6971);
/* harmony import */ var _generador_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generador.page.scss?ngResource */ 4901);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let GeneradorPage = class GeneradorPage {
    constructor() { }
    ngOnInit() {
    }
};
GeneradorPage.ctorParameters = () => [];
GeneradorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-generador',
        template: _generador_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_generador_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], GeneradorPage);



/***/ }),

/***/ 4901:
/*!**********************************************************!*\
  !*** ./src/app/generador/generador.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmFkb3IucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 6971:
/*!**********************************************************!*\
  !*** ./src/app/generador/generador.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>generador</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"background\" padding>\r\n\r\n\r\n\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_generador_generador_module_ts.js.map