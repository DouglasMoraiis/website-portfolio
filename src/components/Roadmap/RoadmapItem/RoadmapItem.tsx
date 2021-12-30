import React, { useState } from 'react';

import { UilCalendarAlt, UilAngleDown } from '@iconscout/react-unicons';

import { myIconSizes } from '../../../theme';
import { useStyles } from '../Roadmap.style';

type RoadmapItemProps = {
  title: string;
  subtitle: string;
  calendar: string;
  side: string;
  last?: boolean;
};

function RoadmapItem({
  title,
  subtitle,
  calendar,
  side,
  last
}: RoadmapItemProps) {
  const classes = useStyles();
  return (
    <div className={classes.qualification__data}>
      {side === 'right' ? (
        <>
          <div> </div>
          <div>
            <span className={classes.qualification__rounder} />
            {!last ? <span className={classes.qualification__line} /> : ''}
          </div>
        </>
      ) : undefined}

      <div>
        <h3 className={classes.qualification__title}>{title}</h3>
        <span className={classes.qualification__subtitle}>{subtitle}</span>
        <div className={classes.qualification__calendar}>
          <UilCalendarAlt size={myIconSizes.smaller} />
          <span>{calendar}</span>
        </div>
      </div>

      {side === 'left' ? (
        <div>
          <span className={classes.qualification__rounder} />
          {!last ? <span className={classes.qualification__line} /> : ''}
        </div>
      ) : undefined}
    </div>
  );
}

export default RoadmapItem;
