export class FormRecherchePokemon {

    // nom: string;

    constructor(public nom:string) {
        // this.setNom(nom);
    }

    setNom(nom:string) {
        this.nom = nom;
    }
    getNom() {
        return this.nom;
    }
}
