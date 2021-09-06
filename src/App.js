import React from 'react';
const {format} = require('date-fns');

const api = {
  key: "fc2c0a430753d1df77c3ce68f67540a1",
  base: "https://api.openweathermap.org/data/2.5/"

}

function App() {
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
            />
          </div>
          <div className="date">{today}</div>
          <div className="location-container">
            <div className="location-box">
              <div className="location">New South Whales, AU</div>
              <div className="time">{time}</div>
            </div>
            <div className="weather-box">
              <div className="temp"> 15°C </div>
              <div className="weather"> Sunny </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

export default App;
