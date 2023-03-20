import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NumInCart from './context/NumInCart';
import QueryContext from './context/QueryContext';
import ProductsContextProvider from './context/ProductsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductsContextProvider>
      <NumInCart>
        <QueryContext>
          <App />
        </QueryContext>
      </NumInCart>
    </ProductsContextProvider>
  </React.StrictMode>
);