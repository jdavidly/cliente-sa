import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ConnectionService } from '../services/connection.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})

export class CarritoPage implements OnInit {

  carrito: ProductoCarrito[] = [];  
  user: User = JSON.parse(localStorage.getItem('user'));
  total: number = 0;

  

  ngOnInit() 
  {
    this.connection.getCart(this.user.user).subscribe((carritos: ProductoCarrito[]) =>{      
    this.carrito = carritos; 
    var tmp = 0;
    for(var i =0; i< this.carrito.length; i++)
    {
      tmp = tmp + (carritos[i].cantidad*carritos[i].precio);
    }  
    this.total = tmp;      
    });
  }

  constructor
  (
    private menu: MenuController,
    private connection: ConnectionService
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