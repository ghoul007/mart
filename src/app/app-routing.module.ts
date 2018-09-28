import { NgModule, Component } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'manager',    loadChildren: './manager/manager.module#ManagerModule'},
  { path: 'user',    loadChildren: './user/user.module#UserModule'},
  { path: 'inventory',    loadChildren: './inventory/inventory.module#InventoryModule'},
  { path: 'pos',    loadChildren: './pos/pos.module#PosModule'},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
