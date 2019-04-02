import { Injectable } from '@angular/core'

@Injectable({
	providedIn: 'root',
})
export class QuestionService {
	constructor() {}

	public getQuestions(): string[] {
		return ['asdasda', 'qwrwqqwrqw', 'asfsafweqf']
	}
}
