import React from 'react';

import { useStyles } from './Card.style';

type CardProps = {
  title: string;
  iconTitle: React.ReactNode;
  children: React.ReactElement | Array<React.ReactElement>;
};

function Card({ title, iconTitle, children }: CardProps) {
  const classes = useStyles();
  return (
    <div className={`${classes.container} container grid`}>
      <h4>{title}</h4>
      {iconTitle}
      {children}
    </div>
  );
}

export default Card;
