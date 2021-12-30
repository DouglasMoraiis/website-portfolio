import React, { useState } from 'react';

import { myIconSizes } from '../../../theme';
import { useStyles } from '../Roadmap.style';

type RoadmapNavButtonProps = {
  title: string;
  icon: React.ReactElement;
};

function RoadmapNavButton({ title, icon }: RoadmapNavButtonProps) {
  const classes = useStyles();
  return (
    <div className={classes.qualification__button}>
      {icon}
      {title}
    </div>
  );
}

export default RoadmapNavButton;
