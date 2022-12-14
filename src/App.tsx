import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {InputCustom} from "./components/inputCustom/inputCustom";
import {useAppDispatch, useAppSelector} from "./store/store";
import {GetWeatherTC} from "./store/weather-reducer";
import {Button} from "./components/button/button";
import {setErrorValueAC, setTempValueAC} from "./store/app-reducer";
import {BasicAlert} from "./components/basicAlert/basicAlert";
import LinearIndeterminate from "./components/linearProgress/linearProgress";
import {Example} from "./components/exaple/example";

function App() {
    const error = useAppSelector(state => state.app.isError)
    const isLoading = useAppSelector(state => state.app.isLoading)
    const location = useAppSelector(state => state.weather.name)
    const {temp, humidity, feels_like} = useAppSelector(state => state.weather.main)
    const country = useAppSelector(state => state.weather.sys.country)
    const windSpeed = useAppSelector(state => state.weather.wind.speed)
    const description = useAppSelector(state => state.weather.weather[0].description)
    const tempValue = useAppSelector(state => state.app.tempValue)
    const tempCelsius = (temp - 32) * 5 / 9
    const feels_like_celsius = (feels_like - 32) * 5 / 9

    const dispatch = useAppDispatch()

    const [lat, setLat] = useState<string>('')
    const [lon, setLon] = useState<string>('')


    const searchLocation = () => {
        if (lat && lon) {
            dispatch(GetWeatherTC(lat, lon))
            setLat('')
            setLon('')
        } else {
            dispatch(setErrorValueAC(true))
        }
    }
    const convertTemp = () => {
        if (tempValue === 'fahrenheit') {
            dispatch(setTempValueAC('celsius'))
        } else {
            dispatch(setTempValueAC('fahrenheit'))
        }
    }

    const onLatChange = (valueLat: string) => {
        setLat(valueLat)
    }
    const onLonChange = (valueLon: string) => {
        setLon(valueLon)
    }

    return (
        <div className="app">
            {isLoading ? <LinearIndeterminate /> : null}
            {error ? <BasicAlert/> : null}
            <Example />
            <div className="search">
                <InputCustom onCallback={(valueLat) => onLatChange(valueLat)} name={'Enter latitude'} value={lat}/>
                <InputCustom onCallback={(valueLon) => onLonChange(valueLon)} name={'Enter  longitude'} value={lon}/>
                <Button onCallback={searchLocation} name={'Show the weather'} />
            </div>
            <div className='container'>
                <div className='top'>
                    <div className='location'>
                        <h3>Location: {location}</h3>
                        <p>Country: {country}</p>
                    </div>
                    <div className='temp'>
                        {
                            tempValue === 'fahrenheit'
                                ?
                                <h1>{Math.round(temp)} ???</h1>
                                :
                                <h1>{Math.round(tempCelsius)} ??C</h1>
                        }
                        <p>{description}</p>
                        <Button onCallback={convertTemp} name={'Convert temp'}/>
                    </div>
                </div>
                <div className="bottom">
                    <div className='bottom_item'>
                        {
                            tempValue === 'fahrenheit'
                                ?
                                <p className='bold'>{Math.round(feels_like)} ???</p>
                                :
                                <p className='bold'>{Math.round(feels_like_celsius)} ??C</p>
                        }
                        <p className='bottom_item__text'>Feels like</p>
                    </div>
                    <div className="bottom_item">
                        <p className='bold'>{humidity}%</p>
                        <p className='bottom_item__text'>Humidity</p>
                    </div>
                    <div className="bottom_item">
                        <p className='bold'>{Math.round(windSpeed)} MPH</p>
                        <p className='bottom_item__text'>Wind Speed</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
