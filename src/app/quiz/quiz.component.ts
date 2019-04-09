import { Component, OnInit } from '@angular/core';
import { QuestionService } from './services/question-service.service';
import { take } from 'rxjs/operators';
import { Question } from './models/question.model';
import { QuestionAnswer } from './models/question-answer.model';
import { Router } from '@angular/router';
import { answer, animeLength } from '../animations/quiz-animations';

@Component({
     selector: 'app-quiz',
     templateUrl: './quiz.component.html',
     styleUrls: ['./quiz.component.scss'],
     animations: [answer],
})
export class QuizComponent implements OnInit {
     ready: boolean = false;
     questions: Question[];
     answers: QuestionAnswer[];
     active: number = 0;

     questionCount: number = 10;

     correct: number = 0;
     wrong: number = 0;

     score: number = 0;
     points: number = 10;
     fine: number = 1;

     answerState = 'unanswered';

     constructor(private router: Router, private questionService: QuestionService) {}

     // get animationState() {
     //      return this.runAnimation ? 'correct' : 'unanswered';
     // }

     get question(): Question {
          return this.questions[this.active];
     }

     get progress(): number {
          return (this.active / this.questionCount) * 100;
     }

     ngOnInit(): void {
          this.questionService
               .getQuestions(this.questionCount)
               .pipe(take(1))
               .subscribe((questions: Question[]) => {
                    this.questions = questions;
               });
     }

     submit(answer: string): void {
          this.registerAnswer(answer);
     }

     private playAnimation(): void {
          this.answerState = 'correct';

          setTimeout(() => {
               // this.next();
               // this.answerState = 'unanswered';
          }, animeLength);
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

     private registerAnswer(answer: string): void {
          this.questions[this.active].user_answer = answer;
          this.questions[this.active].answer === answer ? this.registerCorrectAnswer() : this.registerWrongAnswer();
     }

     next(): void {
          this.questions[this.active + 1] ? this.active++ : this.gameOver();
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
