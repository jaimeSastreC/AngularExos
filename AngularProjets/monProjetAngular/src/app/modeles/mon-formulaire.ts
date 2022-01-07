export class MonFormulaire {
    group(arg0: { nom: string[]; couleur: string[]; majeur: number[]; }) {
      throw new Error('Method not implemented.');
    }
    // nom: string;
    // couleur: string;
    // majeur: boolean;

    constructor(
      //add public for simplified class !!
        public nom: string,
        public couleur: string,
        public majeur: boolean) {
        //     this.nom = nom;
        //     this.couleur = couleur;
        //     this.majeur = majeur;
        }

}
