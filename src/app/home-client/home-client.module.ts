import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeClientPageRoutingModule } from './home-client-routing.module';

import { HomeClientPage } from './home-client.page';
import { BarComponent } from '../components/bar/bar.component';
import { PaginationComponent } from '../components/pagination/pagination.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeClientPageRoutingModule
  ],
  declarations: [HomeClientPage, BarComponent, PaginationComponent]
})
export class HomeClientPageModule { }
