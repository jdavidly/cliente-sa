import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompraExternaCarritoPageRoutingModule } from './compra-externa-carrito-routing.module';

import { CompraExternaCarritoPage } from './compra-externa-carrito.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompraExternaCarritoPageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [CompraExternaCarritoPage]
})
export class CompraExternaCarritoPageModule {}
