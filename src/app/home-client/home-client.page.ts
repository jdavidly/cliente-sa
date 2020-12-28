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
    this.connection.getCart(this.user.Id_Usuario).subscribe((carritos: ProductoCarrito[]) => {
      this.carrito = carritos;
      this.contador = carritos.length;
    });
  }

  categoryChange(event: CustomEvent) {
    const value = event.detail['value'];
    this.prodService.cat = value;
    this.connection.getProductsByCategoryPage(value, this.prodService.current).subscribe((result) => {
      this.prodService.products = result['products'];
    });
  }

  deleteOnCart(event: CustomEvent) {
    const value = event.detail['value'];
    this.connection.removeCart(value);
    this.connection.getCart(this.user.Id_Usuario).subscribe((carritos: ProductoCarrito[]) => {
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


  goToPayment() {
    this.router.navigate(['/carrito']);
  }

  goToHome() {
    this.router.navigate(['/home-client']);
  }
}

export interface User {
  Id_Usuario: number;
  Nombres: string;
  NIT: string;
  Edad: number;
  correo: string;
  Telefono: string;
  Tipo_Usuario: number;
  Direccion: string;
  Pass: string;
}

export interface Producto {
  CATEGORIA_Id_Categoria: number;
  Descripcion: string;
  Forma_Venta: number;
  Id_Producto: number;
  Inventario: number;
  Nombre: string;
  Precio_Unitario: number;
  USUARIO_Id_Usuario: number;
  Url_: string;
}

export interface Categoria {
  Nombre: string;
  Id_Categoria: number;
  Descripcion: string;
}

export interface ProductoCarrito {
  nombre: String;
  precio: number;
  cantidad: number;
  codigo: number;
}