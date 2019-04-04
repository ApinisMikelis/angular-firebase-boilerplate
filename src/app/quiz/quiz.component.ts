import { Component, OnInit } from '@angular/core';
import { QuestionService } from './services/question-service.service';
import { take } from 'rxjs/operators';
import { Question } from './models/question.model';
import { QuestionAnswer } from './models/question-answer.model';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
     selector: 'app-quiz',
     templateUrl: './quiz.component.html',
     styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
     quizForm: FormGroup;
     questionsArray: FormArray;

     ready: boolean = false;

     questions: Question[];
     answers: QuestionAnswer[];
     active: number = 0;

     questionCount: number = 10;
     score: number = 0;
     points: number = 10;
     fine: number = 5;

     constructor(private fb: FormBuilder, private questionService: QuestionService) {}

     get question(): Question {
          return this.questions[this.active];
     }

     ngOnInit(): void {
          this.questionsArray = new FormArray([]);
          this.quizForm = this.fb.group({
               questions: this.questionsArray,
          });

          this.questionService
               .getQuestions(this.questionCount)
               .pipe(take(1))
               .subscribe((questions: Question[]) => {
                    this.questions = questions;
               });
     }

     submit(answer: string): void {
          this.questions[this.active].user_answer = answer;
          this.score =
               this.questions[this.active].answer === answer ? this.score + this.points : this.score - this.fine;
          this.next();
     }

     next(): void {
          this.questions[this.active + 1] ? this.active++ : this.gameOver();
     }

     gameOver(): void {
          console.log('game over');
     }
}
