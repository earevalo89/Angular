import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  // Forma automática de importar servicios.
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient ) {
    console.log('Spotify service listo');
  }

  getQuery( query: string) {
    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD0jSsHJWs8fnDOuwed0i_zvd-G777F1cgeO3Afler6JgS2RsFVVpbWjCEFHr0uLl3UrQtSlIvM8F3JP18'
    });

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
               .pipe( map( data => {
                  return data['albums'].items;
                }));
  }
/*
  getArtista(termino: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQA3kNKNHI6Vc-X6Zq_2rl4Kkwz5pdFBcLkNFjMIlGHbqBr938EBikIC8gUdzAyKmu4uiV-vjBUdwhnWckg'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15&offset=5`, { headers });
  }
*/

  getArtistas(termino: string) {

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15&offset=5`)
                .pipe( map( data => {
                  return data['artists'].items;
                }));
  }

  getArtista(id: string) {

    return this.getQuery(`artists/${ id }`);

  }

  getTopTracks(id: string) {

    return this.getQuery(`artists/${ id }/top-tracks?country=us`)
                .pipe( map( data => data['tracks']));

  }

}
