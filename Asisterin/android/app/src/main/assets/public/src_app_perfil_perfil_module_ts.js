"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_perfil_perfil_module_ts"],{

/***/ 9810:
/*!*************************************************!*\
  !*** ./src/app/perfil/perfil-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilPageRoutingModule": () => (/* binding */ PerfilPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil.page */ 9557);




const routes = [
    {
        path: '',
        component: _perfil_page__WEBPACK_IMPORTED_MODULE_0__.PerfilPage
    }
];
let PerfilPageRoutingModule = class PerfilPageRoutingModule {
};
PerfilPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PerfilPageRoutingModule);



/***/ }),

/***/ 1320:
/*!*****************************************!*\
  !*** ./src/app/perfil/perfil.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilPageModule": () => (/* binding */ PerfilPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _perfil_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil-routing.module */ 9810);
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perfil.page */ 9557);







let PerfilPageModule = class PerfilPageModule {
};
PerfilPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _perfil_routing_module__WEBPACK_IMPORTED_MODULE_0__.PerfilPageRoutingModule
        ],
        declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_1__.PerfilPage]
    })
], PerfilPageModule);



/***/ }),

/***/ 9557:
/*!***************************************!*\
  !*** ./src/app/perfil/perfil.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilPage": () => (/* binding */ PerfilPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _perfil_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil.page.html?ngResource */ 5768);
/* harmony import */ var _perfil_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perfil.page.scss?ngResource */ 5879);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 2543);
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/base.service */ 5136);






let PerfilPage = class PerfilPage {
    constructor(camera, base) {
        this.camera = camera;
        this.base = base;
        this.listaUsers = [{
                id_usuario: '',
                nombre: '',
                clave: '',
                id_rol: '',
                nombre_r: '',
                apellido: '',
                correo: '',
                foto: '',
                telefono: '',
                direccion: ''
            }];
    }
    ngOnInit() {
        this.base.dbState().subscribe((res) => {
            if (res) {
                this.base.buscarUsuarios();
                //subscribimos al observable que hace el select en la tabla noticias
                this.base.fetchUsuarios().subscribe((item) => {
                    //guardamos estos cambios de información en una variable propia de este ts
                    this.listaUsers = item;
                });
            }
        });
    }
    fotico() {
        const options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA
        };
        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            let image = 'data:image/jpeg;base64,' + imageData;
            this.image = image;
            this.base.presentAlert(this.image);
        }, (err) => {
            // Handle error
        });
    }
};
PerfilPage.ctorParameters = () => [
    { type: _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera },
    { type: _services_base_service__WEBPACK_IMPORTED_MODULE_3__.BaseService }
];
PerfilPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-perfil',
        template: _perfil_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_perfil_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PerfilPage);



/***/ }),

/***/ 5879:
/*!****************************************************!*\
  !*** ./src/app/perfil/perfil.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZXJmaWwucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 5768:
/*!****************************************************!*\
  !*** ./src/app/perfil/perfil.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-back-button slot=\"start\">\r\n      <ion-icon name=\"arrow-back-circle-outline\"></ion-icon>\r\n    </ion-back-button>\r\n    <ion-title class=\"centro\">Perfil</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"background\" padding>\r\n  \r\n  <ion-card>\r\n    \r\n  \r\n    \r\n\r\n    <ion-avatar>\r\n        <img alt=\"src\\assets\\icon\\no_foto\" [src]=\"image\" *ngIf=\"image\" />\r\n        <img src=\"\" *ngIf=\"!image\" />\r\n        <ion-icon name=\"camera-outline\" (click)=\"fotico()\"></ion-icon>\r\n      </ion-avatar>\r\n      \r\n      <ion-list>\r\n        <img [src]=\"image\" *ngIf=\"image\" />\r\n        <img src=\"\" *ngIf=\"!image\" />\r\n      </ion-list>  \r\n\r\n\r\n      <ion-item><label>Nombre: {{nombre_r}}</label></ion-item>\r\n      <ion-item><label>Rut: {{rut}}</label></ion-item>\r\n      <ion-item><label>Direccion: {{direccion}}</label></ion-item>\r\n      <ion-item><label>Telefono: {{telefono}}</label></ion-item>\r\n      <ion-item><label>Correo: {{correo}}</label></ion-item>\r\n\r\n      \r\n    <ion-button expand=\"block\"(click)=\"fotico()\"> <label style=\"font-size: 12px;\" > <ion-icon name=\"camera-outline\"></ion-icon>foto</label></ion-button>\r\n    <ion-button  class=\"top-20\" size=\"default\" expand=\"full\" color=\"tertiary\" [routerLink]=\"['/editar-usuario']\" > <ion-icon name=\"create-outline\"></ion-icon>Modificar</ion-button>\r\n    \r\n\r\n\r\n    \r\n     \r\n    \r\n    \r\n  </ion-card>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_perfil_perfil_module_ts.js.map