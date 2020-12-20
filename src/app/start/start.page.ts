import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ConnectionService } from '../services/connection.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  esProveedor: boolean = false;
  tab: string = 'login';
  log: Login = {
    correo: 'jorge@gmail.com',
    pass: '123'
  };

  signClient: SigninClient = {
    nombres: '',
    nit: '',
    edad: '',
    correo: '',
    pass: '',
    telefono: ''
  };

  signProvider: SigninProvider = {
    nombres: '',
    nit: '',
    correo: '',
    pass: '',
    direccion: ''
  };

  constructor(
    private connection: ConnectionService,
    private toastController: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async signinClient() {
    const response = await this.connection.signinClient(this.signClient);
    if (response['auth']) {
      //limpiar los campos
      this.tab = 'login';
      this.presentToast('El cliente ha sido creado exitosamente. Puede iniciar sesion.');
    } else {
      //mensajes de error vendran en la respuesta
      this.presentToast('Los datos de registro son incorrectos');
    }
  }

  async signinProvider() {
    const response = await this.connection.signinProvider(this.signProvider);
    if (response['auth']) {
      //limpiar los campos
      this.tab = 'login';
      this.presentToast('El proveedor ha sido creado exitosamente. Puede iniciar sesion.');
    } else {
      //mensajes de error vendran en la respuesta
      this.presentToast('Los datos de registro son incorrectos');
    }
  }

  async login() {
    const response = await this.connection.login(this.log);
    console.log(response);
    if (response['auth']) {
      this.log.correo = '';
      this.log.pass = '';
      localStorage.setItem('user', JSON.stringify(response['result']));
      if (response['result']['Tipo_Usuario'] === 0) {
        this.router.navigate(['/home-client']);
      } else {
        this.router.navigate(['/home-provider']);
      }
    } else {
      this.presentToast('El correo o contrasena son incorrectos');
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

}

export interface SigninClient {
  nombres: string;
  nit: string;
  edad: string;
  correo: string;
  pass: string;
  telefono: string;
}

export interface SigninProvider {
  nombres: string;
  nit: string;
  correo: string;
  pass: string;
  direccion: string;
}

export interface Login {
  correo: string;
  pass: string;
}