"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_justificaciones_justificaciones_module_ts"],{

/***/ 6411:
/*!*******************************************************************!*\
  !*** ./src/app/justificaciones/justificaciones-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JustificacionesPageRoutingModule": () => (/* binding */ JustificacionesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _justificaciones_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./justificaciones.page */ 6893);




const routes = [
    {
        path: '',
        component: _justificaciones_page__WEBPACK_IMPORTED_MODULE_0__.JustificacionesPage
    }
];
let JustificacionesPageRoutingModule = class JustificacionesPageRoutingModule {
};
JustificacionesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], JustificacionesPageRoutingModule);



/***/ }),

/***/ 9650:
/*!***********************************************************!*\
  !*** ./src/app/justificaciones/justificaciones.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JustificacionesPageModule": () => (/* binding */ JustificacionesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _justificaciones_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./justificaciones-routing.module */ 6411);
/* harmony import */ var _justificaciones_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./justificaciones.page */ 6893);







let JustificacionesPageModule = class JustificacionesPageModule {
};
JustificacionesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _justificaciones_routing_module__WEBPACK_IMPORTED_MODULE_0__.JustificacionesPageRoutingModule
        ],
        declarations: [_justificaciones_page__WEBPACK_IMPORTED_MODULE_1__.JustificacionesPage]
    })
], JustificacionesPageModule);



/***/ }),

/***/ 6893:
/*!*********************************************************!*\
  !*** ./src/app/justificaciones/justificaciones.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JustificacionesPage": () => (/* binding */ JustificacionesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _justificaciones_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./justificaciones.page.html?ngResource */ 8727);
/* harmony import */ var _justificaciones_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./justificaciones.page.scss?ngResource */ 1723);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let JustificacionesPage = class JustificacionesPage {
    constructor() { }
    ngOnInit() {
    }
};
JustificacionesPage.ctorParameters = () => [];
JustificacionesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-justificaciones',
        template: _justificaciones_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_justificaciones_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], JustificacionesPage);



/***/ }),

/***/ 1723:
/*!**********************************************************************!*\
  !*** ./src/app/justificaciones/justificaciones.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqdXN0aWZpY2FjaW9uZXMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 8727:
/*!**********************************************************************!*\
  !*** ./src/app/justificaciones/justificaciones.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-back-button slot=\"start\">\r\n      <ion-icon name=\"arrow-back-circle-outline\"></ion-icon>\r\n    </ion-back-button>\r\n    <ion-title class=\"centro\">Justificaciones</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"background\" padding>\r\n\r\n  <ion-card>\r\n    <ion-item>\r\n      \r\n      <p>Programacion web</p>\r\n      <ion-checkbox></ion-checkbox>\r\n      \r\n    </ion-item>\r\n    </ion-card>\r\n    <ion-card>\r\n      <ion-item>\r\n        \r\n        <p>Ingles</p>\r\n        <ion-checkbox></ion-checkbox>\r\n        \r\n      </ion-item>\r\n      </ion-card>\r\n      <ion-card>\r\n        <ion-item>\r\n    \r\n          <p>Calculo</p>\r\n          <ion-checkbox></ion-checkbox>\r\n          \r\n        </ion-item>\r\n        </ion-card>\r\n        <ion-card>\r\n          <ion-item>\r\n            \r\n            <p>Etica</p>\r\n            <ion-checkbox></ion-checkbox>\r\n            \r\n          </ion-item>\r\n          </ion-card>\r\n          <ion-card>\r\n  <ion-label position=\"floating\">Buscar en mi dispositivo</ion-label>\r\n          <ion-searchbar></ion-searchbar>\r\n          </ion-card>\r\n          <ion-button>Enviar</ion-button>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_justificaciones_justificaciones_module_ts.js.map