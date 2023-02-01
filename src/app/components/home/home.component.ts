import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "src/app/services/spotify.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  public newsCanciones: any[] = [];
  public loading: boolean = false;
  public error: boolean = false;
  public mensajeError: boolean = false;


  constructor(private _spotifyService: SpotifyService) {
    this.getNewsCanciones();
  }

  ngOnInit(): void {}

  getNewsCanciones() {
    this.loading = true;
    this._spotifyService.getNewReleases().subscribe(
      (data: any) => {
        this.newsCanciones = data;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        this.error = true;
        this.mensajeError = error.error.error.message;
      }
    );
  }
}
