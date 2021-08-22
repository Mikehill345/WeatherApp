import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { ChakraProvider } from "@chakra-ui/react"
import { RecoilRoot } from 'recoil'

ReactDOM.render(
  <RecoilRoot>
    <ChakraProvider>
      <Router>
        <App />
      </Router>
    </ChakraProvider>
  </RecoilRoot>,
  document.getElementById('root')
);

