"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_inicio_inicio_module_ts"],{

/***/ 9681:
/*!*************************************************!*\
  !*** ./src/app/inicio/inicio-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioPageRoutingModule": () => (/* binding */ InicioPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio.page */ 8476);




const routes = [
    {
        path: '',
        component: _inicio_page__WEBPACK_IMPORTED_MODULE_0__.InicioPage
    }
];
let InicioPageRoutingModule = class InicioPageRoutingModule {
};
InicioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InicioPageRoutingModule);



/***/ }),

/***/ 3185:
/*!*****************************************!*\
  !*** ./src/app/inicio/inicio.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioPageModule": () => (/* binding */ InicioPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _inicio_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio-routing.module */ 9681);
/* harmony import */ var _inicio_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inicio.page */ 8476);







let InicioPageModule = class InicioPageModule {
};
InicioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _inicio_routing_module__WEBPACK_IMPORTED_MODULE_0__.InicioPageRoutingModule
        ],
        declarations: [_inicio_page__WEBPACK_IMPORTED_MODULE_1__.InicioPage]
    })
], InicioPageModule);



/***/ }),

/***/ 8476:
/*!***************************************!*\
  !*** ./src/app/inicio/inicio.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InicioPage": () => (/* binding */ InicioPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _inicio_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inicio.page.html?ngResource */ 4588);
/* harmony import */ var _inicio_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inicio.page.scss?ngResource */ 1075);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ 1491);
/* harmony import */ var _services_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/base.service */ 5136);








let InicioPage = class InicioPage {
    constructor(fb, base, api, router) {
        /*this.formularioLogin = this.fb.group({
          'usuario': new FormControl("", [Validators.required, Validators.minLength(4)]),
          'contrasena': new FormControl("",Validators.required)
        }
        )*/
        this.fb = fb;
        this.base = base;
        this.api = api;
        this.router = router;
        this.users = [{
                id_usuario: '',
                nombre: '',
                clave: '',
                id_rol: ''
            }];
        this.users1 = [{
                id_usuario: '',
                nombre: '',
                clave: '',
                id_rol: ''
            }];
        this.ramo = [{
                id_asignatura: '',
                sigla: '',
                nombre: '',
            }];
        this.seccion = [{
                id_seccion: '',
                sigla: '',
            }];
        this.Asigsecci = [{
                id_asig_secc: '',
                id_asignatur: '',
                id_seccion: '',
                id_usuario: '',
            }];
        this.usuario = "";
        this.contrasena = "";
    }
    ngOnInit() {
        this.api.getUsuario().subscribe((res) => {
            this.users = res;
            //console.log(res)
            for (var i = 0; i < this.users.length; i++) {
                //this.servicioBD.presentAlert(x.nombre);
                this.base.registrarUsuario(this.users[i].id_usuario, this.users[i].nombre, this.users[i].clave, this.users[i].id_rol);
            }
        });
        this.base.dbState().subscribe((res) => {
            if (res) {
                //me subscribo al observable de la lista de noticias
                this.base.fetchUsuarios().subscribe((item) => {
                    this.users1 = item;
                });
            }
        });
        this.api.getSeccion().subscribe((res) => {
            this.seccion = res;
            this.base.presentAlert(JSON.stringify(this.seccion));
            //console.log(res)
            for (let x of this.seccion) {
                //this.servicioBD.presentAlert(x.nombre);
                this.base.registrarSeccion(x.id_seccion, x.sigla);
            }
        });
        this.api.getAsigsecci().subscribe((res) => {
            this.Asigsecci = res;
            this.base.presentAlert(JSON.stringify(this.Asigsecci));
            //console.log(res)
            for (let x of this.Asigsecci) {
                //this.servicioBD.presentAlert(x.nombre);
                this.base.registrarasig_secc(x.id_asig_secc, x.id_usuario, x.id_asignatura, x.id_seccion);
            }
        });
        this.api.getRamos().subscribe((res) => {
            this.ramo = res;
            this.base.presentAlert(JSON.stringify(this.ramo));
            //console.log(res)
            for (let x of this.ramo) {
                //this.servicioBD.presentAlert(x.nombre);
                this.base.registrarasignatura(x.id_asignatura, x.sigla, x.nombre);
            }
        });
    }
    login() {
        this.base.presentAlert(JSON.stringify(this.users1));
        for (let i of this.users) {
            this.base.presentAlert(i.nombre);
            if (i.nombre != this.usuario) {
                this.base.presentAlert("datos incorrectos");
            }
            else {
                if (i.clave != this.contrasena) {
                    this.base.presentAlert("datos incorrectos");
                }
                else {
                    if (i.id_rol == 1) {
                        this.router.navigate(['/prof']);
                    }
                    else {
                        this.router.navigate(['/alum']);
                    }
                }
            }
            /*if (i.id_rol = 1){
              this.router.navigate(['/prof'])
              }
              else{
                this.router.navigate(['/alum'])
              }*/
        }
    }
};
InicioPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _services_base_service__WEBPACK_IMPORTED_MODULE_3__.BaseService },
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
InicioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-inicio',
        template: _inicio_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_inicio_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], InicioPage);



/***/ }),

/***/ 1075:
/*!****************************************************!*\
  !*** ./src/app/inicio/inicio.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "ion-card {\n  margin-top: 5%;\n  max-width: 95%;\n  max-height: 95%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaWNpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFBSiIsImZpbGUiOiJpbmljaW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmlvbi1jYXJke1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBtYXgtd2lkdGg6IDk1JTtcclxuICAgIG1heC1oZWlnaHQ6IDk1JTtcclxuICB9XHJcblxyXG5cclxuIl19 */";

/***/ }),

/***/ 4588:
/*!****************************************************!*\
  !*** ./src/app/inicio/inicio.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  \r\n<ion-title></ion-title>\r\n</ion-header>\r\n\r\n<ion-content class=\"background\" padding>\r\n\r\n<ion-card>\r\n  <img src=\"'../../../../assets/icon/Logo Asisterin.PNG\">\r\n  \r\n    <ion-item>\r\n      <ion-label position=\"floating\"> Usuario </ion-label>\r\n      <ion-input [(ngModel)]=\"usuario\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\"> Contraseña </ion-label>\r\n      <ion-input type=\"password\" [(ngModel)]=\"contrasena\"></ion-input>\r\n    </ion-item>\r\n    \r\n  \r\n  <ion-button expand=\"block\" (click)=\"login()\">Iniciar Sesion</ion-button>\r\n  <ion-button expand=\"block\" color=\"tertiary\" [routerLink]=\"['/ticket-al']\"> <label style=\"font-size: 12px;\" >¿Olvidaste tu Contraseña?</label></ion-button>\r\n</ion-card> \r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_inicio_inicio_module_ts.js.map