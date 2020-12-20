import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ConnectionService } from '../services/connection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})

export class CarritoPage implements OnInit {

  carrito: ProductoCarrito[] = [];  
  user: User = JSON.parse(localStorage.getItem('user'));
  total: number = 0;
  productos: Producto[] = [];    
  contador: number = 0;  
  

  ngOnInit() 
  {
    this.connection.getCart(this.user.user).subscribe((carritos: ProductoCarrito[]) =>{      
    this.carrito = carritos; 
    this.contador = carritos.length;
    this.total = this.getTotal(carritos); 
    });
  }


  getTotal(carritos: ProductoCarrito[])
  {
    var tmp = 0;
    for(var i =0; i< this.carrito.length; i++)
    {
      tmp = tmp + (carritos[i].cantidad*carritos[i].precio);
    }  
    return tmp;
  }

  constructor
  (
    private menu: MenuController,
    private connection: ConnectionService,
    private router: Router
  ) 
  { }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }  

  async deleteOnCart(event: CustomEvent) 
  {
    const value = event.detail['value'];    
    await this.connection.removeCart(value);    
    this.connection.getCart(this.user.user).subscribe((carritos: ProductoCarrito[]) =>
    {      
      this.carrito = carritos;
      this.contador = carritos.length;      
      this.total = this.getTotal(carritos); 
    });  
  }

  async deleteOnCartBeforePayment(timestamp: number) 
  {        
    await this.connection.removeBeforePayment(timestamp);    
    this.connection.getCart(this.user.user).subscribe((carritos: ProductoCarrito[]) =>
    {      
      this.carrito = carritos;
      this.contador = carritos.length;   
      this.total = this.getTotal(carritos);    
    });  
  }


  goToPayment() 
  {    
    if(this.total===0)
    {
      
    }
    this.router.navigate(['/carrito']);
  }  

  goToHome()
  {
    this.router.navigate(['/home-client']);
  }  

}


export interface ProductoCarrito
{
  nombre: String;
  precio: number;
  cantidad: number;  
  codigo: number;  
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