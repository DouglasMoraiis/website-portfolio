/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

import { UilBracketsCurly, UilAngleDown } from '@iconscout/react-unicons';

import { myIconSizes } from '../../../theme';
import { useStyles } from '../DropdownSkills.style';

type DropdownSkillsHeaderProps = {
  title: string;
  subtitle: string;
  icon: React.ReactElement;
  className: string;
  toggleItem: () => void;
};

function DropdownSkillsHeader({
  title,
  subtitle,
  icon,
  className,
  toggleItem
}: DropdownSkillsHeaderProps) {
  const classes = useStyles();
  return (
    <div
      onKeyPress={toggleItem}
      className={`${classes.skills__header} ${className}`}
      onClick={toggleItem}
    >
      {icon}
      <div>
        <h1 className={classes.skills__title}>{title}</h1>
        <span className={classes.skills__subtitle}>{subtitle}</span>
      </div>
      <UilAngleDown size={myIconSizes.big} />
    </div>
  );
}

export default DropdownSkillsHeader;
