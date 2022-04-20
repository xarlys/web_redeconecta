import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './global/styles';

import Routes from './routes';


const App: React.FC = () => (
  <BrowserRouter>         
    <Routes />  
    <GlobalStyles />
  </BrowserRouter>
);

export default App;
