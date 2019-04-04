import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../models/question.model';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from 'angularfire2/firestore';

@Injectable({
     providedIn: 'root',
})
export class QuestionService {
     constructor(private afs: AngularFirestore) {}

     getQuestions(amount: number): Observable<Question[]> {
          const collection: AngularFirestoreCollection<Question> = this.afs.collection('questions', ref => {
               return ref.limit(amount);
          });
          return collection.valueChanges();
     }

     addQuestion(content: Question): Promise<DocumentReference> {
          const collection: AngularFirestoreCollection = this.afs.collection('questions');
          return collection.add(content);
     }
}
