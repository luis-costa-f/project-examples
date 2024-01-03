export interface IImageApi {
    id?: string;
    urls: {
        small: string;
        regular: string;
    };
    alt_description: string;
}
export interface IFoto {
    dados: IImageApi;
    setFotoAmpliada?: (dados: IImageApi) => void;
}

export interface IFotos {
    fotos?: IImageApi[];
    setFotoAmpliada?: (dados: IImageApi) => void;
}

export interface ISearch {
    setQuery: (query: string) => void;
    setCategoria: (categoria: string) => void;
    setActivateSearch: (state: boolean) => void;
}
