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
    id: '',
    nombre: '',
    clave: '',
    id_rol: ''
  }]

  ramo: any = [{
    id_asignatura: '',
    sigla: '',
    nombre: '',
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
      this.base.presentAlert(JSON.stringify (this.users))
      //console.log(res)
      for(let x of this.users){
        //this.servicioBD.presentAlert(x.nombre);
        this.base.registrarUsuario(x.id, x.nombre,x.clave, x.id_rol);
      }

      
     
    });

    this.api.getUsuario().subscribe((res)=>{
      this.users = res;
      this.base.presentAlert(JSON.stringify (this.users))
      //console.log(res)
      for(let x of this.users){
        //this.servicioBD.presentAlert(x.nombre);
        this.base.registrarUsuario(x.id, x.nombre,x.clave, x.id_rol);
      }
     
    });

    this.api.getUsuario().subscribe((res)=>{
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
 




