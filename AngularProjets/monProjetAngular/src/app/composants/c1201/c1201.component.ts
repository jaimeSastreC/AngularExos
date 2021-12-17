import { Component, OnInit } from '@angular/core';
// attention, pour service général placer dans app.component et pour utilisation par autre service dans app.module.ts
import { C12Service } from 'src/app/services/c12.service';
import { C1202Component } from '../c1202/c1202.component';



@Component({
  selector: 'app-c1201',
  providers: [C1202Component],
  templateUrl: './c1201.component.html',
  styleUrls: ['./c1201.component.scss']
})
export class C1201Component implements OnInit {
  text:string;
  message:string = '';

  constructor(private uneDependance: C1202Component, private unService: C12Service) { }


  ngOnInit(): void {
    this.text = this.uneDependance.getText();
  }

  onServiceTennis(){
    this.message = this.unService.tennis();
  }

}
