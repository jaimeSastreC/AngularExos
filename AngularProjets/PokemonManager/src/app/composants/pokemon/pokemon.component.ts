import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  @Input() parametre = {
    'id': 1, 'nom': 'Bulbizarre', 'img':
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png ', 
        'categorie': 'graine', 'type': ['plante', 'poison'], 'taille': 0.70, 'poids': 6.9
  }

  constructor() { }

  ngOnInit(): void {
  }

}

