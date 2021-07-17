import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface PokeListResponse{
  created: string;
  modified: string;
  name: string;
  pokemon;
  resource_uri: string;
}

@Injectable({
  providedIn: 'root',
})

export class PokeapiService {

  private url = 'https://dev.treinaweb.com.br/pokeapi';
  pokemonList = [];

  constructor(
    private http: HttpClient
  ) { }

  // tslint:disable-next-line: typedef
  listAll(){
    this.http.get<PokeListResponse>(`${this.url}/pokedex/1`)
    .subscribe(
      response => {
        response.pokemon.forEach(pokemon => {
          pokemon.number = this.getNumberFromUrl(pokemon.resource_uri);
        });
        this.pokemonList = this.sortPokemon(response.pokemon)
        .filter(pokemon => pokemon.number < 1000);
      }
    );
  }

  // tslint:disable-next-line: typedef
  private getNumberFromUrl(url){
    return parseInt(url.replace(/.*\/(\d+)\/$/, '$1'), 10);
  }

  // tslint:disable-next-line: typedef
  private sortPokemon(pokemonList: any){
    return pokemonList.sort((a, b) => {
      return (a.number > b.number ? 1 : -1);
    });
  }

}
