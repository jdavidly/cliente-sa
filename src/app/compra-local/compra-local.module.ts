import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompraLocalPageRoutingModule } from './compra-local-routing.module';

import { CompraLocalPage } from './compra-local.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompraLocalPageRoutingModule
  ],
  declarations: [CompraLocalPage]
})
export class CompraLocalPageModule {}
