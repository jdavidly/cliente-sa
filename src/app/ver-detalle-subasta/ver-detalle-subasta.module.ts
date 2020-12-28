import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerDetalleSubastaPageRoutingModule } from './ver-detalle-subasta-routing.module';

import { VerDetalleSubastaPage } from './ver-detalle-subasta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerDetalleSubastaPageRoutingModule
  ],
  declarations: [VerDetalleSubastaPage]
})
export class VerDetalleSubastaPageModule {}
