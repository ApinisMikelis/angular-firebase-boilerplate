import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
     {
          path: 'quiz',
          loadChildren: './quiz/quiz-routing.module#QuizRoutingModule',
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
          path: '',
          loadChildren: './splash/splash-routing.module#SplashRoutingModule',
     },
];

@NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule],
})
export class AppRoutingModule {}
