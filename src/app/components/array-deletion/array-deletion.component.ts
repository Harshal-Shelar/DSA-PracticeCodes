import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array-deletion',
  templateUrl: './array-deletion.component.html',
  styleUrls: ['./array-deletion.component.scss']
})
export class ArrayDeletionComponent implements OnInit {

  data : any = [12,34,78,56,89,45,23];
  position : any;
  result : any;
  inputVal : any;

  constructor() { }

  ngOnInit(): void {
  }

  deleteData(){
    for(let i = this.position; i < this.data.length; i++){
      this.position = parseInt(this.position);
      this.data[i] = this.data[i + 1];
    }
    this.position = ''
    this.data.length = this.data.length-1;
    this.result = this.data;
    console.log(this.result);
  }

}
