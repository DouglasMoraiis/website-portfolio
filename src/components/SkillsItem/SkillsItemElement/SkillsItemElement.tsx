import { useStyles } from "../SkillsItem.style";
import { UilBracketsCurly, UilAngleDown } from "@iconscout/react-unicons";
import { myIconSizes } from "../../../theme";

type SkillsItemElementProps = {
  name: string;
  number: string;
  classNameBar?: string;
};

const SkillsItemElement = ({ name, number, classNameBar }: SkillsItemElementProps) => {
  const classes = useStyles();
  return (
        <div className={classes.skills__data}>
          <div className={classes.skills__titles}>
            <h3 className={classes.skills__name}>{name}</h3>
            <span className={classes.skills__number}>{number}</span>
          </div>
          <div className={classes.skills__bar}>
            <span
              className={`${classes.skills__percentage} ${classNameBar}`}
            ></span>
          </div>
        </div>
  );
};


export default SkillsItemElement;
