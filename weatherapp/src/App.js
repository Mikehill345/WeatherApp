import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Forecast from './Components/Forecast'
import CurrentTemp from './Components/CurrentTemp';
import Header from './Components/Header'


function App() {

// routes for mapping though the application
  return (
    <div className="App">
      <Header />

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
