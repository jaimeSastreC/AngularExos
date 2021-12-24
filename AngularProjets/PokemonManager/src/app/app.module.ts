import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// route
import { AppRoutingModule } from './app-routing.module';

//components
import { AppComponent } from './app.component';
import { GenerationsComponent } from './composants/generations/generations.component';
import { PokemonsComponent } from './composants/pokemons/pokemons.component';

// locales France
import {LOCALE_ID} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { PokemonComponent } from './composants/pokemon/pokemon.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';

// Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    GenerationsComponent,
    PokemonsComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  //locale
  providers: [ {provide: LOCALE_ID, useValue: 'fr'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
