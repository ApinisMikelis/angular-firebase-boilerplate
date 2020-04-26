import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material';
import { AppConstants } from '../constants/app-constants';
import { Injectable } from '@angular/core';

@Injectable({
     providedIn: 'root',
})
export class SnackbarService {
     constructor(private snackBar: MatSnackBar) {}

     public openSnackbar(
          message: string,
          duration: number = AppConstants.SNACKBAR_DURATION
     ): MatSnackBarRef<SimpleSnackBar> {
          return this.snackBar.open(message, null, { duration });
     }
}
