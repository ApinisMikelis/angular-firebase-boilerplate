import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuizRoutingModule } from './quiz-routing.module';

@NgModule({
     declarations: [QuizComponent],
     imports: [QuizRoutingModule, CommonModule, FlexLayoutModule, MaterialModule, ReactiveFormsModule],
})
export class QuizModule {}
