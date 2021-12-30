import React, { useState } from 'react';

import { UilBracketsCurly, UilAngleDown } from '@iconscout/react-unicons';

import { myIconSizes } from '../../../theme';
import { useStyles } from '../Roadmap.style';

type RoadmapGroupProps = {
  id: string;
  children: React.ReactElement | Array<React.ReactElement>;
};

function RoadmapGroup({ id, children }: RoadmapGroupProps) {
  const classes = useStyles();
  return (
    <div id={id} className={classes.qualification__content}>
      {children}
    </div>
  );
}

export default RoadmapGroup;
