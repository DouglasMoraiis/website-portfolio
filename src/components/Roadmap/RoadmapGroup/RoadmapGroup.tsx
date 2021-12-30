import React, { useState } from 'react';

import { UilBracketsCurly, UilAngleDown } from '@iconscout/react-unicons';

import { myIconSizes } from '../../../theme';
import { useStyles } from '../Roadmap.style';

type RoadmapGroupProps = {
  id: string;
  status: boolean;
  children: React.ReactElement | Array<React.ReactElement>;
};

function RoadmapGroup({ id, status, children }: RoadmapGroupProps) {
  const classes = useStyles();

  const disable = status ? '' : classes.qualification__content_disable;

  return (
    <div id={id} className={`${classes.qualification__content} ${disable}`}>
      {children}
    </div>
  );
}

export default RoadmapGroup;
