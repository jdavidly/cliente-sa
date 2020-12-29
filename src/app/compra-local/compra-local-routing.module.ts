import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompraLocalPage } from './compra-local.page';

const routes: Routes = [
  {
    path: '',
    component: CompraLocalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompraLocalPageRoutingModule {}
