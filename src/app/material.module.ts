import { NgModule } from '@angular/core';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatFormFieldModule, MatInputModule, MatDialogModule, MatSnackBarModule } from "@angular/material";
@NgModule({
  imports: [
    MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatFormFieldModule, 
    MatInputModule, MatDialogModule, MatSnackBarModule

  ],
  exports: [
    MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatFormFieldModule, 
    MatInputModule, MatDialogModule, MatSnackBarModule
  ],
  declarations: []
})
export class MaterialModule { }
