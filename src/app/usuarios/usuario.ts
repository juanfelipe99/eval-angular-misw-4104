// Se utiliza una interfaz en lugar de una clase porque no se necesita implementar métodos o propiedades.

export class Usuario {
    constructor(
        public id: number,
        public username: string,
        public name: string,
        public user: string,
        public email: string,
        public avatarUrl: string,
        public role: string,
        public location: string,
        public repoIds: number[]
    ) {}
}
