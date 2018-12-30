import React, { useRef, useEffect } from 'react';

const DrumPad = props => {
  const { audioSource, keyName } = props;

  const audioRef = useRef();
  const buttonRef = useRef();

  useEffect(
    () => {
      window.addEventListener('keydown', keydownHandle);
      return () => window.removeEventListener('keydown', keydownHandle);
    },
    [audioSource, keyName]
  );

  const playSound = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };
  const keydownHandle = e => {
    if (e.code === `Key${keyName}`) {
      buttonRef.current.click();
    }
  };

  return (
    <div className="drum-pad" id={keyName}>
      <audio ref={audioRef} src={require(`../../../assets/sounds/${audioSource}.mp3`)} />
      <button ref={buttonRef} onClick={playSound}>
        {keyName}
      </button>
    </div>
  );
};

export default DrumPad;
