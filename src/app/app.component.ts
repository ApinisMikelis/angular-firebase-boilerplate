import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader } from './animations/route-animations';
import { AuthService } from './core/services/auth.service';

@Component({
     selector: 'app-root',
     templateUrl: './app.component.html',
     animations: [fader],
})
export class AppComponent {
     title = 'ng-quiz';

     constructor() {}

     prepareRoute(outlet: RouterOutlet) {
          return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
     }
}
