import { UilGraduationCap, UilBriefcaseAlt } from '@iconscout/react-unicons';

import {
  Section,
  Roadmap,
  RoadmapNav,
  RoadmapNavButton,
  RoadmapContent,
  RoadmapGroup,
  RoadmapItem
} from '../../components';
import { useStyles } from './Qualification.style';

function Qualification() {
  const classes = useStyles();

  return (
    <Section id="qualification" className={classes.qualification}>
      <header>
        <h2>About Me</h2>
        <span>My Introduction</span>
      </header>

      <Roadmap>
        <RoadmapNav>
          <RoadmapNavButton title="Education" icon={<UilGraduationCap />} />
          <RoadmapNavButton title="Work" icon={<UilBriefcaseAlt />} />
        </RoadmapNav>

        <RoadmapContent>
          <RoadmapGroup id="education">
            <RoadmapItem
              title="Graduando em Ciência da Computação"
              subtitle="UFC - Campus Russas"
              calendar="2018 - 2022"
            />
            <RoadmapItem
              title="Graduando em Ciência da Computação"
              subtitle="UFC - Campus Russas"
              calendar="2018 - 2022"
            />
          </RoadmapGroup>

          <RoadmapGroup id="work">
            <RoadmapItem
              title="Graduando em Ciência da Computação"
              subtitle="UFC - Campus Russas"
              calendar="2018 - 2022"
            />
            <RoadmapItem
              title="Graduando em Ciência da Computação"
              subtitle="UFC - Campus Russas"
              calendar="2018 - 2022"
            />
          </RoadmapGroup>
        </RoadmapContent>
      </Roadmap>
    </Section>
  );
}

export default Qualification;
