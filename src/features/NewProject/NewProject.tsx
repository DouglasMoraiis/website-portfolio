import { UilMessage } from '@iconscout/react-unicons';

import newProjectImg from '../../assets/img/project.png';
import { Button, Section } from '../../components';
import { myIconSizes } from '../../theme';
import { useStyles } from './NewProject.style';

function NewProject() {
  const classes = useStyles();
  useStyles();

  return (
    <Section id="newProject" className={classes.newProject}>
      <div className={classes.project__bg}>
        <div className={`${classes.project__container} container grid`}>
          <div className={classes.project__data}>
            <h2 className={classes.project__title}>You have a new project</h2>
            <p className={classes.project__description}>
              Contact me now and get a 30% discount
            </p>
            <Button href="#contact" className={classes.button_white}>
              <span>Contact Me</span>
              <UilMessage size={myIconSizes.small} />
            </Button>
          </div>
          <img src={newProjectImg} className={classes.project__img} alt="" />
        </div>
      </div>
    </Section>
  );
}

export default NewProject;
