import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../services/connection.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

export interface Usuario {
  user: number;
}

export interface Producto {
  producto: number;
  nombre: string;
  precio: number;
  cantidad: number;
  categoria: number;
  url: string;
}

@Component({
  selector: 'app-products-provider',
  templateUrl: './products-provider.page.html',
  styleUrls: ['./products-provider.page.scss'],
})
export class ProductsProviderPage implements OnInit {
  //productos: Producto[] = [];
  productos2:any;
  user:Usuario = {
    user:1 //TODO: CAMBIAR EL VALOR DEL USER POR LA VARIABLE DE SESIO DE PROVEEDOR ACTUAL
  }
  
  constructor(private connection: ConnectionService,
    private toastController: ToastController,
    private router: Router) { 
      this.user = {
        user:1  //TODO: CAMBIAR EL VALOR DEL USER POR LA VARIABLE DE SESIO DE PROVEEDOR ACTUAL
      }
      this.getProductos();
    }

  ngOnInit() {}

  async getProductos() {
    const response = await this.connection.getProductsProvider(this.user);
    this.productos2 = response;
  }
  
  async viewDetails(row){
    console.log(row)
    this.router.navigate(['/view-product-provider']);
  }
  
}
