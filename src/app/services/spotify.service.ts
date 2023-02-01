import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {}


  /**
   * ruta par obtener el token en postman
   * 
   * https://accounts.spotify.com/api/token
   * 
   * poner los datos en el siguiente orden en el body(x-www-form-urlencoded) de postam
   * 
   * grant_type = client_credentials
   * client_id = d6b55734aa3f4b49af89ae8023b6c69e
   * client_secret = 4659ca881ead4eed81c45197f071db34
   * 
   */

  public getQuery(query: string) {
    const url = `https://api.spotify.com/v1${query}`;

    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQC3vQfzKS192MM5qYgk_qU_pidp-iTK13V4s2qHR23WH0N0IoYaujrYKtr4T4PCE5T5avFg_WDRrCn1R-BNX64Zsfq9OKg8HB6k42Lb3529J6oeg38c',
    });

    return this.http.get(url, { headers });
  }

  public getNewReleases() {
    return this.getQuery('/browse/new-releases').pipe(
      map((data: any) => data['albums'].items)
    );
  }
 public getArtist(termino: string) {
    return this.getQuery(
      `/search?query=${termino}&type=artist&locale=es-419%2Ces%3Bq%3D0.9&offset=0&limit=20`
    ).pipe(map((data: any) => data['artists'].items));
  }

  public getDetailArtist(id:string | null){
    return this.getQuery(`/artists/${id}`)
  }

  public getTopTracks(id:string | null){
    return this.getQuery(`/artists/${id}/top-tracks?market=us`).pipe(map((data:any) => data['tracks']))
  }
}
