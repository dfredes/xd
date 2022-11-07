import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsistenciaAlPageRoutingModule } from './asistencia-al-routing.module';

import { AsistenciaAlPage } from './asistencia-al.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsistenciaAlPageRoutingModule
  ],
  declarations: [AsistenciaAlPage]
})
export class AsistenciaAlPageModule {}
