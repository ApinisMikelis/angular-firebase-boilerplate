import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../../services/results.service';
import { Result } from '../../models/result.model';
import { Observable } from 'rxjs';

@Component({
     selector: 'app-score-board',
     templateUrl: 'score-board.component.html',
     styleUrls: ['./score-board.component.scss'],
})
export class ScoreBoardComponent implements OnInit {
     results$: Observable<Result[]>;
     resultList: Result[];
     displayedColumns: string[] = ['score', 'progress'];

     constructor(private rs: ResultsService) {
          this.results$ = this.rs.getResults(10);
          this.results$.subscribe((results: Result[]) => {
               this.resultList = results;
          });
     }

     ngOnInit(): void {}
}
