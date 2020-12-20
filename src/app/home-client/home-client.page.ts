import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductDetailPage } from '../product-detail/product-detail.page';
import { ConnectionService } from '../services/connection.service';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home-client',
  templateUrl: './home-client.page.html',
  styleUrls: ['./home-client.page.scss'],
})
export class HomeClientPage implements OnInit {

  //products: Producto[] = [];
  categorias: Categoria[] = [];
  user: User = JSON.parse(localStorage.getItem('user'));
  contador: number = 0;
  carrito: ProductoCarrito[] = [];

  constructor(
    private connection: ConnectionService,
    private modalController: ModalController,
    private router: Router,
    public prodService: ProductsService
  ) { }

  ngOnInit() {
    this.connection.getCategories().subscribe((categorias: Categoria[]) => {
      this.categorias = categorias;
    });
    this.prodService.get(1);
    this.connection.getCart(this.user.user).subscribe((carritos: ProductoCarrito[]) => {
      this.carrito = carritos;
      this.contador = carritos.length;
    });
  }

  categoryChange(event: CustomEvent) {
    const value = event.detail['value'];
    if (value === '0') {
      this.connection.getProducts().subscribe((products: Producto[]) => {
        this.prodService.products = products;
      });
    } else {
      this.connection.getProductsByCategory(value).subscribe((products: Producto[]) => {
        this.prodService.products = products;
      });
    }
  }

  deleteOnCart(event: CustomEvent) {
    const value = event.detail['value'];
    console.log(value);
    this.connection.removeCart(value);
    this.connection.getCart(this.user.user).subscribe((carritos: ProductoCarrito[]) => {
      this.carrito = carritos;
      this.contador = carritos.length;
    });
  }


  async ver(producto: Producto) {
    const modal = await this.modalController.create({
      component: ProductDetailPage,
      componentProps: {
        producto
      }
    });
    modal.onDidDismiss().then((dato) => {
      if (dato && dato['data'] && dato['data']['compro']) {
        this.contador = this.contador + 1;
      }
    });
    return await modal.present();
  }


  goToPayment() 
  {    
    this.router.navigate(['/carrito']);
  }

  goToHome()
  {
    this.router.navigate(['/home-client']);
  }
}

export interface User {
  user: number;
  first_name: string;
  last_name: string;
  name: string;
  email: string;
  password: string;
  phone_number: string;
  address: string;
  role: boolean;
}

export interface Producto {
  nombre: string;
  precio: number;
  cantidad: number;
  url: string;

  producto: number;
  categoria: number;
  proveedor: number;
}

export interface Categoria {
  nombre: string;
  categoria: number;
}

export interface ProductoCarrito {
  nombre: String;
  precio: number;
  cantidad: number;
  codigo: number;
}