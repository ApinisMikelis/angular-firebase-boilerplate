import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

type CollectionPredicate<T> = string | AngularFirestoreCollection<T>;
type DocPredicate<T> = string | AngularFirestoreDocument<T>;

@Injectable({
     providedIn: 'root',
})
export class FirestoreService {
     constructor(private afs: AngularFirestore) {}

     // GET REF
     col<T>(ref: CollectionPredicate<T>, queryFn?): AngularFirestoreCollection<T> {
          return typeof ref === 'string' ? this.afs.collection<T>(ref, queryFn) : ref;
     }

     doc<T>(ref: DocPredicate<T>): AngularFirestoreDocument<T> {
          return typeof ref === 'string' ? this.afs.doc<T>(ref) : ref;
     }

     // GET DATA
     doc$<T>(ref: DocPredicate<T>): Observable<T> {
          return this.doc(ref)
               .snapshotChanges()
               .pipe(map((doc) => doc.payload.data() as T));
     }

     col$<T>(ref: CollectionPredicate<T>, queryFn?): Observable<T[]> {
          return this.col(ref, queryFn)
               .snapshotChanges()
               .pipe(map((docs) => docs.map((a) => a.payload.doc.data()) as T[]));
     }

     colWithIds$<T>(ref: CollectionPredicate<T>, queryFn?): Observable<any[]> {
          return this.col(ref, queryFn)
               .snapshotChanges()
               .pipe(
                    map((actions) =>
                         actions.map((a) => {
                              const data = a.payload.doc.data();
                              const docId = a.payload.doc.id;
                              return { docId, ...data };
                         })
                    )
               );
     }

     // SET
     set<T>(ref: DocPredicate<T>, data: any) {
          return this.doc(ref).set(data);
     }
}
