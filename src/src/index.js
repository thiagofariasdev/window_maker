import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './scenes/Router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import {Provider} from 'react-redux';
import {store} from './lib/storage';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>
, document.getElementById('root'));
serviceWorker.unregister();
