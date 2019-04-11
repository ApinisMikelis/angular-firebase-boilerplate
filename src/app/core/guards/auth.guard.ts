import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, CanActivate } from '@angular/router';
import { take, map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
     constructor(private auth: AuthService, private router: Router) {}

     canActivate(): Observable<boolean> {
          return this.auth.user$.pipe(
               take(1),
               map(user => !!user),
               tap(loggedIn => {
                    if (!loggedIn) {
                         this.router.navigate(['/login']);
                    }
               })
          );
     }
}
