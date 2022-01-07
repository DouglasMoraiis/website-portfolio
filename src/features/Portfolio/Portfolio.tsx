import { UilFileDownloadAlt } from '@iconscout/react-unicons';

import { Button, Section, Carrossel, CarrosselItem } from '../../components';
import { myIconSizes } from '../../theme';
import { useStyles } from './Portfolio.style';

function Portfolio() {
  const classes = useStyles();
  return (
    <Section id="portifolio" className={`${classes.about} container`}>
      <header>
        <h2>Portfolio</h2>
        <span>My recents works</span>
      </header>

      <Carrossel id="carrosselPortifolio">
        <CarrosselItem
          id="modernWebsite"
          title="Modern Website"
          description="Website adaptable to all devices, with and animated interactions"
        />
      </Carrossel>
    </Section>
  );
}

export default Portfolio;
