import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-c15',
  templateUrl: './c15.component.html',
  styleUrls: ['./c15.component.scss']
})
export class C15Component implements OnInit {

  technologies = [
    {id:1, nom: 'JavaScript', frameworks: ['Angular', 'React', 'Vue']},
    {id:2, nom: 'Python', frameworks: ['Django', 'Flask']},
    {id:3, nom: 'Go', frameworks: ['Go']}
  ];

  constructor(private routeur: Router ) { }

  ngOnInit(): void {
  }

  onClickSurTechno(uneTechno) {
    console.log('click sur techno');
    this.routeur.navigate(['./technos', uneTechno.id]);
  }

}
