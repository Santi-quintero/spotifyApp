import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public artistas: any[]=[]
  public loading: boolean = false;
  constructor(private _spotifyService: SpotifyService) { }

  ngOnInit(): void {
  }

  Search(termino:string){
    this.loading = true;
    this._spotifyService.getArtist(termino).subscribe(
      (data: any)=>{
        this.artistas=data;
      }
    )
    this.loading = false;
  }

}
