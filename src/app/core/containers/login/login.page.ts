import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
     selector: 'app-login',
     templateUrl: './login.page.html',
})
export class LoginPageComponent {
     constructor(public auth: AuthService) {}
}
