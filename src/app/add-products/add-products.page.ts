import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../services/connection.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


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
    user:1  // TODO: CAMBIAR POR LA VARIABLE DE USUARIO
  };

  constructor(private connection: ConnectionService,
      private toastController: ToastController,
      private router: Router
    ) { 
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
    //console.log(this.newProduct);
    const response = await this.connection.addProduct(this.newProduct);
    //console.log("respuesta de la api: ",response);
    if (response['auth']) {
      this.presentToast('El producto fue agregado.');
      this.newProduct = {
        nombre: '',
        precio: 0,
        cantidad: 0,
        categoria: 0,
        imagen: '',
        user:1  // TODO: CAMBIAR POR LA VARIABLE DE USUARIO
      };
    } else {
      //mensajes de error vendran en la respuesta
      this.presentToast('Error al agregar el producto, revise los datos ingresado');
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

}

