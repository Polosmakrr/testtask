import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import AgencyAxios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import './scss/main.scss';

window.AgencyAxios = AgencyAxios;
AgencyAxios.defaults.baseURL = 'https://frontend-test-assignment-api.abz.agency/api/v1/';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
