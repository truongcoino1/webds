/**
 * @flow
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app-loader';
import 'sweetalert2/dist/sweetalert2.min.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
