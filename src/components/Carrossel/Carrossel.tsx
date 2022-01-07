import React from 'react';

import { useStyles } from './Carrossel.style';

type CarrosselProps = {
  id: string;
  children: React.ReactElement | Array<React.ReactElement>;
};

function Carrossel({ id, children }: CarrosselProps) {
  const classes = useStyles();

  return (
    <div id={id} className={classes.content}>
      {children}
    </div>
  );
}

export default Carrossel;
