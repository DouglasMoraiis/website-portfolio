import Home from '../Home/Home';
import About from '../About/About';
//import Skills from './../../components/Skills/Skills';
//import Services from './../../components/Services/Services';
//import Portfolio from './../../components/Portfolio/Portfolio';
//import Contact from './../../components/Contact/Contact';

import { useStyles } from '../Main/Main.style';


const Main = () => {
    const classes = useStyles()
    return (
        <main className={classes.main}>
            <Home/>
            {/* <About/> */}
            {/* <Skills /> */}
            {/* <Services /> */}
            {/* <Portfolio /> */}
            {/* <Contact /> */}
        </main>
    )
}

export default Main;