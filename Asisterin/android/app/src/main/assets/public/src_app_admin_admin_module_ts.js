"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_admin_admin_module_ts"],{

/***/ 3176:
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPageRoutingModule": () => (/* binding */ AdminPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _admin_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.page */ 153);




const routes = [
    {
        path: '',
        component: _admin_page__WEBPACK_IMPORTED_MODULE_0__.AdminPage
    }
];
let AdminPageRoutingModule = class AdminPageRoutingModule {
};
AdminPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AdminPageRoutingModule);



/***/ }),

/***/ 7095:
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPageModule": () => (/* binding */ AdminPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-routing.module */ 3176);
/* harmony import */ var _admin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.page */ 153);







let AdminPageModule = class AdminPageModule {
};
AdminPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdminPageRoutingModule
        ],
        declarations: [_admin_page__WEBPACK_IMPORTED_MODULE_1__.AdminPage]
    })
], AdminPageModule);



/***/ }),

/***/ 153:
/*!*************************************!*\
  !*** ./src/app/admin/admin.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminPage": () => (/* binding */ AdminPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _admin_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin.page.html?ngResource */ 376);
/* harmony import */ var _admin_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.page.scss?ngResource */ 1162);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let AdminPage = class AdminPage {
    constructor() { }
    ngOnInit() {
    }
};
AdminPage.ctorParameters = () => [];
AdminPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-admin',
        template: _admin_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_admin_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AdminPage);



/***/ }),

/***/ 1162:
/*!**************************************************!*\
  !*** ./src/app/admin/admin.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "#centrar {\n  text-align: center;\n  position: absolute;\n  left: 20px;\n  right: 20px;\n  top: 20%;\n}\n\n.top-20 {\n  margin-top: 20px;\n}\n\n.btn {\n  margin-top: 10px;\n}\n\n.btncenter {\n  text-align: center;\n  top: 10px;\n  left: 20px;\n  right: 20px;\n}\n\n.centro {\n  text-align: center;\n}\n\n.logo {\n  margin-top: 20px;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUFDSjs7QUFHQTtFQUNJLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFBSjs7QUFJQTtFQUNJLGtCQUFBO0FBREo7O0FBTUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUhKIiwiZmlsZSI6ImFkbWluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjZW50cmFye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMjBweDtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgdG9wOiAyMCU7XHJcbiAgICBcclxufVxyXG5cclxuLnRvcC0yMCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uYnRue1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmJ0bmNlbnRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRvcDogMTBweDtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIFxyXG59XHJcblxyXG4uY2VudHJve1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG5cclxuXHJcbi5sb2dve1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 376:
/*!**************************************************!*\
  !*** ./src/app/admin/admin.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title class=\"centro\" ></ion-title>\r\n    <img src=\"../../assets/icon/asisterin.PNG\" alt=\"\"> \r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n \r\n\r\n<!-- imagen de fondo -->\r\n<ion-content class=\"background\" padding>\r\n\r\n\r\n  <!-- botoenes superiores (perfil, log out, configuracion) -->\r\n  <ion-grid class=\"btncenter\">\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button  color=\"tertiary\">\r\n          <ion-icon slot=\"icon-only\" name=\"cog-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button [routerLink]=\"['/perfil']\">\r\n          <ion-icon slot=\"icon-only\" name=\"person-circle-outline\" ></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col>\r\n        <ion-button [routerLink]=\"['/alum']\" color=\"tertiary\">\r\n          <ion-icon slot=\"icon-only\" name=\"log-out-outline\"></ion-icon>\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n\r\n  <!-- menu principal -->\r\n<ion-container id=\"centrar\">\r\n \r\n\r\n  \r\n\r\n  \r\n <ion-button  class=\"top-20\" size=\"default\" expand=\"full\" color=\"primary\" [routerLink]=\"['/asistencia-al']\" > <ion-icon name=\"today-outline\"></ion-icon> Asistencias</ion-button>\r\n\r\n  <ion-button  class=\"top-20\" size=\"default\" expand=\"full\" color=\"tertiary\" [routerLink]=\"['/secciones']\"> <ion-icon name=\"reader-outline\" ></ion-icon> Secciones </ion-button>\r\n <ion-button  class=\"top-20\" size=\"default\" expand=\"full\" color=\"primary\" [routerLink]=\"['/ticket-al']\" > <ion-icon name=\"reader-outline\"></ion-icon> Ver Ticket</ion-button>\r\n\r\n\r\n</ion-container> \r\n\r\n</ion-content>\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_admin_admin_module_ts.js.map