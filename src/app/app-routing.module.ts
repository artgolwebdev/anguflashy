import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// my pages 
import { WelcomeComponent } from './welcome/welcome.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path : "" , component : WelcomeComponent } , 
  { path : "profile/:id", component : ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
