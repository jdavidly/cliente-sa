import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../services/connection.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { User } from '../home-client/home-client.page';

export interface ProductDelete{
  producto:number;
}
export interface Producto {
  producto: number;
  nombre: string;
  precio: number;
  cantidad: number;
  categoria: number;
  url: string;
  descripcion: string;
}

@Component({
  selector: 'app-view-product-provider',
  templateUrl: './view-product-provider.page.html',
  styleUrls: ['./view-product-provider.page.scss'],
})
export class ViewProductProviderPage implements OnInit {

  user: User = JSON.parse(localStorage.getItem('user'));
  eliminar:ProductDelete = { producto:-1 }
  
  producto:Producto = JSON.parse(localStorage.getItem('prodActProveedor'));
  /*producto:Producto = {
    producto: 1,
    nombre: "Auriculares",
    precio: 175.5,
    cantidad: 100,
    categoria: 2,
    url: "https://www.redeszone.net/app/uploads-redeszone.net/2017/09/Cascos-Bluetooth-930x452.png"
  }*/

  constructor(private connection: ConnectionService,
    private toastController: ToastController,
    private router: Router) { 
      this.eliminar = {
        producto: this.producto.producto
      }
    }

  ngOnInit() {
  }

  async deleteProduct() {
    const response = await this.connection.deletProduct(this.eliminar);
    if (response['auth']) {
      console.log("Producto Eliminado");
      console.log(this.producto.producto)
      this.router.navigate(['/products-provider']);
    } else {
      console.log("Error al eliminar producto");
    }
  }


  async updateProduct() {
    const response = await this.connection.deletProduct(this.eliminar);
    if (response['auth']) {
      console.log("Producto Eliminado");
      this.router.navigate(['/products-provider']);
    } else {
      console.log("Error al eliminar producto");
    }
  }

  async cancelar() {
    this.router.navigate(['/products-provider']);
  }
}
