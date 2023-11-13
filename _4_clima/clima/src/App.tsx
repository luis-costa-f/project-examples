import { useState } from 'react'
import { Titulo } from './AppStyles'
import Busca from './components/Busca'
import ClimaAtual from './components/ClimaAtual'
import Previsao from './components/Previsao'

const App = (): JSX.Element => {
    const [cidade, setCidade] = useState<string>("");
    const [clima, setClima] = useState(null);
    const [previsao, setPrevisao] = useState([]);

    const apiKey = import.meta.env.VITE_API_KEY;

    return (
        <div>
            <Titulo>Condições Climáticas</Titulo>
            <Busca />
            <ClimaAtual />
            <Previsao />
        </div>
    )
}
export default App
