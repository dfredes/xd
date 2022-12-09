"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_asistencia-al_asistencia-al_module_ts"],{

/***/ 9171:
/*!***************************************************************!*\
  !*** ./src/app/asistencia-al/asistencia-al-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsistenciaAlPageRoutingModule": () => (/* binding */ AsistenciaAlPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _asistencia_al_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asistencia-al.page */ 8303);




const routes = [
    {
        path: '',
        component: _asistencia_al_page__WEBPACK_IMPORTED_MODULE_0__.AsistenciaAlPage
    }
];
let AsistenciaAlPageRoutingModule = class AsistenciaAlPageRoutingModule {
};
AsistenciaAlPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AsistenciaAlPageRoutingModule);



/***/ }),

/***/ 5344:
/*!*******************************************************!*\
  !*** ./src/app/asistencia-al/asistencia-al.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsistenciaAlPageModule": () => (/* binding */ AsistenciaAlPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _asistencia_al_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asistencia-al-routing.module */ 9171);
/* harmony import */ var _asistencia_al_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asistencia-al.page */ 8303);







let AsistenciaAlPageModule = class AsistenciaAlPageModule {
};
AsistenciaAlPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _asistencia_al_routing_module__WEBPACK_IMPORTED_MODULE_0__.AsistenciaAlPageRoutingModule
        ],
        declarations: [_asistencia_al_page__WEBPACK_IMPORTED_MODULE_1__.AsistenciaAlPage]
    })
], AsistenciaAlPageModule);



/***/ }),

/***/ 8303:
/*!*****************************************************!*\
  !*** ./src/app/asistencia-al/asistencia-al.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsistenciaAlPage": () => (/* binding */ AsistenciaAlPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _asistencia_al_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./asistencia-al.page.html?ngResource */ 5949);
/* harmony import */ var _asistencia_al_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./asistencia-al.page.scss?ngResource */ 1423);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let AsistenciaAlPage = class AsistenciaAlPage {
    constructor() { }
    ngOnInit() {
    }
};
AsistenciaAlPage.ctorParameters = () => [];
AsistenciaAlPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-asistencia-al',
        template: _asistencia_al_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_asistencia_al_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AsistenciaAlPage);



/***/ }),

/***/ 1423:
/*!******************************************************************!*\
  !*** ./src/app/asistencia-al/asistencia-al.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = ".centro {\n  text-align: center;\n}\n\n.techo {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzaXN0ZW5jaWEtYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFJQTtFQUVJLGdCQUFBO0FBRkoiLCJmaWxlIjoiYXNpc3RlbmNpYS1hbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudHJve1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG5cclxuXHJcbi50ZWNob3tcclxuXHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgXHJcbn0iXX0= */";

/***/ }),

/***/ 5949:
/*!******************************************************************!*\
  !*** ./src/app/asistencia-al/asistencia-al.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-back-button slot=\"start\">\r\n      <ion-icon name=\"arrow-back-circle-outline\"></ion-icon>\r\n    </ion-back-button>\r\n    <ion-title class=\"centro\">Asistencias</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"background\" padding>\r\n  \r\n\r\n  <ion-card class=\"techo\">\r\n    <ion-container class=\"centro\">\r\n      <ion-accordion-group>\r\n        <ion-accordion value=\"first\">\r\n          <ion-item slot=\"header\" color=\"light\">\r\n            <ion-label>Seccion 001D</ion-label>\r\n          </ion-item>\r\n          <div class=\"ion-padding\" slot=\"content\">\r\n            First Content\r\n          </div>\r\n        </ion-accordion>\r\n        <ion-accordion value=\"second\">\r\n          <ion-item slot=\"header\" color=\"light\">\r\n            <ion-label>Seccion 002D</ion-label>\r\n          </ion-item>\r\n          <div class=\"ion-padding\" slot=\"content\">\r\n            Second Content\r\n          </div>\r\n        </ion-accordion>\r\n        \r\n      </ion-accordion-group>\r\n    </ion-container>\r\n  </ion-card>    \r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_asistencia-al_asistencia-al_module_ts.js.map