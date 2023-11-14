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