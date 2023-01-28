import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ItemsProvider } from './context/ItemsContext';
import { ModalProvider } from './context/ModalContext'

const root = ReactDOM.createRoot(document.getElementById('root'));

//As it is a simple app, I just decided to wrapp whole App component within Providers

root.render(
  <React.StrictMode>
    <ItemsProvider>
      < ModalProvider>
        <App />
      </ModalProvider>
    </ItemsProvider >
  </React.StrictMode >
);

reportWebVitals();
