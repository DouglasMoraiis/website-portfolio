import { useStyles } from "../SkillsItem.style";
import { UilBracketsCurly, UilAngleDown } from "@iconscout/react-unicons";
import { myIconSizes } from "../../../theme";

type SkillsItemHeaderProps = {
  title: string;
  subtitle: string;
  icon: React.ReactElement;  
  className: string;
  toggleItem: () => void;  
};

const SkillsItemHeader = ({ title, subtitle, icon, className, toggleItem }: SkillsItemHeaderProps) => {
  const classes = useStyles();
  return (
    <div className={`${classes.skills__header} ${className}`} onClick={toggleItem}>
      {icon}
      <div>
        <h1 className={classes.skills__title}>{title}</h1>
        <span className={classes.skills__subtitle}>{subtitle}</span>
      </div>
      <UilAngleDown size={myIconSizes.big} />
    </div>
  );
};

export default SkillsItemHeader;
