import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from 'angularfire2/firestore';
import { Observable, from } from 'rxjs';
import { Wish } from '../models/wish.model';
import { AppDbConstants } from '../constants/app-db.constants';

@Injectable({
     providedIn: 'root',
})
export class WishService {
     constructor(private afs: AngularFirestore) {}

     public getWishes(amount: number = 100): Observable<Wish[]> {
          const collection: AngularFirestoreCollection<Wish> = this.afs.collection(
               AppDbConstants.WISH_COLLECTION,
               ref => ref.limit(amount)
          );
          return collection.valueChanges();
     }

     public addWish(wish: Wish): Observable<DocumentReference> {
          const collection: AngularFirestoreCollection = this.afs.collection(AppDbConstants.WISH_COLLECTION);
          return from(collection.add(wish));
     }
}
