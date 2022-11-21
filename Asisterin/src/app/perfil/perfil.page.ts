import { Component, OnInit } from '@angular/core';
import { CamaraService } from '../services/camara.service';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { BaseService } from '../services/base.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  listaUsers: any = [{
    id_usuario: '',
    nombre: '',
    clave: '',
    id_rol: '',
    nombre_r:'',
    apellido:'',
    correo:'',
    foto:'',
    telefono:'',
    direccion:''
  }];
  image:any;

  constructor(private camera: Camera, private base: BaseService) { }

  ngOnInit() {
    this.base.dbState().subscribe((res) => {
      if (res) {

        this.base.buscarusuarios();
        //subscribimos al observable que hace el select en la tabla noticias
        this.base.fetchUsuarios().subscribe((item) => {
          //guardamos estos cambios de información en una variable propia de este ts
          this.listaUsers = item;
        })
      }
    })

  }

  fotico(){
    const options: CameraOptions = {
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
      this.image = image
      this.base.presentAlert(this.image)

      }, (err) => {
      // Handle error
      });


  }



  /*foto(){
    this.apicamara.fotico();
  }*/



    
}