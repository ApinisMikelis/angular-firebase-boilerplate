import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, DocumentReference, AngularFirestoreCollection, DocumentData } from 'angularfire2/firestore';
import { Result } from '../models/result.model';
import { Observable } from 'rxjs';
import { ConfigService } from 'src/app/core/services/config.service';

@Injectable({
     providedIn: 'root',
})
export class ResultsService {
     private currentGame: string;

     constructor(private afs: AngularFirestore, private cs: ConfigService) {}

     public getResults(amount: number, gameRef: string): Observable<Result[]> {
          const collection: AngularFirestoreCollection<Result> = this.afs.collection('scoreboard', ref => {
               return ref
                    .where('gameRef', '==', gameRef)
                    .orderBy('score', 'desc')
                    .limit(amount);
          });
          return collection.valueChanges();
     }

     public submitScore(result: Result): Promise<DocumentReference> {
          const gamesCollection: AngularFirestoreCollection = this.afs.collection('games');
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
                         console.log('No such document!');
                    }
               })
               .catch(error => {
                    console.log('Error getting document:', error);
               });

          const collection: AngularFirestoreCollection = this.afs.collection('scoreboard');
          return collection.add(result);
     }
}
