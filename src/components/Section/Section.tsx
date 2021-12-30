import React from 'react';

import { useStyles } from './Section.style';

type SectionProps = {
  id: string;
  className: string | undefined;
  children: React.ReactElement | Array<React.ReactElement>;
};

function Section({ id, className, children }: SectionProps) {
  const classes = useStyles();

  return (
    <section id={id} className={`${className} ${classes.section}`}>
      {children}
    </section>
  );
}

export default Section;
