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
import { Compra } from '../compra-externa-carrito/compra-externa-carrito.page';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  ConexionGrupo:number = JSON.parse(localStorage.getItem('ConexionGrupo'));

  urlBus: string = 'http://49f171fd49c1.ngrok.io/';
  url: string = 'http://49f171fd49c1.ngrok.io/';
  //url: string = 'https://sa-proyecto.herokuapp.com/';

  constructor(private http: HttpClient) {  }

  async establecerConexion(){
    this.ConexionGrupo = JSON.parse(localStorage.getItem('ConexionGrupo'));
    console.log(this.ConexionGrupo);
      if(this.ConexionGrupo == 1){  console.log("aqui en 1"); this.urlBus = "http://busg1.us-e2.cloudhub.io/"; }
      else if(this.ConexionGrupo == 3){  this.urlBus = "http://35.206.98.190/"; }
      else if(this.ConexionGrupo == 4){  this.urlBus = "http://esb4.djgg.ml:3030/"; }
      else if(this.ConexionGrupo == 5){  this.urlBus = "http://34.123.238.63:8280/services/integrador/"; }
      else if(this.ConexionGrupo == 6){  this.urlBus = "http://35.184.63.236:3004/"; }
      else if(this.ConexionGrupo == 7){  this.urlBus = "http://68.183.102.104:3000/"; }
      else if(this.ConexionGrupo == 8){  this.urlBus = "http://35.232.242.252:9999/"; }
      else if(this.ConexionGrupo == 9){  this.urlBus = "http://sa-g9.us-e2.cloudhub.io/"; }
      else if(this.ConexionGrupo == 10){  this.urlBus = "http://34.73.157.172:5005/"; }
      else if(this.ConexionGrupo == 11){  this.urlBus = "http://soagrupo11.us-e2.cloudhub.io/"; }
      else if(this.ConexionGrupo == 13){  this.urlBus = "http://www.sa-proyecto.tk/"; }
      else if(this.ConexionGrupo == 15){  this.urlBus = "http://34.73.17.174:4000/"; }
      else{ this.urlBus = "http://49f171fd49c1.ngrok.io/"; }
    
    console.log("la conexion fue definida: ",this.urlBus)
  }

  // -------------------- BUS DE INTEGRACION --------------------
  async login(l: Login) {
    this.establecerConexion();
    return this.http.post(`${this.urlBus}login-cliente`, l).toPromise();
  }
  async signinClient(s: SigninClient) {
    this.establecerConexion();
    return this.http.post(`${this.urlBus}registrar-cliente`, s).toPromise();
  }
  async signinProvider(s: SigninProvider) {
    this.establecerConexion();
    return this.http.post(`${this.urlBus}registrar-proveedor`, s).toPromise();
  }
  async addProductProvider(s: ProductProvider) {
    this.establecerConexion();
    return this.http.post(`${this.urlBus}crear-producto-proveedor`, s).toPromise();
  }
  async addProductClient(s: ProductClient) {
    this.establecerConexion();
    return this.http.post(`${this.urlBus}crear-producto-cliente`, s).toPromise();
  }
  async getProductsExtern() {
    this.establecerConexion();
    return this.http.get(`${this.urlBus}ver-productos`).toPromise();
  }
  async comprar(s: Compra) {
    this.establecerConexion();
    return this.http.post(`${this.urlBus}realizar-compra`, s).toPromise();
  }
  // ------------------------------------------------------------

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

  

  

}
