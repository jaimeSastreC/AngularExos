import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-c15details',
  templateUrl: './c15details.component.html',
  styleUrls: ['./c15details.component.scss']
})
export class C15detailsComponent implements OnInit {

  idTechno:number;

  // injection de dépendance dans constructeur
  constructor(private routeActive: ActivatedRoute) { }

  ngOnInit(): void {
    // récupération paramètre
    this.idTechno = +this.routeActive.snapshot.paramMap.get('id');
  }

}
