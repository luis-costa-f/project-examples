export interface IClima {
    name: string;
    weather: [
        {
            icon: string;
            description: string;
        }
    ],
    main: {
        temp: string;
    }
}

export interface IPrevisao {
    weather: [
        {
            icon: string;
            description: string;
        }
    ],
    main: {
        temp: string;
    }
    dt: number
}

export interface IBusca {
    cidade: string;
    setCidade: (value: string) => void;
    buscarClima: () => void;
}


export interface IPrevisoes {
    previsoes: IPrevisao[]
}

