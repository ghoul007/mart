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
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthService } from "./auth/auth.service";
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from "@angular/forms";
import { SimpleDialogComponent } from './common/simple-dialog/simple-dialog.component';
import { AuthHttpInterceptorService } from "./auth/auth-http-interceptor.service";


@NgModule({
  declarations: [AppComponent, HomeComponent, PageNotFoundComponent, LoginComponent, SimpleDialogComponent],
  imports: [HttpClientModule, ReactiveFormsModule, BrowserModule, MaterialModule, ManagerModule, InventoryModule, PosModule, UserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptorService,
      multi: true,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
