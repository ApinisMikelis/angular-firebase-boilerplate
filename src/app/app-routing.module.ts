import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './core/containers/login/login.page';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
     {
          path: 'quiz',
          loadChildren: './quiz/quiz-routing.module#QuizRoutingModule',
          data: {
               animation: 'pageAnimation',
          },
     },
     {
          path: 'results',
          loadChildren: './results/results-routing.module#ResultsRoutingModule',
     },
     {
          path: 'admin',
          loadChildren: './admin/admin-routing.module#AdminRoutingModule',
     },
     {
          path: 'login',
          component: LoginPageComponent,
     },
     {
          path: '',
          loadChildren: './splash/splash-routing.module#SplashRoutingModule',
     },
];

@NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule],
})
export class AppRoutingModule {}
