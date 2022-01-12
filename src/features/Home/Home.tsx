import {
  UilLinkedinAlt,
  UilGithubAlt,
  UilInstagram,
  UilMessage,
  UilMouseAlt,
  UilArrowDown
} from '@iconscout/react-unicons';

import PerfilImg from '../../assets/img/perfil.png';
import { Button, ButtonLink, Section, SvgBlob } from '../../components';
import { myIconSizes } from '../../theme';
import { useStyles } from './Home.style';

const { REACT_APP_LINKEDIN, REACT_APP_GITHUB, REACT_APP_INSTAGRAM } =
  process.env;

function Home() {
  const classes = useStyles();
  return (
    <Section id="home" className={classes.home}>
      <div className={`${classes.home__container} container grid`}>
        <div className={`${classes.home__content} grid`}>
          <div className={`${classes.home__social}`}>
            <ButtonLink href={REACT_APP_LINKEDIN} target="_blank">
              <UilLinkedinAlt size={myIconSizes.normal} />
            </ButtonLink>

            <ButtonLink href={REACT_APP_GITHUB} target="_blank">
              <UilGithubAlt size={myIconSizes.normal} />
            </ButtonLink>

            <ButtonLink href={REACT_APP_INSTAGRAM} target="_blank">
              <UilInstagram size={myIconSizes.normal} />
            </ButtonLink>
          </div>

          <div className={classes.home__img}>
            <SvgBlob
              hrefTagImage={PerfilImg}
              classBlob={classes.home__blob}
              classImage={classes.home__blob_img}
            />
          </div>

          <div className={classes.home__data}>
            <h1 className={classes.home__title}>Hi, Iam Douglas</h1>
            <h3 className={classes.home__subtitle}>Frontend Developer</h3>
            <p className={classes.home__description}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam,
              incidunt!
            </p>
            <Button href="#contact">
              <span>Contact Me</span>
              <UilMessage size={myIconSizes.small} />
            </Button>
          </div>
        </div>

        <div className={classes.home__scroll}>
          <ButtonLink href="#about" className={classes.home__scroll_button}>
            <UilMouseAlt size={myIconSizes.big} />
            <span className={classes.home__scroll_name}>Scroll down</span>
            <UilArrowDown size={myIconSizes.small} />
          </ButtonLink>
        </div>
      </div>
    </Section>
  );
}

export default Home;
