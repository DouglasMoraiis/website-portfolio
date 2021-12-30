import { useState } from 'react';

import {
  UilEstate,
  UilUser,
  UilFileAlt,
  UilBriefcaseAlt,
  UilScenery,
  UilMessage,
  UilTimes,
  UilApps
} from '@iconscout/react-unicons';

import { myIconSizes } from '../../theme';
import { useStyles } from './NavMenu.style';

function NavMenu() {
  const classes = useStyles();
  const [navMenu, setNavMenu] = useState(false);

  const toggleMenu = () => {
    setNavMenu(!navMenu);
  };

  return (
    <nav className={`${classes.nav} container`}>
      <a href="#home" className={classes.nav__logo}>
        Douglas
      </a>
      <div
        className={`${classes.nav__menu} ${
          navMenu ? classes.menu_actived : ''
        }`}
        id="nav-menu"
      >
        <ul className={`${classes.nav__list} grid`}>
          <li>
            <a href="#home" className={classes.nav__link} onClick={toggleMenu}>
              <UilEstate size={myIconSizes.normal} />
              Home
            </a>
          </li>
          <li>
            <a href="#about" className={classes.nav__link} onClick={toggleMenu}>
              <UilUser size={myIconSizes.normal} />
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={classes.nav__link}
              onClick={toggleMenu}
            >
              <UilFileAlt size={myIconSizes.normal} />
              Skills
            </a>
          </li>
          <li>
            <a
              href="#services"
              className={classes.nav__link}
              onClick={toggleMenu}
            >
              <UilBriefcaseAlt size={myIconSizes.normal} />
              Services
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className={classes.nav__link}
              onClick={toggleMenu}
            >
              <UilScenery size={myIconSizes.normal} />
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={classes.nav__link}
              onClick={toggleMenu}
            >
              <UilMessage size={myIconSizes.normal} />
              Contact
            </a>
          </li>
        </ul>

        <div
          role="button"
          className={classes.nav__close}
          id="nav-close"
          onClick={toggleMenu}
          onKeyPress={toggleMenu}
          tabIndex={0}
        >
          <UilTimes size={myIconSizes.bigger} />
        </div>
      </div>
      <div>
        <div
          role="button"
          className={classes.nav__toggle}
          id="nav-toggle"
          onClick={toggleMenu}
          onKeyPress={toggleMenu}
          tabIndex={0}
        >
          <UilApps size={myIconSizes.normal} />
        </div>
      </div>
    </nav>
  );
}

export default NavMenu;
