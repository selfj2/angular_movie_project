import { Injectable } from '@angular/core';

@Injectable()
export class FavoritesService {
  private favorites: any[] = []; //favorite movies

  constructor() { }

  addFavorites(movie: any) {
    this.favorites.push(movie);
    return this.favorites;
  }

  removeFavorite(movie: any): any[] {
    let index = this.favorites.findIndex(favorite =>
      favorite.label.toLowerCase() === movie.label.toLowerCase());
    this.favorites.splice(index, 1);
    return this.favorites;
  }

  //get the array of favorites
  getFavorites(): any[] {
    return this.favorites;
  }

  //return whether or not the favorites array has the given movie
  contains(movie: any): boolean {
    return this.favorites.includes(movie);
  }

}
