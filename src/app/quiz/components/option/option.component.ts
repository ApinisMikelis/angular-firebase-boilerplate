import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Option } from '../../models/option.model';

export interface OptionAnswerModel {
     correct: boolean;
     letter: string;
}

@Component({
     selector: 'app-option',
     templateUrl: './option.component.html',
     styleUrls: ['./option.component.scss'],
})
export class OptionComponent {
     @Input() option: Option;
     @Input() index: string;
     @Input() longText: boolean;
     @Output() answer = new EventEmitter<OptionAnswerModel>();
     answered: boolean = false;
     optionLetters: string[] = ['a', 'b', 'c'];

     submit(correct: boolean, letter: string): void {
          this.answer.emit({ correct: correct, letter: letter });
          this.answered = true;
     }
}
