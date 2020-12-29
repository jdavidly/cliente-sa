import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompraLocalDetailsPageRoutingModule } from './compra-local-details-routing.module';

import { CompraLocalDetailsPage } from './compra-local-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompraLocalDetailsPageRoutingModule
  ],
  declarations: [CompraLocalDetailsPage]
})
export class CompraLocalDetailsPageModule {}
