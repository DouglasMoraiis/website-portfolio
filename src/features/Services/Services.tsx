import {
  UilWebGrid,
  UilCheckCircle,
  UilInstagram,
  UilMessage,
  UilMouseAlt,
  UilArrowRight
} from '@iconscout/react-unicons';

import { ButtonLink, Section, Card, Modal } from '../../components';
import { useStyles } from './Services.style';

function Services() {
  const classes = useStyles();

  return (
    <Section id="services" className={`${classes}`}>
      <header>
        <h2>Services</h2>
        <span>What i offer</span>
      </header>

      <Card title="Ui/Ux Designer" iconTitle={<UilWebGrid />}>
        <ButtonLink href="#" className={classes.services__button}>
          <span>ViewMore</span>
          <UilArrowRight />
        </ButtonLink>

        <Modal>
          <ul className={`${classes.services__modal_services} grid`}>
            <li className={classes.services__modal_service}>
              <UilCheckCircle />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li className={classes.services__modal_service}>
              <UilCheckCircle />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li className={classes.services__modal_service}>
              <UilCheckCircle />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li className={classes.services__modal_service}>
              <UilCheckCircle />
              <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
        </Modal>
      </Card>
    </Section>
  );
}

export default Services;
