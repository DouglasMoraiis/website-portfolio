/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';

import { UilTimes } from '@iconscout/react-unicons';

import { useStyles } from './Modal.style';
import { myIconSizes } from '../../theme';

type ModalProps = {
  title: string;
  status: boolean;
  disable: () => void;
  children: React.ReactElement | Array<React.ReactElement>;
};

function Modal({ title, status, disable, children }: ModalProps) {
  const classes = useStyles();

  const [closeModal, setCloseModal] = useState(false);

  return (
    <div className={`${status ? classes.active : ''} ${classes.container}`}>
      <div className={classes.content}>
        <div className={classes.title}>
          <h4>{title}</h4>
          <a onClick={disable}>
            <UilTimes size={myIconSizes.big} />
          </a>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
