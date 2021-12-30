import React, { useState } from 'react';

import { UilBracketsCurly, UilAngleDown } from '@iconscout/react-unicons';

import { myIconSizes } from '../../../theme';
import { useStyles } from '../SkillsItem.style';

type SkillsItemContentProps = {
  className?: string;
  children: Array<React.ReactElement> | React.ReactElement;
};

function SkillsItemContent({ className, children }: SkillsItemContentProps) {
  const classes = useStyles();
  return (
    <div className={`${classes.skills__content} ${className}`}>
      <div className={`${classes.skills__list} grid`}>{children}</div>
    </div>
  );
}

export default SkillsItemContent;
