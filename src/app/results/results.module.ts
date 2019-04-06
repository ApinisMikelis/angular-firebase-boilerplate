import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsPageComponent } from './containers/results/results.page.component';
import { ResultsRoutingModule } from './results-routing.module';
import { MaterialModule } from '../material/material.module';
import { ScoreComponent } from './components/score/score.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
     declarations: [ResultsPageComponent, ScoreComponent],
     imports: [CommonModule, MaterialModule, ResultsRoutingModule, FlexLayoutModule],
     exports: [],
})
export class Results {}
