import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
public num:number=0;
  constructor() { }

  ngOnInit(): void {

  }

  chnageDetection(){
    console.log('chnage detection ...');
    
  }

  onNum(){
    this.num = this.num+ 1
  }

}
