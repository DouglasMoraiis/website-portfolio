import React, { useState } from 'react';

import { UilBracketsCurly, UilAngleDown } from '@iconscout/react-unicons';

import { myIconSizes } from '../../../theme';
import { useStyles } from '../Roadmap.style';

type RoadmapContentProps = {
  children: React.ReactElement | Array<React.ReactElement>;
};

function RoadmapContent({ children }: RoadmapContentProps) {
  const classes = useStyles();
  return <div className={classes.qualification__sections}>{children}</div>;
}

export default RoadmapContent;
