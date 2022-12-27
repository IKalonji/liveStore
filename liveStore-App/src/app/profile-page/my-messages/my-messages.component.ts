import { Component, OnInit } from '@angular/core';
import { XmtpService } from 'src/app/services/messaging/xmtp.service';

@Component({
  selector: 'app-my-messages',
  templateUrl: './my-messages.component.html',
  styleUrls: ['./my-messages.component.css']
})
export class MyMessagesComponent implements OnInit {

  myMessages: Messages[] = [];

  constructor(private xmtpService: XmtpService) { }

  ngOnInit(): void {
    this.getMessages()
  }

  getMessages(){
    // const messages = this.xmtpService.getConversationMessages();
  }

}

export interface Messages{
  from: string,
  message: any
}
