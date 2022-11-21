import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseService } from '../services/base.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.page.html',
  styleUrls: ['./editar-usuario.page.scss'],
})
export class EditarUsuarioPage implements OnInit {

    id_usuario: "";
    nombre: "";
    clave: "";
    rut:"";
    id_rol: "";
    imagen: "";
    nombre_r: "";
    telefono: "";
    correo: ""; 
    direccion: ""

  constructor(private router: Router, private activedRouter: ActivatedRoute, private servicioBase: BaseService) {

    this.activedRouter.queryParams.subscribe(param =>{
      if(this.router.getCurrentNavigation().extras.state){
        this.telefono = this.router.getCurrentNavigation().extras.state.telefono;
        this.correo = this.router.getCurrentNavigation().extras.state.correo;
        this.direccion = this.router.getCurrentNavigation().extras.state.direccion;
      }
    })

   }

  

  ngOnInit() {
  }

  modificar(){
    if(this.nombre_r.length  <6){
      this.servicioBase.presentAlert("El campo no cumple con los caracteres minimos")
    }else{
      if(this.rut.length <9){
        this.servicioBase.presentAlert("El campo no cumple con los caracteres minimos")
      }else{
        if(this.direccion.length <5){
          this.servicioBase.presentAlert("El campo no cumple con los caracteres minimos")
        }else{
          if(this.correo.length <5){
          this.servicioBase.presentAlert("El campo no cumple con los caracteres minimos")
        }else{
          if(this.telefono.length <9){
            this.servicioBase.presentAlert("El campo no cumple con los caracteres minimos")
          }           
        }
        }
      }
    }


    this.servicioBase.modificarUsuario(this.telefono,this.correo,this.direccion);
    this.servicioBase.presentAlert("Datos de Usuario Modificado");
    this.router.navigate(['/editar-usuario']);
  }

}
