import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductsProviderPageRoutingModule } from './products-provider-routing.module';

import { ProductsProviderPage } from './products-provider.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductsProviderPageRoutingModule,
    NgxDatatableModule

  ],
  declarations: [ProductsProviderPage]
})
export class ProductsProviderPageModule {}
