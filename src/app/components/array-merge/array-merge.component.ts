import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-merge',
  templateUrl: './array-merge.component.html',
  styleUrls: ['./array-merge.component.scss']
})
export class ArrayMergeComponent implements OnInit {

  array1: any = [10, 20, 30, 40, 50];
  array2: any = [60, 70, 80, 90, 100];
  array3: any = [];

  data1: any = [1, 2, 3, 4, 5, 6];
  data2: any = [7, 8, 9, 10, 11, 12];
  data3: any = [];
  d1 = 0;
  d2 = 0;
  d3 = 0;

  constructor() { }

  ngOnInit(): void {
    //For Loop
    for (let i = 0; i < this.array1.length; i++) {
      this.array3[i] = this.array1[i];
    }

    for (let i = 0; i < this.array2.length; i++) {
      this.array3[this.array1.length + i] = this.array2[i];
    }
    console.log("Array 3 :- ", this.array3);

    //While Loop
    while (this.d1 < this.data1.length && this.d2 < this.data2.length) {
      if (this.data1[this.d1] < this.data2[this.d2]) {
        this.data3[this.d3] = this.data1[this.d1];
        this.d1++;
      } else {
        this.data3[this.d3] = this.data2[this.d2];
        this.d2++;
      }
      this.d3++;
    }
    while (this.d1 < this.data1.length) {
      this.data3[this.d3] = this.data1[this.d1];
      this.d1++;
      this.d3++;
      return this.data3;
    }
  }

}
