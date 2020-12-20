import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../home-client/home-client.page';
import { ConnectionService } from './connection.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public current: number = 1;
  public pages: number = 0;
  public products: Producto[] = [];
  //productos de subastas

  constructor(
    private connection: ConnectionService
  ) { }

  public get(page: number) {
    this.connection.getProductsByPage(page).subscribe((data) => {
      this.pages = data['pages'];
      this.products = data['products'];
    });
  }

}
