import { Component, OnInit } from '@angular/core';
import { User } from '../home-client/home-client.page';

@Component({
  selector: 'app-profile-client',
  templateUrl: './profile-client.page.html',
  styleUrls: ['./profile-client.page.scss'],
})
export class ProfileClientPage implements OnInit {

  user: User = JSON.parse(localStorage.getItem('user'));
  cards: Card[] = [
    {
      card: 1,
      number: '123-456',
      name: 'JORGE',
      default: false,
      type: 'Debito'
    },
    {
      card: 2,
      number: '321-456',
      name: 'DAVID',
      default: true,
      type: 'Credito'
    },
    {
      card: 3,
      number: '213-456',
      name: 'LOPEZ',
      default: false,
      type: 'Debito'
    }
  ];
  card: Card = {
    card: 0,
    number: '',
    name: '',
    default: false,
    type: 'Debito'
  };

  constructor() { }

  ngOnInit() {
  }

  update() {

  }

  add() {
    //guardar en la base de datos
    //volver a cargar los datos de tarjetas
    this.cards.push(this.card);
    //limpiar los campos
  }

  setDefault(card: number, index: number) {

  }

  remove(card: number, index: number) {
    console.log(`borrando la tarjeta ${card} de indice ${index}`);
    //borrar de la base de datos
    //volver a cargar los datos de tarjetas
  }

}

export interface Card {
  card: number;
  number: string;
  name: string;
  default: boolean;
  type: string;
}