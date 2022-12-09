"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_alum_alum_module_ts"],{

/***/ 6069:
/*!*********************************************!*\
  !*** ./src/app/alum/alum-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlumPageRoutingModule": () => (/* binding */ AlumPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _alum_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alum.page */ 4051);




const routes = [
    {
        path: '',
        component: _alum_page__WEBPACK_IMPORTED_MODULE_0__.AlumPage
    }
];
let AlumPageRoutingModule = class AlumPageRoutingModule {
};
AlumPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AlumPageRoutingModule);



/***/ }),

/***/ 1680:
/*!*************************************!*\
  !*** ./src/app/alum/alum.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlumPageModule": () => (/* binding */ AlumPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _alum_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alum-routing.module */ 6069);
/* harmony import */ var _alum_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alum.page */ 4051);







let AlumPageModule = class AlumPageModule {
};
AlumPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _alum_routing_module__WEBPACK_IMPORTED_MODULE_0__.AlumPageRoutingModule
        ],
        declarations: [_alum_page__WEBPACK_IMPORTED_MODULE_1__.AlumPage]
    })
], AlumPageModule);



/***/ }),

/***/ 4051:
/*!***********************************!*\
  !*** ./src/app/alum/alum.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlumPage": () => (/* binding */ AlumPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _alum_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alum.page.html?ngResource */ 4072);
/* harmony import */ var _alum_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alum.page.scss?ngResource */ 2791);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let AlumPage = class AlumPage {
    constructor() { }
    ngOnInit() {
    }
};
AlumPage.ctorParameters = () => [];
AlumPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-alum',
        template: _alum_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_alum_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AlumPage);



/***/ }),

/***/ 2791:
/*!************************************************!*\
  !*** ./src/app/alum/alum.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "#centrar {\n  text-align: center;\n  position: absolute;\n  left: 20px;\n  right: 20px;\n  top: 20%;\n}\n\n.top-20 {\n  margin-top: 20px;\n}\n\n.btn {\n  margin-top: 10px;\n}\n\n.btncenter {\n  text-align: center;\n  top: 10px;\n  left: 20px;\n  right: 20px;\n}\n\n.centro {\n  text-align: center;\n}\n\n.logo {\n  margin-top: 20px;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsdW0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBQUNKOztBQUdBO0VBQ0ksZ0JBQUE7QUFBSjs7QUFHQTtFQUNJLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUlBO0VBQ0ksa0JBQUE7QUFESjs7QUFNQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBSEoiLCJmaWxlIjoiYWx1bS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2VudHJhcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIHRvcDogMjAlO1xyXG4gICAgXHJcbn1cclxuXHJcbi50b3AtMjAge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmJ0bntcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5idG5jZW50ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICBsZWZ0OiAyMHB4O1xyXG4gICAgcmlnaHQ6IDIwcHg7XHJcbiAgICBcclxufVxyXG5cclxuLmNlbnRyb3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcblxyXG4ubG9nb3tcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 4072:
/*!************************************************!*\
  !*** ./src/app/alum/alum.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title class=\"centro\" ></ion-title>\r\n    <img src=\"../../assets/icon/asisterin.PNG\" alt=\"\"> \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"background\" padding>\r\n\r\n  <!-- botoenes superiores (perfil, log out, configuracion) -->\r\n  <ion-grid class=\"btncenter\">\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button [routerLink]=\"'/prof'\" color=\"tertiary\" >\r\n          <ion-icon slot=\"icon-only\" name=\"cog-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button [routerLink]=\"['/perfil']\">\r\n          <ion-icon slot=\"icon-only\" name=\"person-circle-outline\" ></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button color=\"tertiary\" [routerLink]=\"['/inicio']\">\r\n          <ion-icon slot=\"icon-only\" name=\"log-out-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  \r\n\r\n<ion-container id=\"centrar\">\r\n \r\n\r\n  \r\n  <ion-button  class=\"top-20\" size=\"default\" expand=\"full\" color=\"tertiary\" [routerLink]=\"['/escaner']\" > <ion-icon name=\"qr-code-outline\"></ion-icon> Escanear QR</ion-button>\r\n  \r\n <ion-button  class=\"top-20\" size=\"default\" expand=\"full\" color=\"primary\" [routerLink]=\"['/asistencia-al']\" > <ion-icon name=\"today-outline\"></ion-icon> Asistencias</ion-button>\r\n\r\n  <ion-button  class=\"top-20\" size=\"default\" expand=\"full\" color=\"tertiary\" [routerLink]=\"['/justificaciones']\" > <ion-icon name=\"reader-outline\"></ion-icon> Justificaciones </ion-button>\r\n <ion-button  class=\"top-20\" size=\"default\" expand=\"full\" color=\"primary\" [routerLink]=\"['/ticket']\" > <ion-icon name=\"reader-outline\"></ion-icon> Abrir Ticket</ion-button>\r\n\r\n\r\n</ion-container> \r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_alum_alum_module_ts.js.map