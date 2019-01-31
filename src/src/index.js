import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './router/Router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Routes />, document.getElementById('root'));
serviceWorker.unregister();
