import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewProductProviderPage } from './view-product-provider.page';

const routes: Routes = [
  {
    path: '',
    component: ViewProductProviderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewProductProviderPageRoutingModule {}
