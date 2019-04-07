import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
     selector: 'app-start-screen',
     templateUrl: 'start-screen.component.html',
     styleUrls: ['./start-screen.component.scss'],
})
export class StartScreenComponent {
     constructor(private router: Router) {}

     public start(): void {
          this.router.navigate(['./quiz']);
     }

     public scoreboard(): void {
          this.router.navigate(['./results']);
     }
}
