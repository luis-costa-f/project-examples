import "./CurrencyConverter.css"

const CurrencyConverter = () => {
    return (
        <div className="converter">
            <h2>Conversor de Moedas</h2>
            <input type="number" />
            <span>Selecione as moedas</span>
            <select>
                <option value="BRL">BRL</option>
            </select>
            <span>para</span>
            <select>
                <option value="USD">USD</option>
            </select>
            <h2>BRL USD</h2>
            <p>20 BRL valem 5 USD</p>            
        </div>
    )
}

export default CurrencyConverter
