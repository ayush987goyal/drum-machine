import React from 'react';

import classes from './Display.module.css';

const Display = props => {
  return (
    <div id="display" className={classes.Display}>
      {props.message}
    </div>
  );
};

export default Display;
