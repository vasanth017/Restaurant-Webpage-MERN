import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RestaurantProvider } from './contexts/RestaurantContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RestaurantProvider>
        <App />
    </RestaurantProvider>
);
