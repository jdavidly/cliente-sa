import { Component, OnInit, ɵConsole } from '@angular/core';
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
    contrasena: '123'
  };

  signClient: SigninClient = {
    nombre: '',
    apellido: '',
    email: '',
    contrasena: '',
    celular: ''
  };

  signProvider: SigninProvider = {
    nombre: '',
    apellido: '',
    empresa: '',
    email: '',
    contrasena: '',
    direccion: ''
  };
  ConexionGrupo:number = 17;

  constructor(
    private connection: ConnectionService,
    private toastController: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async signinClient() {
    localStorage.setItem('ConexionGrupo', JSON.stringify(this.ConexionGrupo));
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
    localStorage.setItem('ConexionGrupo', JSON.stringify(this.ConexionGrupo));
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
    localStorage.setItem('ConexionGrupo', JSON.stringify(this.ConexionGrupo));
    console.log(this.log)
    const response = await this.connection.login(this.log);
    console.log(response);
    if (response['auth']) {
      this.log.email = '';
      this.log.contrasena = '';
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
  nombre: string;
  apellido: string;
  email: string;
  contrasena: string;
  celular: string;
}

export interface SigninProvider {
  nombre: string;
  apellido: string;
  empresa: string;
  email: string;
  contrasena: string;
  direccion: string;
}

export interface Login {
  email: string;
  contrasena: string;
}