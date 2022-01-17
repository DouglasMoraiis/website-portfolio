import {
  About,
  Home,
  Qualification,
  Services,
  Portfolio,
  Contact,
  Skills,
  NewProject,
  Testimonial
} from '../../features';
import { useStyles } from './Main.style';

function Main() {
  const classes = useStyles();
  return (
    <main className={classes.main}>
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Services />
      <Portfolio />
      <NewProject />
      <Testimonial />
      {/* <Contact /> */}
    </main>
  );
}

export default Main;
