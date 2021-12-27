import { useStyles } from './Button.style'

type ButtonLinkProps = {
  href: string | undefined;
  className?: string;
  target?: string;
  children?: React.ReactElement | Array<React.ReactElement>;
};

const ButtonLink = ({ href, className, target, children }: ButtonLinkProps) => {
  
  const classes = useStyles()

  const rel = target ? "noreferrer noopener" : "";

  return (
    <a
      href={href}
      className={`${className} ${classes.button}`}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  );
};

export default ButtonLink;
