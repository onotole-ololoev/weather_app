import {instance} from "./baseInstance";
import {WeatherType} from "../store/weather-reducer";

export const weatherAPI = {
    getWeather(lat: string, lon: string) {
        return instance.get<ResponseWeatherType>(`weather?lat=${lat}&lon=${lon}&units=imperial&appid=4309eddb919cb13ebb06fb1ce8de819e`)
    }
}
type ResponseWeatherType = {
    coord: {
        lon: number
        lat: number
    },
    weather: WeatherType[],
    base: string
    main: {
        temp: number
        feels_like: number
        temp_min: number
        temp_max: number
        pressure: number
        humidity: number
        sea_level: number
        grnd_level: number
    },
    visibility: number
    wind: {
        speed: number
        deg: number
        gust: number
    },
    clouds: {
        all: number
    },
    dt: number
    sys: {
        country: string
        sunrise: number
        sunset: number
    },
    timezone: number,
    id: number
    name: string
    cod: number
}