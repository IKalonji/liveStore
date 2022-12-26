import { Injectable, OnInit } from '@angular/core';
import { Client } from '@xmtp/xmtp-js';
import { ethers } from 'ethers'
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class XmtpService implements OnInit{

  signer: any;
  xmtpClient: any;
  conversationID: string = 'liveStore.xy';
  	

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.createXMTPClient()
  }

  async createXMTPClient(){
    const signer = await this.userService.extractWalletSigner();
    this.xmtpClient = await Client.create(signer)
    return this.xmtpClient;
  }

  async startNewConversation(withAddr: string){
    const conversation = await this.xmtpClient.conversations.newConversation(withAddr, {conversationId: this.conversationID});
    return conversation;
  }

  async getConversationMessages(){
    const allConversations = await this.xmtpClient.conversations.list();
    const myAppConversations = allConversations.filter(
      (convo:any) =>
        convo.context?.conversationId &&
        convo.context.conversationId.startsWith(this.conversationID)
    )
    return myAppConversations;
  }

  async sendMessageToAddr(address: string, message: any){
    const conversation = await this.startNewConversation(address)
    await conversation.send(message);
  }

}
