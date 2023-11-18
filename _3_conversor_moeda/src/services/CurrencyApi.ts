import axios from "axios"

const apiKey = import.meta.env.VITE_API_KEY;

export async function CurrencyList () {
    let list = []

    try {
        const response = await axios.get(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`)
        list = response.data.conversion_rates
    } catch (error) {
        console.log("Ocorreu um erro: ", error)
    }

    return list
}