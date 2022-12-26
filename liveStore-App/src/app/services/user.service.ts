import { Injectable } from '@angular/core';
import { ethers } from 'ethers';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  walletAddress: string = "";
  walletConnected: boolean = false;
  ENSDomain: string|null = "";
  
  constructor() { }

  async connectMetamask() {
    if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
      const accounts = await window.ethereum.request({method: 'eth_requestAccounts'}).catch((err:any) => {
      if (err.code === 4001){
        return "rejected";
      }
      
      this.walletConnected = !this.walletConnected;
      this.walletAddress = accounts[0];
      return this.walletAddress;
      });
      this.walletConnected = !this.walletConnected;
      this.walletAddress = accounts[0];
      return this.walletAddress;
    }
    console.log("Metamask not installed")
    return "undefined"
  }

  async resolveENS(){
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.lookupAddress(this.walletAddress).then( data => {
      this.ENSDomain = data;
    })
    return this.ENSDomain;
  }

  isWalletConnected(){
    return this.walletConnected;
  }

  getENSDomain(){
    return this.ENSDomain;
  }

  getWalletAddress(){
    return this.walletAddress;
  }

  async extractWalletSigner(){
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner()
    return signer;
  }
  
}

