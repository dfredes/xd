import { Component, OnInit } from '@angular/core';
import{
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
}from'@angular/forms';
import { Route, Router, RouterLink } from '@angular/router';
import { ApiService } from '../api.service';
import { BaseService } from '../services/base.service';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  users: any = [{
    id_usuario: '',
    nombre: '',
    clave: '',
    id_rol: ''
  }]

  users1: any = [{
    id_usuario: '',
    nombre: '',
    clave: '',
    id_rol: ''
  }]

  ramo: any = [{
    id_asignatura: '',
    sigla: '',
    nombre: '',
  }]

  seccion: any = [{
    id_seccion: '',
    sigla: '',
  }]

  Asigsecci: any = [{
    id_asig_secc: '',
    id_asignatur: '',
    id_seccion: '',
    id_usuario: '',
  }]

  usuario= "";
  contrasena="";


  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder, private base: BaseService, public api: ApiService, private router:Router) {

    /*this.formularioLogin = this.fb.group({
      'usuario': new FormControl("", [Validators.required, Validators.minLength(4)]),
      'contrasena': new FormControl("",Validators.required)
    }
    )*/
    
  }

  ngOnInit() {
    this.api.getUsuario().subscribe((res)=>{
      this.users = res;
      
      //console.log(res)
      for (var i = 0; i < this.users.length; i++){
        //this.servicioBD.presentAlert(x.nombre);
        this.base.registrarUsuario(this.users[i].id_usuario,this.users[i].nombre,this.users[i].clave,this.users[i].id_rol);
      }

      
     
    });


    this.base.dbState().subscribe((res)=>{


      if(res){
        

        //me subscribo al observable de la lista de noticias
        this.base.fetchUsuarios().subscribe((item)=>{

          this.users1 = item;

        })
      }
    })

    this.api.getSeccion().subscribe((res)=>{
      this.seccion = res;
      this.base.presentAlert(JSON.stringify (this.seccion))
      //console.log(res)
      for(let x of this.seccion){
        //this.servicioBD.presentAlert(x.nombre);
        this.base.registrarSeccion(x.id_seccion, x.sigla);
      }
     
    });

    this.api.getAsigsecci().subscribe((res)=>{
      this.Asigsecci = res;
      this.base.presentAlert(JSON.stringify (this.Asigsecci))
      //console.log(res)
      for(let x of this.Asigsecci){
        //this.servicioBD.presentAlert(x.nombre);
        this.base.registrarasig_secc(x.id_asig_secc,  x.id_usuario,x.id_asignatura, x.id_seccion);
      }
     
    });

    this.api.getRamos().subscribe((res)=>{
      this.ramo = res;
      this.base.presentAlert(JSON.stringify (this.ramo))
      //console.log(res)
      for(let x of this.ramo){
        //this.servicioBD.presentAlert(x.nombre);
        this.base.registrarasignatura(x.id_asignatura, x.sigla, x.nombre);
      }
     
    });

     

  }

  login(){
    
    this.base.presentAlert(JSON.stringify (this.users1))
     for(let i of this.users){
      this.base.presentAlert(i.nombre)



      if (i.nombre != this.usuario){
        this.base.presentAlert("datos incorrectos")


      }else{
        if(i.clave != this.contrasena){
          
          this.base.presentAlert("datos incorrectos")
        }else{
          if(i.id_rol == 1){
            this.router.navigate(['/prof'])
          }else{
            this.router.navigate(['/alum'])
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
     
  }
 




