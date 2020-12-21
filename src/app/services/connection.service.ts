import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login, SigninClient, SigninProvider } from '../start/start.page';
import { NuevoProducto } from '../add-products/add-products.page';
import { Usuario } from '../products-provider/products-provider.page';
import { ProductDelete } from '../view-product-provider/view-product-provider.page';
import { ProductUpdate } from '../view-product-provider/view-product-provider.page';


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


  async getProductsProvider(s: Usuario) {
    return this.http.post(`${this.url}product/proveedor`, s).toPromise();
  }

  async deletProduct(s: ProductDelete) {
    return this.http.post(`${this.url}product/delete`, s).toPromise();
  }
  async updateProduct(s: ProductUpdate) {
    return this.http.post(`${this.url}product/update-price`, s).toPromise();
  }

  

  getProductsByPage(page: number) {
    return this.http.get(`${this.url}product/page/${page}`);
  }

}
