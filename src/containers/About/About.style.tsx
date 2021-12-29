import { makeStyles } from '@material-ui/core';
import {
  myColors,
  myFonts,
  myHeights,
  myMarginBottom,
  myZIndex
} from '../../theme';

export const useStyles = makeStyles({
  about: {},
  about__container: {},
  about__img: {
    width: '300px',
    borderRadius: '.5rem',
    justifySelf: 'center',
    alignSelf: 'center'
  },
  about__data: {},
  about__description: {
    textAlign: 'center',
    marginBottom: myMarginBottom.mb2_5
  },
  about__info: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: myMarginBottom.mb2_5
  },
  about__info_title: {
    display: 'block',
    textAlign: 'center',
    fontSize: myFonts.fontSize.h2,
    fontWeight: myFonts.fontWeight.semiBold
  },
  about__info_name: {
    display: 'block',
    textAlign: 'center',
    fontSize: myFonts.fontSize.smaller
  },
  about__buttons: {
    display: 'flex',
    justifyContent: 'center'
  }
});
