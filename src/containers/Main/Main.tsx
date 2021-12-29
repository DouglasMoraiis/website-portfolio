import Home from '../Home/Home';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Qualification from '../Qualification/Qualification';
import Services from '../Services/Services';

import { useStyles } from './Main.style';

function Main() {
  const classes = useStyles();
  return (
    <main className={classes.main}>
      {/* <Home /> */}
      {/* <About /> */}
      {/* <Skills /> */}
      <Qualification />
      {/* <Services /> */}
      {/* <Portfolio /> */}
      {/* <Contact /> */}
    </main>
  );
}

export default Main;
