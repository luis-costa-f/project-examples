import { PrevisaoContainer } from "./PrevisaoStyle"
import { IPrevisao, IPrevisoes } from "./interfaces"

const Previsao = ({ previsoes }: IPrevisoes): JSX.Element => {    
    return (
        <PrevisaoContainer>
            <h4>Previsão para as proximas horas</h4>
            <ul>
                {
                    previsoes.map((previsao: IPrevisao) => {
                        return (
                            <li key={previsao.dt}>
                                <img src={`https://openweathermap.org/img/wn/${previsao.weather[0].icon}.png`}
                                    alt={previsao.weather[0].description} />
                                {previsao.main.temp}°C - {previsao.weather[0].description}
                            </li>
                        )
                    })
                }
            </ul>
        </PrevisaoContainer>
    )
}

export default Previsao
