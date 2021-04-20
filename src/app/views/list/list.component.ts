import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  isVisible = true;
  
  student = {
    data : {
      name : "Ash"
    }
  }

  value = 5;

  constructor() { }

  ngOnInit(): void {
  }

}
