import { useState } from 'react';

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
import { myIconSizes } from '../../theme';
import { useStyles } from './Qualification.style';

function Qualification() {
  const classes = useStyles();
  const [statusButton1, setStatusButton1] = useState(true);
  const [statusButton2, setStatusButton2] = useState(false);

  const handleButton1 = () => {
    setStatusButton1(true);
    setStatusButton2(false);
  };

  const handleButton2 = () => {
    setStatusButton2(true);
    setStatusButton1(false);
  };

  return (
    <Section
      id="qualification"
      className={`${classes.qualification} container`}
    >
      <header>
        <h2>Qualification</h2>
        <span>My personal journey</span>
      </header>
      <Roadmap>
        <RoadmapNav>
          <RoadmapNavButton
            title="Education"
            icon={<UilGraduationCap size={myIconSizes.normal} />}
            status={statusButton1}
            onClick={handleButton1}
          />
          <RoadmapNavButton
            title="Work"
            icon={<UilBriefcaseAlt size={myIconSizes.normal} />}
            status={statusButton2}
            onClick={handleButton2}
          />
        </RoadmapNav>

        <RoadmapContent>
          <RoadmapGroup id="education" status={statusButton1}>
            <RoadmapItem
              title="Técnico em Redes de Computadores"
              subtitle="EP Júlio França - Ceará"
              calendar="2015 - 2017"
              side="left"
            />
            <RoadmapItem
              title="Graduando em Ciência da Computação"
              subtitle="Universidade Federal do Ceará"
              calendar="2018 - 2022"
              side="right"
              last
            />
          </RoadmapGroup>

          <RoadmapGroup id="work" status={statusButton2}>
            <RoadmapItem
              title="Estágio como Design Gráfico"
              subtitle="Rezult - Marketing Digital"
              calendar="2017"
              side="left"
            />
            <RoadmapItem
              title="Desenvolvedor Front-end"
              subtitle="Fundação ASTEF"
              calendar="Desde 2021"
              side="right"
              last
            />
          </RoadmapGroup>
        </RoadmapContent>
      </Roadmap>
    </Section>
  );
}

export default Qualification;
