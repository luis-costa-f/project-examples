import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

export async function CurrencyList<T> (): Promise<T | null> {
    let list = []

    try {
        const response = await axios.get(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`)
        list = response.data.conversion_rates

        return list
    } catch (error) {
        if (error instanceof Error) {
            console.error("Ocorreu um erro: ", error.message)
        }

        return null
    }
}