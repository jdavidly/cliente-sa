import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerDetalleSubastaPage } from './ver-detalle-subasta.page';

const routes: Routes = [
  {
    path: '',
    component: VerDetalleSubastaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerDetalleSubastaPageRoutingModule {}
