import { Component } from '@angular/core';
import { ConfigService } from 'src/app/core/services/config.service';
import { Observable } from 'rxjs';
import { GameModel } from 'src/app/core/models/game.model';

@Component({
     selector: 'app-game-list',
     templateUrl: './game-list.component.html',
})
export class GameListComponent {
     games$: Observable<GameModel[]>;

     constructor(private cs: ConfigService) {
          this.games$ = this.cs.getGameList();
     }

     public color(state: string): string {
          return state === 'active' ? 'primary' : 'undefined';
     }

     public setCurrentGame(gameId: string): void {
          this.cs.setCurrentGame(gameId);
     }

     public stopGame(gameId: string): void {
          this.cs.stopGame(gameId);
     }
}
