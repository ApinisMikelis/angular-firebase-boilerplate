import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question-service.service';
import { take, map } from 'rxjs/operators';
import { Question } from '../../models/question.model';
import { QuestionAnswer } from '../../models/question-answer.model';
import { Router } from '@angular/router';

import { UtilityService } from '../../../core/services/utility.service';
import { sampleSize, forEach } from 'lodash';
import { OptionAnswerModel } from '../option/option.component';
import { fader } from 'src/app/animations/route-animations';

@Component({
     selector: 'app-quiz',
     templateUrl: './quiz.component.html',
     styleUrls: ['./quiz.component.scss'],

     animations: [fader],
})
export class QuizComponent implements OnInit {
     animeLength = 4000;
     ready = false;
     questions: Question[];
     answers: QuestionAnswer[];
     active = 0;

     questionCount = 10;

     correct = 0;
     wrong = 0;

     score = 0;
     points = 10;
     fine = 1;

     optionIds: string[] = ['a', 'b', 'c', 'd'];

     freezeGame = false;
     goal = '';
     goalCorrect: boolean;

     answerState = 'unanswered';

     constructor(
          private router: Router,
          private utilityService: UtilityService,
          private questionService: QuestionService
     ) {}

     get quizReady(): boolean {
          return this.questions ? true : false;
     }

     get question(): Question {
          return this.questions[this.active];
     }

     get progress(): number {
          return (this.active / this.questionCount) * 100;
     }

     get questionProgress(): string {
          return this.active + 1 + ' / ' + this.questionCount;
     }

     ngOnInit(): void {
          this.questionService
               .getQuestions()
               .pipe(
                    take(1),
                    map((x: Question[]) => this.utilityService.shuffle(x)),
                    map((x: Question[]) =>
                         forEach(x, question => {
                              this.utilityService.shuffle(question.options);
                         })
                    ),
                    map((x: Question[]) => sampleSize(x, this.questionCount))
               )
               .subscribe((questions: Question[]) => {
                    this.questions = questions;
               });
     }

     public submit(answer: OptionAnswerModel): void {
          this.freezeGame = true;
          this.goal = answer.letter;
          this.goalCorrect = answer.correct;
          answer.correct === true ? this.registerCorrectAnswer() : this.registerWrongAnswer();
     }

     private playAnimation(): void {
          this.answerState = 'correct';

          setTimeout(() => {
               this.next();
          }, this.animeLength);
     }

     private registerCorrectAnswer(): void {
          this.score = this.score + this.points;
          this.correct++;
          this.playAnimation();
     }

     private registerWrongAnswer(): void {
          this.wrong++;
          this.answerState = 'wrong';
          this.playAnimation();
     }

     next(): void {
          this.questions[this.active + 1] ? this.active++ : this.gameOver();
          this.freezeGame = false;
     }

     gameOver(): void {
          this.router.navigate(['/results'], {
               queryParams: {
                    score: this.score,
                    question_count: this.questionCount,
                    correct: this.correct,
                    wrong: this.wrong,
                    timestamp: +new Date(),
               },
          });
     }
}
