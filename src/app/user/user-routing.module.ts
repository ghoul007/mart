import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  { path: 'user/profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'user/logout', component: LogoutComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
