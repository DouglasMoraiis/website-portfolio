import { UilFileDownloadAlt } from '@iconscout/react-unicons';

import aboutImg from '../../assets/img/about.jpg';
import cvPDF from '../../assets/pdf/Alexa-Cv.pdf';
import { Button, Section } from '../../components';
import { myIconSizes } from '../../theme';
import { useStyles } from './About.style';

function About() {
  const classes = useStyles();
  return (
    <Section
      id="about"
      title="About Me"
      subtitle="My Introduction"
      className={classes.about}
    >
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
