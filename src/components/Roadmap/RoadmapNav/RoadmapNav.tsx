import React, { useState } from 'react';

import { myIconSizes } from '../../../theme';
import { useStyles } from '../Roadmap.style';

type RoadmapNavProps = {
  children: Array<React.ReactElement> | React.ReactElement;
};

function RoadmapNav({ children }: RoadmapNavProps) {
  const classes = useStyles();
  return <div className={classes.qualification__tabs}>{children}</div>;
}

export default RoadmapNav;
