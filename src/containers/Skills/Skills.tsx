import { useState } from 'react';

import {
  UilBracketsCurly,
  UilServerNetwork,
  UilSwatchbook
} from '@iconscout/react-unicons';

import {
  Button,
  Section,
  SkillsItem,
  SkillsItemContent,
  SkillsItemElement,
  SkillsItemHeader
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
    <Section id="skills" className={`${classes.skills} container`}>
      <header>
        <h2>Skills</h2>
        <span>My Technical level</span>
      </header>
      <div className={`${classes.skills__container} grid container`}>
        <div>
          <SkillsItem>
            <SkillsItemHeader
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

            <SkillsItemContent
              className={
                skillsItem1 ? classes.skills__open : classes.skills__close
              }
            >
              <SkillsItemElement
                name="HTML"
                number="85%"
                classNameBar={classes.skills__html}
              />
              <SkillsItemElement
                name="CSS"
                number="90%"
                classNameBar={classes.skills__css}
              />
              <SkillsItemElement
                name="JavaScript"
                number="80%"
                classNameBar={classes.skills__js}
              />
            </SkillsItemContent>
          </SkillsItem>

          <SkillsItem>
            <SkillsItemHeader
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
            <SkillsItemContent
              className={
                skillsItem2 ? classes.skills__open : classes.skills__close
              }
            >
              <SkillsItemElement
                name="Node.js"
                number="50%"
                classNameBar={classes.skills__node}
              />
              <SkillsItemElement
                name="MongoDB"
                number="70%"
                classNameBar={classes.skills__mongo}
              />
              <SkillsItemElement
                name="PostgreSQL"
                number="40%"
                classNameBar={classes.skills__postgreSQL}
              />
            </SkillsItemContent>
          </SkillsItem>

          <SkillsItem>
            <SkillsItemHeader
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
            <SkillsItemContent
              className={
                skillsItem3 ? classes.skills__open : classes.skills__close
              }
            >
              <SkillsItemElement
                name="Figma"
                number="85%"
                classNameBar={classes.skills__figma}
              />
              <SkillsItemElement
                name="Illustrator"
                number="95%"
                classNameBar={classes.skills__illustrator}
              />
              <SkillsItemElement
                name="Photoshop"
                number="90%"
                classNameBar={classes.skills__photoshop}
              />
            </SkillsItemContent>
          </SkillsItem>
        </div>
      </div>
    </Section>
  );
}

export default Skills;
