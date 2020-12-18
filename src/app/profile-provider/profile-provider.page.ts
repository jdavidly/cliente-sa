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
  constructor(private router: Router) {

  }

  ngOnInit() {
  }
  async back() {
    if(this.user.role){
      this.router.navigate(['/home-client']);
    }else{
      this.router.navigate(['/home-provider']);
    }
  }

}
