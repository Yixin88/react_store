import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NumInCart from './context/NumInCartContext';
import QueryContext from './context/QueryContext';
import ProductsContextProvider, { ProductsContext } from './context/ProductsContext';
import CategoryContext from './context/CategoryContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <ProductsContextProvider>
      <CategoryContext>
        <NumInCart>
          <QueryContext>
            <App />
          </QueryContext>
        </NumInCart>
      </CategoryContext>
    </ProductsContextProvider>
  // </React.StrictMode>
);