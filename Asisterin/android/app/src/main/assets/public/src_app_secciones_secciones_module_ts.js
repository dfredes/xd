"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_secciones_secciones_module_ts"],{

/***/ 6755:
/*!*******************************************************!*\
  !*** ./src/app/secciones/secciones-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeccionesPageRoutingModule": () => (/* binding */ SeccionesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _secciones_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./secciones.page */ 4038);




const routes = [
    {
        path: '',
        component: _secciones_page__WEBPACK_IMPORTED_MODULE_0__.SeccionesPage
    }
];
let SeccionesPageRoutingModule = class SeccionesPageRoutingModule {
};
SeccionesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SeccionesPageRoutingModule);



/***/ }),

/***/ 1919:
/*!***********************************************!*\
  !*** ./src/app/secciones/secciones.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeccionesPageModule": () => (/* binding */ SeccionesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _secciones_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./secciones-routing.module */ 6755);
/* harmony import */ var _secciones_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./secciones.page */ 4038);







let SeccionesPageModule = class SeccionesPageModule {
};
SeccionesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _secciones_routing_module__WEBPACK_IMPORTED_MODULE_0__.SeccionesPageRoutingModule
        ],
        declarations: [_secciones_page__WEBPACK_IMPORTED_MODULE_1__.SeccionesPage]
    })
], SeccionesPageModule);



/***/ }),

/***/ 4038:
/*!*********************************************!*\
  !*** ./src/app/secciones/secciones.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SeccionesPage": () => (/* binding */ SeccionesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _secciones_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./secciones.page.html?ngResource */ 7997);
/* harmony import */ var _secciones_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./secciones.page.scss?ngResource */ 9772);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let SeccionesPage = class SeccionesPage {
    constructor() { }
    ngOnInit() {
    }
};
SeccionesPage.ctorParameters = () => [];
SeccionesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-secciones',
        template: _secciones_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_secciones_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SeccionesPage);



/***/ }),

/***/ 9772:
/*!**********************************************************!*\
  !*** ./src/app/secciones/secciones.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "#centrar {\n  text-align: center;\n  position: absolute;\n  left: 20px;\n  right: 20px;\n  top: 20%;\n}\n\n.top-20 {\n  margin-top: 20px;\n}\n\n.btn {\n  margin-top: 10px;\n}\n\n.btncenter {\n  text-align: center;\n  top: 10px;\n  left: 20px;\n  right: 20px;\n}\n\n.centro {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY2Npb25lcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FBQ0o7O0FBR0E7RUFDSSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBQUo7O0FBSUE7RUFDSSxrQkFBQTtBQURKIiwiZmlsZSI6InNlY2Npb25lcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2VudHJhcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIHRvcDogMjAlO1xyXG4gICAgXHJcbn1cclxuXHJcbi50b3AtMjAge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmJ0bntcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5idG5jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICBcclxufVxyXG5cclxuLmNlbnRyb3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn0iXX0= */";

/***/ }),

/***/ 7997:
/*!**********************************************************!*\
  !*** ./src/app/secciones/secciones.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-back-button slot=\"start\">\r\n      <ion-icon name=\"arrow-back-circle-outline\"></ion-icon>\r\n    </ion-back-button>\r\n    <ion-title class=\"centro\">Secciones</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"background\" padding>\r\n  \r\n\r\n  \r\n  <ion-container class=\"centro\">\r\n    <ion-accordion-group>\r\n      <ion-accordion value=\"first\">\r\n        <ion-item slot=\"header\" color=\"light\">\r\n          <ion-label>Seccion 001D</ion-label>\r\n        </ion-item>\r\n        <div class=\"ion-padding\" slot=\"content\">\r\n          First Content\r\n        </div>\r\n      </ion-accordion>\r\n      <ion-accordion value=\"second\">\r\n        <ion-item slot=\"header\" color=\"light\">\r\n          <ion-label>Seccion 002D</ion-label>\r\n        </ion-item>\r\n        <div class=\"ion-padding\" slot=\"content\">\r\n          Second Content\r\n        </div>\r\n      </ion-accordion>\r\n      \r\n    </ion-accordion-group>\r\n  </ion-container>\r\n  \r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_secciones_secciones_module_ts.js.map