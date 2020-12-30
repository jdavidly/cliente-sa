import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../services/connection.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { User } from '../home-client/home-client.page';

export interface Usuario {
  user: number;
}

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
  selector: 'app-products-provider',
  templateUrl: './products-provider.page.html',
  styleUrls: ['./products-provider.page.scss'],
})
export class ProductsProviderPage implements OnInit {
  //productos: Producto[] = [];
  productos2:any;
  user: User = JSON.parse(localStorage.getItem('user'));
  idUser: Usuario = {
    user: -1
  }
  
  constructor(private connection: ConnectionService,
    private toastController: ToastController,
    private router: Router) { 
      this.idUser = {
        user: this.user.id
      }
      this.getProductos();
    }

  ngOnInit() {
    this.getProductos();
  }

  async getProductos() {
    const response = await this.connection.getProductsProvider(this.user);
    this.productos2 = response;
    console.log(this.productos2)
  }
  
  async viewDetails(row){
    localStorage.setItem('prodActProveedor', JSON.stringify(row));
    console.log(row)
    this.router.navigate(['/view-product-provider']);
  }

  async back() {
      this.router.navigate(['/home-provider']);
  }
  
}
