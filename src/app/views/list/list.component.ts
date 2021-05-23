import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  selectedPkm: any;
  pokemonList = [
    { name: 'Bulbasaur', number: 1, type1: 'grass', type2: 'poison' },
    { name: 'Ivysaur', number: 2, type1: 'grass', type2: 'poison' },
    { name: 'Venusaur', number: 3, type1: 'grass', type2: 'poison' },
    { name: 'Charmander', number: 4, type1: 'fire', type2: '' },
    { name: 'Charmeleon', number: 5, type1: 'fire', type2: '' },
    { name: 'Charizard', number: 6, type1: 'fire', type2: 'flying' },
    { name: 'Squirtle', number: 7, type1: 'water', type2: '' },
    { name: 'Wartortle', number: 8, type1: 'water', type2: '' },
    { name: 'Blastoise', number: 9, type1: 'water', type2: '' }
  ];

  get pkmSprite(): string {
    const number1 = ('000' + this?.selectedPkm?.number).slice(-3);
    return `//serebii.net/sunmoon/pokemon/${number1}.png`;
  }
  constructor() { }

  ngOnInit(): void {
  }
  selectPkm(pkm: any): void {
    this.selectedPkm = pkm;
  }

}
