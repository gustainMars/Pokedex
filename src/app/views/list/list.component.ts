import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  nameFilter = '';
  selectedPkm: any;

  // tslint:disable-next-line: typedef
  get pokemonList(){
    return this.pokeapi.pokemonList.filter(pokemon => {
      return pokemon.name.toLowerCase().indexOf(this.nameFilter.toLowerCase()) !== -1;
    });
  }

  get pkmSprite(): string {
    const number1 = ('000' + this?.selectedPkm?.number).slice(-3);
    return `//serebii.net/sunmoon/pokemon/${number1}.png`;
  }
  constructor(
    private pokeapi: PokeapiService
    ) { }

  ngOnInit(): void {
  }
  selectPkm(pkm: any): void {
    this.selectedPkm = pkm;
  }

}
