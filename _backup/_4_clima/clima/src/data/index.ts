import { IClima, IPrevisao, IPrevisoes } from "../components/interfaces";

const emptyClima: IClima =  {
    main: {
        temp: ""
    },
    name: "",
    weather: [
        {
            description: "",
            icon: ""
        }
    ]
}

const emptyPrevisao: IPrevisao =  {
    main: {
        temp: ""
    },    
    weather: [
        {
            description: "",
            icon: ""
        }
    ],
    dt: 0
}

const emptyPrevisoes: IPrevisoes = {
    previsoes: [emptyPrevisao]
}

export {emptyClima, emptyPrevisao, emptyPrevisoes}