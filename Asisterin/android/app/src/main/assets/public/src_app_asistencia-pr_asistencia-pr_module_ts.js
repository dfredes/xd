"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_asistencia-pr_asistencia-pr_module_ts"],{

/***/ 5083:
/*!***************************************************************!*\
  !*** ./src/app/asistencia-pr/asistencia-pr-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsistenciaPrPageRoutingModule": () => (/* binding */ AsistenciaPrPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _asistencia_pr_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asistencia-pr.page */ 4697);




const routes = [
    {
        path: '',
        component: _asistencia_pr_page__WEBPACK_IMPORTED_MODULE_0__.AsistenciaPrPage
    }
];
let AsistenciaPrPageRoutingModule = class AsistenciaPrPageRoutingModule {
};
AsistenciaPrPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AsistenciaPrPageRoutingModule);



/***/ }),

/***/ 5530:
/*!*******************************************************!*\
  !*** ./src/app/asistencia-pr/asistencia-pr.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsistenciaPrPageModule": () => (/* binding */ AsistenciaPrPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _asistencia_pr_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asistencia-pr-routing.module */ 5083);
/* harmony import */ var _asistencia_pr_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asistencia-pr.page */ 4697);







let AsistenciaPrPageModule = class AsistenciaPrPageModule {
};
AsistenciaPrPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _asistencia_pr_routing_module__WEBPACK_IMPORTED_MODULE_0__.AsistenciaPrPageRoutingModule
        ],
        declarations: [_asistencia_pr_page__WEBPACK_IMPORTED_MODULE_1__.AsistenciaPrPage]
    })
], AsistenciaPrPageModule);



/***/ }),

/***/ 4697:
/*!*****************************************************!*\
  !*** ./src/app/asistencia-pr/asistencia-pr.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsistenciaPrPage": () => (/* binding */ AsistenciaPrPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _asistencia_pr_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asistencia-pr.page.html?ngResource */ 944);
/* harmony import */ var _asistencia_pr_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asistencia-pr.page.scss?ngResource */ 7567);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let AsistenciaPrPage = class AsistenciaPrPage {
    constructor() { }
    ngOnInit() {
    }
};
AsistenciaPrPage.ctorParameters = () => [];
AsistenciaPrPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-asistencia-pr',
        template: _asistencia_pr_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_asistencia_pr_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AsistenciaPrPage);



/***/ }),

/***/ 7567:
/*!******************************************************************!*\
  !*** ./src/app/asistencia-pr/asistencia-pr.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc2lzdGVuY2lhLXByLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 944:
/*!******************************************************************!*\
  !*** ./src/app/asistencia-pr/asistencia-pr.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-back-button slot=\"start\">\r\n      <ion-icon name=\"arrow-back-circle-outline\"></ion-icon>\r\n    </ion-back-button>\r\n    <ion-title class=\"centro\">Asistencias</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"background\" padding>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_asistencia-pr_asistencia-pr_module_ts.js.map