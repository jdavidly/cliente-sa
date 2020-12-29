import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompraExternaPage } from './compra-externa.page';

const routes: Routes = [
  {
    path: '',
    component: CompraExternaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompraExternaPageRoutingModule {}
