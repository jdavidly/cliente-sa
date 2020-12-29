import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompraLocalCarritoPageRoutingModule } from './compra-local-carrito-routing.module';

import { CompraLocalCarritoPage } from './compra-local-carrito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompraLocalCarritoPageRoutingModule
  ],
  declarations: [CompraLocalCarritoPage]
})
export class CompraLocalCarritoPageModule {}
