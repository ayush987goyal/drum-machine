import React from 'react';

import classes from './DrumPads.module.css';
import DrumPad from './DrumPad/DrumPad';

const DrumPads = props => {
  const { beats } = props;

  return (
    <div className={classes.DrumPads}>
      {beats.map(beat => (
        <DrumPad key={beat.name} keyName={beat.name} audioSource={beat.source} />
      ))}
    </div>
  );
};

export default DrumPads;
