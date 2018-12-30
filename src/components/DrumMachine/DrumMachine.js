import React from 'react';

import classes from './DrumMachine.module.css';
import DrumPads from '../DrumPads/DrumPads';
import Display from '../Display/Display';

const DRUM_BEATS = [
  { name: 'Q', source: 'Heater-1' },
  { name: 'W', source: 'Heater-2' },
  { name: 'E', source: 'Heater-3' },
  { name: 'A', source: 'Heater-4_1' },
  { name: 'S', source: 'Cev_H2' },
  { name: 'D', source: 'Dsc_Oh' },
  { name: 'Z', source: 'Heater-6' },
  { name: 'X', source: 'Kick_n_Hat' },
  { name: 'C', source: 'RP4_KICK_1' }
];

const DrumMachine = () => {
  return (
    <div id="drum-machine" className={classes.DrumMachine}>
      <DrumPads beats={DRUM_BEATS} />
      <Display />
    </div>
  );
};

export default DrumMachine;
