import { Injectable } from '@angular/core';
import { Producto } from '../home-client/home-client.page';
import { ConnectionService } from './connection.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public cat: number = -1;
  public current: number = 1;
  public pages: number = 500;
  public products: Producto[] = [];
  //productos de subastas

  constructor(
    private connection: ConnectionService
  ) { }

  public get(page: number) {
    this.connection.getProductsByCategoryPage(this.cat, page).subscribe((data) => {
      this.products = data['products'];
      console.log(this.products);
    });
  }

}
