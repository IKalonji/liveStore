import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MainLandingComponent } from './homepage/main-landing/main-landing.component';
import { ProjectFeaturesLandingComponent } from './homepage/project-features-landing/project-features-landing.component';
import { HowItWorksLandingComponent } from './homepage/how-it-works-landing/how-it-works-landing.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { StoreFrontComponent } from './store-front/store-front.component';
import { BannerComponent } from './store-front/banner/banner.component';
import { ProductCardComponent } from './store-front/product-card/product-card.component';
import { AddListingComponent } from './profile-page/add-listing/add-listing.component';
import { MyMessagesComponent } from './profile-page/my-messages/my-messages.component';

import {CardModule} from 'primeng/card';
import {FileUploadModule} from 'primeng/fileupload';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ToolbarModule} from 'primeng/toolbar';
import {DividerModule} from 'primeng/divider';
import {TimelineModule} from 'primeng/timeline';
import {DataViewModule} from 'primeng/dataview';
import {DockModule} from 'primeng/dock';
import {ImageModule} from 'primeng/image';
import {BadgeModule} from 'primeng/badge';
import {BlockUIModule} from 'primeng/blockui';
import {ButtonModule} from 'primeng/button';
import {SplitButtonModule} from 'primeng/splitbutton';
import {SelectButtonModule} from 'primeng/selectbutton';
import {SliderModule} from 'primeng/slider';
import {RatingModule} from 'primeng/rating';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputTextModule} from 'primeng/inputtext';
import {InputSwitchModule} from 'primeng/inputswitch';
import {TabViewModule} from 'primeng/tabview';
import {ToastModule} from 'primeng/toast';
import { ChipModule } from 'primeng/chip';
import {FieldsetModule} from 'primeng/fieldset';
import {AvatarModule} from 'primeng/avatar';
import {TooltipModule} from 'primeng/tooltip';
import { NotificationsComponent } from './profile-page/notifications/notifications.component';
import { ListingsComponent } from './profile-page/listings/listings.component';
import { PurchasesComponent } from './profile-page/purchases/purchases.component';




@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MainLandingComponent,
    ProjectFeaturesLandingComponent,
    HowItWorksLandingComponent,
    ProfilePageComponent,
    StoreFrontComponent,
    BannerComponent,
    ProductCardComponent,
    AddListingComponent,
    MyMessagesComponent,
    NotificationsComponent,
    ListingsComponent,
    PurchasesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CardModule,
    FileUploadModule,
    ProgressSpinnerModule,
    MessagesModule,
    MessageModule,
    ConfirmDialogModule,
    ToolbarModule,
    DividerModule,
    TimelineModule,
    DataViewModule,
    DockModule,
    ImageModule,
    BadgeModule,
    BlockUIModule,
    ButtonModule,
    SplitButtonModule,
    SelectButtonModule,
    SliderModule,
    RatingModule,
    InputNumberModule,
    InputTextareaModule,
    InputTextModule,
    InputSwitchModule,
    TabViewModule,
    ToastModule,
    ChipModule,
    FieldsetModule,
    AvatarModule,
    TooltipModule
  ],
  providers: [
    ConfirmationService,
    MessageService,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
