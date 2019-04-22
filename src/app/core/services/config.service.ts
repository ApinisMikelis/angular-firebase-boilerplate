import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from 'angularfire2/firestore';
import { GameModel } from '../models/game.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { forEach } from 'lodash';

export interface ConfigurationModel {
     lifetime: LifetimeConfigModel;
}

export interface LifetimeConfigModel {
     currentGame: string;
}

@Injectable({
     providedIn: 'root',
})
export class ConfigService {
     constructor(private afs: AngularFirestore) {}

     public getLifeTimeSettings(): Promise<string> {
          const collection: AngularFirestoreCollection<ConfigurationModel> = this.afs.collection('configuration');
          const lifetimeConfig: DocumentReference = collection.doc('lifetime').ref;

          return lifetimeConfig
               .get()
               .then(doc => {
                    if (doc.exists) {
                         const data = doc.data();
                         return data.currentGame.id;
                    } else {
                         return '';
                    }
               })
               .catch(error => {
                    console.log('Error getting document:', error);
               });
     }

     public getGameList(): Observable<GameModel[]> {
          const collection: AngularFirestoreCollection<GameModel> = this.afs.collection('games', ref => {
               return ref.orderBy('startDate', 'desc');
          });

          return collection.snapshotChanges().pipe(
               map(games => {
                    return games.map(g => {
                         const docId = g.payload.doc.id;
                         const data = g.payload.doc.data();

                         return {
                              id: docId,
                              title: data.title,
                              state: data.state,
                              responseCount: data.responseCount,
                              startDate: data.startDate,
                              endDate: data.endDate,
                         };
                    });
               })
          );
     }

     public setCurrentGame(gameId: string): void {
          const gamesCollection: AngularFirestoreCollection<ConfigurationModel> = this.afs.collection('games');
          const gameRef: DocumentReference = gamesCollection.doc(gameId).ref;

          gameRef
               .get()
               .then(game => {
                    if (game.exists) {
                         gameRef.update({
                              state: 'active',
                         });
                    } else {
                         console.log('No such document!');
                    }
               })
               .catch(error => {
                    console.log('Error getting document:', error);
               });

          const collection: AngularFirestoreCollection<ConfigurationModel> = this.afs.collection('configuration');
          const configRef: DocumentReference = collection.doc('lifetime').ref;

          configRef
               .get()
               .then(doc => {
                    if (doc.exists) {
                         configRef.set({ currentGame: gameRef });
                    } else {
                         console.log('No such document!');
                    }
               })
               .catch(error => {
                    console.log('Error getting document:', error);
               });
     }

     public stopGame(gameId: string): void {
          const gamesCollection: AngularFirestoreCollection<ConfigurationModel> = this.afs.collection('games');
          const gameRef: DocumentReference = gamesCollection.doc(gameId).ref;

          gameRef
               .get()
               .then(game => {
                    if (game.exists) {
                         gameRef.update({
                              state: 'unactive',
                         });
                    } else {
                         console.log('No such document!');
                    }
               })
               .catch(error => {
                    console.log('Error getting document:', error);
               });
     }
}
