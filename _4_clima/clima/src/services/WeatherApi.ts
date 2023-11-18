import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

export async function searchWheatherByCoords (lat: number, lon: number) {
    return await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`)
}

export async function searchForecastsByCoords (lat: number, lon: number) {
    return await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=pt_br`)
}

export async function searchWheatherByCity (city: string) {
    return await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`)
}

export async function searchForecastsByCity (city: string) {
    return await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`)
}