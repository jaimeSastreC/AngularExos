import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MpcComponent } from './composants/mpc/mpc.component';
import { C09Component } from './composants/c09/c09.component';
import { C10Component } from './composants/c10/c10.component';

@NgModule({
  declarations: [
    AppComponent,
    MpcComponent,
    C09Component,
    C10Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
