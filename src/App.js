import React from 'react';

import classes from './App.module.css';
import DrumMachine from './components/DrumMachine/DrumMachine';

const App = () => {
  return (
    <div className={classes.app}>
      <DrumMachine />
    </div>
  );
};

export default App;
