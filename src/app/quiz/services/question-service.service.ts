import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../models/question.model';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from 'angularfire2/firestore';
import { HttpClient } from '@angular/common/http';
import { forEach } from 'lodash';

interface DummyQuestion {
     category: string;
     correct_answer: string;
     difficulty: string;
     incorrect_answers: string[];
     question: string;
     type: string;
}

interface Response {
     response_code: number;
     results: DummyQuestion[];
}

@Injectable({
     providedIn: 'root',
})
export class QuestionService {
     constructor(private http: HttpClient, private afs: AngularFirestore) {}

     getDummy(): any {
          this.http.get('https://opentdb.com/api.php?amount=10&category=21&type=multiple').subscribe((x: Response) => {
               forEach(x.results, (result: DummyQuestion) => {
                    this.addQuestion({
                         question: result.question,
                         options: [
                              { id: 'a', text: result.incorrect_answers[0], correct: false },
                              { id: 'b', text: result.correct_answer, correct: true },
                              { id: 'c', text: result.incorrect_answers[1], correct: false },
                         ],
                    });
               });

               this;
          });
     }

     getQuestions(amount: number): Observable<Question[]> {
          const collection: AngularFirestoreCollection<Question> = this.afs.collection('questions', ref => {
               return ref.limit(amount);
          });
          return collection.valueChanges();
     }

     addQuestion(question: Question): Promise<DocumentReference> {
          const collection: AngularFirestoreCollection = this.afs.collection('questions');
          return collection.add(question);
     }
}
