import { makeStyles } from '@material-ui/core';

import { myFonts, myHeights, myColors, myMarginBottom } from '../../theme';

const useStyles = makeStyles({
  '@global': {
    ':root': {
      '--swiper-theme-color': myColors.firstColor
    },
    '*, *::before, *::after': {
      boxSizing: 'inherit'
    },
    html: {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      height: '100%',
      width: '100%',
      scrollBehavior: 'smooth'
    },
    body: {
      height: '100%',
      width: '100%',
      margin: `0 0 ${myHeights.header} 0`,
      fontFamily: myFonts.bodyFont,
      fontSize: myFonts.fontSize.normal,
      background: myColors.bodyColor,
      color: myColors.textColor
    },
    'h1, h2, h3, h4': {
      color: myColors.titleColor,
      fontWeight: myFonts.fontWeight.semiBold,
      margin: 0
    },
    ul: {
      listStyle: 'none'
    },
    a: {
      textDecoration: 'none'
    },
    img: {
      maxWidth: '100%',
      height: 'auto'
    },
    '#root': {
      height: '100%',
      fontFamily: myFonts.bodyFont,
      fontSize: myFonts.fontSize.normal
    },
    '.container': {
      maxWidth: '768px',
      marginLeft: myMarginBottom.mb1_5,
      marginRight: myMarginBottom.mb1_5
    },
    '.grid': {
      display: 'grid',
      gap: '1.5rem'
    }
  }
});

export default useStyles;
