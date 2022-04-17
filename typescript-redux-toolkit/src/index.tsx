import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./Redux/Store/store"
import {Provider} from "react-redux"
import {BrowserRouter} from "react-router-dom";

const rootElement = document.getElementById('root')

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store={store}>
                  <App />
          </Provider>
      </BrowserRouter>

  </React.StrictMode>,
  rootElement
);

