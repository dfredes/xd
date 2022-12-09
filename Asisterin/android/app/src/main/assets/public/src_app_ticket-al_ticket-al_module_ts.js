"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_ticket-al_ticket-al_module_ts"],{

/***/ 1926:
/*!*******************************************************!*\
  !*** ./src/app/ticket-al/ticket-al-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TicketAlPageRoutingModule": () => (/* binding */ TicketAlPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ticket_al_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ticket-al.page */ 5929);




const routes = [
    {
        path: '',
        component: _ticket_al_page__WEBPACK_IMPORTED_MODULE_0__.TicketAlPage
    }
];
let TicketAlPageRoutingModule = class TicketAlPageRoutingModule {
};
TicketAlPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TicketAlPageRoutingModule);



/***/ }),

/***/ 3196:
/*!***********************************************!*\
  !*** ./src/app/ticket-al/ticket-al.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TicketAlPageModule": () => (/* binding */ TicketAlPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ticket_al_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ticket-al-routing.module */ 1926);
/* harmony import */ var _ticket_al_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ticket-al.page */ 5929);







let TicketAlPageModule = class TicketAlPageModule {
};
TicketAlPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ticket_al_routing_module__WEBPACK_IMPORTED_MODULE_0__.TicketAlPageRoutingModule
        ],
        declarations: [_ticket_al_page__WEBPACK_IMPORTED_MODULE_1__.TicketAlPage]
    })
], TicketAlPageModule);



/***/ }),

/***/ 5929:
/*!*********************************************!*\
  !*** ./src/app/ticket-al/ticket-al.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TicketAlPage": () => (/* binding */ TicketAlPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ticket_al_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ticket-al.page.html?ngResource */ 1688);
/* harmony import */ var _ticket_al_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ticket-al.page.scss?ngResource */ 3031);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let TicketAlPage = class TicketAlPage {
    constructor() { }
    ngOnInit() {
    }
};
TicketAlPage.ctorParameters = () => [];
TicketAlPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-ticket-al',
        template: _ticket_al_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_ticket_al_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TicketAlPage);



/***/ }),

/***/ 3031:
/*!**********************************************************!*\
  !*** ./src/app/ticket-al/ticket-al.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aWNrZXQtYWwucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 1688:
/*!**********************************************************!*\
  !*** ./src/app/ticket-al/ticket-al.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-back-button slot=\"start\">\r\n      <ion-icon name=\"arrow-back-circle-outline\"></ion-icon>\r\n    </ion-back-button>\r\n    <ion-title>Recuperar</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"background\" padding>  \r\n\r\n  <ion-card>\r\n    <ion-item>\r\n      <p>Introduzca sus datos para enviar un mail de recuperacion</p>\r\n    </ion-item>\r\n    <ion-list>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Nombre Completo:</ion-label>\r\n        <ion-input type=\"text\" placeholder=\"Ej:Benjamin cayo tapia\"></ion-input>\r\n      </ion-item>\r\n    \r\n      <ion-item>\r\n        <ion-label position=\"floating\">Rut:</ion-label>\r\n        <ion-input type=\"text\" placeholder=\"Ej:20.143.745-K\"></ion-input>\r\n      </ion-item>\r\n    \r\n      <ion-item>\r\n       <ion-label position=\"floating\">Correo:</ion-label>\r\n       <ion-input type=\"text\" placeholder=\"Ej:thecochayuyo@gmail.com\"></ion-input>\r\n      </ion-item>\r\n    \r\n      \r\n    </ion-list>\r\n  \r\n    \r\n  </ion-card>  \r\n  <ion-button color=\"primary\" [routerLink]=\"['/redirec']\">Enviar</ion-button>\r\n\r\n  \r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_ticket-al_ticket-al_module_ts.js.map