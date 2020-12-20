import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartClientPage } from './cart-client.page';

const routes: Routes = [
  {
    path: '',
    component: CartClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartClientPageRoutingModule {}
