export class MonFormulaire {
    group(arg0: { nom: string[]; couleur: string[]; majeur: number[]; }) {
      throw new Error('Method not implemented.');
    }
    nom: string;
    couleur: string;
    majeur: boolean;

    constructor(
        nom: string,
        couleur: string,
        majeur: boolean) {
            this.nom = nom;
            this.couleur = couleur;
            this.majeur = majeur;
        }

}
