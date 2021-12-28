import { useStyles } from "./SkillsItem.style";
import { UilBracketsCurly, UilAngleDown } from "@iconscout/react-unicons";
import { useState } from "react";
import { myIconSizes } from "../../theme";

type SkillsItemProps = {
  children: React.ReactElement | Array<React.ReactElement>
}
 
const SkillsItem = ({children} : SkillsItemProps) => {
  const classes = useStyles();
  return (
    <div className={classes.skills__item}>
      {children}
    </div>
  );
};

export default SkillsItem;
