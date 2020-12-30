import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompraLocalPageRoutingModule } from './compra-local-routing.module';

import { CompraLocalPage } from './compra-local.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompraLocalPageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [CompraLocalPage]
})
export class CompraLocalPageModule {}
