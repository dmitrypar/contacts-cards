import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './App/AppContainer';
import * as serviceWorker from './serviceWorker';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import RootReducer from './reducer'

const store = createStore(RootReducer, composeWithDevTools());

ReactDOM.render(
 <Provider store={store}>
  <AppContainer />
 </Provider>,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
