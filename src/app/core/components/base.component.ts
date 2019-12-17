import { Observable, Subject, merge } from 'rxjs';
import { OnDestroy, Component } from '@angular/core';
import { takeUntil } from 'rxjs/operators';

@Component({
     selector: 'app-base-component',
     template: '',
})
export class BaseComponent implements OnDestroy {
     private componentDestroyed$: Subject<void> = new Subject();

     protected managedObservable<T>(input: Observable<T>): Observable<T> {
          return input.pipe(takeUntil(this.componentDestroyed$));
     }

     protected managedObservableWithCustomLifetime<T>(
          input: Observable<T>,
          additionalObservable$: Observable<void>
     ): Observable<T> {
          return input.pipe(takeUntil(merge(this.componentDestroyed$, additionalObservable$)));
     }

     ngOnDestroy(): void {
          this.componentDestroyed$.next();
          this.componentDestroyed$.complete();
     }
}
