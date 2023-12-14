import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-traversing',
  templateUrl: './array-traversing.component.html',
  styleUrls: ['./array-traversing.component.scss']
})
export class ArrayTraversingComponent implements OnInit {

  firstArray : any = [2,4,7,5,1,3,9,6,8];
  result : any = [];
  inputValue : any;

  constructor() { }

  ngOnInit(): void {

    this.firstArray.filter((e:any)=>{
      return this.result.push(e);
    })
  }

  getElement(){
    this.firstArray.map((x:any)=>{
      if(parseInt(this.inputValue) % 2 == 0){
        alert("Valid Number")
      }else{
        alert("In-Valid Number")
      }
    })
  }

}
