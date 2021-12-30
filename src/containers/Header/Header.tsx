import { NavMenu } from '../../components';
import { useStyles } from './Header.style';

function Header() {
  const classes = useStyles();

  return (
    <header className={classes.header} id="header">
      <NavMenu />
    </header>
  );
}

export default Header;
