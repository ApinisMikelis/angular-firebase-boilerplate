import { trigger, transition, style, query, animate } from '@angular/animations';

export const fader = trigger('routeAnimations', [
     transition('* <=> *', [
          query(
               ':enter, :leave',
               [
                    style({
                         position: 'absolute',
                         left: 0,
                         width: '100%',
                         opacity: 0,
                         transform: 'scale(0)',
                    }),
               ],
               { optional: true }
          ),
          query(':enter', [animate('600ms ease', style({ opacity: 1, transform: 'scale(1)' }))], {
               optional: true,
          }),
          query(':leave', [animate('600ms ease', style({ opacity: 0, transform: 'scale(0.1)' }))], {
               optional: true,
          }),
     ]),
]);
