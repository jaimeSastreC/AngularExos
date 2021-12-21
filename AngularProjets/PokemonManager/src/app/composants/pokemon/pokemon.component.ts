import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  // check type parametre
  @Input() parametre: any = {
    'id': 1, 'nom': 'Bulbizarre', 'img':
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png ', 
        'categorie': 'graine', 'type': ['plante', 'poison'], 'taille': 0.70, 'poids': 6.9
  }


  @Output() unEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onPokemon(id:number){
    this.unEvent.emit(id);
    console.log(id);
  }

}

