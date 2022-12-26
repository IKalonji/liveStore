import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { StoreFrontComponent } from './store-front/store-front.component';

const routes: Routes = [
  {
    path: "",
    component: HomepageComponent
  },
  {
    path: "profile",
    component: ProfilePageComponent
  },
  {
    path: "store",
    component: StoreFrontComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
