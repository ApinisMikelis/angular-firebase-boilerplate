import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../../services/results.service';
import { Result } from '../../models/result.model';
import { ActivatedRoute, Router } from '@angular/router';
import { EventEmitter } from 'protractor';

@Component({
     selector: 'app-submit-page',
     templateUrl: './submit.page.component.html',
})
export class SubmitPageComponent implements OnInit {
     result: Result;
     resultsReady: boolean = false;

     constructor(private rs: ResultsService, private route: ActivatedRoute, private router: Router) {}

     ngOnInit(): void {
          this.route.queryParams.subscribe((params: Result) => {
               this.result = {
                    score: params.score,
                    question_count: params.question_count,
                    correct: params.correct,
                    wrong: params.wrong,
                    timestamp: params.timestamp,
               };
          });
     }

     public submit(): void {
          debugger;
          this.rs
               .submitScore(this.result)
               .then(x => (this.resultsReady = true))
               .catch(err => {
                    console.log(err);
               });
     }

     public restart(): void {
          this.router.navigate(['']);
     }
}
