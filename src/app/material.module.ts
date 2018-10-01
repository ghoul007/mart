import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatSnackBarModule, MatSidenavModule, MatListModule } from "@angular/material";
@NgModule({
  imports: [
    MatButtonModule, 
    MatToolbarModule,
     MatIconModule,
      MatCardModule,
       MatFormFieldModule, 
    MatInputModule,
     MatDialogModule, 
     MatSnackBarModule,
     MatSidenavModule,
     MatListModule
  ],
  exports: [
    MatButtonModule, 
    MatToolbarModule,
     MatIconModule, 
     MatCardModule, 
     MatFormFieldModule, 
    MatInputModule, 
    MatDialogModule,
     MatSnackBarModule,
     MatSidenavModule,
     MatListModule
  ],
  declarations: []
})
export class MaterialModule { }
