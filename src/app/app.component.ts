import { Component } from '@angular/core';
import { SnackbarService } from './core/services/snackbar.service';

@Component({
     selector: 'app-root',
     templateUrl: './app.component.html',
})
export class AppComponent {
     title = 'newwork';

     constructor(private snack: SnackbarService) {}

     snackbar(): void {
          this.snack.openSnackbar('asdasd');
     }
}
