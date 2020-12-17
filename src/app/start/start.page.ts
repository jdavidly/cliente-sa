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
    email: 'jorge@gmail.com',
    password: '123'
  };

  signClient: SigninClient = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    password_repeated: '',
    phone_number: ''
  };

  signProvider: SigninProvider = {
    name: '',
    email: '',
    password: '',
    password_repeated: '',
    address: ''
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
    if (response['auth']) {
      console.log(response);
      this.log.email = '';
      this.log.password = '';
      localStorage.setItem('user', JSON.stringify(response['result']));
      if (response['result']['role'] === 1) {
        this.router.navigate(['/home-client']);
      } else {
        this.router.navigate(['/products-provider']);
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
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password_repeated: string;
  phone_number: string;
}

export interface SigninProvider {
  name: string;
  email: string;
  password: string;
  password_repeated: string;
  address: string;
}

export interface Login {
  email: string;
  password: string;
}