import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c1202',
  templateUrl: './c1202.component.html',
  styleUrls: ['./c1202.component.scss']
})
export class C1202Component implements OnInit {

  sSomeText = 'Hello World!';

  getText():string {
    return this.sSomeText;
  }


  constructor() { 
    //this.getText();
  }

  ngOnInit() {

  }


  
}

