import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartClientPageRoutingModule } from './cart-client-routing.module';

import { CartClientPage } from './cart-client.page';
import { BarComponent } from '../components/bar/bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartClientPageRoutingModule
  ],
  declarations: [CartClientPage, BarComponent]
})
export class CartClientPageModule {}
