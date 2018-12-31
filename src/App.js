import React from 'react';

import classes from './App.module.css';
import DrumMachine from './components/DrumMachine/DrumMachine';

const App = () => {
  return (
    <div className={classes.App}>
      <h1 className={classes.Title}>The Drum Machine</h1>
      <DrumMachine />
    </div>
  );
};

export default App;
