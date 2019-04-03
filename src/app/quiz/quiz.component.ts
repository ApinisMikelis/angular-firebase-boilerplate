import { Component, OnInit } from '@angular/core';
import { QuestionService } from './services/question-service.service';
import { Observable } from 'rxjs';
import { Question } from './models/question.model';

@Component({
	selector: 'app-quiz',
	templateUrl: './quiz.component.html',
	styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
	questions: Observable<Question[]>;
	newContent: Question;

	constructor(private questionService: QuestionService) {}

	ngOnInit(): void {
		this.questions = this.questionService.getQuestions();
	}
}
