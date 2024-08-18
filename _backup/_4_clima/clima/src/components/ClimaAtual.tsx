import { ClimaInfo } from "./ClimaAtualStyles"
import { IClima } from "./interfaces"

const ClimaAtual = ({ name, main, weather }: IClima): JSX.Element => {
    return (
        <ClimaInfo>
            <h3>{name}</h3>
            <img src={`https://openweathermap.org/img/wn/${weather[0].icon}.png`} alt={weather[0].description} />
            <p>{main.temp}°C </p>
            <p>{weather[0].description}</p>
        </ClimaInfo>
    )
}

export default ClimaAtual
