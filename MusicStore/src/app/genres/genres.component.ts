import {Component, OnInit} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
import {Router, ROUTER_DIRECTIVES } from '@angular/router';
import {GenreService} from '../services/genre/genre.service';
import {GenreDetailComponent} from './genre-detail/genre-detail.component';
import {Genre} from '../models';
import * as md from './../angular-material/index'

@Component({
  moduleId: module.id,
  selector: 'ms-genres',
  templateUrl: 'genres.component.html',
  styleUrls: ['genres.component.css'],
  directives: [
    CORE_DIRECTIVES,
    FORM_DIRECTIVES,
    GenreDetailComponent,
    ROUTER_DIRECTIVES,
    md.MD_LIST_DIRECTIVES,
    md.MdList,
    md.MdListItem
 ]
})
export class GenresComponent implements OnInit {
  public genres: Genre[];

  constructor(private _genreService: GenreService, private _router: Router) {
  }

  ngOnInit() {
    this.getGenres();
  }

  getGenres() {
    this.genres = [];
    this._genreService.getGenres()
      .subscribe(genres => this.genres = genres);
  }

  goToGenre(genre: Genre) {
    this._router.navigate([`/genres/${genre.name}`]);
  }


}

