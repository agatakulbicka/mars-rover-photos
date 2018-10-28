import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import App from "./app/App";
import rootReducer from './rootReducer';

const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Provider store={store}>
       <App/>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
