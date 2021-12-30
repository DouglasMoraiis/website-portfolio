import React, { useState } from 'react';

import { UilBracketsCurly, UilAngleDown } from '@iconscout/react-unicons';

import { myIconSizes } from '../../theme';
import { useStyles } from './SkillsItem.style';

type SkillsItemProps = {
  children: React.ReactElement | Array<React.ReactElement>;
};

function SkillsItem({ children }: SkillsItemProps) {
  const classes = useStyles();
  return <div className={classes.skills__item}>{children}</div>;
}

export default SkillsItem;
