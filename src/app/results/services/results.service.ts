import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Result } from '../models/result.model';
import { Observable } from 'rxjs';

@Injectable({
     providedIn: 'root',
})
export class ResultsService {
     constructor(private afs: AngularFirestore) {}

     getResults(amount: number): Observable<Result[]> {
          const collection: AngularFirestoreCollection<Result> = this.afs.collection('scoreboard', ref => {
               return ref.orderBy('score', 'desc').limit(amount);
          });
          return collection.valueChanges();
     }

     submitScore(result: Result): Promise<DocumentReference> {
          const collection: AngularFirestoreCollection = this.afs.collection('scoreboard');
          return collection.add(result);
     }
}
