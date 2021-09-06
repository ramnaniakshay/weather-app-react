import { render } from '@testing-library/react';
import React from 'react';

const api = {
  key: "fc2c0a430753d1df77c3ce68f67540a1",
  base: "https://api.openweathermap.org/data/2.5/"

}

function App() {
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
          <div className="location-box">
            <div className="location">New South Whales, AU</div>
            <div className="date"></div>
          </div>
        </main>
      </div>
    );
  }

export default App;
