import { useStyles } from './About.style'
import Section from './../../components/Section/Section';

const About = () => {
    const classes = useStyles() 
    return (
        <Section id="about" className="about container">
            <header>
                <h2 className="section__title">About Me</h2>
                <span className="section__subtitle">My Introduction</span>
            </header>
        </Section>
    )
}

export default About