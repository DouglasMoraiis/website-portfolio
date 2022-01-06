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
    <div className={classes.content}>
      <span className={classes.icon}>{iconTitle}</span>
      <h3 className={classes.title}>{title}</h3>
      {children}
    </div>
  );
}

export default Card;
