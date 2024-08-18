import { useEffect, useState } from "react";
import { CurrencyList } from "../services/CurrencyApi";
import { IRate } from "./interfaces";
import "./CurrencyConverter.css"

const CurrencyConverter = () => {
    const [rates, setRates] = useState<IRate[] | null>(null);
    const [fromCurrency, setFromCurrency] = useState<string>("USD")
    const [toCurrency, setToCurrency] = useState<string>("BRL")
    const [amount, setAmount] = useState<number>(5);
    const [convertedAmount, setConvertedAmount] = useState<number>(0)

    useEffect(() => {
        async function setRatesByApi () {
            const lista = await CurrencyList<IRate[]>();

            if (lista) {
                setRates(lista)
            }
        }

        setRatesByApi()
    }, [fromCurrency])

    useEffect(() => {
        if (rates) {
            const rateFrom = Number(rates[fromCurrency]) || 0;
            const rateTo = Number(rates[toCurrency]) || 0;
            const result = (amount / rateFrom) * rateTo
            setConvertedAmount(Number(result.toFixed(2)));
        }

    }, [amount, rates, fromCurrency, toCurrency])

    if (!rates) {
        return <h1>Carregando...</h1>
    }

    return (
        <div className="converter">
            <h2>Conversor de Moedas</h2>
            <input type="number" placeholder="Digite o valor..." value={amount} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmount(Number(e.currentTarget.value))} />
            <span>Selecione as moedas</span>
            <select value={fromCurrency} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setFromCurrency(e.currentTarget.value)}>
                {
                    Object.keys(rates).map((currency) => {
                        return (
                            <option value={currency} key={currency}>{currency}</option>
                        )
                    })
                }
            </select>
            <span>para</span>
            <select value={toCurrency} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setToCurrency(e.currentTarget.value)}>
                {
                    Object.keys(rates).map((currency) => {
                        return (
                            <option value={currency} key={currency}>{currency}</option>
                        )
                    })
                }
            </select>
            <h2>{convertedAmount} {toCurrency}</h2>
            <p>{amount} {fromCurrency} valem {convertedAmount} {toCurrency} </p>
        </div>
    )
}

export default CurrencyConverter
