import { makeStyles } from '@material-ui/core';
import {
  myColors,
  myFonts,
  myHeights,
  myMarginBottom,
  myZIndex
} from '../../theme';

export const useStyles = makeStyles({
  skills__container: {},
  skills__item: {},
  skills__content: {
    transition: '.3s'
  },
  skills__header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: myMarginBottom.mb2_5,
    cursor: 'pointer',
    gap: '0.75rem',
    '& svg': {
      color: myColors.firstColor
    }
  },
  skills__title: {
    fontSize: myFonts.fontSize.h3
  },
  skills__subtitle: {
    fontSize: myFonts.fontSize.small,
    color: myColors.textColorLight
  },
  skills__list: {},
  skills__data: {},
  skills__titles: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: myMarginBottom.mb0_5
  },
  skills__name: {
    fontSize: myFonts.fontSize.normal,
    fontWeight: myFonts.fontWeight.medium
  },
  skills__number: {},
  skills__bar: {
    height: '5px',
    borderRadius: '.25rem',
    background: myColors.firstColorLighter
  },
  skills__percentage: {
    display: 'block',
    height: '5px',
    borderRadius: '.25rem',
    background: myColors.firstColor
  }
});
