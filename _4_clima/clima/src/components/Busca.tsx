import { ChangeEvent } from "react";
import { BotaoBuscar, BuscaCidade, BuscaContainer } from "./BuscaStyle";

interface IBusca {
    cidade: string;
    setCidade: (value: string) => void;
    buscarClima: () => void;
}

const Busca = ({ cidade, buscarClima, setCidade }: IBusca) => {
    return (
        <BuscaContainer>
            <BuscaCidade type="text" value={cidade || ""} onChange={(e: ChangeEvent<HTMLInputElement>) => setCidade(e.currentTarget.value)} />
            <BotaoBuscar onClick={() => buscarClima()}>Buscar</BotaoBuscar>
        </BuscaContainer>
    )
}

export default Busca
