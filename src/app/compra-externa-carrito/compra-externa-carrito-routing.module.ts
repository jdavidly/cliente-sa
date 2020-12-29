import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompraExternaCarritoPage } from './compra-externa-carrito.page';

const routes: Routes = [
  {
    path: '',
    component: CompraExternaCarritoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompraExternaCarritoPageRoutingModule {}
