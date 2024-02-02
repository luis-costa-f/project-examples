import { ChangeEvent, useState } from "react";
import TimezoneClock from "./components/TimezoneClock";
import { fusoHorarios } from "./data";

const App = () => {

    const fusoHorarioLocal: string = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const [fusoHorariosSelecionados, setFusoHorariosSelecionados] = useState<string[]>([fusoHorarioLocal]);

    const adicionarFusoHorario = (e: ChangeEvent<HTMLSelectElement>) => {
        const novoFuso = e.currentTarget.value;

        if (!fusoHorariosSelecionados.includes(novoFuso)) {
            setFusoHorariosSelecionados((prev) => [...prev, novoFuso]);
        }
    }

    return (
        <div>
            <h1>Relógio Mundial</h1>
            <select defaultValue="Selecione um fuso horário" onChange={(e) => adicionarFusoHorario(e)}>
                <option disabled key="valueEmpty">
                    Selecione um fuso horário
                </option>
                {fusoHorarios.map((fuso) => (
                    <option key={fuso} value={fuso}>
                        {fuso}
                    </option>
                ))}
            </select>
            <div>
                {fusoHorariosSelecionados.map((fuso) => (
                    <TimezoneClock key={fuso} timeZone={fuso} />
                ))}
            </div>
        </div>
    )
}

export default App
