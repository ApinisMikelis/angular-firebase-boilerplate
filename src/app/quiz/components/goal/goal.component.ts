import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
     selector: 'app-goal',
     templateUrl: './goal.component.html',
     styleUrls: ['./goal.component.scss'],
})
export class GoalComponent implements OnInit, OnChanges {
     @Input() hitGoal: string;
     @Input() optionLetter: string;
     @Input() optionCorrect: boolean;

     currentLetter: string;
     currentCorrect: boolean;

     ngOnInit(): void {}

     ngOnChanges(): void {
          if (this.hitGoal) {
               this.currentLetter = this.optionLetter;
          } else {
               this.currentLetter = '';
          }

          if (this.hitGoal) {
               this.currentCorrect = this.optionCorrect;
          } else {
               this.currentCorrect = undefined;
          }
     }
}
