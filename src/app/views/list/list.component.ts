import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  pokemonList = [
    { name: "Bulbasaur", number: 1 },
    { name: "Ivysaur", number: 2 },
    { name: "Venusaur", number: 3 },
    { name: "Charmander", number: 4 },
    { name: "Charmeleon", number: 5 },
    { name: "Charizard", number: 6 },
    { name: "Squirtle", number: 7 },
    { name: "Wartortle", number: 8 },
    { name: "Blastoise", number: 9 }
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
