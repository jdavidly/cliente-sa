import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login, SigninClient, SigninProvider } from '../start/start.page';
import { NuevoProducto } from '../add-products/add-products.page';
import { Usuario } from '../products-provider/products-provider.page';
import { ProductDelete } from '../view-product-provider/view-product-provider.page';
import { ProductUpdate } from '../view-product-provider/view-product-provider.page';
import { Subasta } from '../add-products/add-products.page';
import { ObjOferta } from '../ver-detalle-subasta/ver-detalle-subasta.page';
import { User } from '../home-client/home-client.page';

import { ProductProvider } from '../add-products/add-products.page';
import { ProductClient } from '../add-products/add-products.page';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  url: string = 'http://localhost:3000/';
  //url: string = 'https://sa-proyecto.herokuapp.com/';

  constructor(private http: HttpClient) { }

  async login(l: Login) {
    return this.http.post(`${this.url}user/loginp`, l).toPromise();
  }

  async signinClient(s: SigninClient) {
    return this.http.post(`${this.url}user/signinClientp`, s).toPromise();
  }

  async signinProvider(s: SigninProvider) {
    return this.http.post(`${this.url}user/signinProvider`, s).toPromise();
  }


  async getCategorias() {
    return this.http.get(`${this.url}product/categorias`).toPromise();
  }

  async addProduct(s: NuevoProducto) {
    return this.http.post(`${this.url}product/addProduct`, s).toPromise();
  }

  getCategories() {
    return this.http.get(`${this.url}product/categorias`);
  }

  getProducts() {
    return this.http.get(`${this.url}product/products`);
  }

  getProductsByCategory(category: number) {
    return this.http.get(`${this.url}product/products/${category}`);
  }

  getProductsByCategoryPage(category: number, page: number) {
    return this.http.get(`${this.url}product/page/${category}/${page}`);
  }

  getCart(user: number)
  {
    return this.http.get(`${this.url}cart/all/${user}`);
  }
  

  async addToCart(user: number, producto: number, cantidad: number) {
    return this.http.post(`${this.url}cart/add`, { user, producto, cantidad }).toPromise();
  }

  async removeCart(timestamp: number)
  {
    return this.http.post(`${this.url}cart/remove`, {timestamp}).toPromise();
  }

  async removeBeforePayment(timestamp: number)
  {
    return this.http.post(`${this.url}cart/removeBeforePayment`, {timestamp}).toPromise();
  }


  async getProductsProvider(s: User) {
    return this.http.post(`${this.url}product/proveedor`, s).toPromise();
  }

  async deletProduct(s: ProductDelete) {
    return this.http.post(`${this.url}product/delete`, s).toPromise();
  }
  async updateProduct(s: ProductUpdate) {
    return this.http.post(`${this.url}product/update-price`, s).toPromise();
  }

  async addSubasta(s: Subasta) {
    return this.http.post(`${this.url}product/addSubasta`, s).toPromise();
  }

  async getProductsSubasta() {
    return this.http.get(`${this.url}product/subasta`).toPromise();
  }

  
  async getFormasPago() {
    return this.http.get(`${this.url}product/formas-pago`).toPromise();
  }

  async ofertarSubasta(s: ObjOferta) {
    return this.http.post(`${this.url}product/ofertarSubasta`, s).toPromise();
  }
  

  getProductsByPage(page: number) {
    return this.http.get(`${this.url}product/page/${page}`);
  }

  // PARA EL BUS DE INTEGRACION
  async addProductProvider(s: ProductProvider) {
    return this.http.post(`${this.url}crear-producto-proveedor`, s).toPromise();
  }
  async addProductClient(s: ProductClient) {
    return this.http.post(`${this.url}crear-producto-cliente`, s).toPromise();
  }
}
