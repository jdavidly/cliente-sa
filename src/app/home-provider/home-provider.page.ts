import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../home-client/home-client.page';

@Component({
  selector: 'app-home-provider',
  templateUrl: './home-provider.page.html',
  styleUrls: ['./home-provider.page.scss'],
})
export class HomeProviderPage implements OnInit {
  user: User = JSON.parse(localStorage.getItem('user'));
  constructor(private router: Router) { 
    console.log(this.user)
  }

  ngOnInit() {
  }

  async verProductos(){
    this.router.navigate(['/products-provider']);
  }

  async addProducto(){
    this.router.navigate(['/add-products']);
  }

  async myProfile(){
    this.router.navigate(['/profile-provider']);
  }

  async toBuy(){
    this.router.navigate(['/home-client']);
  }
  async auction(){
    
  }
  async viewAuction(){
    this.router.navigate(['/ver-subastas']);
  }
  
  async compraExterna(){
    this.router.navigate(['/compra-externa']);
  }


}
