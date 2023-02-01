import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { SpotifyService } from "src/app/services/spotify.service";

@Component({
  selector: "app-detail-artist",
  templateUrl: "./detail-artist.component.html",
  styleUrls: ["./detail-artist.component.css"],
})
export class DetailArtistComponent implements OnInit {
  public id!: string | null;
  public artist: any = [];
  public topTracks: any[]= [];
  public loading: boolean = false;

  constructor(
    private router: ActivatedRoute,
    private spotifyService: SpotifyService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.id = this.router.snapshot.paramMap.get("id");
    this.getDetailArtist();
    this.getTopTracks();
  }

  public getDetailArtist() {
    this.loading = true;
    this.spotifyService.getDetailArtist(this.id).subscribe((res: any) => {
      this.artist = res;
      this.loading = false;
    });
  }

  public getTopTracks() {
    this.spotifyService.getTopTracks(this.id).subscribe((res) => {
      this.topTracks = res;
    });
  }
}
