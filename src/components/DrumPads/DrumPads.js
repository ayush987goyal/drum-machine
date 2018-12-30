import React from 'react';

import DrumPad from './DrumPad/DrumPad';

const DrumPads = props => {
  const { beats } = props;

  return (
    <>
      {beats.map(beat => (
        <DrumPad key={beat.name} keyName={beat.name} audioSource={beat.source} />
      ))}
    </>
  );
};

export default DrumPads;
