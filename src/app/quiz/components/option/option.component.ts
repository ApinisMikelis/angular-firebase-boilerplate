import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Option } from '../../models/option.model';

@Component({
     selector: 'app-option',
     templateUrl: './option.component.html',
     styleUrls: ['./option.component.scss'],
})
export class OptionComponent {
     @Input() option: Option;
     @Output() answer = new EventEmitter<boolean>();
     answered: boolean = false;

     constructor() {}

     submit(correct: boolean): void {
          this.answer.emit(correct);
          this.answered = true;
     }
}
