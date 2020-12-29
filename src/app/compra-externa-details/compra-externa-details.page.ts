import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../compra-externa/compra-externa.page';


@Component({
  selector: 'app-compra-externa-details',
  templateUrl: './compra-externa-details.page.html',
  styleUrls: ['./compra-externa-details.page.scss'],
})
export class CompraExternaDetailsPage implements OnInit {

  producto:Producto = JSON.parse(localStorage.getItem('prodActualExterno'));
  constructor(private router: Router) { }

  ngOnInit() {
  }

  async cancelar() {
    this.router.navigate(['/compra-externa']);
  }

}
