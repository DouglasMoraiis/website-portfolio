import React from 'react';
import ReactDOM from 'react-dom';

import { CssBaseline } from '@material-ui/core';

import App from './containers/App/App';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline>
      <App />
    </CssBaseline>
  </React.StrictMode>,
  document.getElementById('root')
);
