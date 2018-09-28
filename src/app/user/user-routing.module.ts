import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: 'user/profile', component: ProfileComponent },
  { path: 'user/logout', component: LogoutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
