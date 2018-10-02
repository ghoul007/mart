import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerComponent } from './manager.component';
import { UserManagementComponent } from './user-management.component';
import { ReceiptLookupComponent } from './receipt-lookup.component';
import { HomeComponent } from './home.component';
import { AuthGuard } from '../auth/auth.guard';
import { Role } from '../auth/role.enum';

const routes: Routes = [
  {
    path: 'manager', component: ManagerComponent,
    children: [
      { path: '', redirectTo: '/manager/home', pathMatch: 'full' },
      {
        path: 'home', component: HomeComponent,
        canActivate: [AuthGuard],
        data: {
          expectedRole: Role.Manager,
        },
      },
      {
        path: 'users', component: UserManagementComponent, canActivate: [AuthGuard],
        data: {
          expectedRole: Role.Manager,
        },
      },
      {
        path: 'receipts', component: ReceiptLookupComponent, canActivate: [AuthGuard],
        data: {
          expectedRole: Role.Manager,
        },
      },
    ]
  },
  // { path: 'home', component: ManagerComponent },
  // { path: 'users', component: UserManagementComponent },
  // { path: 'receipts', component: ReceiptLookupComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
