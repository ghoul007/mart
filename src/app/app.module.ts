import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ManagerModule } from './manager/manager.module';
import { InventoryModule } from './inventory/inventory.module';
import { PosModule } from './pos/pos.module';
import { UserModule } from './user/user.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [AppComponent, HomeComponent, PageNotFoundComponent],
  imports: [HttpClientModule,BrowserModule,MaterialModule, ManagerModule, InventoryModule, PosModule, UserModule, BrowserAnimationsModule,AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
