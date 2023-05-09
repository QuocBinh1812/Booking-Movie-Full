import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import { store } from './redux/ConfigStore';
//antd
import "antd/dist/antd.css";
//react slick
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// import i18n (needs to be bundled ;)) 
import './i18n';



  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );

reportWebVitals();
