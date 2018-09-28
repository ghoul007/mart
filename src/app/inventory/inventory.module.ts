import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { StockComponent } from './stock/stock.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InventoryComponent } from './inventory.component';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    InventoryRoutingModule
  ],
  declarations: [InventoryComponent, StockComponent, ProductsComponent, CategoriesComponent, DashboardComponent]
})
export class InventoryModule { }
