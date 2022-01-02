import React, { useState } from 'react';

import { useStyles } from './DropdownSkills.style';

type DropdownSkillsProps = {
  children: React.ReactElement | Array<React.ReactElement>;
};

function DropdownSkills({ children }: DropdownSkillsProps) {
  const classes = useStyles();
  return <div className={classes.skills__item}>{children}</div>;
}

export default DropdownSkills;
