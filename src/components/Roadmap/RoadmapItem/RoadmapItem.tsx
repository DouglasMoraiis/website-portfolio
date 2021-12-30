import React, { useState } from 'react';

import { UilCalendarAlt, UilAngleDown } from '@iconscout/react-unicons';

import { myIconSizes } from '../../../theme';
import { useStyles } from '../Roadmap.style';

type RoadmapItemProps = {
  title: string;
  subtitle: string;
  calendar: string;
};

function RoadmapItem({ title, subtitle, calendar }: RoadmapItemProps) {
  const classes = useStyles();
  return (
    <div className={classes.qualification__data}>
      <div>
        <h3 className={classes.qualification__title}>{title}</h3>
        <span className={classes.qualification__subtitle}>{subtitle}</span>
        <div className={classes.qualification__calendar}>
          <UilCalendarAlt />
          {calendar}
        </div>
      </div>
      <div>
        <span className={classes.qualification__rounder} />
        <span className={classes.qualification__line} />
      </div>
    </div>
  );
}

export default RoadmapItem;
