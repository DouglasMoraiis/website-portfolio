import React from 'react';
import { useStyles } from './Button.style';

type ButtonLinkProps = {
  href: string | undefined;
  className?: string;
  target?: string;
  download?: string;
  children?: React.ReactElement | Array<React.ReactElement>;
};

function ButtonLink({
  href,
  className,
  target,
  download,
  children
}: ButtonLinkProps) {
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

export default ButtonLink;
