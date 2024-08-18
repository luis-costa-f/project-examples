import { useEffect, useState } from "react";
import { ICitacao } from "../interfaces"
import { traduzirCitacao } from "../services/RapidApi";

const Citacao = ({ autor, texto }: ICitacao) => {
    const [traducao, setTraducao] = useState<string>("");

    async function onClickTraducao (idioma: string) {
        setTraducao(await traduzirCitacao(texto, idioma))
    }

    useEffect(() => {
        setTraducao("")
    }, [texto])

    return (
        <div>
            <blockquote className="blockquote">
                <p>{traducao ? traducao : texto}</p>
                <footer className="blockquote-footer">{autor}</footer>
            </blockquote>
            <button className="btn btn-primary mr-1" onClick={() => onClickTraducao("en")}>Traduzir para o Inglês</button>
            <button className="btn btn-secondary m-1" onClick={() => onClickTraducao("es")}>Traduzir para o Espanhol</button>
        </div>
    )
}

export default Citacao
