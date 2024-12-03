import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GlobalProvider } from './Components/utils/global.context';  // Corregido a GlobalProvider

ReactDOM.render(
  <GlobalProvider>
    <App />
  </GlobalProvider>,
  document.getElementById('root')
);
