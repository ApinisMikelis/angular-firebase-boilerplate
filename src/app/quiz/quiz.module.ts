import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
     declarations: [QuizComponent],
     imports: [CommonModule, MaterialModule, ReactiveFormsModule],
})
export class QuizModule {}
