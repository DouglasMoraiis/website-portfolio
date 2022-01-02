import { UilBracketsCurly, UilAngleDown } from '@iconscout/react-unicons';

import { myIconSizes } from '../../../theme';
import { useStyles } from '../DropdownSkills.style';

type DropdownSkillsItemProps = {
  name: string;
  number: string;
  classNameBar?: string;
};

function DropdownSkillsItem({
  name,
  number,
  classNameBar
}: DropdownSkillsItemProps) {
  const classes = useStyles();
  return (
    <div className={classes.skills__data}>
      <div className={classes.skills__titles}>
        <h3 className={classes.skills__name}>{name}</h3>
        <span className={classes.skills__number}>{number}</span>
      </div>
      <div className={classes.skills__bar}>
        <span className={`${classes.skills__percentage} ${classNameBar}`} />
      </div>
    </div>
  );
}

export default DropdownSkillsItem;
