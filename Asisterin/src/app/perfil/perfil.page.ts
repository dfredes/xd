import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  foto:any;

  constructor(private camera: Camera) { }

  ngOnInit() {

   

    // Set the handler to run every time we take a picture



    

    // take a snap shot
    


    // Switch camera

    // set color effect to negative

    // Stop the camera preview



       
        
        
      }







  tomarFoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }}

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      this.foto = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
      // Handle error
      });






  }




    
}