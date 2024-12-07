import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { GlobalProvider } from './Components/utils/global.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>
);
