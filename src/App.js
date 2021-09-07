import React, { useState } from 'react';
const {format} = require('date-fns');

const api = {
  key: "fc2c0a430753d1df77c3ce68f67540a1",
  base: "https://api.openweathermap.org/data/2.5/"

}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(result => {
        setQuery('');
        setWeather(result);
      });
    }
  }
  const date = new Date();
  const time = format(date, 'HH:mm');
  const today = format(date, 'MMMM do, yyyy, EEEE');

    return (
      <div className="app">
        <main>
          <div className="search-box">
            <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
            />
          </div>
          {/* TODO: Add different cities to the list of weather */}
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
            </div>
          ) : ('')}
        </main>
      </div>
    );
  }

export default App;
