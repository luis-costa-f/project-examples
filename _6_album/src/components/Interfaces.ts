export interface IFoto {
    id?: string;
    urls: {
        small: string;
    }
    alt_description: string;
}

export interface IFotos {
    fotos?: IFoto[]
}