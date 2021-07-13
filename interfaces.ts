interface Usuario {
    nome: string;
    email: string;
    address?: string;
}

function getUser(): Usuario {
    return {
        nome: 'Jefferson',
        email: 'Jefferson@seila.com'
    }
}

function setUser(usuario: Usuario){
    //.....
}

// Classes



