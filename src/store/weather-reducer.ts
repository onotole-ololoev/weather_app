import {AppThunk} from "./store";
import {weatherAPI} from "../api/weather-api";

const initialState = {
    coord: {
        lon: 0,
        lat: 0
    },
    weather: [
        {
            id: 0,
            main: "The weather is good",
            description: "The weather is good",
            icon: "04d"
        }
    ],
    base: "stations",
    main: {
        temp: 0,
        feels_like: 0,
        temp_min: 300.36,
        temp_max: 300.36,
        pressure: 1007,
        humidity: 0,
        sea_level: 1007,
        grnd_level: 1007
    },
    visibility: 10000,
    wind: {
        speed: 0,
        deg: 0,
        gust: 0
    },
    clouds: {
        all: 0
    },
    dt: 1664520883,
    sys: {
        country: "TN",
        sunrise: 1664514326,
        sunset: 1664557112
    },
    timezone: 7200,
    id: 2468925,
    name: "City",
    cod: 200
}
type ItialStateType = {
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
export type WeatherType = {
    id: number
    main: string
    description: string
    icon: string
}
type ActionType = GetWeatherACType
export const weatherReducer = (state: ItialStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case "GET-WEATHER":
            return {...action.data}
        default:
            return state
    }
}

export const getWeatherAC = (data: ItialStateType) => {
    return {type: 'GET-WEATHER', data} as const
}

type GetWeatherACType = ReturnType<typeof getWeatherAC>

export const GetWeatherTC = (lat: string, lon: string): AppThunk => async dispatch => {
            try {
               let res = await weatherAPI.getWeather(lat, lon)
                console.log(res.data)
                getWeatherAC(res.data)
            } catch (e) {
                alert(e)
            } finally {
                console.log('finally')
            }
}