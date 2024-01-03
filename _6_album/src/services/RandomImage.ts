//https://unsplash.com/developers

import axios from "axios";
import { IFoto } from "../components/Interfaces";

const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;

export async function searchImageByCategory(query: string, category: string) {
    try {
        if (query || category) {
            let searchQuery = query;

            if (query && category) {
                searchQuery = `${query} ${category}`;
            } else if (category) {
                searchQuery = category;
            }

            const response = await axios.get(
                "https://api.unsplash.com/search/photos",
                {
                    params: {
                        client_id: apiKey,
                        query: searchQuery,
                    },
                }
            );
            return response.data.results as Promise<IFoto>;
        }

        const response = await axios.get(
            "https://api.unsplash.com/photos/random/",
            {
                //const response = await axios.get('https://api.unsplash.com/search/photos', {
                params: {
                    client_id: apiKey,
                    count: 10,
                },
            }
        );
        return response.data as Promise<IFoto>;
    } catch (error) {
        console.log("falha ao retornar informações da API", error);
    }
}
