import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from "./store/index";
import AppRoutes from './routes';
import './index.css';

ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  </React.Fragment>,
  document.getElementById('root')
);