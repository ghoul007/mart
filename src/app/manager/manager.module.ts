import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerComponent } from './manager.component';
import { MaterialModule } from '../material.module';
import { UserManagementComponent } from './user-management.component';
import { ReceiptLookupComponent } from './receipt-lookup.component';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ManagerRoutingModule
  ],
  declarations: [ManagerComponent, UserManagementComponent, ReceiptLookupComponent, HomeComponent]
})
export class ManagerModule { }
