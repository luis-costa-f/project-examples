import { useState } from "react";
import TimezoneClock from "./components/TimezoneClock";

const App = () => {

    const fusoHorarioLocal: string = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const [fusoHorariosSelecionados, setFusoHorariosSelecionados] = useState<string[]>([fusoHorarioLocal]);

    console.log(fusoHorarioLocal)

    return (
        <div>
            <h1>Relógio Mundial</h1>
            <select>
                <option value="" disabled selected>
                    Selecione um fuso horário
                </option>
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
