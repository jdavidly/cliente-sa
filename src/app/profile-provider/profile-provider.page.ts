import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../home-client/home-client.page';

@Component({
  selector: 'app-profile-provider',
  templateUrl: './profile-provider.page.html',
  styleUrls: ['./profile-provider.page.scss'],
})
export class ProfileProviderPage implements OnInit {
  user: User = JSON.parse(localStorage.getItem('user'));
  tipoUser: string = "";
  constructor(private router: Router) {
    if(this.user.role){
      this.tipoUser = "Client"
    }else {
      this.tipoUser = "Provider"
    }
  }

  ngOnInit() {
  }
  async back() {
    this.router.navigate(['/home-provider']);
  }

}
