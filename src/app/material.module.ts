import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatIconModule } from "@angular/material";
@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, MatToolbarModule, MatIconModule

  ],
  exports: [
    CommonModule,
    MatButtonModule, MatToolbarModule, MatIconModule
  ],
  declarations: [MatButtonModule, MatToolbarModule, MatIconModule]
})
export class MaterialModule { }
