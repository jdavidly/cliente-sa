import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../compra-externa/compra-externa.page';
import { User } from '../home-client/home-client.page';
import { ConnectionService } from '../services/connection.service';

export interface ProductoCarrito {
  id_producto: number;
  nombre: string;
  cantidad: number;
  precio: number;
  subtotal: number
}

export interface Compra{
  id_cliente:number;
  productos:ProductoComprado[];  
}

export interface ProductoComprado {
  id_producto: number;
  cantidad: number;
}

@Component({
  selector: 'app-compra-externa-carrito',
  templateUrl: './compra-externa-carrito.page.html',
  styleUrls: ['./compra-externa-carrito.page.scss'],
})
export class CompraExternaCarritoPage implements OnInit {
  productosCarrito: ProductoCarrito[] = []; //Lista que se muestra en la vista
  carrito:Producto[] = JSON.parse(localStorage.getItem('carrito'));
  user: User = JSON.parse(localStorage.getItem('user'));
  productoTemp:ProductoCarrito;
  Total:number = 0;

  productosEnCarrito:ProductoComprado[]=[]
  productoEnCarritoTemporal: ProductoComprado;
  compra:Compra;

  constructor(private router: Router,
    private connection: ConnectionService) { 
    //this.limpiar();
  }

  ngOnInit() {
    this.limpiar();
  }
  
  async limpiar(){
    for (let x = 0; x < this.carrito.length; x++) {
      let p = this.carrito[x] as Producto;
      if(this.productosCarrito.length == 0){
        this.productoTemp = {
          id_producto: p.id_producto,
          nombre: p.nombre,
          cantidad: 1,
          precio: p.precio_venta,
          subtotal: p.precio_venta
        }
        this.productosCarrito.push(this.productoTemp);
      }else{
        let agregado:boolean = false;
        for (let y = 0; y < this.productosCarrito.length; y++) {
          let pt = this.productosCarrito[y] as ProductoCarrito;
          if(p.id_producto == pt.id_producto){
            pt.cantidad ++;
            pt.subtotal = pt.subtotal + pt.precio;
            agregado = true;
            break;
          }
        }
        if(!agregado){
          this.productoTemp = {
            id_producto: p.id_producto,
            nombre: p.nombre,
            cantidad: 1,
            precio: p.precio_venta,
            subtotal: p.precio_venta
          }
          this.productosCarrito.push(this.productoTemp);
        }
      }      
    }
    this.getTotal();
  }

  async getTotal() {
    for (let y = 0; y < this.productosCarrito.length; y++) {
      let pt = this.productosCarrito[y] as ProductoCarrito;
      this.Total = this.Total + pt.subtotal;
    }
  }

  async back() {
    this.router.navigate(['/compra-externa']);
  }

  /*
  export interface Compra{
    id_cliente:number;
    productos:ProductoComprado[];  
  }

  export interface ProductoComprado {
    id_producto: number;
    cantidad: number;
  }

  productosEnCarrito:ProductoComprado[]=[]
  productoEnCarritoTemporal: ProductoComprado;
  */

  async buyNow() {
    console.log('Comprando')
    for (let y = 0; y < this.productosCarrito.length; y++) {
      let pt = this.productosCarrito[y] as ProductoCarrito;
      this.productoEnCarritoTemporal = {
        id_producto: pt.id_producto,
        cantidad: pt.cantidad
      }
      this.productosEnCarrito.push(this.productoEnCarritoTemporal);
    }
    this.compra = {
      id_cliente:this.user.Id_Usuario,
      productos: this.productosEnCarrito
    }
    console.log(this.compra);
    const response = await this.connection.comprar(this.compra);
  }

}
