import React from 'react';

import Header from '../../containers/Header/Header';
import Main from '../../containers/Main/Main';
import useStyles from './App.style';

function App() {
  useStyles();
  return (
    <>
      <Header />
      <Main />
      {/* <Footer /> */}
    </>
  );
}

export default App;
