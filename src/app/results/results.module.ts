import { NgModule } from '@angular/core';
import { ResultsPageComponent } from './containers/results/results.page.component';
import { ResultsRoutingModule } from './results-routing.module';
import { MaterialModule } from '../material/material.module';
import { ScoreComponent } from './components/score/score.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ScoreBoardComponent } from './components/score-board/score-board.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
     declarations: [ScoreBoardComponent, ResultsPageComponent, ScoreComponent],
     imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule, ResultsRoutingModule, FlexLayoutModule],
     exports: [],
})
export class Results {}
