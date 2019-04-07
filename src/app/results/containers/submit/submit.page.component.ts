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
          this.route.queryParams.subscribe(params => {
               this.result = {
                    score: parseInt(params.score),
                    question_count: parseInt(params.question_count),
                    correct: parseInt(params.correct),
                    wrong: parseInt(params.wrong),
                    timestamp: params.timestamp,
               };
          });
     }

     public submit(): void {
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
