import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumPageRoutingModule } from './alum-routing.module';

import { AlumPage } from './alum.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumPageRoutingModule
  ],
  declarations: [AlumPage]
})
export class AlumPageModule {}
