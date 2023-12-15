import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-merge',
  templateUrl: './array-merge.component.html',
  styleUrls: ['./array-merge.component.scss']
})
export class ArrayMergeComponent implements OnInit {

  array1 : any = [10,20,30,40,50];
  array2 : any = [60,70,80,90,100];
  array3 : any = [];

  constructor() { }

  ngOnInit(): void {
    for(let i = 0; i < this.array1.length; i++){
      this.array3[i] = this.array1[i];
    }

    for(let i = 0; i < this.array2.length; i++){
      this.array3[this.array1.length + i] = this.array2[i];
    }
    console.log("Array 3 :- ", this.array3);
  }

}
