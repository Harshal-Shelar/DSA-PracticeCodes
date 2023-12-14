import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  dsaList :any = [
    {name : 'Array Traversing', router : 'arrayTraversing'},
    {name : 'Array Insertion', router : 'insertion'},
    {name : 'Array Deletion', router : 'deletion'},
    {name : 'Array Searching', router : 'searching'},
  ]
  constructor() { }

  ngOnInit(): void {


  }

}
