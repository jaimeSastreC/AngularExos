import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MonFormulaire } from 'src/app/modeles/mon-formulaire';

@Component({
  selector: 'app-c13',
  templateUrl: './c13.component.html',
  styleUrls: ['./c13.component.scss']
})
export class C13Component implements OnInit {
  //dans gabarit modele
  formulaire = new MonFormulaire('', '', false);

  //*****************************************
  //dans classe Typescripts
  monFormulaireT = new FormGroup({
    nom: new FormControl(''),
    couleur: new FormControl(''),
    majeur: new FormControl (false)
  });

  // Todo : option : utiliser formulaireG:FormBuilder => voir exemple dans doc Angular pour groupes: ex group (nom, prénom)!
  monFormulaireGroup = this.formulaireG.group({
    nom: [' '],
    couleur: [' '],
    majeur: [false]
  });

  constructor(private formulaireG:FormBuilder) { }

  ngOnInit(): void {
  }

  onClick(donnees:MonFormulaire) {
    console.log(donnees);
  }

}
