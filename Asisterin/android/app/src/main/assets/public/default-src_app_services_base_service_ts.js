"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_services_base_service_ts"],{

/***/ 5136:
/*!******************************************!*\
  !*** ./src/app/services/base.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseService": () => (/* binding */ BaseService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _awesome_cordova_plugins_sqlite_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/sqlite/ngx */ 8685);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4505);





let BaseService = class BaseService {
    constructor(sqlite, platform, alertController) {
        this.sqlite = sqlite;
        this.platform = platform;
        this.alertController = alertController;
        //variables para crear tablas e insertar registros por defecto en tablas
        this.usuario = "CREATE TABLE IF NOT EXISTS usuario(id_usuario INTEGER PRIMARY KEY autoincrement, nombre VARCHAR(50) NOT NULL, clave VARCHAR(50) NOT NULL,  id_rol INTEGER NOT NULL, imagen BLOB, nombre_r VARCHAR(50), telefono INTEGER, correo VARCHAR(50), direccion VARCHAR(50));";
        this.asignatura = "CREATE TABLE IF NOT EXISTS asignatura(id_asignatura INTEGER PRIMARY KEY autoincrement, sigla VARCHAR(50) NOT NULL, nombre VARCHAR(50) NOT NULL);";
        this.seccion = "CREATE TABLE IF NOT EXISTS seccion(id_seccion INTEGER PRIMARY KEY autoincrement, sigla VARCHAR(50) NOT NULL);";
        //rol: string = "CREATE TABLE IF NOT EXISTS rol(id_rol INTEGER PRIMARY KEY autoincrement, nom_rol VARCHAR(50) NOT NULL;";
        this.asig_secc = "CREATE TABLE IF NOT EXISTS asig_secc(id_asig_secc INTEGER PRIMARY KEY autoincrement, FOREIGN KEY(fk_id_asignatura) REFERENCES asignatura(id_asignatura), FOREIGN KEY(fk_id_seccion) REFERENCES seccion(id_seccion),FOREIGN KEY(fk_id_usuario) REFERENCES usuario(id_usuario));";
        this.asistencia = "CREATE TABLE IF NOT EXISTS asistencia(id_asistencia INTEGER PRIMARY KEY autoincrement, fecha DATE NOT NULL, hora_inicio VARCHAR(50) NOT NULL, hora_fin VARCHAR(50) NOT NULL, FOREIGN KEY(fk_id_asig_secc) REFERENCES asig_secc(id_asig_secc));";
        //listado: string = "CREATE TABLE IF NOT EXISTS listado(id_listado INTEGER PRIMARY KEY autoincrement, status VARCHAR(50) NOT NULL,FOREIGN KEY(id_usuario) REFERENCES usuario(id_usuario),FOREIGN KEY(id_asig_secc) REFERENCES asig_secc(id_asig_secc);";
        this.detalle_asist = "CREATE TABLE IF NOT EXISTS detalle_asist(id_detalle INTEGER PRIMARY KEY autoincrement, status VARCHAR(50) NOT NULL, FOREIGN KEY(fk_id_usuario) REFERENCES usuario(id_usuario),FOREIGN KEY(fk_id_asistencia) REFERENCES asistencia(id_asistencia));";
        //observable para manipular los registros de una tabla
        this.listaUsuarios = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        this.listaAsistecia = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        this.listaSecciones = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        this.listaAsig_secc = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        this.listaDetalle_asist = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        this.listaListado = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        this.listaRol = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        this.listAsignatura = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        //observable para validar si la BD esta disponible o no
        this.isDBReady = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
        this.crearBD();
    }
    presentAlert(msj) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Importante',
                message: msj,
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
    crearBD() {
        //verificamos que la plataforma este lista
        this.platform.ready().then(() => {
            //creamos la BD
            this.sqlite.create({
                name: 'bdasist2.db',
                location: 'default'
            }).then((db) => {
                this.database = db;
                //llamar a la funcion para crear las tablas
                this.crearTablas();
            }).catch(e => {
                this.presentAlert("Error creación BD: " + e);
            });
        });
    }
    crearTablas() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            try {
                //ejecuto creacion de tablas
                yield this.database.executeSql(this.usuario, []);
                yield this.database.executeSql(this.asignatura, []);
                yield this.database.executeSql(this.seccion, []);
                //await this.database.executeSql(this.asig_secc, []);
                //await this.database.executeSql(this.asistencia, []);
                //await this.database.executeSql(this.detalle_asist, []);
                //llamo al observable de carga de datos
                this.buscarUsuarios();
                this.buscarseccion();
                this.buscarasig_secc();
                this.buscarasistencia();
                this.buscarasignatura();
                //this.buscarlistas();
                this.buscardetalle_asist();
                //this.buscarrol();
                //modificar el observable de el status de la BD
                this.isDBReady.next(true);
            }
            catch (e) {
                this.presentAlert("Error creación Tabla: " + e);
            }
        });
    }
    dbState() {
        return this.isDBReady.asObservable();
    }
    //1 usuario
    fetchUsuarios() {
        return this.listaUsuarios.asObservable();
    }
    //2 asig_secc
    fetchAsig_asecc() {
        return this.listaAsig_secc.asObservable();
    }
    //3 asistencia
    fetchAsistencias() {
        return this.listaAsistecia.asObservable();
    }
    //4 rol
    fetchRoles() {
        return this.listaRol.asObservable();
    }
    //5 detalle asist
    fetchDetalle_asists() {
        return this.listaDetalle_asist.asObservable();
    }
    //6 listas
    fetchListados() {
        return this.listaListado.asObservable();
    }
    //7 secciones
    fetchSecciones() {
        return this.listaSecciones.asObservable();
    }
    //8 asignatura
    fetchAsignaturas() {
        return this.listAsignatura.asObservable();
    }
    buscarasistencia() {
        //ejecuto la consulta
        return this.database.executeSql('SELECT * FROM asistencia', []).then(res => {
            //creo el arreglo para los registros
            let items = [];
            //si existen filas
            if (res.rows.length > 0) {
                //recorro el cursor y lo agrego al arreglo
                for (var i = 0; i < res.rows.length; i++) {
                    items.push({
                        id_asistencia: res.rows.item(i).id_asistencia,
                        fecha: res.rows.item(i).fecha,
                        hora_inicio: res.rows.item(i).hora_inicio,
                        hora_fin: res.rows.item(i).hora_fin,
                        id_asig_secc: res.rows.item(i).id_asig_secc,
                    });
                }
            }
            //actualizo el observable
            this.listaAsistecia.next(items);
        });
    }
    buscardetalle_asist() {
        //ejecuto la consulta
        return this.database.executeSql('SELECT * FROM detalle_asist', []).then(res => {
            //creo el arreglo para los registros
            let items = [];
            //si existen filas
            if (res.rows.length > 0) {
                //recorro el cursor y lo agrego al arreglo
                for (var i = 0; i < res.rows.length; i++) {
                    items.push({
                        id_detalle: res.rows.item(i).id_detalle,
                        status: res.rows.item(i).status,
                        id_usuario: res.rows.item(i).id_usuario,
                        id_asistencia: res.rows.item(i).id_asistencia
                    });
                }
            }
            //actualizo el observable
            this.listaDetalle_asist.next(items);
        });
    }
    /*buscarlistas() {
      //ejecuto la consulta
      return this.database.executeSql('SELECT * FROM listado', []).then(res => {
        //creo el arreglo para los registros
        let items: Listados[] = [];
        //si existen filas
        if (res.rows.length > 0) {
          //recorro el cursor y lo agrego al arreglo
          for (var i = 0; i < res.rows.length; i++) {
            items.push({
              id_listado: res.rows.item(i).id_listado,
              id_usuario: res.rows.item(i).id_usuario,
              id_asig_secc: res.rows.item(i).id_asig_secc,
              status: res.rows.item(i).status
              
            })
          }
        }
        //actualizo el observable
        this.listaListado.next(items);
  
      })
    }*/
    buscarasignatura() {
        //ejecuto la consulta
        return this.database.executeSql('SELECT * FROM asignatura', []).then(res => {
            //creo el arreglo para los registros
            let items = [];
            //si existen filas
            if (res.rows.length > 0) {
                //recorro el cursor y lo agrego al arreglo
                for (var i = 0; i < res.rows.length; i++) {
                    items.push({
                        id_asignatura: res.rows.item(i).id_asignatura,
                        sigla: res.rows.item(i).sigla,
                        nombre: res.rows.item(i).nombre
                    });
                }
            }
            //actualizo el observable
            this.listAsignatura.next(items);
        });
    }
    buscarseccion() {
        //ejecuto la consulta
        return this.database.executeSql('SELECT * FROM seccion', []).then(res => {
            //creo el arreglo para los registros
            let items = [];
            //si existen filas
            if (res.rows.length > 0) {
                //recorro el cursor y lo agrego al arreglo
                for (var i = 0; i < res.rows.length; i++) {
                    items.push({
                        id_seccion: res.rows.item(i).id_seccion,
                        sigla: res.rows.item(i).sigla
                    });
                }
            }
            //actualizo el observable
            this.listaSecciones.next(items);
        });
    }
    buscarasig_secc() {
        //ejecuto la consulta
        return this.database.executeSql('SELECT * FROM asig_secc', []).then(res => {
            //creo el arreglo para los registros
            let items = [];
            //si existen filas
            if (res.rows.length > 0) {
                //recorro el cursor y lo agrego al arreglo
                for (var i = 0; i < res.rows.length; i++) {
                    items.push({
                        id_asig_secc: res.rows.item(i).id_asig_secc,
                        id_asignatur: res.rows.item(i).id_asignatur,
                        id_seccion: res.rows.item(i).id_seccion,
                        id_usuario: res.rows.item(i).id_usuario
                    });
                }
            }
            //actualizo el observable
            this.listaAsig_secc.next(items);
        });
    }
    /*buscarrol() {
      //ejecuto la consulta
      return this.database.executeSql('SELECT * FROM rol', []).then(res => {
        //creo el arreglo para los registros
        let items: Roles[] = [];
        //si existen filas
        if (res.rows.length > 0) {
          //recorro el cursor y lo agrego al arreglo
          for (var i = 0; i < res.rows.length; i++) {
            items.push({
              id_rol: res.rows.item(i).id_rol,
              nom_rol: res.rows.item(i).id_rol
              
            })
          }
        }
        //actualizo el observable
        this.listaRol.next(items);
  
      })
    }*/
    buscarUsuarios() {
        //ejecuto la consulta
        return this.database.executeSql('SELECT * FROM usuario', []).then(res => {
            //creo el arreglo para los registros
            let items = [];
            //si existen filas
            if (res.rows.length > 0) {
                //recorro el cursor y lo agrego al arreglo
                for (var i = 0; i < res.rows.length; i++) {
                    items.push({
                        id_usuario: res.rows.item(i).id_usuario,
                        nombre: res.rows.item(i).nombre,
                        clave: res.rows.item(i).clave,
                        id_rol: res.rows.item(i).id_rol,
                        imagen: res.row.item(i).imagen,
                        nombre_r: res.row.item(i).nombre_r,
                        telefono: res.row.item(i).telefono,
                        correo: res.row.item(i).correo,
                        direccion: res.row.item(i).direccion
                    });
                }
            }
            //actualizo el observable
            this.listaUsuarios.next(items);
        });
    }
    //registro de datos
    //registrar usuario
    registrarUsuario(id_usuario, nombre, clave, id_rol) {
        let data = [id_usuario, nombre, clave, id_rol];
        return this.database.executeSql('INSERT or IGNORE INTO usuario(id_usuario ,nombre,clave,id_rol) VALUES (?,?,?,?)', data).then(data2 => {
            this.buscarUsuarios();
            this.presentAlert("Registro Realizado");
        });
    }
    /*registrar rol
    registrarRol(id_rol, nom_rol ) {
      let data = [id_rol, nom_rol ];
      return this.database.executeSql('INSERT INTO rol(id_rol ,nom_rol ) VALUES (?,?)', data).then(data2 => {
        this.buscarrol();
        this.presentAlert("Registro Realizado");
      })
    }*/
    //registrar seccion
    registrarSeccion(id_seccion, sigla) {
        let data = [id_seccion, sigla];
        return this.database.executeSql('INSERT OR IGNORE INTO  seccion(id_seccion ,sigla) VALUES (?,?)', data).then(data2 => {
            this.buscarseccion();
            this.presentAlert("Registro Realizado");
        });
    }
    /*registrar listado
    registrarlistado(id_listado, status, id_usuario, id_asig_secc) {
      let data = [id_listado, status, id_usuario, id_asig_secc];
      return this.database.executeSql('INSERT INTO listado(id_listado ,status, id_usuario, id_asig_secc) VALUES (?,?,?,?)', data).then(data2 => {
        this.buscarlistas();
        this.presentAlert("Registro Realizado");
      })
    }*/
    //registrar asistencia
    registrarasistencia(id_asistencia, fecha, hora_inicio, hora_fin, id_asig_secc) {
        let data = [id_asistencia, fecha, hora_inicio, hora_fin, id_asig_secc];
        return this.database.executeSql('INSERT INTO OR IGNORE INTO  asistencia(id_asistencia ,fecha,hora_inicio, hora_fin, id_asig_secc) VALUES (?,?,?,?,?)', data).then(data2 => {
            this.buscarasistencia();
            this.presentAlert("Registro Realizado");
        });
    }
    //registrar asignatura
    registrarasignatura(id_asignatura, sigla, nombre) {
        let data = [id_asignatura, sigla, nombre];
        return this.database.executeSql('INSERT OR IGNORE INTO  asignatura(id_asignatura, sigla ,nombre) VALUES (?,?,?)', data).then(data2 => {
            this.buscarasignatura();
            this.presentAlert("Registro Realizado");
        });
    }
    //registrar Detalle asistencia
    registrardetalle_asist(id_detalle, status, id_usuario, id_asistencia) {
        let data = [id_detalle, status, id_usuario, id_asistencia];
        return this.database.executeSql('INSERT OR IGNORE INTO asignatura(id_detalle, status, id_usuario, id_asistencia) VALUES (?,?,?,?)', data).then(data2 => {
            this.buscardetalle_asist();
            this.presentAlert("Registro Realizado");
        });
    }
    //registrar Asig_Secc
    registrarasig_secc(id_asig_secc, id_usuario, id_asignatura, id_seccion) {
        let data = [id_asig_secc, id_usuario, id_asignatura, id_seccion];
        return this.database.executeSql('INSERT OR IGNORE INTO  asig_secc(id_asig_secc,   id_usuario, id_asignatura, id_seccion ) VALUES (?,?,?,?)', data).then(data2 => {
            this.buscarasig_secc();
            this.presentAlert("Registro Realizado");
        });
    }
    //modifacion de datos
    //modificar usuarios
    modificarUsuario(id_usuario, nombre, clave) {
        let data = [id_usuario, nombre, clave];
        return this.database.executeSql('UPDATE usuario SET nombre = ?, clave = ?  WHERE id_usuario = ?', data).then(data2 => {
            this.buscarUsuarios();
            this.presentAlert("Registro Modificado");
        });
    }
    /*modificar rol
    modificarrol(id_rol, nom_rol) {
      let data = [id_rol, nom_rol];
      return this.database.executeSql('UPDATE rol SET nom_rol = ?  WHERE id_rol = ?', data).then(data2 => {
        this.buscarrol();
        this.presentAlert("Registro Modificado");
      })
  
    }*/
    //modificar seccion
    modificarseccion(id_seccion, sigla) {
        let data = [id_seccion, sigla];
        return this.database.executeSql('UPDATE seccion SET sigla = ?  WHERE id_seccion = ?', data).then(data2 => {
            this.buscarseccion();
            this.presentAlert("Registro Modificado");
        });
    }
    /*modificar listado
    modificarlistado(id_listado, status) {
      let data = [id_listado, status];
      return this.database.executeSql('UPDATE listado SET status = ?  WHERE id_listado = ?', data).then(data2 => {
        this.buscarlistas();
        this.presentAlert("Registro Modificado");
      })
  
    }*/
    //modificar asistencia
    modificarasistencia(id_asistencia, fecha, hora_inicio, hora_fin) {
        let data = [id_asistencia, fecha, hora_inicio, hora_fin];
        return this.database.executeSql('UPDATE asistencia SET fecha = ?, hora_inicio = ?, hora_fin = ?  WHERE id_asistencia = ?', data).then(data2 => {
            this.buscarasistencia();
            this.presentAlert("Registro Modificado");
        });
    }
    //modificar asignatura
    modificarasignatura(id_asignatura, sigla, nombre) {
        let data = [id_asignatura, sigla, nombre];
        return this.database.executeSql('UPDATE asignatura SET sigla = ?, nombre = ?  WHERE id_asignatura = ?', data).then(data2 => {
            this.buscarasistencia();
            this.presentAlert("Registro Modificado");
        });
    }
    //modificar asignatura
    modificardetalle_asist(id_detalle, status) {
        let data = [id_detalle, status];
        return this.database.executeSql('UPDATE detalle_asist SET status = ?  WHERE id_detalle = ?', data).then(data2 => {
            this.buscarasistencia();
            this.presentAlert("Registro Modificado");
        });
    }
    //modificar asig_secc
    modificarasig_Secc(id_asig_secc, sigla, nombre) {
        let data = [id_asig_secc, sigla, nombre];
        return this.database.executeSql('UPDATE asig_secc SET sigla = ?, nombre = ?  WHERE id_asig_secc = ?', data).then(data2 => {
            this.buscarasistencia();
            this.presentAlert("Registro Modificado");
        });
    }
    //eliminar datos
    //eliminar usuario
    eliminarusuario(id) {
        return this.database.executeSql('DELETE FROM usuario WHERE id_usuario = ?', [id]).then(data2 => {
            this.buscarUsuarios();
            this.presentAlert("Registro Eliminado");
        });
    }
    /*eliminar rol
    eliminarrol(id){
      return this.database.executeSql('DELETE FROM rol WHERE id_rol = ?',[id]).then(data2=>{
        this.buscarrol();
        this.presentAlert("Registro Eliminado");
      })
  
    }*/
    //eliminar asig_secc
    eliminarasig_secc(id) {
        return this.database.executeSql('DELETE FROM asig_secc WHERE id_asig_secc = ?', [id]).then(data2 => {
            this.buscarasig_secc();
            this.presentAlert("Registro Eliminado");
        });
    }
    //eliminar seccion
    eliminarseccion(id) {
        return this.database.executeSql('DELETE FROM seccion WHERE id_seccion = ?', [id]).then(data2 => {
            this.buscarseccion();
            this.presentAlert("Registro Eliminado");
        });
    }
    //eliminar asignatura
    eliminarasignaturan(id) {
        return this.database.executeSql('DELETE FROM asignatura WHERE id_asignatura = ?', [id]).then(data2 => {
            this.buscarasignatura();
            this.presentAlert("Registro Eliminado");
        });
    }
    /*eliminar listas
    eliminaralistas(id){
      return this.database.executeSql('DELETE FROM listado WHERE id_listado = ?',[id]).then(data2=>{
        this.buscarlistas();
        this.presentAlert("Registro Eliminado");
      })
  
    }*/
    //eliminar detalle_asist
    eliminardetalle_asist(id) {
        return this.database.executeSql('DELETE FROM detalle_asist WHERE id_detalle = ?', [id]).then(data2 => {
            this.buscardetalle_asist();
            this.presentAlert("Registro Eliminado");
        });
    }
    //eliminar detalle_asist
    eliminarasistencia(id) {
        return this.database.executeSql('DELETE FROM asistencia WHERE id_asistencia = ?', [id]).then(data2 => {
            this.buscarasistencia();
            this.presentAlert("Registro Eliminado");
        });
    }
};
BaseService.ctorParameters = () => [
    { type: _awesome_cordova_plugins_sqlite_ngx__WEBPACK_IMPORTED_MODULE_0__.SQLite },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController }
];
BaseService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], BaseService);



/***/ })

}]);
//# sourceMappingURL=default-src_app_services_base_service_ts.js.map