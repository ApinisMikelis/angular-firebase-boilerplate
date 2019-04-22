import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Result } from '../../models/result.model';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ResultsService } from '../../services/results.service';
import { ConfigService } from 'src/app/core/services/config.service';

@Component({
     selector: 'app-results-page',
     templateUrl: 'results.page.component.html',
     styleUrls: ['./results.page.component.scss'],
})
export class ResultsPageComponent implements OnInit {
     score: number;
     result: Result;

     nameForm: FormGroup;

     constructor(
          private fb: FormBuilder,
          private rs: ResultsService,
          private cs: ConfigService,
          private router: Router,
          private route: ActivatedRoute
     ) {
          this.nameForm = this.fb.group({
               name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(23)]),
          });

          this.result = {
               gameRef: '',
               player: undefined,
               score: undefined,
               question_count: undefined,
               correct: undefined,
               wrong: undefined,
               timestamp: undefined,
          };

          this.cs.getLifeTimeSettings().then(ref => (this.result.gameRef = ref));
     }

     ngOnInit(): void {
          this.route.queryParams.subscribe(params => {
               this.score = params.score;
               this.result.player = '';
               this.result.score = parseInt(params.score);
               this.result.question_count = parseInt(params.question_count);
               this.result.correct = parseInt(params.correct);
               this.result.wrong = parseInt(params.wrong);
               this.result.timestamp = params.timestamp;
          });
     }

     public restart(): void {
          this.router.navigate(['/quiz']);
     }

     public submit(): void {
          this.result.player = this.nameForm.get('name').value;

          this.rs
               .submitScore(this.result)
               .then(x => {
                    this.router.navigate(['/results/scoreboard']);
               })
               .catch(err => {
                    console.log(err);
               });
     }
}
