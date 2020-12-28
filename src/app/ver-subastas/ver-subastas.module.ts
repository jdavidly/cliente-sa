import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerSubastasPageRoutingModule } from './ver-subastas-routing.module';

import { VerSubastasPage } from './ver-subastas.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerSubastasPageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [VerSubastasPage]
})
export class VerSubastasPageModule {}
