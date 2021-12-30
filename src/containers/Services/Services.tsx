import {
  UilLinkedinAlt,
  UilGithubAlt,
  UilInstagram,
  UilMessage,
  UilMouseAlt,
  UilArrowDown
} from '@iconscout/react-unicons';

import { Section } from '../../components';
import { useStyles } from './Services.style';

function Services() {
  const classes = useStyles();

  return (
    <Section id="services" className={`${classes}`}>
      <span> </span>
    </Section>
  );
}

export default Services;
