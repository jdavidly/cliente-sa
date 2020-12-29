import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompraExternaDetailsPage } from './compra-externa-details.page';

const routes: Routes = [
  {
    path: '',
    component: CompraExternaDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompraExternaDetailsPageRoutingModule {}
