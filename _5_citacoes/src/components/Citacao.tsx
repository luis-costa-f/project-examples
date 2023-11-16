import { useState } from "react";
import { ICitacao } from "../interfaces"

const Citacao = ({ autor, texto }: ICitacao) => {

    const [traducao, setTraducao] = useState<string>("");

    async function traduzirCitacao(idioma: string) {
        try {
            const resposta = await fetch("https://libretranslate.com/translate", {
                method: "POST",
                body: JSON.stringify({
                    q: texto,
                    source: "pt",
                    target: idioma,
                    api_key: "AGPLv3"
                }),
                headers: { "Content-Type": "application/json" },                
            });

            const data = await resposta.json();
            console.log(data)
            //setTraducao(data.translatedText);
        } catch (erro) {
            console.error("Erro ao traduzir citação:", erro);
        }
    }

    return (
        <div>
            <blockquote className="blockquote">
                <p>{traducao ? traducao : texto}</p>
                <footer className="blockquote-footer">{autor}</footer>
            </blockquote>
            <button className="btn btn-primary mr-1" onClick={() => traduzirCitacao("en")}>Traduzir para o Inglês</button>
            <button className="btn btn-secondary m-1" onClick={() => traduzirCitacao("es")}>Traduzir para o Espanhol</button>
        </div>
    )
}

export default Citacao
