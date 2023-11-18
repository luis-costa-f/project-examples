import { useEffect, useState } from 'react'
import { ClimaContainer, Titulo } from './AppStyles'
import ClimaAtual from './components/ClimaAtual'
import { IClima } from './components/interfaces'
import Previsao from './components/Previsao'
import Busca from './components/Busca'
import { emptyClima } from './data'
import axios from 'axios'

const App = (): JSX.Element => {
    const [cidade, setCidade] = useState<string>("");
    const [clima, setClima] = useState<IClima>(emptyClima);
    const [previsao, setPrevisao] = useState([]);

    const apiKey = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude
            const lon = position.coords.longitude

            const respostaClima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`)
            setCidade(respostaClima.data.name)
            setClima(respostaClima.data)

            const respostaPrevisao = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`)
            setPrevisao(respostaPrevisao.data.list.slice(0, 5))
        })
    }, [apiKey])

    const buscarClima = async () => {
        try {
            const respostaClima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`);
            const dataClima = respostaClima.data;
            const auxClima: IClima = {
                main: dataClima.main || emptyClima.main,
                name: dataClima.name || emptyClima.name,
                weather: dataClima.weather || emptyClima.weather
            }
            setClima(auxClima);

            const respostaPrevisao = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`);
            const dataPrevisao = respostaPrevisao.data.list.slice(0, 5);
            setPrevisao(dataPrevisao)
        } catch (error) {
            console.log("Erro ao buscar clima: ", error)
        }
    }


    return (
        <ClimaContainer>
            <Titulo>Condições Climáticas</Titulo>
            <Busca cidade={cidade} setCidade={setCidade} buscarClima={buscarClima} />
            {clima && <ClimaAtual  {...clima} />}
            {previsao.length && <Previsao previsoes={previsao} />}
        </ClimaContainer>
    )
}
export default App
