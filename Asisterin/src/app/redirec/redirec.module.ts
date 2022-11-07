import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedirecPageRoutingModule } from './redirec-routing.module';

import { RedirecPage } from './redirec.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedirecPageRoutingModule
  ],
  declarations: [RedirecPage]
})
export class RedirecPageModule {}
