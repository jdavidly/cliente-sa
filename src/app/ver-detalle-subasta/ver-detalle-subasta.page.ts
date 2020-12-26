import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../services/connection.service';
import { Router } from '@angular/router';
//import { User } from '../home-client/home-client.page';
import { ToastController } from '@ionic/angular';

export interface User{
  user:number;
}
export interface ProductoSubasta {
  Id_Subasta: number;
  fecha_hora_inicio: Date;
  fecha_hora_fin: Date;
  id_producto: number;
  nombre_producto: string;
  desc_producto: string;
  url_: string;
  precio_unitario: number;
  id_usuario: number;
  proveedor: string;
  categoria: string;
  ultima_oferta: number
}


export interface ObjOferta {
  user: number;
  forma: number;
  producto: number;
  oferta: number;
}

export interface ObjForma {
  id_forma: number;
  nombre: string;
}

@Component({
  selector: 'app-ver-detalle-subasta',
  templateUrl: './ver-detalle-subasta.page.html',
  styleUrls: ['./ver-detalle-subasta.page.scss'],
})
export class VerDetalleSubastaPage implements OnInit {
  user: User = JSON.parse(localStorage.getItem('user'));
  producto:ProductoSubasta = JSON.parse(localStorage.getItem('productoSubastado'));
  oferta:number;
  forma_pago:number;
  formas: ObjForma [] = [];

  miOferta: ObjOferta ={
    user:0,
    forma:0,
    oferta:0,
    producto:0
  };

  constructor(private connection: ConnectionService,
    private toastController: ToastController,
    private router: Router) { 
        console.log(this.producto)
        this.formas = [];
        this.getFormasPago();
        console.log(this.user)
        this.miOferta.user = this.user.user;
    }

  ngOnInit() {
  }

  async getFormasPago(){
    const response = await this.connection.getFormasPago();
    Object.keys(response).forEach (key =>{
      this.formas.push({id_forma: response[key] ['Id_Forma_Pago'], nombre: response[key]['Nombre']});
    });
  }

  async cancelar() {
    this.router.navigate(['/ver-subastas']);
  }

  async ofertar() {
    /*console.log(this.user.user, this.forma_pago, this.producto.Id_Subasta, this.oferta);
    console.log(this.user)

    console.log(JSON.parse(localStorage.getItem('user'))['user'])
    let val = this.user.user;
    */
    //this.miOferta.user = parseInt(JSON.parse(localStorage.getItem('user'))['user']);
    this.miOferta.forma = this.forma_pago;
    this.miOferta.producto = this.producto.Id_Subasta;
    this.miOferta.oferta = this.oferta;
    
    console.log(this.miOferta);
    const response = await this.connection.ofertarSubasta(this.miOferta);

    if (response['auth']) {
      console.log("oferta insertada")
    } else {
      console.log("error al insertar la oferta")
    }

  }


}

