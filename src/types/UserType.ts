export interface User {
    id?: number;
    nombre?: string;
    email: string;
    descripcion?:string;
    password:string;
}

export interface Project {
    id_proyecto: number;
    titulo: string;
    contexto: string;
    imagen: string;
    linkRepositorio:string;
}

export interface News{
    id_noticias:number;
    titular: string;
    contenido:string;
    link:string;
}