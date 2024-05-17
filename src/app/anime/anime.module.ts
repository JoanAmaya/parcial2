import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AnimeDetailComponent } from './anime-detail/anime-detail.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [AnimeListComponent, AnimeDetailComponent],
  exports: [AnimeListComponent]
})
export class AnimeModule { }
