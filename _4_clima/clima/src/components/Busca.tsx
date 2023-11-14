import { ChangeEvent } from "react";

interface IBusca {
    cidade: string;
    setCidade: (value: string) => void;
    buscarClima: () => void;
}

const Busca = ({ cidade, buscarClima, setCidade }: IBusca) => {
    return (
        <div>
            <input type="text" value={cidade || ""} onChange={(e: ChangeEvent<HTMLInputElement>) => setCidade(e.currentTarget.value)} />
            <button onClick={() => buscarClima()}>Buscar</button>
        </div>
    )
}

export default Busca
