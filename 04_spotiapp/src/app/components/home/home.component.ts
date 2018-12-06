import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  novedadesCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  errorMsg: string;
  errorTittle: string;

  constructor( private spotify: SpotifyService ) {

    this.error = false;
    this.loading = true;
    this.errorMsg = '';
    this.errorTittle = '';

    this.spotify.getNewReleases()
        .subscribe( (data: any) => {
          this.novedadesCanciones = data;
          this.loading = false;
        }, (errorServicio) => {
          this.loading = false;
          this.error = true;
          this.errorMsg = errorServicio.error.error.message;
          this.errorTittle = errorServicio.error.error.status;
        });
  }

  ngOnInit() {
  }

}
