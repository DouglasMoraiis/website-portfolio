import {
  UilGraduationCap,
  UilBriefcaseAlt,
  UilCalendarAlt
} from '@iconscout/react-unicons';
import Section from '../../components/Section/Section';
import { useStyles } from './Qualification.style';

function Qualification() {
  const classes = useStyles();

  return (
    <Section id="qualification" className={classes.qualification}>
      <header>
        <h2>About Me</h2>
        <span>My Introduction</span>
      </header>

      <div className={`${classes.qualification__container} container`}>
        <div className={classes.qualification_tabs}>
          <div className={`${classes.qualification__button} button-flex`}>
            <UilGraduationCap />
            Education
          </div>

          <div className={`${classes.qualification__button} button-flex`}>
            <UilBriefcaseAlt />
            Work
          </div>
        </div>

        <div className={classes.qualification__sections}>
          <div className={classes.qualification__content}>
            <div className={classes.qualification__data}>
              <div>
                <h3 className={classes.qualification__title}>
                  Graduando em Ciência da Computação
                </h3>
                <span className={classes.qualification__subtitle}>
                  UFC - Campus Russas
                </span>
                <div className={classes.qualification__calendar}>
                  <UilCalendarAlt />
                  2018 - 2022
                </div>
              </div>

              <div>
                <span className={qualification__rounder} />
                <span className={qualification__line} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Qualification;
