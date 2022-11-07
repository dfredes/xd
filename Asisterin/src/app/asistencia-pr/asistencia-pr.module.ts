import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsistenciaPrPageRoutingModule } from './asistencia-pr-routing.module';

import { AsistenciaPrPage } from './asistencia-pr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsistenciaPrPageRoutingModule
  ],
  declarations: [AsistenciaPrPage]
})
export class AsistenciaPrPageModule {}
