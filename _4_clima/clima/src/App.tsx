import { useState } from 'react'
import { Titulo } from './AppStyles'
import Busca from './components/Busca'
import ClimaAtual from './components/ClimaAtual'
import Previsao from './components/Previsao'
import axios from 'axios'
import { IClima } from './components/interfaces'
import { emptyClima } from './data'

const App = (): JSX.Element => {
    const [cidade, setCidade] = useState<string>("");
    const [clima, setClima] = useState<IClima>(emptyClima);
    const [previsao, setPrevisao] = useState([]);

    const apiKey = import.meta.env.VITE_API_KEY;

    const buscarClima = async() => {
        try {
            const respostaClima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`);
            const {data} = respostaClima;
            const auxClima: IClima = {
                main: data.main || emptyClima.main,
                name: data.name || emptyClima.name,
                weather: data.weather || emptyClima.weather
            }
            setClima(auxClima);
        } catch (error) {
            console.log("Erro ao buscar clima: ", error)
        }
    }

    console.log(clima)

    return (
        <div>
            <Titulo>Condições Climáticas</Titulo>
            <Busca cidade={cidade} setCidade={setCidade} buscarClima={buscarClima} />
            <ClimaAtual  {...clima}/>
            <Previsao />
        </div>
    )
}
export default App
