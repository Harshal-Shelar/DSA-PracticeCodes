import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-searching',
  templateUrl: './array-searching.component.html',
  styleUrls: ['./array-searching.component.scss']
})
export class ArraySearchingComponent implements OnInit {

  data : any = [12,78,34,67,23,56,89,45];
  search : any;
  index : any;
  result :any;
  inputVal : any;

  constructor() { }

  ngOnInit(): void {
  }

  searchElement(){
    for(let i = 0; i <= this.data.length  ; i++){
      if(this.data[i] == this.search){
        this.index = i;
        break;
      }
    }
    this.inputVal = '';
    this.result = this.index;
  }

}
