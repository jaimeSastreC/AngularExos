import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C09Component } from './composants/c09/c09.component';
import { C10Component } from './composants/c10/c10.component';
import { C11PereComponent } from './composants/c11-pere/c11-pere.component';
import { C1201Component } from './composants/c1201/c1201.component';
import { C13Component } from './composants/c13/c13.component';
import { C14Component } from './composants/c14/c14.component';
import { C15Component } from './composants/c15/c15.component';
import { C15detailsComponent } from './composants/c15details/c15details.component';

const routes: Routes = [
  {path: 'abc', component: C15Component},
  {path: 'c9', component: C09Component},
  {path: 'c10', component: C10Component},
  {path: 'c11', component: C11PereComponent},
  {path: 'c1201', component: C1201Component},
  {path: 'c13', component: C13Component},
  {path: 'c14', component: C14Component},
  {path: 'c15', component: C15Component},
  {path: 'technos', component: C15Component},
  {path: 'technos/:id', component: C15detailsComponent},
  {path: '**', component: C15Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }