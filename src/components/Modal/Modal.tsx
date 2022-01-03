import React from 'react';

import { UilTimes } from '@iconscout/react-unicons';

import { useStyles } from './Modal.style';

type ModalProps = {
  children: React.ReactElement | Array<React.ReactElement>;
};

function Modal({ children }: ModalProps) {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <UilTimes />
      {children}
    </div>
  );
}

export default Modal;
