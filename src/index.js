import React from 'react';
import ReactDOM from 'react-dom';
import CryptoTrackerApp from './components/CryptoTrackerApp';

function App() {
  return (
    <React.Fragment>
      <CryptoTrackerApp />
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
