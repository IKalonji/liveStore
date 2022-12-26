import { Injectable, OnInit } from '@angular/core';
import * as PushAPI from "@pushprotocol/restapi";
import { ethers } from 'ethers';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class PushService implements OnInit{

  key = "PrivateKey";
  signer: any;
  userWalletAddr: string = "";
  title = "LiveStore"

  constructor(private userService: UserService) { }

  ngOnInit(): void {
      this.signer = this.userService.extractWalletSigner();
      this.userWalletAddr = this.userService.getWalletAddress();
  }

  async optInForNotifications(){
    await PushAPI.channels.subscribe({
      signer: this.signer,
      channelAddress: 'eip155:5:0xD8634C39BBFd4033c0d3289C4515275102423681', // channel address in CAIP
      userAddress: `eip155:5:${this.userWalletAddr}`, // user address in CAIP
      onSuccess: () => {
       console.log('opt in success');
      },
      onError: () => {
        console.error('opt in error');
      },
      env: 'staging'
    })
  }

  async sendNotification(addr: string, message: string){
    // apiResponse?.status === 204, if sent successfully!
  const apiResponse = await PushAPI.payloads.sendNotification({
    signer: this.signer,
    type: 3, // target
    identityType: 2, // direct payload
    notification: {
      title: `[SDK-TEST] notification TITLE:`,
      body: `[sdk-test] notification BODY`
    },
    payload: {
      title: `${this.title}`,
      body: message,
      cta: '',
      img: ''
    },
    recipients: `eip155:5:${addr}`, // recipient address
    channel: 'eip155:5:0xD8634C39BBFd4033c0d3289C4515275102423681', // your channel address
    env: 'staging'
    });

    return apiResponse;
  }

  async getNotifications(){
    const addr = this.userService.getWalletAddress()
    const notifications = await PushAPI.user.getFeeds({
      user: `eip155:5:${addr}`, // user address in CAIP
      env: 'staging'
    });

    return notifications;
  }

}
