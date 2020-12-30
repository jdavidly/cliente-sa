import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Producto, User } from '../home-client/home-client.page';
import { ConnectionService } from '../services/connection.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  producto: Producto;
  cantidad: number = 1;
  compro: boolean = false;
  user: User = JSON.parse(localStorage.getItem('user'));

  constructor(
    private modalController: ModalController,
    private connection: ConnectionService
  ) { }

  ngOnInit() {

  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true,
      compro: this.compro
    });
  }

  async agregar() {
    this.compro = true;
    const result = await this.connection.addToCart(this.user.id, this.producto.Id_Producto, this.cantidad);
    this.dismiss();
  }

}
