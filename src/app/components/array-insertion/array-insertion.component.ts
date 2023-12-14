import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-insertion',
  templateUrl: './array-insertion.component.html',
  styleUrls: ['./array-insertion.component.scss']
})
export class ArrayInsertionComponent implements OnInit {

  data :any = [23,67,34,12,89,78];
  newEl :any;
  position :any;
  globalArray :any;
  inputVal :any;

  constructor() { }

  ngOnInit(): void {
  }

  addElement(){
    for(let i = this.data.length - 1 ; i>=0; i--){
      if(i>=this.position){
        this.data[i+1]=this.data[i];
        if(i == this.position){
          this.data[i]=this.newEl;
        }
      }
    }
    this.inputVal = ''
    this.globalArray = this.data;
  }

}
