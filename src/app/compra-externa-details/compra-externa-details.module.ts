import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompraExternaDetailsPageRoutingModule } from './compra-externa-details-routing.module';

import { CompraExternaDetailsPage } from './compra-externa-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompraExternaDetailsPageRoutingModule
  ],
  declarations: [CompraExternaDetailsPage]
})
export class CompraExternaDetailsPageModule {}
