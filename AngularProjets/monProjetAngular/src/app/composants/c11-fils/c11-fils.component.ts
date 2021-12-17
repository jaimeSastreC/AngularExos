import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-c11-fils',
  templateUrl: './c11-fils.component.html',
  // template: '<p>{{parametre.nom}}: Noooooooooooon!!!</p>',
  styleUrls: ['./c11-fils.component.scss']
})
export class C11FilsComponent implements OnInit {

  @Input()  parametre:string = 'Luke';
  @Input()  personne = {nom: 'Doe', prenom: 'John'};

  @Output() unEvenement = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  unClicBouton(){
    console.log('clic bouton');
    this.unEvenement.emit('DG - Mon Vieux');
  }

}
