import React, { useEffect } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Forecast from './Components/Forecast'
import CurrentTemp from './Components/CurrentTemp';
import { useRecoilState } from 'recoil'

import { userLong, userLat } from './utils/Atom';

// https://www.openweathermap.org/api api endpoint

/*
The user should be able to access this "5 Day Forecast" page from the "Current
Temperature" page. You may choose the navigation pattern used. For example, both
pages could be top-level tabs within your application.


Each row in the list should display:
● The forecast date and time
● The forecast temperature in Fahrenheit
● The OpenWeatherMap icon that represents the forecast weather conditions.
See https://openweathermap.org/weather-conditions for relevant documentation.
*/

function App() {


  return (
    <div className="App">
      <header>
        <h1>The Mike Hill Weather Channel</h1>
        <div>
        </div>
      </header>

      <Switch>
        <Route path='/forecast'>
          <Forecast />
        </Route>

        <Route path='/'>
          <CurrentTemp />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
