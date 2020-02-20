import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';

import { Game } from '../../interfaces/interfaces';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  games: Game[] = [];

  constructor( private gameService: GameService ) { }

  ngOnInit(): void {
    this.gameService.getNominees()
      .subscribe( resp => {
        console.log( resp );
        this.games = resp;
      });
  }

  voteGame( game: Game ) {

    this.gameService.voteGame( game.id )
      .subscribe( (resp: {ok: boolean, message: string}) => {
        if ( resp.ok ) {
          Swal.fire('Thanks!', resp.message, 'success');
        } else {
          Swal.fire('Oops!', resp.message, 'error');
        }
      });
  }

}
