import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController, Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { AsigSeccs } from './asig-seccs';
import { Asignaturas } from './asignaturas';
import { Asistencias } from './asistencias';
import { DetalleAsists } from './detalle-asists';
import { Listados } from './listados';
import { Roles } from './roles';
import { Secciones } from './secciones';
import { Usuarios } from './usuarios';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  public database: SQLiteObject;
  //variables para crear tablas e insertar registros por defecto en tablas
    usuario: string = "CREATE TABLE IF NOT EXISTS usuario(id_usuario INTEGER PRIMARY KEY autoincrement, rut VARCHAR(50) NOT NULL, nombre VARCHAR(50) NOT NULL, apellidos VARCHAR(50) NOT NULL, correo VARCHAR(50) NOT NULL), clave VARCHAR(50) NOT NULL, telefono INTEGER NOT NULL, FOREIGN KEY(id_rol) REFERENCES rol(id_rol);";
    rol: string = "CREATE TABLE IF NOT EXISTS rol(id_rol INTEGER PRIMARY KEY autoincrement, nom_rol VARCHAR(50) NOT NULL;";
    asig_secc: string = "CREATE TABLE IF NOT EXISTS asig_secc( INTEGER PRIMARY KEY autoincrement, FOREIGN KEY(id_asignatura) REFERENCES asignatura(id_asignatura), FOREIGN KEY(id_seccion) REFERENCES seccion(id_seccion),FOREIGN KEY(id_usuario) REFERENCES usuario(id_usuario);";
    seccion: string = "CREATE TABLE IF NOT EXISTS seccion(id_seccion INTEGER PRIMARY KEY autoincrement, sigla VARCHAR(50) NOT NULL ;";
    asignatura: string = "CREATE TABLE IF NOT EXISTS asignatura(id_asignatura INTEGER PRIMARY KEY autoincrement, sigla VARCHAR(50) NOT NULL, nombre VARCHAR(50) NOT NULL ;";
    listado: string = "CREATE TABLE IF NOT EXISTS listado(id_listado INTEGER PRIMARY KEY autoincrement, status VARCHAR(50) NOT NULL,FOREIGN KEY(id_usuario) REFERENCES usuario(id_usuario),FOREIGN KEY(id_asig_secc) REFERENCES asig_secc(id_asig_secc);";
    detalle_asist: string = "CREATE TABLE IF NOT EXISTS detalle_asist(id_detalle INTEGER PRIMARY KEY autoincrement, status VARCHAR(50) NOT NULL, FOREIGN KEY(id_usuario) REFERENCES usuario(id_usuario),FOREIGN KEY(id_asistencia) REFERENCES asistencia(id_asistencia);";
    asistencia: string = "CREATE TABLE IF NOT EXISTS asistencia(id_asistencia INTEGER PRIMARY KEY autoincrement, fecha DATE NOT NULL, hora_inicio VARCHAR(50) NOT NULL, hora_fin VARCHAR(50) NOT NULL, FOREIGN KEY(id_asig_secc) REFERENCES asig_secc(id_asig_secc), FOREIGN KEY(id_asistencia) REFERENCES asistencia(id_asistencia);";
  //observable para manipular los registros de una tabla
    listaUsuarios = new BehaviorSubject([]);
    listaAsistecia = new BehaviorSubject([]);
    listaSecciones = new BehaviorSubject([]);
    listaAsig_secc = new BehaviorSubject([]);
    listaDetalle_asist = new BehaviorSubject([]);
    listaListado = new BehaviorSubject([]);
    listaRol = new BehaviorSubject([]);
    listAsignatura = new BehaviorSubject([]);
    //observable para validar si la BD esta disponible o no
    private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  

    constructor(private sqlite: SQLite, private platform: Platform, private alertController: AlertController) {
      this.crearBD();
    }
    async presentAlert(msj: string) {
      const alert = await this.alertController.create({
        header: 'Importante',
        message: msj,
        buttons: ['OK'],
      });
  
      await alert.present();
    }
  
    crearBD() {
      //verificamos que la plataforma este lista
      this.platform.ready().then(() => {
        //creamos la BD
        this.sqlite.create({
          name: 'bdasisterin.db',
          location: 'default'
        }).then((db: SQLiteObject) => {
          this.database = db;
          //llamar a la funcion para crear las tablas
          this.crearTablas();
        }).catch(e => {
          this.presentAlert("Error creación BD: " + e);
        })
  
  
      })
    }
  
  
    async crearTablas() {
      try {
        //ejecuto creacion de tablas
        await this.database.executeSql(this.usuario, []);
        await this.database.executeSql(this.rol, []);
        await this.database.executeSql(this.asig_secc, []);
        await this.database.executeSql(this.seccion, []);
        await this.database.executeSql(this.listado, []);
        await this.database.executeSql(this.asignatura, []);
        await this.database.executeSql(this.detalle_asist, []);
        await this.database.executeSql(this.asistencia, []);

  
        //llamo al observable de carga de datos
        this.buscarusuarios();
        this.buscarseccion();
        this.buscarasig_secc();
        this.buscarasistencia();
        this.buscarasignatura();
        this.buscarlistas();
        this.buscardetalle_asist();
        this.buscarrol();
        //modificar el observable de el status de la BD
        this.isDBReady.next(true);
  
      } catch (e) {
        this.presentAlert("Error creación Tabla: " + e);
      }
    }






  
  
    dbState() {
      return this.isDBReady.asObservable();
    }
  
    fetchUsuarios(): Observable<Usuarios[]> {
      return this.listaUsuarios.asObservable();
    }


    fetchNoticias(): Observable<Noticias[]> {
      return this.listaNoticias.asObservable();
    }
  





    buscarasistencia() {
      //ejecuto la consulta
      return this.database.executeSql('SELECT * FROM asistencia', []).then(res => {
        //creo el arreglo para los registros
        let items: Asistencias[] = [];
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
        
              
            })
          }
        }
        //actualizo el observable
        this.listaAsistecia.next(items);
  
      })
    }





    buscardetalle_asist() {
      //ejecuto la consulta
      return this.database.executeSql('SELECT * FROM detalle_asist', []).then(res => {
        //creo el arreglo para los registros
        let items: DetalleAsists[] = [];
        //si existen filas
        if (res.rows.length > 0) {
          //recorro el cursor y lo agrego al arreglo
          for (var i = 0; i < res.rows.length; i++) {
            items.push({
              id_detalle: res.rows.item(i).id_detalle,
              status: res.rows.item(i).status,
              id_usuario: res.rows.item(i).id_usuario,
              id_asistencia: res.rows.item(i).id_asistencia
              
            })
          }
        }
        //actualizo el observable
        this.listaDetalle_asist.next(items);
  
      })
    }



    buscarlistas() {
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
    }




    buscarasignatura() {
      //ejecuto la consulta
      return this.database.executeSql('SELECT * FROM asignatura', []).then(res => {
        //creo el arreglo para los registros
        let items: Asignaturas[] = [];
        //si existen filas
        if (res.rows.length > 0) {
          //recorro el cursor y lo agrego al arreglo
          for (var i = 0; i < res.rows.length; i++) {
            items.push({
              id_asignatura: res.rows.item(i).id_asignatura,
              sigla: res.rows.item(i).sigla,
              nombre: res.rows.item(i).nombre
              
            })
          }
        }
        //actualizo el observable
        this.listAsignatura.next(items);
  
      })
    }


    buscarseccion() {
      //ejecuto la consulta
      return this.database.executeSql('SELECT * FROM seccion', []).then(res => {
        //creo el arreglo para los registros
        let items: Secciones[] = [];
        //si existen filas
        if (res.rows.length > 0) {
          //recorro el cursor y lo agrego al arreglo
          for (var i = 0; i < res.rows.length; i++) {
            items.push({
              id_seccion: res.rows.item(i).id_seccion,
              sigla: res.rows.item(i).sigla
              
            })
          }
        }
        //actualizo el observable
        this.listaSecciones.next(items);
  
      })
    }



    buscarasig_secc() {
      //ejecuto la consulta
      return this.database.executeSql('SELECT * FROM asig_secc', []).then(res => {
        //creo el arreglo para los registros
        let items: AsigSeccs[] = [];
        //si existen filas
        if (res.rows.length > 0) {
          //recorro el cursor y lo agrego al arreglo
          for (var i = 0; i < res.rows.length; i++) {
            items.push({
              id_asig_secc: res.rows.item(i).id_asig_secc,
              id_asignatur: res.rows.item(i).id_asignatur,
              id_seccion: res.rows.item(i).id_seccion,
              id_usuario: res.rows.item(i).id_usuario

            })
          }
        }
        //actualizo el observable
        this.listaAsig_secc.next(items);
  
      })
    }


    buscarrol() {
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
    }


    buscarusuarios() {
      //ejecuto la consulta
      return this.database.executeSql('SELECT * FROM usuario', []).then(res => {
        //creo el arreglo para los registros
        let items: Usuarios [] = [];
        //si existen filas
        if (res.rows.length > 0) {
          //recorro el cursor y lo agrego al arreglo
          for (var i = 0; i < res.rows.length; i++) {
            items.push({
              id_usuario: res.rows.item(i).id_usuario,
              rut: res.rows.item(i).rut,
              nombre: res.rows.item(i).nombre,
              apellidos: res.rows.item(i).apellidos,
              correo: res.rows.item(i).correo,
              clave: res.rows.item(i).clave,
              telefono: res.rows.item(i).telefono,
              id_rol: res.rows.item(i).id_rol
            })
          }
        }
        //actualizo el observable
        this.listaUsuarios.next(items);
  
      })
    }



  //registrar datos
    registrarNoticia(titulo, texto) {
      let data = [titulo, texto];
      return this.database.executeSql('INSERT INTO noticia(titulo,texto) VALUES (?,?)', data).then(data2 => {
        this.buscarNoticias();
        this.presentAlert("Registro Realizado");
      })
    }


    //registrar usuario
    registrarUsuario(rut, nombre,apellidos,correo,clave,telefono) {
      let data = [rut, nombre,apellidos,correo,clave,telefono];
      return this.database.executeSql('INSERT INTO usuarios(rut, nombre,apellidos,correo,clave,telefono) VALUES (?,?,?,?,?)', data).then(data2 => {
        this.buscarusuarios();
        this.presentAlert("Registro Realizado");
      })
    }

    //registrar rol
    registrarRol(nom_rol) {
      let data = [nom_rol];
      return this.database.executeSql('INSERT INTO usuarios(nom_rol) VALUES (?)', data).then(data2 => {
        this.buscarrol();
        this.presentAlert("Registro Realizado");
      })
    }



  
    //modifacion de datos
    modificarNoticia(id, titulo, texto) {
      let data = [titulo, texto, id];
      return this.database.executeSql('UPDATE noticia SET titulo = ?, texto = ? WHERE id_noticia = ?', data).then(data2 => {
        this.buscarNoticias();
        this.presentAlert("Registro Modificado");
      })
  
    }
  
    //eliminar datos
    eliminarNoticia(id){
      return this.database.executeSql('DELETE FROM noticia WHERE id_noticia = ?',[id]).then(data2=>{
        this.buscarNoticias();
        this.presentAlert("Registro Eliminado");
      })
  
    }
  
  
  
  

}




