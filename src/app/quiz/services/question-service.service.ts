import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../models/question.model';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable({
	providedIn: 'root',
})
export class QuestionService {
	constructor(private afs: AngularFirestore) {}

	getQuestions(): Observable<Question[]> {
		const collection: AngularFirestoreCollection<Question> = this.afs.collection('questions', ref => {
			return ref.limit(10);
		});
		return collection.valueChanges();
	}

	addQuestion(content: Question) {
		const collection: AngularFirestoreCollection = this.afs.collection('questions');
		collection.add(content);
	}
}
