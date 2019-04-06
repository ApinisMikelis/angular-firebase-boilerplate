import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Result } from '../../models/result.model';

@Component({
     selector: 'app-results-page',
     templateUrl: 'results.page.component.html',
})
export class ResultsPageComponent implements OnInit {
     score: number;
     result: Result;

     constructor(private router: Router, private route: ActivatedRoute) {
          this.result = {
               score: undefined,
               question_count: undefined,
               correct: undefined,
               wrong: undefined,
               timestamp: undefined,
          };
     }

     ngOnInit(): void {
          this.route.queryParams.subscribe(params => {
               this.score = params.score;
               this.result.score = params.score;
               this.result.question_count = params.question_count;
               this.result.correct = params.correct;
               this.result.wrong = params.wrong;
               this.result.timestamp = params.timestamp;
          });
     }

     public restart(): void {
          this.router.navigate(['/quiz']);
     }

     public submit(): void {
          this.router.navigate(['results/submit'], { queryParams: this.result });
     }
}
