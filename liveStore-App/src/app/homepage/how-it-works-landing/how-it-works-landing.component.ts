import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-it-works-landing',
  templateUrl: './how-it-works-landing.component.html',
  styleUrls: ['./how-it-works-landing.component.css']
})
export class HowItWorksLandingComponent implements OnInit {

  events = [
    {
      step: "Connect your wallet"
    },
    {
      step: "View your profile page",
    },
    {
      step: "Create a new listing/Browse the app for items"
    },
    {
      step: "Watch the product video and single click purchase"
    },
    {
      step: "Both buyer and seller receive Successful Sale NFT and boost your reputation"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
