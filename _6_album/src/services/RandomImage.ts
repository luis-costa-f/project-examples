//https://unsplash.com/developers

import axios from "axios"

const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY

export async function searchImageByCategory (query: string, category: string) {
    try {

        const response = await axios.get('https://api.unsplash.com/photos/random/', {
            //const response = await axios.get('https://api.unsplash.com/search/photos', {
            params: {
                client_id: apiKey
            }
        })
        console.log(response.data)

    } catch (error) {
        console.log("falha ao retornar informações da API", error)
    }
}