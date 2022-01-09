import React from 'react';

import { useStyles } from './Section.style';

type SectionProps = {
  id?: string;
  className?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
};

function Section({ id, className, title, subtitle, children }: SectionProps) {
  const classes = useStyles();

  return (
    <section id={id} className={`${className} ${classes.container}`}>
      <header>
        <h2 className={classes.headerTitle}>{title}</h2>
        <span className={classes.headerSubtitle}>{subtitle}</span>
      </header>
      {children}
    </section>
  );
}

export default Section;
