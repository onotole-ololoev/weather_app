import React, {useEffect, useState} from 'react';
import './App.css';
import {InputCustom} from "./components/inputCustom/inputCustom";
import {useAppDispatch, useAppSelector} from "./store/store";
import {GetWeatherTC} from "./store/weather-reducer";

function App() {
    const location = useAppSelector(state => state.weather.name)
    const {temp, humidity, feels_like} = useAppSelector(state => state.weather.main)
    const description = useAppSelector(state => state.weather.weather[0].description)
    const windSpeed = useAppSelector(state => state.weather.wind.speed)

    const dispatch = useAppDispatch()

    const [lat, setLat] = useState<string>('')
    const [lon, setLon] = useState<string>('')

    // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4309eddb919cb13ebb06fb1ce8de819e`

    const searchLocation = () => {
        // axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4309eddb919cb13ebb06fb1ce8de819e`)
        //     .then(res => {
        //     console.log(res.data)
        // })
        dispatch(GetWeatherTC(lat, lon))
        setLat('')
        setLon('')
    }
    const onLatChange = (valueLat: string) => {
        setLat(valueLat)
    }
    const onLonChange = (valueLon: string) => {
        setLon(valueLon)
    }

    // useEffect(() => {
    //     dispatch(GetWeatherTC(lat, lon))
    // }, [location, temp, humidity, feels_like, description, windSpeed])

    return (
        <div className="app">
            <div className="search">
                <InputCustom onCallback={(valueLat) => onLatChange(valueLat)} name={'Enter latitude'} value={lat}/>
                <InputCustom onCallback={(valueLon) => onLonChange(valueLon)} name={'Enter  longitude'} value={lon}/>
                <button className='button' onClick={searchLocation}>Show the weather</button>
            </div>
            <div className='container'>
                <div className='top'>
                    <div className='location'>
                        <h3>{location}</h3>
                    </div>
                    <div className='temp'>
                        <h1>{temp} C</h1>
                    </div>
                    <div className="description">
                        <p>{description}</p>
                    </div>
                </div>
                <div className="bottom">
                    <div className='bottom_item'>
                        <p className='bold'>{feels_like}C</p>
                        <p className='bottom_item__text'>Feels like</p>
                    </div>
                    <div className="bottom_item">
                        <p className='bold'>{humidity}%</p>
                        <p className='bottom_item__text'>Humidity</p>
                    </div>
                    <div className="bottom_item">
                        <p className='bold'>{windSpeed} MPH</p>
                        <p className='bottom_item__text'>Wind Speed</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
