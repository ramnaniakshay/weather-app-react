import React, { useState } from 'react';
import api from './api';
import Demo2 from './Demo2'
const {format} = require('date-fns');

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = e => {
    if (e.key === "Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setQuery('');
        setWeather(result);
        console.log(result);
      });
    }
  }
  const date = new Date();
  const time = format(date, 'HH:mm');
  const today = format(date, 'MMMM do, yyyy, EEEE');

    return (
      <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app cold') : 'app'}>
        <main>
          <div className="search-box">
            <input
            type="text"
            className="search-bar"
            placeholder="Search for city..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
            />
          </div>

          {/* TODO: Needs to change so it shows major cities weather before query search */}
          <div className="date">{today}</div>
          {(typeof weather.main != "undefined") ? (
            <div>
              <div className="location-container">
                <div className="location-box">
                  <div className="location">{weather.name}, {weather.sys.country}</div>
                  <div className="time">{time}</div>
                </div>
                <div className="weather-box">
                  <div className="temp"> {Math.round(weather.main.temp)}°C</div>
                  <div className="weather"> {weather.weather[0].main} </div>
                </div>
              </div>
              <br/>
            </div>
          ) :
          // /* TODO: Add different cities to the list of weather here */
          // Sydney, Melbourne, Brisbane, Perth, Adelaide, Hobart, Canberra, Darwin
          ('')}
          <Demo2 />
        </main>
      </div>
    );
  }

export default App;
