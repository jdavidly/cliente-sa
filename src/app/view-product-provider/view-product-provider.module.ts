import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewProductProviderPageRoutingModule } from './view-product-provider-routing.module';

import { ViewProductProviderPage } from './view-product-provider.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewProductProviderPageRoutingModule
  ],
  declarations: [ViewProductProviderPage]
})
export class ViewProductProviderPageModule {}
