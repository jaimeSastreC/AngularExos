import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {
  // vars 
  // pokemons = [
  //   {'id': 1, 'nom': 'Bulbizarre', 'categorie': 'graine', 'type': ['plante', 'poison'], 'taille': 0.7, 'poids': 6.9},
  //   {'id': 2, 'nom': 'Herbizarre', 'categorie': 'graine', 'type': ['plante', 'poison'], 'taille': 1.0, 'poids': 13.0},
  //   {'id': 3, 'nom': 'Florizarre', 'categorie': 'graine', 'type': ['plante', 'poison'], 'taille': 2.0, 'poids': 0.1},
  //   {'id': 4, 'nom': 'Salamèche', 'categorie':'lézard', 'type': ['feu'], 'taille': 0.6, 'poids': 8.5},
  //   {'id': 5, 'nom': 'Reptincel', 'categorie':'flamme', 'type': ['feu'], 'taille': 1.1, 'poids': 19.0},
  //   {'id': 6, 'nom': 'Dracaufeu', 'categorie':'flamme', 'type': ['feu', 'vol'], 'taille': 1.7, 'poids': 90.5}
  // ];

  pokemons = [
    {
      'id': 1, 'nom': 'Bulbizarre', 'img':
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png ', 
        'categorie': 'graine', 'type': ['plante', 'poison'], 'taille': 0.70, 'poids': 6.9
    },
    {
      'id': 2, 'nom': 'Herbizarre', 'img':
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png', 
        'categorie': 'graine', 'type': ['plante', 'poison'], 'taille': 1, 'poids': 13
    },
    {
      'id': 3, 'nom': 'Florizarre', 'img':
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png', 
        'categorie': 'graine', 'type': ['plante', 'poison'], 'taille': 2, 'poids': 100
    },
    {
      'id': 4, 'nom': 'Salamèche', 'img':
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png', 
        'categorie': 'lézard', 'type': ['feu'], 'taille': 0.6, 'poids': 8.5
    },
    {
      'id': 5, 'nom': 'Reptincel', 'img':
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png', 
        'categorie': 'flamme', 'type': ['feu'], 'taille': 1.1, 'poids': 19
    },
    {
      'id': 6, 'nom': 'Dracaufeu', 'img':
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png', 
        'categorie': 'flamme', 'type': ['feu', 'vol'],
      'taille': 1.7, 'poids': 90.5
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
