import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./start/start.module').then(m => m.StartPageModule)
  },
  {
    path: 'add-products',
    loadChildren: () => import('./add-products/add-products.module').then(m => m.AddProductsPageModule)
  },
  {
    path: 'home-client',
    loadChildren: () => import('./home-client/home-client.module').then(m => m.HomeClientPageModule)
  },
  {
    path: 'view-product-provider',
    loadChildren: () => import('./view-product-provider/view-product-provider.module').then(m => m.ViewProductProviderPageModule)
  },
  {
    path: 'product-detail',
    loadChildren: () => import('./product-detail/product-detail.module').then(m => m.ProductDetailPageModule)
  },
  {
    path: 'products-provider',
    loadChildren: () => import('./products-provider/products-provider.module').then(m => m.ProductsProviderPageModule)
  },
  {
    path: 'home-provider',
    loadChildren: () => import('./home-provider/home-provider.module').then(m => m.HomeProviderPageModule)
  },
  {
    path: 'profile-provider',
    loadChildren: () => import('./profile-provider/profile-provider.module').then(m => m.ProfileProviderPageModule)
  },
  {
    path: 'carrito',
    loadChildren: () => import('./carrito/carrito.module').then(m => m.CarritoPageModule)
  },
  {
    path: 'profile-client',
    loadChildren: () => import('./profile-client/profile-client.module').then(m => m.ProfileClientPageModule)
  },
  {
    path: 'cart-client',
    loadChildren: () => import('./cart-client/cart-client.module').then(m => m.CartClientPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
