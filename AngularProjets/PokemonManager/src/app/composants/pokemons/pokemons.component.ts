import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faOptinMonster } from '@fortawesome/free-brands-svg-icons';
import { FormRecherchePokemon } from 'src/app/modeles/form-recherche-pokemon';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  // pokemons = [
  //   {'id': 1, 'nom': 'Bulbizarre', 'categorie': 'graine', 'type': ['plante', 'poison'], 'taille': 0.7, 'poids': 6.9},
  //   {'id': 2, 'nom': 'Herbizarre', 'categorie': 'graine', 'type': ['plante', 'poison'], 'taille': 1.0, 'poids': 13.0},
  //   {'id': 3, 'nom': 'Florizarre', 'categorie': 'graine', 'type': ['plante', 'poison'], 'taille': 2.0, 'poids': 0.1},
  //   {'id': 4, 'nom': 'Salamèche', 'categorie':'lézard', 'type': ['feu'], 'taille': 0.6, 'poids': 8.5},
  //   {'id': 5, 'nom': 'Reptincel', 'categorie':'flamme', 'type': ['feu'], 'taille': 1.1, 'poids': 19.0},
  //   {'id': 6, 'nom': 'Dracaufeu', 'categorie':'flamme', 'type': ['feu', 'vol'], 'taille': 1.7, 'poids': 90.5}
  // ];

  messageFils:number = 0;
   
  pokemons:any[] = [];

  comptage:number = 0;

  faCoffee = faCoffee;

  faOptinMonster = faOptinMonster;

  formRecherchePokemon = new FormRecherchePokemon(' ');

  constructor(private pokemonsService:PokemonsService) {
   }

  ngOnInit(): void {
    this.pokemons = this.pokemonsService.getPokemons();
    this.comptage = this.pokemonsService.nombrePokemons();
  }

  // getPokemonName(id:number):string {
  //   const pokemonName:string = 'not defined';
  //   for (let pokemon of this.pokemons){
  //     if(pokemon.id === id) {
  //       pokemonName = pokemon.nom;
  //     }
  //   }
  //   return pokemonName;
  // }

  getPokemonName(id:number):number {
    const pokemon = this.pokemons.find(
      (pokemonObject:any) => {
        return pokemonObject.id === id;
      }
    );
    return pokemon.nom;
  }

  rechercher(nomPokemon:string):void {
    this.pokemons = this.pokemonsService.rechercherPokemon(nomPokemon);
    console.log(this.pokemons);
    //console.log(nomPokemon);
  }

  annulerRecherche():void {
    this.pokemons = this.pokemonsService.getPokemons();
    this.formRecherchePokemon.setNom('');
  }
}
