import { useStyles } from "./Section.style";

type SectionProps = {
    id: string,
    className?: string,
    children: React.ReactElement | Array<React.ReactElement>,
}

const Section = ({ id, className, children } : SectionProps) => {
    const classes = useStyles() 

    return (
        <section id={id} className={`${className} ${classes.section}`} >
            {children}
        </section>  
    )
}

export default Section;