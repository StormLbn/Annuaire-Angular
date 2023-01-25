export class Contact {
    // Déclaration des variables
    id !: number;   // le ! permet de ne pas initialiser la variable
    contactName !: string;
    birthDate !: string;
    address !: string;
    city !: string;
    phone !: string;
    contactType !: string;
    photoUrl !: string;
}