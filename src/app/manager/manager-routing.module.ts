import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerComponent } from './manager.component';
import { UserManagementComponent } from './user-management.component';
import { ReceiptLookupComponent } from './receipt-lookup.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: 'manager', component: ManagerComponent,
    children: [
      { path: '', redirectTo: '/manager/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'users', component: UserManagementComponent },
      { path: 'receipts', component: ReceiptLookupComponent },
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
