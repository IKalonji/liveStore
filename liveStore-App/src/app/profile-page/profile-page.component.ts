import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  isWallet: boolean = false;
  header: string = "";
  currentMessages: number= 0;

  constructor(private userService: UserService, private navigator: Router) { }

  ngOnInit(): void {
    this.isWallet = this.userService.isWalletConnected()
    if (!this.isWallet){
      this.navigateHome()
    }else {
      let addr = this.userService.getWalletAddress();
      this.userService.resolveENS().then(data => {
        let domain = data;
        console.log(addr)
        console.log(domain)
        this.header = !domain ? addr : domain;
      })
    }
  }

  navigateHome(){
    this.navigator.navigate([""]);
  }

}
