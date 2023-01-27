export class Contact {
    // Déclaration des variables
    
    // On utilise ! pour ne pas initialiser la variable
    contactType !: string;
    contactName !: string;
    photoUrl !: string;
    
    id ?: number;
    // On utilise ? pour indiquer que la variable est facultative
    phone ?: string;
    email ?: string;
    website ?: string;
    address ?: string;
    firstName ?: string;
    birthDate ?: string;
    age ?: number;
}