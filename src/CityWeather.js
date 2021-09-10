import React,{useState,useEffect} from 'react'
import axios from "axios"
const {format} = require('date-fns');

const CityWeather = ({city}) => {
	const [data, setCityData] = useState("");
    useEffect(() => {
  	const callApi = async () => {
          const API_KEY= "fc2c0a430753d1df77c3ce68f67540a1";
    	const URL = (`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`)
            let response = await axios.get(URL);
            let res  = response.data;
            //console.log(res);
            setCityData(res);
    }
    callApi();
  }, []);
  const date = new Date();
  const time = format(date, 'HH:mm');
  const today = format(date, 'MMMM do, yyyy, EEEE');
	return (
  	<div>
      {data && data.weather.length > 0 && (
        <>
        <div className="location-container">
                <div className="location-box">
                  <div className="location">{data.name}, {data.sys.country}</div>
                  <div className="time">{time}</div>
                </div>
                <div className="weather-box">
                  <div className="temp"> {Math.round(data.main.temp)}°C</div>
                  <div className="weather"> {data.weather[0].description} </div>
                </div>
        </div>
        <br/>
        </>
      )}
      {data && data.weather.length == 0 && (
              <>
        Weather Data not available for {city}
                </>
      )}

    </div>
  )
}
export default CityWeather;