export class Contact {
    // Déclaration des variables
    
    // On utilise ! pour ne pas initialiser la variable
    id !: number;
    contactName !: string;
    phone !: string;
    email !: string;
    address !: string;
    postcode !: string;
    city !: string;
    contactType !: string;
    photoUrl !: string;

    // On utilise ? pour indiquer que la variable est facultative
    firstName ?: string;
    birthDate ?: string;
    age ?: number;
    website ?: string;
}