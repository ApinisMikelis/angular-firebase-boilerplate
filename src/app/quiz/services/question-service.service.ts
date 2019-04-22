import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../models/question.model';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from 'angularfire2/firestore';
import { AppDbConstants } from 'src/app/core/constants/app-db.constants';

@Injectable({
     providedIn: 'root',
})
export class QuestionService {
     constructor(private afs: AngularFirestore) {}

     public getQuestions(amount: number = 100): Observable<Question[]> {
          const collection: AngularFirestoreCollection<Question> = this.afs.collection(
               AppDbConstants.QUESTION_COLLECTION,
               ref => {
                    return ref.limit(amount);
               }
          );
          return collection.valueChanges();
     }

     public addQuestion(question: Question): Promise<DocumentReference> {
          const collection: AngularFirestoreCollection = this.afs.collection(AppDbConstants.QUESTION_COLLECTION);
          return collection.add(question);
     }
}
