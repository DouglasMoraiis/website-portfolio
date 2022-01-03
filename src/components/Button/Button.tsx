import React from 'react';

import { useStyles } from './Button.style';

type ButtonProps = {
  href: string;
  className?: string;
  target?: string;
  download?: string;
  children?: React.ReactElement | Array<React.ReactElement>;
};

function Button({ href, className, target, download, children }: ButtonProps) {
  const classes = useStyles();

  const rel = target ? 'noreferrer noopener' : '';

  return (
    <a
      href={href}
      className={`${className} ${classes.button}`}
      target={target}
      rel={rel}
      download={download}
    >
      {children}
    </a>
  );
}

export default Button;
