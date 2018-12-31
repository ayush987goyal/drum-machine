import React, { useState } from 'react';

import classes from './DrumMachine.module.css';
import DrumPads from '../DrumPads/DrumPads';
import Display from '../Display/Display';

const DRUM_BEATS = {
  Q: { name: 'Q', source: 'Heater-1', title: 'Heater 1' },
  W: { name: 'W', source: 'Heater-2', title: 'Heater 2' },
  E: { name: 'E', source: 'Heater-3', title: 'Heater 3' },
  A: { name: 'A', source: 'Heater-4_1', title: 'Heater 4' },
  S: { name: 'S', source: 'Heater-6', title: 'Clap' },
  D: { name: 'D', source: 'Dsc_Oh', title: 'Open HH' },
  Z: { name: 'Z', source: 'Kick_n_Hat', title: `Kick n' Hat` },
  X: { name: 'X', source: 'RP4_KICK_1', title: 'Kick' },
  C: { name: 'C', source: 'Cev_H2', title: 'Closed HH' }
};

const DrumMachine = () => {
  const [playedBeatTitle, setPlayedBeatTitle] = useState('Play a Beat!');

  const onBeatPlayed = beatName => setPlayedBeatTitle(DRUM_BEATS[beatName].title);

  return (
    <div id="drum-machine" className={classes.DrumMachine}>
      <div>
        <Display message={playedBeatTitle} />
      </div>
      <div>
        <DrumPads
          beats={Object.keys(DRUM_BEATS).map(k => DRUM_BEATS[k])}
          beatPlayed={onBeatPlayed}
        />
      </div>
    </div>
  );
};

export default DrumMachine;
