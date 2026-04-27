// Se utiliza una interfaz en lugar de una clase porque no se necesita implementar métodos o propiedades.

export interface Usuario {
    id: number;
    username: string;
    user: string;
    email: string;
    avatarUrl: string;
    role: string;
    location: string;
    repoIds: number[];
}
