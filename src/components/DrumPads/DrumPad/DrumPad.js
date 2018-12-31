import React, { useRef, useEffect, useState } from 'react';

import classes from './DrumPad.module.css';

const DrumPad = props => {
  const { audioSource, keyName, beatPlayed } = props;

  const audioRef = useRef();
  const [activeClass, setActiveClass] = useState('');

  useEffect(
    () => {
      window.addEventListener('keydown', keydownHandle);
      return () => window.removeEventListener('keydown', keydownHandle);
    },
    [audioSource, keyName]
  );

  const playSound = () => {
    beatPlayed(keyName);
    audioRef.current.currentTime = 0;
    audioRef.current.play();
    setActiveClass(classes.ManualActive);
    setTimeout(() => setActiveClass(''), 100);
  };

  const keydownHandle = e => {
    if (e.code === `Key${keyName}`) {
      playSound();
    }
  };

  return (
    <div className="drum-pad">
      <audio
        ref={audioRef}
        src={require(`../../../assets/sounds/${audioSource}.mp3`)}
        className="clip"
        id={keyName}
      />
      <button onClick={playSound} className={[classes.DrumPadButton, activeClass].join(' ')}>
        {keyName}
      </button>
    </div>
  );
};

export default DrumPad;
