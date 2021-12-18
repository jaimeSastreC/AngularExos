import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  citations = [ 
    'J\'aime quand un plan se déroule sans accroc.', 
    'J\'ai beau savoir qu\'elle est virtuelle, cette entrecôte est succulente.', 
    'Je suis trop vieux pour ça.', 
    'Je me sens un coeur à aimer toute la terre.', 
    'Connaissant moi-même le malheur, je sais secourir le malheureux.' 
  ] 

  constructor() { }

  getCitations() {
    return this.citations;
  }

  deleteCitation(index:number) {
    this.citations.splice(index, 1);
    return this.citations;
  }

  addCitation(citation:string) {
    this.citations.push(citation);
    return this.citations;
  }

  updateCitation(index, citation) {
    this.citations[index] = citation;
    return this.citations;
  }

}
