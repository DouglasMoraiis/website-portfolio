import React from 'react';

import { Header, Main } from '..';

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
