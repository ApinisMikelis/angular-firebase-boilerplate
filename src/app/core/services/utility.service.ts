import { Injectable } from '@angular/core';

@Injectable({
     providedIn: 'root',
})
export class UtilityService {
     public shuffle(list: any[]) {
          let currentIndex = list.length;

          while (0 !== currentIndex) {
               const randomIndex = Math.floor(Math.random() * currentIndex);
               currentIndex -= 1;

               const temporaryValue = list[currentIndex];
               list[currentIndex] = list[randomIndex];
               list[randomIndex] = temporaryValue;
          }

          return list;
     }
}
