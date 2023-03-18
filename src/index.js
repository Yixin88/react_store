import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NumInCart from './context/NumInCart';
import QueryContext from './context/QueryContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NumInCart>
      <QueryContext>
        <App />
      </QueryContext>
    </NumInCart>
  </React.StrictMode>
);