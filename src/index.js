import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import CryptoTrackerApp from './components/CryptoTrackerApp';

ReactDOM.render(
    <Provider store={store}>
      <CryptoTrackerApp />
    </Provider>,
     document.getElementById('root'));
