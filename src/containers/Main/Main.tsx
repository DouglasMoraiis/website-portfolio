import Home from "../Home/Home";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Services from "../Services/Services";

import { useStyles } from "../Main/Main.style";

const Main = () => {
  const classes = useStyles();
  return (
    <main className={classes.main}>
      {/* <Home/> */}
      {/* <About/> */}
      <Skills />
      <Services />
      {/* <Portfolio /> */}
      {/* <Contact /> */}
    </main>
  );
};

export default Main;