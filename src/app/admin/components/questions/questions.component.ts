import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { QuestionService } from 'src/app/quiz/services/question-service.service';

@Component({
     selector: '<app-questions>',
     templateUrl: './questions.component.html',
})
export class QuestionsComponent {
     questionsForm: FormGroup;

     // TODO FIX FORM

     constructor(private fb: FormBuilder, private qs: QuestionService) {
          this.questionsForm = this.fb.group({
               question: new FormControl('', Validators.required),
               options: new FormArray([]),
          });
     }

     submit(): void {
          // this.qs
          //      .addQuestion({
          //           question: this.questionsForm.get('question').value,
          //           options: this.questionsForm.get('options').value,
          //      })
          //      .then(x => {
          //           console.log('Question added!');
          //           this.questionsForm.reset();
          //      })
          //      .catch(err => {
          //           console.log(err);
          //      });
     }
}
