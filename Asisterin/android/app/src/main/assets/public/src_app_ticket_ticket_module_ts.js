"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_ticket_ticket_module_ts"],{

/***/ 3580:
/*!*************************************************!*\
  !*** ./src/app/ticket/ticket-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TicketPageRoutingModule": () => (/* binding */ TicketPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ticket_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ticket.page */ 3285);




const routes = [
    {
        path: '',
        component: _ticket_page__WEBPACK_IMPORTED_MODULE_0__.TicketPage,
    }
];
let TicketPageRoutingModule = class TicketPageRoutingModule {
};
TicketPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TicketPageRoutingModule);



/***/ }),

/***/ 4001:
/*!*****************************************!*\
  !*** ./src/app/ticket/ticket.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TicketPageModule": () => (/* binding */ TicketPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ticket_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ticket-routing.module */ 3580);
/* harmony import */ var _ticket_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ticket.page */ 3285);







let TicketPageModule = class TicketPageModule {
};
TicketPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ticket_routing_module__WEBPACK_IMPORTED_MODULE_0__.TicketPageRoutingModule
        ],
        declarations: [_ticket_page__WEBPACK_IMPORTED_MODULE_1__.TicketPage]
    })
], TicketPageModule);



/***/ }),

/***/ 3285:
/*!***************************************!*\
  !*** ./src/app/ticket/ticket.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TicketPage": () => (/* binding */ TicketPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ticket_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ticket.page.html?ngResource */ 9563);
/* harmony import */ var _ticket_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ticket.page.scss?ngResource */ 8021);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let TicketPage = class TicketPage {
    constructor() { }
    ngOnInit() {
    }
};
TicketPage.ctorParameters = () => [];
TicketPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-ticket',
        template: _ticket_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_ticket_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TicketPage);



/***/ }),

/***/ 8021:
/*!****************************************************!*\
  !*** ./src/app/ticket/ticket.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aWNrZXQucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 9563:
/*!****************************************************!*\
  !*** ./src/app/ticket/ticket.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-back-button slot=\"start\">\r\n      <ion-icon name=\"arrow-back-circle-outline\"></ion-icon>\r\n    </ion-back-button>\r\n    <ion-title class=\"centro\">Generar Ticket</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-content class=\"background\" padding>\r\n\r\n  <ion-list>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Nombre Completo:</ion-label>\r\n      <ion-input type=\"text\" placeholder=\"Ej:Felipe Albornoz\"></ion-input>\r\n    </ion-item>\r\n  \r\n    <ion-item>\r\n      <ion-label position=\"floating\">Rut:</ion-label>\r\n      <ion-input type=\"text\" placeholder=\"Ej:20.143.745-K\"></ion-input>\r\n    </ion-item>\r\n  \r\n    <ion-item>\r\n     <ion-label position=\"floating\">Correo:</ion-label>\r\n     <ion-input type=\"text\" placeholder=\"Ej:feli.albornoz@duocuc.cl\"></ion-input>\r\n    </ion-item>\r\n  \r\n    <ion-item>\r\n      <ion-label position=\"floating\">Comentario:</ion-label>\r\n      <ion-input type=\"text\" placeholder=\"Ej:Inasistencia\"></ion-input>\r\n    </ion-item>\r\n<ion-item><ion-list>\r\n  <ion-item>\r\n    \r\n    <ion-select placeholder=\"Por favor selecciona una opcion\">\r\n      <ion-select-option value=\"inasistencia\">Inasistencia</ion-select-option>\r\n      <ion-select-option value=\"nota\">Nota erronea</ion-select-option>\r\n      <ion-select-option value=\"otro\">Otro</ion-select-option>\r\n    </ion-select>\r\n  </ion-item>\r\n</ion-list></ion-item>\r\n  </ion-list>\r\n\r\n  <br>\r\n  <br>\r\n  <br>\r\n  \r\n\r\n    <ion-button color=\"tertiary\" [routerLink]=\"['/otram']\" *ngIf=\"user !='Desconocido'\">Enviar\r\n    </ion-button>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_ticket_ticket_module_ts.js.map