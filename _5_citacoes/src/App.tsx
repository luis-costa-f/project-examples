import { useState } from "react";
import citacoes from "./data";
import Citacao from "./components/Citacao";

const App = () => {
    const [indice, setIndice] = useState<number>(0);

    const proximaCitacao = () => {
        setIndice((indice + 1) % citacoes.length)
    }

    return (
        <div className="container mt-5">
            <Citacao autor={citacoes[indice].autor} texto={citacoes[indice].texto}  />
            <button className="btn btn-success mt-2" onClick={proximaCitacao}>Próxima citação</button>
        </div>
    )
}

export default App
