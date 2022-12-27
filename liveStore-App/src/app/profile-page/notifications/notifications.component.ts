import { Component, OnInit } from '@angular/core';
import { PushService } from 'src/app/services/messaging/push.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notifications: Notification[] = []

  constructor(private notificationService: PushService) { }

  ngOnInit(): void {
    this.getNotification();
  }

  getNotification(){
    // let notificationsList = this.notificationService.getNotifications()
  }

}

export interface Notification{
  from: string,
  message: any
}
