import { Component, OnInit } from '@angular/core';
import { Key } from 'protractor';
import { ConnectionService } from '../services/connection.service';

export interface ObjCategoria {
  categoria: number;
  nombre: string;
}

export interface NuevoProducto {
  nombre: string;
  precio: number;
  cantidad: number;
  categoria: number;
  imagen: string;
  user: number;
}

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.page.html',
  styleUrls: ['./add-products.page.scss'],
})


export class AddProductsPage implements OnInit {

  categorias: ObjCategoria [] = [];
  newProduct: NuevoProducto = {
    nombre: '',
    precio: 0,
    cantidad: 0,
    categoria: 0,
    imagen: '',
    user:1
  };

  constructor(private connection: ConnectionService) { 
    this.getCategorias();
  }

  ngOnInit() { }

  async getCategorias() {
    const response = await this.connection.getCategorias();
    //console.log(response);
    Object.keys(response).forEach (key =>{
      this.categorias.push({categoria: response[key] ['categoria'], nombre: response[key]['nombre']});
    });
  }
  
  async addProducto() {
    console.log(this.newProduct);
    const response = await this.connection.addProduct(this.newProduct);
    console.log(response);
    if (response['ok']) {
      //limpiar los campos
      //this.tab = 'login';
      //this.presentToast('El proveedor ha sido creado exitosamente. Puede iniciar sesion.');
    } else {
      //mensajes de error vendran en la respuesta
      //this.presentToast('Los datos de registro son incorrectos');
    }
  }

}

