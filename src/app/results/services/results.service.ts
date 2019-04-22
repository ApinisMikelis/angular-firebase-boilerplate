import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference, AngularFirestoreCollection, DocumentData } from 'angularfire2/firestore';
import { Result } from '../models/result.model';
import { Observable } from 'rxjs';
import { AppDbConstants } from 'src/app/core/constants/app-db.constants';
import { AppMessagesConstants } from 'src/app/core/constants/app-messages.constants';

@Injectable({
     providedIn: 'root',
})
export class ResultsService {
     constructor(private afs: AngularFirestore) {}

     public getResults(amount: number, gameRef: string): Observable<Result[]> {
          const collection: AngularFirestoreCollection<Result> = this.afs.collection(
               AppDbConstants.SCORE_COLLECTION,
               ref => {
                    return ref
                         .where('gameRef', '==', gameRef)
                         .orderBy('score', 'desc')
                         .limit(amount);
               }
          );
          return collection.valueChanges();
     }

     public submitScore(result: Result): Promise<DocumentReference> {
          const gamesCollection: AngularFirestoreCollection = this.afs.collection(AppDbConstants.GAME_COLLECTION);
          let newGameData: DocumentData = {};

          const gameRef: DocumentReference = gamesCollection.doc(result.gameRef).ref;

          gameRef
               .get()
               .then(doc => {
                    if (doc.exists) {
                         const data = doc.data();

                         newGameData = {
                              endDate: data.endDate,
                              startDate: data.startDate,
                              responseCount: data.responseCount + 1,
                              title: data.title,
                              state: data.state,
                         };
                         gamesCollection.doc(result.gameRef).ref.set(newGameData);
                    } else {
                         console.log(AppMessagesConstants.NO_SUCH_DOCUMENT);
                    }
               })
               .catch(error => {
                    console.log(AppMessagesConstants.ERROR_GETTING_DOCUMENT, error);
               });

          const collection: AngularFirestoreCollection = this.afs.collection(AppDbConstants.SCORE_COLLECTION);
          return collection.add(result);
     }
}
