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
    return this.pokeapi.pokemonList.filter((pokemon: any) => {
      return pokemon.name.toLowerCase().indexOf(this.nameFilter.toLowerCase()) !== -1;
    });
  }

  get pkmSprite(): string {
    const pokeNumber = ('000' + this?.selectedPkm?.number).slice(-3);
    return `//serebii.net/sunmoon/pokemon/${pokeNumber}.png`;
  }
  constructor(
    private pokeapi: PokeapiService
    ) { }

  ngOnInit(): void {
    this.pokeapi.listAll();
  }

  selectPkm(pkm): void {
    this.selectedPkm = pkm;
  }

}
