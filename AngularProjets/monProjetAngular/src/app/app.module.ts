// LOCALE_ID   POUR changer unités US vers FR
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MpcComponent } from './composants/mpc/mpc.component';
import { C09Component } from './composants/c09/c09.component';
import { C10Component } from './composants/c10/c10.component';

// locale ID
import {registerLocaleData} from '@angular/common';
import localeFR from '@angular/common/locales/fr';
import { C11PereComponent } from './composants/c11-pere/c11-pere.component';
import { C11FilsComponent } from './composants/c11-fils/c11-fils.component';
import { C1201Component } from './composants/c1201/c1201.component';
import { C1202Component } from './composants/c1202/c1202.component';
import { CrudService } from './services/crud.service';
import { C12Service } from './services/c12.service';
import { C13Component } from './composants/c13/c13.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { C14Component } from './composants/c14/c14.component';
import { C15Component } from './composants/c15/c15.component';
import { C15detailsComponent } from './composants/c15details/c15details.component';
import { C15CComponent } from './composants/c15-c/c15-c.component';
import { C15RComponent } from './composants/c15-r/c15-r.component';
import { C15UComponent } from './composants/c15-u/c15-u.component';
import { C15DComponent } from './composants/c15-d/c15-d.component';


registerLocaleData(localeFR);

@NgModule({
  declarations: [
    AppComponent,
    MpcComponent,
    C09Component,
    C10Component,
    C11PereComponent,
    C11FilsComponent,
    C1201Component,
    C1202Component,
    C13Component,
    C14Component,
    C15Component,
    C15detailsComponent,
    C15CComponent,
    C15RComponent,
    C15UComponent,
    C15DComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // locale ID
  providers: [
    {provide: LOCALE_ID, useValue: 'fr'},
    C12Service,
    CrudService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
