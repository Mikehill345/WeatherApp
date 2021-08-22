import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Forecast from './Components/Forecast'
import CurrentTemp from './Components/CurrentTemp';
import Header from './Components/Header'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'


function App() {

  // routes for mapping though the application
  return (
    <div className="App">
      <RecoilRoot>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path='/forecast'>
            <Forecast />
          </Route>

          <Route path='/'>
            <CurrentTemp />
          </Route>
        </Switch>
      </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
