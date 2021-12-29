import { useStyles } from './Header.style';
import NavMenu from '../../components/NavMenu/NavMenu';

function Header() {
  const classes = useStyles();

  return (
    <header className={classes.header} id="header">
      <NavMenu />
    </header>
  );
}

export default Header;
