import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompraLocalCarritoPage } from './compra-local-carrito.page';

const routes: Routes = [
  {
    path: '',
    component: CompraLocalCarritoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompraLocalCarritoPageRoutingModule {}
