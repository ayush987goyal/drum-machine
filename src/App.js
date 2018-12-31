import React from 'react';

import classes from './App.module.css';
import DrumMachine from './components/DrumMachine/DrumMachine';

const App = () => {
  return (
    <div className={classes.app}>
      <h1 className={classes.title}>The Drum Machine</h1>
      <DrumMachine />
    </div>
  );
};

export default App;
