import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { QuestionService } from 'src/app/quiz/services/question-service.service';

@Component({
     selector: '<app-questions>',
     templateUrl: './questions.component.html',
})
export class QuestionsComponent {
     questionsForm: FormGroup;

     constructor(private fb: FormBuilder, private qs: QuestionService) {
          this.questionsForm = this.fb.group({
               question: new FormControl('', Validators.required),
               answer: new FormControl('', Validators.required),
               option_a: new FormControl('', Validators.required),
               option_b: new FormControl('', Validators.required),
               option_c: new FormControl('', Validators.required),
               option_d: new FormControl('', Validators.required),
          });
     }

     submit(): void {
          this.qs
               .addQuestion({
                    question: this.questionsForm.get('question').value,
                    answer: this.questionsForm.get('answer').value,
                    option_a: this.questionsForm.get('option_a').value,
                    option_b: this.questionsForm.get('option_b').value,
                    option_c: this.questionsForm.get('option_c').value,
                    option_d: this.questionsForm.get('option_d').value,
               })
               .then(x => {
                    console.log('Question added!');
                    this.questionsForm.reset();
               })
               .catch(err => {
                    console.log(err);
               });
     }
}
