import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from 'angularfire2/firestore';
import { GameModel } from '../models/game.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppDbConstants } from '../constants/app-db.constants';
import { AppMessagesConstants } from '../constants/app-messages.constants';
import { ConfigurationModel } from '../models/configuration-model';


@Injectable({
     providedIn: 'root',
})
export class ConfigService {
     constructor(private afs: AngularFirestore) {}

     public getLifeTimeSettings(): Promise<string> {
          const collection: AngularFirestoreCollection<ConfigurationModel> = this.afs.collection(
               AppDbConstants.CONFIGURATION_COLLECTION
          );
          const lifetimeConfig: DocumentReference = collection.doc(AppDbConstants.LIFETIME_CONFIG).ref;

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
                    console.log(AppMessagesConstants.ERROR_GETTING_DOCUMENT, error);
               });
     }

     public getGameList(): Observable<GameModel[]> {
          const collection: AngularFirestoreCollection<GameModel> = this.afs.collection(
               AppDbConstants.GAME_COLLECTION,
               ref => {
                    return ref.orderBy('startDate', 'desc');
               }
          );

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
          const gamesCollection: AngularFirestoreCollection<ConfigurationModel> = this.afs.collection(
               AppDbConstants.GAME_COLLECTION
          );
          const gameRef: DocumentReference = gamesCollection.doc(gameId).ref;

          gameRef
               .get()
               .then(game => {
                    if (game.exists) {
                         gameRef.update({
                              state: 'active',
                         });
                    } else {
                         console.log(AppMessagesConstants.NO_SUCH_DOCUMENT);
                    }
               })
               .catch(error => {
                    console.log(AppMessagesConstants.ERROR_GETTING_DOCUMENT, error);
               });

          const collection: AngularFirestoreCollection<ConfigurationModel> = this.afs.collection(
               AppDbConstants.CONFIGURATION_COLLECTION
          );
          const configRef: DocumentReference = collection.doc(AppDbConstants.LIFETIME_CONFIG).ref;

          configRef
               .get()
               .then(doc => {
                    if (doc.exists) {
                         configRef.set({ currentGame: gameRef });
                    } else {
                         console.log(AppMessagesConstants.NO_SUCH_DOCUMENT);
                    }
               })
               .catch(error => {
                    console.log(AppMessagesConstants.ERROR_GETTING_DOCUMENT, error);
               });
     }

     public stopGame(gameId: string): void {
          const gamesCollection: AngularFirestoreCollection<ConfigurationModel> = this.afs.collection(
               AppDbConstants.GAME_COLLECTION
          );
          const gameRef: DocumentReference = gamesCollection.doc(gameId).ref;

          gameRef
               .get()
               .then(game => {
                    if (game.exists) {
                         gameRef.update({
                              state: 'unactive',
                         });
                    } else {
                         console.log(AppMessagesConstants.NO_SUCH_DOCUMENT);
                    }
               })
               .catch(error => {
                    console.log(AppMessagesConstants.ERROR_GETTING_DOCUMENT, error);
               });
     }
}
