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

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder, private base: BaseService, public api: ApiService, private router:Router) {

    this.formularioLogin = this.fb.group({
      'usuario': new FormControl('', [Validators.required, Validators.minLength(4)]),
      'contrasena': new FormControl("",Validators.required)
    }
    )
    
  }

  ngOnInit() {
    this.api.getUsuario().subscribe((res)=>{
      this.users = res;
      //console.log(res)
      for(let x of this.users){
        //this.servicioBD.presentAlert(x.nombre);
        this.base.registrarUsuario(x.id, x.nombre,x.clave, x.id_rol);
      }
     
    });

     

  }

  login(){
     for(let i of this.users){
      if (i.id_rol = 2){
        this.router.navigate(['/alum'])
        }
        else{
          this.router.navigate(['/prof'])
        } 
      }
      


     }
     
  }
 




