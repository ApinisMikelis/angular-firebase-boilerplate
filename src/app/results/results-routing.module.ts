import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultsPageComponent } from './containers/results/results.page.component';
import { ScoreBoardComponent } from './components/score-board/score-board.component';

const routes: Routes = [
     {
          path: '',
          component: ResultsPageComponent,
     },
     {
          path: 'scoreboard',
          component: ScoreBoardComponent,
     },
];

@NgModule({
     imports: [RouterModule.forChild(routes)],
     exports: [RouterModule],
})
export class ResultsRoutingModule {}
