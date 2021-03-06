import { makeStyles } from '@material-ui/core';

import { myColors, myFonts, myMarginBottom, myZIndex } from '../../theme';

export const useStyles = makeStyles({
  container: {
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0,0,0,.6)',
    zIndex: myZIndex.zModal,
    padding: '0 1rem',
    opacity: 0,
    visibility: 'hidden',
    transition: '.3s'
  },
  content: {
    position: 'relative',
    background: myColors.containerColor,
    padding: '1.5rem',
    boxShadow:
      'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
    borderRadius: '.5rem',
    '& a': {
      display: 'flex',
      cursor: 'pointer',
      transition: '.2s',
      alignItems: 'center',
      '&:hover': {
        color: myColors.firstColor
      }
    }
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 0,
    margin: 0,
    fontSize: myFonts.fontSize.h3,
    fontWeight: myFonts.fontWeight.medium,
    marginBottom: myMarginBottom.mb1_5,
    '& h4': {
      paddingTop: '.1rem'
    }
  },
  active: {
    transition: '.3s',
    opacity: 1,
    visibility: 'visible'
  }
});
