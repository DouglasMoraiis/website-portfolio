import React from 'react';

import { useStyles } from './ButtonLink.style';

type ButtonLinkProps = {
  id?: string;
  href?: string;
  target?: string;
  className?: string;
  children: React.ReactElement | Array<React.ReactElement> | undefined;
  onClick?: (event: React.MouseEvent) => void;
};

function ButtonLink({
  id,
  href,
  target,
  className,
  children,
  onClick
}: ButtonLinkProps) {
  const classes = useStyles();

  const rel = target ? 'noreferrer noopener' : '';

  return (
    <a
      id={id}
      href={href}
      className={`${className} ${classes.button_flex} `}
      target={target}
      rel={rel}
      onClick={onClick}
    >
      {children}
    </a>
  );
}

export default ButtonLink;
