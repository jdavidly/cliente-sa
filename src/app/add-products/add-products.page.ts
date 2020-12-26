import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../services/connection.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { User } from '../home-client/home-client.page';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

export interface ObjCategoria {
  categoria: number;
  nombre: string;
}

export interface NuevoProducto {
  nombre: string;
  descripcion: string;
  imagen: string;
  precio: number;
  user: number;
  categoria: number;
  cantidad: number;
  forma:number
}
export interface Subasta {
  producto: number;
  fecha_inicio: Date;
  fecha_fin: Date;
  valor_inicial: number
}

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.page.html',
  styleUrls: ['./add-products.page.scss'],
})


export class AddProductsPage implements OnInit {

  categorias: ObjCategoria [] = [];
  productoAgregado:number = -1;
  user: User = JSON.parse(localStorage.getItem('user'));
  subastar: Subasta;
  fecha1: Date;
  fecha2: Date;

  newProduct: NuevoProducto = {
    nombre: '',
    descripcion: '',
    imagen: '',
    precio: 0,
    user: this.user.user,
    categoria: 0,
    cantidad: 0,
    forma:-1
  };

  constructor(private connection: ConnectionService,
      private toastController: ToastController,
      private router: Router
    ) { 
    this.categorias = [];
    this.getCategorias();
  }

  ngOnInit() { 
    //this.categorias = [];
    //this.getCategorias();
  }

  async getCategorias(){
    const response = await this.connection.getCategorias();
    Object.keys(response).forEach (key =>{
      this.categorias.push({categoria: response[key] ['categoria'], nombre: response[key]['nombre']});
    });
    console.log(this.categorias)
  }
  
  async addProducto() {
    this.newProduct.forma = 0;
    console.log(this.newProduct);
    const response = await this.connection.addProduct(this.newProduct);
    if (response['auth']) {
      this.presentToast('El producto fue agregado.');
      this.newProduct = {
        nombre: '',
        descripcion: '',
        imagen: '',
        precio: 0,
        user: this.user.user,
        categoria: 0,
        cantidad: 0,
        forma:-1
      };
    } else {
      this.presentToast('Error al agregar el producto, revise los datos ingresado');
    }
  }

  async addSubasta() {

    this.newProduct.forma = 1;
    
    const response = await this.connection.addProduct(this.newProduct);
    
    if (response['auth']) {
      this.presentToast('El producto fue agregado.');
    } else {
      this.productoAgregado = response[0][0]['id'];
      this.subastar = {
        producto: this.productoAgregado, 
        fecha_inicio: this.fecha1,
        fecha_fin: this.fecha2,
        valor_inicial: this.newProduct.precio
      }
      const response2 = await this.connection.addSubasta(this.subastar);
      if (response2['auth']) {
        this.presentToast('El producto fue a la subasta.');
      } else {
        this.presentToast('Error al agregar el producto a la subasta');
      }
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
  async back() {
    this.router.navigate(['/home-provider']);
  }

}

