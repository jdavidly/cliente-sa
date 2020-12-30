import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../services/connection.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { User } from '../home-client/home-client.page';
import { Timestamp } from 'rxjs';

export interface ObjCategoria {
  Id_Categoria: number;
  Nombre: string;
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
export interface ProductClient {
  id_cliente: number;
  nombre: string;
  descripcion: string;
  stock: number;
  precio_venta: number;
  foto: string;
  fecha_subasta: Date;
  precio_inicial_subasta: number;
  precio_compralo_ahora: number;
}

export interface ProductProvider {
  id_proveedor: number;
  nombre: string;
  descripcion: string;
  stock: number;
  precio_venta: number;
  foto: string;
  fecha_subasta: Date;
  precio_inicial_subasta: number;
  precio_compralo_ahora: number;
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

  esProveedor: boolean = false;
  newProdProvider:ProductProvider ={
    id_proveedor:0,
    nombre: '',
    descripcion: '',
    stock: -1,
    precio_venta: -1,
    foto: '',
    fecha_subasta: new Date(),
    precio_inicial_subasta: -1,
    precio_compralo_ahora: -1
  };
  newProdClient:ProductClient ={
    id_cliente:0,
    nombre: '',
    descripcion: '',
    stock: -1,
    precio_venta: -1,
    foto: '',
    fecha_subasta: new Date(),
    precio_inicial_subasta: -1,
    precio_compralo_ahora: -1
  };

  newProduct: NuevoProducto = {
    nombre: '',
    descripcion: '',
    imagen: '',
    precio: 0,
    user: this.user.id,
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
    console.log(response)
    Object.keys(response).forEach (key =>{
      this.categorias.push({Id_Categoria: response[key] ['Id_Categoria'], Nombre: response[key]['Nombre']});
    });
    console.log(this.categorias)
  }
  
  async addProducto() {
    this.newProduct.forma = 0;
    //console.log(this.newProduct);
    let response;
    console.log(this.user)
    if(this.esProveedor){//PROVEEDOR
      
      console.log("proveedor");

      this.newProdProvider.id_proveedor = this.newProduct.user;
      this.newProdProvider.nombre = this.newProduct.nombre;
      this.newProdProvider.descripcion = this.newProduct.descripcion;
      this.newProdProvider.stock = this.newProduct.cantidad;
      this.newProdProvider.precio_venta = this.newProduct.precio;
      this.newProdProvider.foto = this.newProduct.imagen;
      console.log(this.newProdProvider)
      response = await this.connection.addProductProvider(this.newProdProvider);
    
    }else{// this.user.Tipo_Usuario === 0   // CLIENTE
      console.log("cliente");
      this.newProdClient.id_cliente = this.newProduct.user;
      this.newProdClient.nombre = this.newProduct.nombre;
      this.newProdClient.descripcion = this.newProduct.descripcion;
      this.newProdClient.stock = this.newProduct.cantidad;
      this.newProdClient.precio_venta = this.newProduct.precio;
      this.newProdClient.foto = this.newProduct.imagen;

      response = await this.connection.addProductClient(this.newProdClient);
    }
    
    if (response['status'] == 'success') {
      this.presentToast('El producto fue agregado.');
      this.newProduct = {
        nombre: '',
        descripcion: '',
        imagen: '',
        precio: 0,
        user: this.user.id,
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

