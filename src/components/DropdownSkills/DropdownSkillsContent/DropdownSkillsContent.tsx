import React, { useState } from 'react';

import { UilBracketsCurly, UilAngleDown } from '@iconscout/react-unicons';

import { myIconSizes } from '../../../theme';
import { useStyles } from '../DropdownSkills.style';

type DropdownSkillsContentProps = {
  className?: string;
  children: Array<React.ReactElement> | React.ReactElement;
};

function DropdownSkillsContent({
  className,
  children
}: DropdownSkillsContentProps) {
  const classes = useStyles();
  return (
    <div className={`${classes.skills__content} ${className}`}>
      <div className={`${classes.skills__list} grid`}>{children}</div>
    </div>
  );
}

export default DropdownSkillsContent;
