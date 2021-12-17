import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c11-pere',
  templateUrl: './c11-pere.component.html',
  // template:' <app-c11-fils [parametre]="personnage2">',
  styleUrls: ['./c11-pere.component.scss']
})
export class C11PereComponent implements OnInit {

  personnage = 'Ceci est une Variable dans cc11-pere.components.ts père';
  personnage2 = {nom: 'Kent', prenom: 'Clark'};
  messageDuFils:string = 'en attente fils';

  constructor() { }

  ngOnInit(): void {
  }

}
