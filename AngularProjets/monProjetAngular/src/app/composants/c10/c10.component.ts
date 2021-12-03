import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c10',
  templateUrl: './c10.component.html',
  styleUrls: ['./c10.component.scss']
})
export class C10Component implements OnInit {

  replique = "Tu vois, le monde se divise en deux catégories: \nCeux qui ont un pistolet chargé et ceux qui creusent.\nToi tu creuses.";
  chiffrePi = 3.141592653589793238562643383279;
  unChiffre = 0.123456789;
  teslaM3 = 48600;
  aujourdhui = Date.now();

  unObjet = {
    2: 'espace',
    1: 'esprit',
    6: 'âme',
    4: 'réalité',
    3: 'temps',
    5: 'pouvoir'
  };

  unDictionnaire = new Map([
    [2, 'espace'], 
    [1, 'esprit'], 
    [6, 'âme'],
    [4, 'réalité'],
    [3, 'temps'],
    [5, 'pouvoir']
  ]);

  objetPromesse = new Promise ((resolve) => {
      setTimeout(() => resolve('C\'est bon!!!'), 5000);
    }
  );

  objetJson = {"name":"John", "age":30, "car":null};

  constructor() { }

  ngOnInit(): void {
  }

}
