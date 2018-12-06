import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { strictEqual } from 'assert';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  artista: any = { };
  loadingArtist: boolean;
  topTracks: any[] = [];

  constructor( private router: ActivatedRoute,
               private spotify: SpotifyService) {

    this.router.params.subscribe( params => {
      this.loadingArtist = true;
      // console.log(params['id']);
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });

  }

  getArtista( id: string ) {
      this.spotify.getArtista( id )
            .subscribe( artista => {
              // console.log(artista);
              this.artista = artista;

              this.loadingArtist = false;
            });
  }

  getTopTracks( id: string) {
    this.spotify.getTopTracks( id )
          .subscribe( topTracks => {
            this.topTracks = topTracks;
            // console.log(this.topTracks);
            // console.log(this.topTracks[0].album.name);
          });
  }

}
