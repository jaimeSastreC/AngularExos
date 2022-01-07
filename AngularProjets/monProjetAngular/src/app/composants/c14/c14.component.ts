import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MonFormulaire } from 'src/app/modeles/mon-formulaire';

@Component({
  selector: 'app-c14',
  templateUrl: './c14.component.html',
  styleUrls: ['./c14.component.scss']
})
export class C14Component implements OnInit {
  //option 1:
  //dans gabarit modele
  formulaire = new MonFormulaire('', '', false);

  //*****************************************
  //option 2:
  //dans classe Typescripts
  // monFormulaireT = new FormGroup({
  //   nom2: new FormControl('', [Validators.required, 
  //                             Validators.minLength(3), 
  //                             Validators.maxLength(25), 
  //                             this.monValidateur
  //                             ]),
  //   couleur: new FormControl('', Validators.required),
  //   majeur: new FormControl ('', Validators.required)
  // });
  //monFormulaireT: FormGroup;

  //Using the FormBuilder service to generate controls, Angular Doc procedure
  monFormulaireT: FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    //Using the FormBuilder service to generate controls, Angular Doc procedure
    this.monFormulaireT = this.formBuilder.group({
      nom2: ['',[Validators.required, 
                                Validators.minLength(3), 
                                Validators.maxLength(25), 
                                this.monValidateur
                                ]],
      couleur: ['', Validators.required],
      majeur: ['', Validators.required]
    });
  }

  onClick(donnees:MonFormulaire): void {
    console.log(donnees);
  }

  monValidateur(champ: FormControl) {
    if (champ.value === 'Chuck Norris') {
        return { mauvaisNom: true};
    } else {
      return null;
    }
  }
}
