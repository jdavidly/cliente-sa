import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompraLocalDetailsPage } from './compra-local-details.page';

const routes: Routes = [
  {
    path: '',
    component: CompraLocalDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompraLocalDetailsPageRoutingModule {}
