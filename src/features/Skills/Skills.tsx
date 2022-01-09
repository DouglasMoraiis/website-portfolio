import { useState } from 'react';

import {
  UilBracketsCurly,
  UilServerNetwork,
  UilSwatchbook
} from '@iconscout/react-unicons';

import {
  Section,
  DropdownSkills,
  DropdownSkillsHeader,
  DropdownSkillsContent,
  DropdownSkillsItem
} from '../../components';
import { myIconSizes } from '../../theme';
import { useStyles } from './Skills.style';

function Skills() {
  const classes = useStyles();

  const [skillsItem1, setSkillsItem1] = useState(false);
  const [skillsItem2, setSkillsItem2] = useState(false);
  const [skillsItem3, setSkillsItem3] = useState(false);

  const toggleSkillsItem1 = () => {
    setSkillsItem1(!skillsItem1);
    setSkillsItem2(false);
    setSkillsItem3(false);
  };

  const toggleSkillsItem2 = () => {
    setSkillsItem2(!skillsItem2);
    setSkillsItem1(false);
    setSkillsItem3(false);
  };

  const toggleSkillsItem3 = () => {
    setSkillsItem3(!skillsItem3);
    setSkillsItem1(false);
    setSkillsItem2(false);
  };

  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="My Technical level"
      className={classes.skills}
    >
      <header>
        <h2>Skills</h2>
        <span>My Technical level</span>
      </header>
      <div className={`${classes.skills__container} grid container`}>
        <div>
          <DropdownSkills>
            <DropdownSkillsHeader
              toggleItem={toggleSkillsItem1}
              className={
                skillsItem1
                  ? classes.skills__icon_open
                  : classes.skills__icon_close
              }
              title="Frontend developer"
              subtitle="More than 4 years"
              icon={<UilBracketsCurly size={myIconSizes.big} />}
            />

            <DropdownSkillsContent
              className={
                skillsItem1 ? classes.skills__open : classes.skills__close
              }
            >
              <DropdownSkillsItem
                name="HTML"
                number="85%"
                classNameBar={classes.skills__html}
              />
              <DropdownSkillsItem
                name="CSS"
                number="90%"
                classNameBar={classes.skills__css}
              />
              <DropdownSkillsItem
                name="JavaScript"
                number="80%"
                classNameBar={classes.skills__js}
              />
            </DropdownSkillsContent>
          </DropdownSkills>

          <DropdownSkills>
            <DropdownSkillsHeader
              toggleItem={toggleSkillsItem2}
              className={
                skillsItem2
                  ? classes.skills__icon_open
                  : classes.skills__icon_close
              }
              title="Backend developer"
              subtitle="More than 2 years"
              icon={<UilServerNetwork size={myIconSizes.big} />}
            />
            <DropdownSkillsContent
              className={
                skillsItem2 ? classes.skills__open : classes.skills__close
              }
            >
              <DropdownSkillsItem
                name="Node.js"
                number="50%"
                classNameBar={classes.skills__node}
              />
              <DropdownSkillsItem
                name="MongoDB"
                number="70%"
                classNameBar={classes.skills__mongo}
              />
              <DropdownSkillsItem
                name="PostgreSQL"
                number="40%"
                classNameBar={classes.skills__postgreSQL}
              />
            </DropdownSkillsContent>
          </DropdownSkills>

          <DropdownSkills>
            <DropdownSkillsHeader
              toggleItem={toggleSkillsItem3}
              className={
                skillsItem3
                  ? classes.skills__icon_open
                  : classes.skills__icon_close
              }
              title="Designer"
              subtitle="More than 5 years"
              icon={<UilSwatchbook size={myIconSizes.big} />}
            />
            <DropdownSkillsContent
              className={
                skillsItem3 ? classes.skills__open : classes.skills__close
              }
            >
              <DropdownSkillsItem
                name="Figma"
                number="85%"
                classNameBar={classes.skills__figma}
              />
              <DropdownSkillsItem
                name="Illustrator"
                number="95%"
                classNameBar={classes.skills__illustrator}
              />
              <DropdownSkillsItem
                name="Photoshop"
                number="90%"
                classNameBar={classes.skills__photoshop}
              />
            </DropdownSkillsContent>
          </DropdownSkills>
        </div>
      </div>
    </Section>
  );
}

export default Skills;
