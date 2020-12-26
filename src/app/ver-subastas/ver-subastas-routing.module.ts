import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerSubastasPage } from './ver-subastas.page';

const routes: Routes = [
  {
    path: '',
    component: VerSubastasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerSubastasPageRoutingModule {}
