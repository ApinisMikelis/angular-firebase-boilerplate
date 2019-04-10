import { Component } from '@angular/core';
import { ResultsService } from '../../services/results.service';
import { Result } from '../../models/result.model';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
     selector: 'app-score-board',
     templateUrl: 'score-board.component.html',
     styleUrls: ['./score-board.component.scss'],
})
export class ScoreBoardComponent {
     results$: Observable<Result[]>;
     resultList: Result[];
     displayedColumns: string[] = ['position', 'score', 'player', 'progress'];

     constructor(private router: Router, private rs: ResultsService) {
          this.results$ = this.rs.getResults(10);
          this.results$.subscribe((results: Result[]) => {
               this.resultList = results;
          });
     }

     public goToSplash(): void {
          this.router.navigate(['']);
     }

     public newGame(): void {
          this.router.navigate(['/quiz']);
     }
}
