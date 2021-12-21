import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  // Todo : option : utiliser FormBuilder => à vérifier!
  // monFormulaireGroup = this.formulaire.group({
  //   nom: [' '],
  //   couleur: [' '],
  //   majeur: [false]
  // });

  constructor() { }

  ngOnInit(): void {
  }

  onClick(donnees) {
    console.log(donnees);
  }

}
