import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController, Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  public database: SQLiteObject;
  //variables para crear tablas e insertar registros por defecto en tablas
    usuario: string = "CREATE TABLE IF NOT EXISTS usuario(id_usuario INTEGER PRIMARY KEY autoincrement, rut VARCHAR(50) NOT NULL, nombre VARCHAR(50) NOT NULL, apellidos VARCHAR(50) NOT NULL, correo VARCHAR(50) NOT NULL), clave VARCHAR(50) NOT NULL, telefono INTEGER NOT NULL, FOREIGN KEY(id_rol) REFERENCES rol(id_rol);";
    rol: string = "CREATE TABLE IF NOT EXISTS rol(id_rol INTEGER PRIMARY KEY autoincrement, nom_rol VARCHAR(50) NOT NULL;";
    asig_secc: string = "CREATE TABLE IF NOT EXISTS asig_secc(id_asig_secc INTEGER PRIMARY KEY autoincrement, FOREIGN KEY(id_asignatura) REFERENCES asignatura(id_asignatura), FOREIGN KEY(id_seccion) REFERENCES seccion(id_seccion),FOREIGN KEY(id_usuario) REFERENCES usuario(id_usuario);";
    seccion: string = "CREATE TABLE IF NOT EXISTS seccion(id_seccion INTEGER PRIMARY KEY autoincrement, sigla VARCHAR(50) NOT NULL ;";
    asignatura: string = "CREATE TABLE IF NOT EXISTS asignatura(id_asignatura INTEGER PRIMARY KEY autoincrement, sigla VARCHAR(50) NOT NULL, nombre VARCHAR(50) NOT NULL ;";
    listado: string = "CREATE TABLE IF NOT EXISTS listado(id_listado INTEGER PRIMARY KEY autoincrement, status VARCHAR(50) NOT NULL,FOREIGN KEY(id_usuario) REFERENCES usuario(id_usuario),FOREIGN KEY(id_asig_secc) REFERENCES asig_secc(id_asig_secc);";
    detalle_asist: string = "CREATE TABLE IF NOT EXISTS detalle_asist(id_detalle INTEGER PRIMARY KEY autoincrement, status VARCHAR(50) NOT NULL, FOREIGN KEY(id_usuario) REFERENCES usuario(id_usuario),FOREIGN KEY(id_asistencia) REFERENCES asistencia(id_asistencia);";
    asistencia: string = "CREATE TABLE IF NOT EXISTS asistencia(id_asistencia INTEGER PRIMARY KEY autoincrement, fecha DATE NOT NULL, hora_inicio VARCHAR(50) NOT NULL, hora_fin VARCHAR(50) NOT NULL, FOREIGN KEY(id_asig_secc) REFERENCES asig_secc(id_asig_secc), FOREIGN KEY(id_asistencia) REFERENCES asistencia(id_asistencia);";
    registroNoticia: string = "INSERT or IGNORE INTO noticia(id_rol,titulo,texto) VALUES (1,'Este es un titulo','Este es el contenido de la noticia');";
  //observable para manipular los registros de una tabla
    listaNoticias = new BehaviorSubject([]);
    //observable para validar si la BD esta disponible o no
    private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  

  constructor(private sqlite: SQLite, private platform: Platform, private alertController: AlertController { }
  

}


