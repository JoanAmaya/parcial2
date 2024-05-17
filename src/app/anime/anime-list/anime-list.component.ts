import { Component, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {
  animes!: Array<Anime>;
  anime!: Anime;
  selected: boolean= false;
  promedio: number=0;
  episodes: number=0;

  constructor(private service: AnimeService) { }

  ngOnInit() {
    this.getAnimes()
  }
  getAnimes(){
     this.service.getAnimes().subscribe(animes => {this.animes=animes; this.getPromedio()});
  }
  onSelected(anime: Anime){
    this.anime=anime;
    this.selected=true;
  }
  getPromedio(){
    let total: number=0;
    for( let anime of this.animes){
      this.promedio+=parseFloat(anime.Rating)
      total+=1
      this.episodes+=anime.episode
    }
    if (total==0){
      this.promedio=0
    }
    else{
      this.promedio=this.promedio/total
    }

  }

}
