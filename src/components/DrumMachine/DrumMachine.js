import React from 'react';

import classes from './DrumMachine.module.css';
import DrumPads from '../DrumPads/DrumPads';
import Display from '../Display/Display';

const DrumMachine = () => {
  return (
    <div id="drum-machine" className={classes.DrumMachine}>
      <DrumPads />
      <Display />
    </div>
  );
};

export default DrumMachine;
