import { useStyles } from "./NavMenu.style";
import {
  UilEstate,
  UilUser,
  UilFileAlt,
  UilBriefcaseAlt,
  UilScenery,
  UilMessage,
  UilTimes,
  UilApps,
} from "@iconscout/react-unicons";
import { useState } from "react";
import { myIconSizes } from "../../theme";

const NavMenu = () => {
  const classes = useStyles();
  const [navMenu, setNavMenu] = useState(false);

  const toggleMenu = () => {
    setNavMenu(!navMenu);
  };

  return (
    <nav className={`${classes.nav} container`}>
      <a href="#" className={classes.nav__logo}>Douglas</a>
      <div 
        className={`${classes.nav__menu} ${navMenu ? classes.menu_actived : ''}`}
        id="nav-menu"
      >
        <ul className={`${classes.nav__list} grid`}>
          <li onClick={toggleMenu}>
            <a href="#home" className={classes.nav__link}>
              <UilEstate size={myIconSizes.normal} /> Home
            </a>
          </li>
          <li onClick={toggleMenu}>
            <a href="#about" className={classes.nav__link}>
              <UilUser size={myIconSizes.normal} /> About
            </a>
          </li>
          <li onClick={toggleMenu}>
            <a href="#skills" className={classes.nav__link}>
              <UilFileAlt size={myIconSizes.normal} /> Skills
            </a>
          </li>
          <li onClick={toggleMenu}>
            <a href="#services" className={classes.nav__link}>
              <UilBriefcaseAlt size={myIconSizes.normal} /> Services
            </a>
          </li>
          <li onClick={toggleMenu}>
            <a href="#portfolio" className={classes.nav__link}>
              <UilScenery size={myIconSizes.normal} /> Portfolio
            </a>
          </li>
          <li onClick={toggleMenu}>
            <a href="#contact" className={classes.nav__link}>
              <UilMessage size={myIconSizes.normal} /> Contact
            </a>
          </li>
        </ul>
        <div className={classes.nav__close} id="nav-close" onClick={toggleMenu}>
          <UilTimes size={myIconSizes.bigger} />
        </div>
      </div>
      <div className="nav__btns">
        <div
          className={classes.nav__toggle}
          id="nav-toggle"
          onClick={toggleMenu}
        >
          <UilApps size={myIconSizes.normal} />
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
