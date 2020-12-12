import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login, SigninClient, SigninProvider } from '../start/start.page';
import { NuevoProducto } from '../add-products/add-products.page';
import { Usuario } from '../products-provider/products-provider.page'
@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  url: string = 'http://localhost:3000/';
  //url: string = 'https://sa-proyecto.herokuapp.com/';

  constructor(private http: HttpClient) { }

  async login(l: Login) {
    return this.http.post(`${this.url}user/login`, l).toPromise();
  }

  async signinClient(s: SigninClient) {
    return this.http.post(`${this.url}user/signinClient`, s).toPromise();
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

  async getProductsProvider(s: Usuario) {
    return this.http.post(`${this.url}product/proveedor`, s).toPromise();
  }

}
