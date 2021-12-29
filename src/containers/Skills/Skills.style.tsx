import { makeStyles } from '@material-ui/core';
import {
  myColors,
  myFonts,
  myHeights,
  myMarginBottom,
  myZIndex
} from '../../theme';

export const useStyles = makeStyles({
  skills__container: {
    rowGap: 0
  },
  skills__close: {
    height: 0,
    overflow: 'hidden',
    transform: 'translateY(-20px)',
    transition: '.3s',
    opacity: 0
  },
  skills__open: {
    opacity: 1,
    height: 'max-content',
    marginBottom: myMarginBottom.mb2_5,
    transform: 'translateY(0px)',
    transition: '.3s'
  },
  skills__icon_close: {
    '& svg:last-child': {
      transition: '.3s',
      transform: 'rotate(0deg)'
    }
  },
  skills__icon_open: {
    '& svg:last-child': {
      transform: 'rotate(-180deg)',
      transition: '.3s'
    }
  },
  skills__html: {
    width: '85%'
  },
  skills__css: {
    width: '90%'
  },
  skills__js: {
    width: '80%'
  },

  skills__node: {
    width: '50%'
  },
  skills__mongo: {
    width: '70%'
  },
  skills__postgreSQL: {
    width: '40%'
  },
  skills__figma: {
    width: '85%'
  },
  skills__illustrator: {
    width: '95%'
  },
  skills__photoshop: {
    width: '90%'
  }
});
