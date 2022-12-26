import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  connectedWallet: string = "";
  isWallet = false;
  domainName: string | null = null;
  toolbarLabel: string | null = "";
  
  constructor(private userService: UserService, private navigator: Router, private messageService: MessageService, private confirmationService: ConfirmationService){
  }

  async connectWallet(){
    this.userService.connectMetamask().then(wallet => {
      this.connectedWallet = wallet;
      console.log(this.connectedWallet)
      switch (this.connectedWallet){
        case "rejected":
          this.displayToast("Connection rejected", "Wallet connection rejected, please connect to proceed", "info")
          break;
        case "undefined":
          this.displayConfirmation("Metamask not installed!", "Metamask is required in order to connect and proceed, please install Metamask")
          break;
        default:
          this.isWallet = !this.isWallet;
          this.userService.resolveENS().then(data => {
            this.domainName = data;
            if (this.domainName != ""){
              this.toolbarLabel = this.domainName;
            }else{
              this.toolbarLabel = this.connectedWallet;
            }
          });
          this.displayToast("Wallet connected", "Your wallet has successfully been connected!", "success");
          this.navigateToProfile()
      }
    });
  }

  goToStore(){
    this.navigator.navigate(["store"]);
  }

  navigateToProfile(){
    this.navigator.navigate(["profile"]);
  }

  displayToast(notice: string, message: string, severity: string){
    this.messageService.add({severity: severity, summary: notice, detail: message});
    setTimeout(()=> {
      this.messageService.clear()
    }, 3000);
  }

  displayConfirmation(header: string, message: string){
    this.confirmationService.confirm({
      header: header,
      message: message,
      accept: () => {},
      rejectVisible: false,
      acceptIcon: "pi pi-check",
      acceptLabel: "OK",
      closeOnEscape: false,
      dismissableMask: false,
      defaultFocus: "accept"
    })
  }

}
