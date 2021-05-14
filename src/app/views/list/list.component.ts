import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  pokemonList = [
    { name: "Bulbasaur", number: 1, type1: "grass", type2: "poison" },
    { name: "Ivysaur", number: 2, type1: "grass", type2: "poison" },
    { name: "Venusaur", number: 3, type1: "grass", type2: "poison" },
    { name: "Charmander", number: 4, type1: "fire", type2: "" },
    { name: "Charmeleon", number: 5, type1: "fire", type2: "" },
    { name: "Charizard", number: 6, type1: "fire", type2: "flying" },
    { name: "Squirtle", number: 7, type1: "water", type2: "" },
    { name: "Wartortle", number: 8, type1: "water", type2: "" },
    { name: "Blastoise", number: 9, type1: "water", type2: "" }
  ]
  
  isVisible = true;
  
  student = {
    data : {
      name : "Ash"
    }
  }

  myList = [1, 2, 3, 4, 5];
  value = 5;

  constructor() { }

  ngOnInit(): void {
  }

}
