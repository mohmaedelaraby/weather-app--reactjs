import React, { useEffect, useState } from 'react'
import './Home.css'
import axios from 'axios'
import Radar from 'react-d3-radar';
import BarChart from './Table/BarChart';

function Home() {
    const [dataa, setDAta] = useState([])
    const [lat, getLat] = useState(29.8549248)
    const [lng, getLng] = useState(29.8549248)
    const [cit, getCity] = useState("city");
    const [degree, getDegree] = useState("0");
    const [degreeC, getDegreeC] = useState("0");
    const [date, getDate] = useState(" ");
    const [pressre, getPersse] = useState("0")
    const [desc, getDesc] = useState("0")
    const [ico, getICo] = useState("")
    const [widspeed, getWind] = useState("0")
    const [humidity, gethUm] = useState("0")
    const [location, setLocation] = useState('');

    const firUrl = `https://api.worldweatheronline.com/premium/v1/weather.ashx?key=98a46488b5e147cf8ea75600222905&q=${lat !== 0},${lng !== 0}&format=json`
    const secUrl = `https://api.worldweatheronline.com/premium/v1/weather.ashx?key=98a46488b5e147cf8ea75600222905&q=${location}&format=json`





    const [current, setCurrent] = useState({
        loaded: false,
        cords: { lat: "", lng: "" }
    });


    const position = () => {
        navigator.geolocation.getCurrentPosition(
            position => setCurrent({
                loaded: true,
                cords: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                }
            }), getLat(current.cords.lat),
            getLng(current.cords.lat),
            err => console.log(err)
        );


        console.log("Current", current)
        console.log("lat", current.cords.lat)
        console.log("lg", current.cords.lat)
        console.log(" lat #2", lat);
        console.log("lng#2", lng);

        axios.get(firUrl).then(res => {
            console.log(" crr-response : : :", res.data);
            getCity(res.data.data.request[0].query)
            setDAta(res.data);
            getDate(res.data.data.weather[0].date)
            getDegree(res.data.data.current_condition[0].FeelsLikeF)
            getDegreeC(res.data.data.current_condition[0].FeelsLikeC)
            getPersse(res.data.data.current_condition[0].pressure)
            getWind(res.data.data.current_condition[0].windspeedKmph)
            gethUm(res.data.data.current_condition[0].humidity)
            getDesc(res.data.data.current_condition[0].weatherDesc[0].value)
            getICo(res.data.data.current_condition[0].weatherIconUrl[0].value)

        }).catch(err => { console.log(err) })

    }


    useEffect(() => {
        axios.get(secUrl).then(res => {
            console.log("response : : :", res.data);
            getCity(res.data.data.request[0].query)
            setDAta(res.data);
            getDate(res.data.data.weather[0].date)
            getDegree(res.data.data.current_condition[0].FeelsLikeF)
            getDegreeC(res.data.data.current_condition[0].FeelsLikeC)
            getPersse(res.data.data.current_condition[0].pressure)
            getWind(res.data.data.current_condition[0].windspeedKmph)
            gethUm(res.data.data.current_condition[0].humidity)
            getDesc(res.data.data.current_condition[0].weatherDesc[0].value)
            getICo(res.data.data.current_condition[0].weatherIconUrl[0].value)

        }).catch(err => { console.log(err) })
    }, [])

    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(secUrl).then((res) => {
                console.log("response after : : :", res.data);
                setDAta(res.data);
                getCity(res.data.data.request[0].query)
                getDate(res.data.data.weather[0].date)
                getDegree(res.data.data.current_condition[0].FeelsLikeF)
                getDegreeC(res.data.data.current_condition[0].FeelsLikeC)
                getPersse(res.data.data.current_condition[0].pressure)
                getWind(res.data.data.current_condition[0].windspeedKmph)
                gethUm(res.data.data.current_condition[0].humidity)
                getDesc(res.data.data.current_condition[0].weatherDesc[0].value)
                getICo(res.data.data.current_condition[0].weatherIconUrl[0].value)
            })
            setLocation('')
        }
    }

    return (
        <>
            <div>

            </div>

            <div className={(degreeC > 16) ? 'warm' : 'app'}>
                <div className="search">
                    <input
                        value={location}
                        onChange={event => setLocation(event.target.value)}
                        onKeyPress={searchLocation}
                        placeholder='Enter Location'
                        type="text"
                        className='input' />

                </div>
                <div className="btn_container">
                    <button className='btn' onClick={position}> Get Your Location Weather</button>
                </div>
                <div className="container">
                    <div className="top">
                        <div className="location">
                            <div className='icon'>
                                {ico ? (<img src={ico} alt="icon" className='icon__img' />) : (<></>)}
                            </div>
                            <p>{cit}</p>
                            <p>{date}</p>
                        </div>
                        <div className="temp">
                            {<h1>{degreeC}°C</h1>}

                        </div>
                        <div className="description">
                            {<p>{desc}</p>}
                        </div>
                    </div>


                    <div className="bottom">
                        <div className="feels">
                        <p>Feels Like</p>
                            {<p className='bold'>{degree}°F</p>}
                            
                        </div>
                        <div className="humidity">
                        <p>Humidity</p>
                            {<p className='bold'>{humidity}%</p>}
                           
                        </div>
                        <div className="wind">
                        <p>Wind Speed</p>
                            {<p className='bold'>{widspeed} MPH</p>}
                            
                        </div>
                        <div className="wind">
                        <p>Pressure</p>
                            {<p className='bold'>{pressre} PA</p>}
                            
                        </div>
                    </div>

                </div>
            </div>
         
        </>
    )
}

export default Home