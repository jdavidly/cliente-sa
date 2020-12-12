import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsProviderPage } from './products-provider.page';

const routes: Routes = [
  {
    path: '',
    component: ProductsProviderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsProviderPageRoutingModule {}
