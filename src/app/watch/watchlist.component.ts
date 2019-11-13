import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { RouterModule } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import  {FavoritesService} from '../favorites.service';

@Component({
  selector: 'watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchListComponent implements OnInit {
  
  favorites: any[];


  constructor() { }

  ngOnInit() {
    // this.favorites = this.favoritesService.getFavorites();

}
}