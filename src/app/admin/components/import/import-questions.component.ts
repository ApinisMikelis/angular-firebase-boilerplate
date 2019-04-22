import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Papa } from 'ngx-papaparse';
import { FileInput } from 'ngx-material-file-input';
import { QuestionService } from 'src/app/quiz/services/question-service.service';
import { CSVParserResultModel } from '../../models/csv-parser-result.model';
import { SpreadsheetImportModel } from '../../models/spreadsheet-import.model';
import { forEach } from 'lodash';

@Component({
     selector: 'app-import-questions',
     templateUrl: 'import-questions.component.html',
})
export class ImportQuestionsComponent {
     importForm: FormGroup;
     importResults: SpreadsheetImportModel[] = [];

     constructor(private papa: Papa, private fb: FormBuilder, private questionService: QuestionService) {
          this.importForm = this.fb.group({
               file: new FormControl('', Validators.required),
          });
     }

     public import(): void {
          const csvData = this.importForm.get('file').value as FileInput;
          const options = {
               complete: (results: CSVParserResultModel) => (this.importResults = results.data),
               header: true,
          };

          this.papa.parse(csvData.files[0], options);
     }

     private saveImportedQuestions(): void {
          forEach(this.importResults, (result: SpreadsheetImportModel) => {
               this.questionService.addQuestion({
                    question: result.question,
                    options: [
                         {
                              text: result.a,
                              correct: result.correct.toLowerCase() === 'a',
                         },
                         {
                              text: result.b,
                              correct: result.correct.toLowerCase() === 'b',
                         },
                         {
                              text: result.c,
                              correct: result.correct.toLowerCase() === 'c',
                         },
                    ],
               });
          });
     }
}
