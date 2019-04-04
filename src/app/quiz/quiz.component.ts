import { Component, OnInit } from '@angular/core';
import { QuestionService } from './services/question-service.service';
import { Observable } from 'rxjs';
import { forEach } from 'lodash';
import { take } from 'rxjs/operators';
import { Question } from './models/question.model';
import { QuestionAnswer } from './models/question-answer.model';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';

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
     newContent: Question;

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
          console.log(this.questions[this.active].answer === answer);
          this.next();
     }

     next(): void {
          this.questions[this.active + 1] ? this.active++ : this.gameOver();
     }

     gameOver(): void {
          console.log('game over');
     }
}
