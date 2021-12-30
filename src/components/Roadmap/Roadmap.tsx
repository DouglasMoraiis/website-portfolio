import React from 'react';

import { UilBracketsCurly, UilAngleDown } from '@iconscout/react-unicons';

import { myIconSizes } from '../../theme';
import { useStyles } from './Roadmap.style';

type RoadmapProps = {
  children: React.ReactElement | Array<React.ReactElement>;
};

function Roadmap({ children }: RoadmapProps) {
  const classes = useStyles();
  return (
    <div className={`${classes.qualification__container} container`}>
      {children}
    </div>
  );
}

export default Roadmap;
