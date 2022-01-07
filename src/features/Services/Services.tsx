import React, { useState } from 'react';

import {
  UilWebGrid,
  UilCheckCircle,
  UilArrow,
  UilPen,
  UilArrowRight
} from '@iconscout/react-unicons';

import { ButtonLink, Section, Card, Modal } from '../../components';
import { myIconSizes } from '../../theme';
import { useStyles } from './Services.style';

function Services() {
  const classes = useStyles();

  const [stateModals, setStateModals] = useState({
    modalUIUX: false,
    modalFront: false,
    modalBranding: false
  });

  const handleActiveModal = (event: React.MouseEvent) => {
    event.preventDefault();
    const { id } = event.currentTarget;
    switch (id) {
      case 'buttonCardUiUx':
        setStateModals({ ...stateModals, modalUIUX: true });
        break;
      case 'buttonCardFront':
        setStateModals({ ...stateModals, modalFront: true });
        break;
      case 'buttonCardBranding':
        setStateModals({ ...stateModals, modalBranding: true });
        break;
      default:
        break;
    }
  };

  const handleDisableModal = () => {
    setStateModals({
      modalUIUX: false,
      modalFront: false,
      modalBranding: false
    });
  };

  return (
    <Section id="services" className={`${classes.services} container`}>
      <header>
        <h2>Services</h2>
        <span>What i offer</span>
      </header>

      <div className={`${classes.services__container} container grid`}>
        <Card
          title="UI/UX Designer"
          iconTitle={<UilWebGrid size={myIconSizes.big} />}
        >
          <span className={classes.services__button}>
            <ButtonLink onClick={handleActiveModal} id="buttonCardUiUx">
              <span>ViewMore</span>
              <UilArrowRight size={myIconSizes.small} />
            </ButtonLink>
          </span>

          <Modal
            title="Ui/Ux Designer"
            status={stateModals.modalUIUX}
            disable={handleDisableModal}
          >
            <ul className={`${classes.services__modal_ul} grid`}>
              <li className={classes.services__modal_li}>
                <UilCheckCircle size={myIconSizes.small} />
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li className={classes.services__modal_li}>
                <UilCheckCircle size={myIconSizes.small} />
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li className={classes.services__modal_li}>
                <UilCheckCircle size={myIconSizes.small} />
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li className={classes.services__modal_li}>
                <UilCheckCircle size={myIconSizes.small} />
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
            </ul>
          </Modal>
        </Card>

        <Card
          title="Frontend Developer"
          iconTitle={<UilArrow size={myIconSizes.big} />}
        >
          <span className={classes.services__button}>
            <ButtonLink onClick={handleActiveModal} id="buttonCardFront">
              <span>ViewMore</span>
              <UilArrowRight size={myIconSizes.small} />
            </ButtonLink>
          </span>

          <Modal
            title="Frontend Developer"
            status={stateModals.modalFront}
            disable={handleDisableModal}
          >
            <ul className={`${classes.services__modal_ul} grid`}>
              <li className={classes.services__modal_li}>
                <UilCheckCircle size={myIconSizes.small} />
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li className={classes.services__modal_li}>
                <UilCheckCircle size={myIconSizes.small} />
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li className={classes.services__modal_li}>
                <UilCheckCircle size={myIconSizes.small} />
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li className={classes.services__modal_li}>
                <UilCheckCircle size={myIconSizes.small} />
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
            </ul>
          </Modal>
        </Card>

        <Card
          title="Branding Designer"
          iconTitle={<UilPen size={myIconSizes.big} />}
        >
          <span className={classes.services__button}>
            <ButtonLink onClick={handleActiveModal} id="buttonCardBranding">
              <span>ViewMore</span>
              <UilArrowRight size={myIconSizes.small} />
            </ButtonLink>
          </span>

          <Modal
            title="Branding Designer"
            status={stateModals.modalBranding}
            disable={handleDisableModal}
          >
            <ul className={`${classes.services__modal_ul} grid`}>
              <li className={classes.services__modal_li}>
                <UilCheckCircle size={myIconSizes.small} />
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li className={classes.services__modal_li}>
                <UilCheckCircle size={myIconSizes.small} />
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li className={classes.services__modal_li}>
                <UilCheckCircle size={myIconSizes.small} />
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li className={classes.services__modal_li}>
                <UilCheckCircle size={myIconSizes.small} />
                <p>Lorem ipsum dolor sit amet.</p>
              </li>
            </ul>
          </Modal>
        </Card>
      </div>
    </Section>
  );
}

export default Services;
