import { Component, OnInit } from '@angular/core'
import { QuestionService } from './services/question-service.service'

@Component({
	selector: 'app-quiz',
	templateUrl: './quiz.component.html',
	styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
	questions: string[]

	constructor(private questionService: QuestionService) {}

	ngOnInit(): void {
		this.questions = this.questionService.getQuestions()
	}
}
