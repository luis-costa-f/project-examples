import { ChangeEvent } from "react";
import { BotaoBuscar, BuscaCidade, BuscaContainer } from "./BuscaStyle";
import { IBusca } from "./interfaces";

const Busca = ({ cidade = "", buscarClima, setCidade }: IBusca) => {
    return (
        <BuscaContainer>
            <BuscaCidade type="text" value={cidade} onChange={(e: ChangeEvent<HTMLInputElement>) => setCidade(e.currentTarget.value)} />
            <BotaoBuscar onClick={() => buscarClima()}>Buscar</BotaoBuscar>
        </BuscaContainer>
    )
}

export default Busca
