import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c09',
  templateUrl: './c09.component.html',
  styleUrls: ['./c09.component.scss']
})
export class C09Component implements OnInit {

  unString = 'Un texte à afficher!';
  unChiffre = 8008;
  unObjet = {nom: 'Wayne', prenom: 'Bruce', ville: 'Gotham City'};

sBouton = "Pas encore cliqué";
nbClic = 0;

sportifs = ['Laurence Cousin', 'Bruce Lee', 'Roger Gracie', 'Ryu'];

maClasse = 'alert-primary';
unBooleen = false;
unObjetClass = {
  'badge': false,
  'badge-pill': true,
  'badge-primary': true
  };

  unStyle = 'green';
  monStyle = {
    'color': 'red',
    'font-weight': 'bold'
  }

  // ###########################################################################

  constructor() { }

  ngOnInit(): void {
  }

  unClic() {
    console.log("Cliqué");
    this.nbClic++;
    this.sBouton = 'Cliqué ' + this.nbClic + " de fois";
  }

  changeClass() {
    if (this.maClasse === 'alert-success'){
      this.maClasse = 'alert-danger';
      console.log(this.maClasse);
    } else {
      this.maClasse = 'alert-success';
      console.log(this.maClasse)
    }
  }

  changeClassBoolean() {
    this.unBooleen = !this.unBooleen;
  }

  changeClassObjet(){
    if(this.unObjetClass.badge === true){
      this.unObjetClass.badge = false;
    } else {
      this.unObjetClass.badge = true;
    }
  }

  fonctionStyle(){
    console.log('style css');
    return 'blue';
  }

}
