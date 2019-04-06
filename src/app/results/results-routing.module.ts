import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultsPageComponent } from './containers/results/results.page.component';

const routes: Routes = [
     {
          path: '',
          component: ResultsPageComponent,
     },
];

@NgModule({
     imports: [RouterModule.forChild(routes)],
     exports: [RouterModule],
})
export class ResultsRoutingModule {}
