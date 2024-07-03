import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Optional: Create this for any global styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const rootElement = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
