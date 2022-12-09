"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_redirec_redirec_module_ts"],{

/***/ 6598:
/*!***************************************************!*\
  !*** ./src/app/redirec/redirec-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedirecPageRoutingModule": () => (/* binding */ RedirecPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _redirec_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redirec.page */ 7903);




const routes = [
    {
        path: '',
        component: _redirec_page__WEBPACK_IMPORTED_MODULE_0__.RedirecPage
    }
];
let RedirecPageRoutingModule = class RedirecPageRoutingModule {
};
RedirecPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RedirecPageRoutingModule);



/***/ }),

/***/ 7457:
/*!*******************************************!*\
  !*** ./src/app/redirec/redirec.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedirecPageModule": () => (/* binding */ RedirecPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _redirec_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redirec-routing.module */ 6598);
/* harmony import */ var _redirec_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redirec.page */ 7903);







let RedirecPageModule = class RedirecPageModule {
};
RedirecPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _redirec_routing_module__WEBPACK_IMPORTED_MODULE_0__.RedirecPageRoutingModule
        ],
        declarations: [_redirec_page__WEBPACK_IMPORTED_MODULE_1__.RedirecPage]
    })
], RedirecPageModule);



/***/ }),

/***/ 7903:
/*!*****************************************!*\
  !*** ./src/app/redirec/redirec.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedirecPage": () => (/* binding */ RedirecPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _redirec_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redirec.page.html?ngResource */ 5998);
/* harmony import */ var _redirec_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redirec.page.scss?ngResource */ 4691);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let RedirecPage = class RedirecPage {
    constructor() { }
    ngOnInit() {
    }
};
RedirecPage.ctorParameters = () => [];
RedirecPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-redirec',
        template: _redirec_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_redirec_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RedirecPage);



/***/ }),

/***/ 4691:
/*!******************************************************!*\
  !*** ./src/app/redirec/redirec.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWRpcmVjLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 5998:
/*!******************************************************!*\
  !*** ./src/app/redirec/redirec.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar primary=\"color\">\r\n    <ion-title></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-card>  \r\n    <ion-item> \r\n      <p>Su ticket se ha enviado de forma exitosa</p>\r\n    </ion-item> \r\n    \r\n  </ion-card>\r\n \r\n  <div id=\"xd\">\r\n  <ion-button color=\"tertiary\" [routerLink]=\"['/inicio']\" *ngIf=\"user !='Desconocido'\">Volver\r\n  </ion-button>\r\n  </div>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_redirec_redirec_module_ts.js.map