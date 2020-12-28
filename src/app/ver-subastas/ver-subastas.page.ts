import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../services/connection.service';
import { Router } from '@angular/router';
import { User } from '../home-client/home-client.page';
import { Usuario } from '../products-provider/products-provider.page';




@Component({
  selector: 'app-ver-subastas',
  templateUrl: './ver-subastas.page.html',
  styleUrls: ['./ver-subastas.page.scss'],
})
export class VerSubastasPage implements OnInit {

  subastas: any;

  user: User = JSON.parse(localStorage.getItem('user'));
  idUser: Usuario = {
    user: this.user.Id_Usuario
  }

  constructor(private connection: ConnectionService,
    private router: Router) { this.getProductosSubasta(); }

  ngOnInit() {
    this.idUser = {
      user: this.user.Id_Usuario
    }
    this.getProductosSubasta();
  }
  async getProductosSubasta() {
    const response = await this.connection.getProductsSubasta();
    this.subastas = response[0];
    console.log(this.subastas);
  }
  async back() {
    this.router.navigate(['/ver-subastas']);
  }

  async viewDetails(row) {
    localStorage.setItem('productoSubastado', JSON.stringify(row));
    console.log(row)
    this.router.navigate(['/ver-detalle-subasta']);
  }

}
