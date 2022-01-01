import { UilFileDownloadAlt } from '@iconscout/react-unicons';

import { Button, Section } from '../../components';
import { myIconSizes } from '../../theme';
import { useStyles } from './Portfolio.style';

function Portfolio() {
  const classes = useStyles();
  return (
    <Section id="about" className={`${classes.about} container`}>
      <h1>h1</h1>
    </Section>
  );
}

export default Portfolio;
