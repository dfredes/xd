import { Component, OnInit } from '@angular/core';
import { CamaraService } from '../services/camara.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private apicamara: CamaraService) { }

  ngOnInit() {

  }

  foto(){
    this.apicamara.fotico();
  }



    
}