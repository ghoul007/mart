import { Injectable } from '@angular/core';
import { MatSnackBar, MatDialog, MatSnackBarConfig, MatDialogConfig } from '@angular/material';
import { Observable } from 'rxjs';
import { SimpleDialogComponent } from './simple-dialog/simple-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  constructor(private snackBar: MatSnackBar, private dialog: MatDialog) { }

  showToast(message: string, action: string, config?: MatSnackBarConfig) {
    this.snackBar.open(
      message,
      action,
      config || { duration: 7000, }
    )
  }


  showDialog(
    title: string,
    content: string,
    okText = 'OK',
    cancelText?: string,
    customConfig?: MatDialogConfig
  ): Observable<Boolean> {
    const dialogRef = this.dialog.open(
      SimpleDialogComponent,
      customConfig || {
        width: '300px',
        data: { title: title, content: content, okText: okText, cancelText: cancelText },
      }
    )

    return dialogRef.afterClosed()
  }
}
