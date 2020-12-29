import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../services/connection.service';
import { Router } from '@angular/router';
import { User } from '../home-client/home-client.page';


export interface Usuario {
  user: number;
}
export interface Producto {
  id_producto: number;
  nombre: string;
  descripcion: string;
  stock: number;
  precio_venta: number;
  foto: string;
  fecha_subasta: Date;
  precio_inicial_subasta:number;
  precio_compralo_ahora:number;
}

@Component({
  selector: 'app-compra-externa',
  templateUrl: './compra-externa.page.html',
  styleUrls: ['./compra-externa.page.scss'],
})
export class CompraExternaPage implements OnInit {

  productos2: any;
  carrito:Producto[] = [];
  agregando:Producto;

  user: User = JSON.parse(localStorage.getItem('user'));
  idUser: Usuario = {
    user: -1
  }
  constructor(private connection: ConnectionService,
    private router: Router) {
    this.idUser = {
      user: this.user.Id_Usuario
    }
    this.getProductos();
  }

  ngOnInit() {
    this.getProductos();
  }
  async getProductos() {
    const response = await this.connection.getProductsExtern();
    this.productos2 = response['data'];
    //console.log(this.productos2)
  }

  async viewDetails(row){
    localStorage.setItem('prodActualExterno', JSON.stringify(row));
    console.log(row)
    this.router.navigate(['/compra-externa-details']);
  }

  async addCar(row){
    this.agregando = {
      id_producto: row.id_producto,
      nombre: row.nombre,
      descripcion: row.descripcion,
      stock: row.stock,
      precio_venta: row.precio_venta,
      foto: row.foto,
      fecha_subasta: row.fecha_subasta,
      precio_inicial_subasta: row.precio_inicial_subasta,
      precio_compralo_ahora: row.precio_compralo_ahora
    }
    this.carrito.push(this.agregando);
    console.log("carrito: ",this.carrito);
  }



  async buyNow(){
    console.log('Buy Now')
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
    this.router.navigate(['/compra-externa-carrito']);
  }

  async back() {
      this.router.navigate(['/home-provider']);
  }

}
