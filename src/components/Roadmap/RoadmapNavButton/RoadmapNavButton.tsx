/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';

import { myIconSizes } from '../../../theme';
import { useStyles } from '../Roadmap.style';

type RoadmapNavButtonProps = {
  title: string;
  icon: React.ReactElement;
  status: boolean;
  onClick: () => void;
};

function RoadmapNavButton({
  title,
  icon,
  status,
  onClick
}: RoadmapNavButtonProps) {
  const classes = useStyles();
  const active = status ? classes.qualification__button_active : '';
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <a
      className={`${classes.qualification__button} ${active}`}
      onClick={onClick}
    >
      {icon}
      {title}
    </a>
  );
}

export default RoadmapNavButton;
