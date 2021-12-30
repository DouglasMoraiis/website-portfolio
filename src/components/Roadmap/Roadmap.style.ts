import { makeStyles } from '@material-ui/core';

import {
  myColors,
  myFonts,
  myHeights,
  myMarginBottom,
  myZIndex
} from '../../theme';

export const useStyles = makeStyles({
  qualification__container: {},
  qualification__tabs: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    justifyContent: 'space-evenly',
    marginBottom: myMarginBottom.mb2
  },
  qualification__button: {
    display: 'flex',
    fontSize: myFonts.fontSize.h3,
    fontWeight: myFonts.fontWeight.medium,
    alignItems: 'center',
    justifyContent: 'center',
    gap: '.3rem',
    cursor: 'pointer',
    transition: '.3s',
    '&:hover': {
      color: myColors.firstColor,
      transition: '.3s'
    }
  },
  qualification__button_active: {
    color: myColors.firstColorAlt
  },
  qualification__sections: {},
  qualification__content: {
    transition: '.3s'
  },
  qualification__content_disable: {
    height: 0,
    overflow: 'hidden',
    transform: 'translateY(-20px)',
    transition: '.3s',
    opacity: 0
  },
  qualification__data: {
    display: 'grid',
    gridTemplateColumns: '1fr max-content 1fr',
    columnGap: '1.5rem'
  },
  qualification__title: {
    fontSize: myFonts.fontSize.normal,
    fontWeight: myFonts.fontWeight.medium
  },
  qualification__subtitle: {
    display: 'inline-block',
    fontSize: myFonts.fontSize.small,
    marginBottom: myMarginBottom.mb1
  },
  qualification__calendar: {
    display: 'flex',
    color: myColors.textColorLight,
    fontSize: myFonts.fontSize.small,
    alignItems: 'center',
    gap: '0.3rem',
    '& span': {
      lineHeight: 0
    },
    '& svg': {
      marginBottom: '1.5px'
    }
  },
  qualification__rounder: {
    display: 'inline-block',
    width: '13px',
    height: '13px',
    background: myColors.firstColor,
    borderRadius: '50%'
  },
  qualification__line: {
    display: 'block',
    width: '1px',
    height: '100%',
    background: myColors.firstColor,
    transform: 'translate(6px, -7px)'
  }
});
