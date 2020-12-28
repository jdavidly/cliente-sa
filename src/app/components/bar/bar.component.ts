import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/home-client/home-client.page';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
})
export class BarComponent implements OnInit {

  user: User = JSON.parse(localStorage.getItem('user'));
  constructor() { }

  ngOnInit() {
  }

}
