import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

// TODO: MAKE AN INTERFACE FOR ANIMATION OBJECT TO COMBINE ANIME LENGTH AND STEPS

export const animeLength: number = 2000;
export const answer = [
     trigger('answerState', [
          state(
               'unanswered',
               style({
                    'border-color': '#ffffff',
               })
          ),
          state(
               'correct',
               style({
                    'border-color': '#ffffff',
               })
          ),
          state(
               'wrong',
               style({
                    'border-color': '#ffffff',
               })
          ),
          transition(
               'unanswered => correct',
               animate(
                    '2000ms',
                    keyframes([
                         style({ 'border-color': '#ffffff', offset: 0 }),
                         style({ 'border-color': '#00973e', transform: 'scale(1.05)', offset: 0.2 }),
                         style({ 'border-color': '#ffffff', offset: 0.4 }),
                         style({ 'border-color': '#00973e', offset: 0.6 }),
                         style({ 'border-color': '#ffffff', offset: 0.8 }),
                         style({ 'border-color': '#ffffff', transform: 'scale(1)', offset: 1 }),
                    ])
               )
          ),
          transition(
               'unanswered => wrong',
               animate(
                    `${animeLength}ms`,
                    keyframes([
                         style({ 'border-color': '#ffffff', offset: 0 }),
                         style({ 'border-color': '#DC143C', transform: 'scale(1.05)', offset: 0.2 }),
                         style({ 'border-color': '#ffffff', offset: 0.4 }),
                         style({ 'border-color': '#DC143C', offset: 0.6 }),
                         style({ 'border-color': '#ffffff', offset: 0.8 }),
                         style({ 'border-color': '#ffffff', transform: 'scale(1)', offset: 1 }),
                    ])
               )
          ),
          transition('* => unanswered', animate('300ms')),
     ]),
];
