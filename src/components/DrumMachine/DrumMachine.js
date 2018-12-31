import React, { useState } from 'react';

import classes from './DrumMachine.module.css';
import DrumPads from '../DrumPads/DrumPads';
import Display from '../Display/Display';

const DRUM_BEATS = {
  Q: { name: 'Q', source: 'Heater-1' },
  W: { name: 'W', source: 'Heater-2' },
  E: { name: 'E', source: 'Heater-3' },
  A: { name: 'A', source: 'Heater-4_1' },
  S: { name: 'S', source: 'Cev_H2' },
  D: { name: 'D', source: 'Dsc_Oh' },
  Z: { name: 'Z', source: 'Heater-6' },
  X: { name: 'X', source: 'Kick_n_Hat' },
  C: { name: 'C', source: 'RP4_KICK_1' }
};

const DrumMachine = () => {
  const [playedBeat, setPlayedBeat] = useState('');

  const onBeatPlayed = beatName => setPlayedBeat(DRUM_BEATS[beatName].source);

  return (
    <div id="drum-machine" className={classes.DrumMachine}>
      <div>
        <Display message={playedBeat} />
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
