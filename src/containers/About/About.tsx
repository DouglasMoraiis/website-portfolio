import { UilFileDownloadAlt } from '@iconscout/react-unicons';
import Section from '../../components/Section/Section';
import Button from '../../components/Button/Button';
import { useStyles } from './About.style';
import { myIconSizes } from '../../theme';

import aboutImg from '../../assets/img/about.jpg';
import cvPDF from '../../assets/pdf/Alexa-Cv.pdf';

function About() {
  const classes = useStyles();
  return (
    <Section id="about" className={` ${classes.about} container`}>
      <header>
        <h2>About Me</h2>
        <span>My Introduction</span>
      </header>
      <div className={`${classes.about__container} grid container`}>
        <img
          src={aboutImg}
          alt="About section"
          className={classes.about__img}
        />
        <div className={classes.about__data}>
          <p className={classes.about__description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            doloremque perferendis minus, voluptatem veritatis suscipit, amet ex
            adipisci, vel numquam esse nulla? Nam aperiam quisquam placeat, non
            quod ullam. Eius.
          </p>
          <div className={classes.about__info}>
            <div>
              <span className={classes.about__info_title}>08+</span>
              <span className={classes.about__info_name}>
                Years <br /> experience
              </span>
            </div>
            <div>
              <span className={classes.about__info_title}>20+</span>
              <span className={classes.about__info_name}>
                Complete <br /> project
              </span>
            </div>
            <div>
              <span className={classes.about__info_title}>05+</span>
              <span className={classes.about__info_name}>
                Companies <br /> worked
              </span>
            </div>
          </div>
          <div className={classes.about__buttons}>
            <Button download="" href={cvPDF}>
              <span>Download CV</span>
              <UilFileDownloadAlt size={myIconSizes.small} />
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default About;
