import { Component, Input, OnInit } from '@angular/core';

@Component({
     selector: 'app-goal',
     templateUrl: './goal.component.html',
     styleUrls: ['./goal.component.scss'],
})
export class GoalComponent implements OnInit {
     @Input() hitGoal: string;
     @Input() optionLetter: string;

     ngOnInit(): void {
          console.log(this.optionLetter);
     }
}
