import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
	declarations: [QuizComponent],
	imports: [CommonModule, MaterialModule],
})
export class QuizModule {}
