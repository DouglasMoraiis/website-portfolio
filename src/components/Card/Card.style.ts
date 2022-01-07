import { makeStyles } from '@material-ui/core';

import { myColors, myFonts, myMarginBottom } from '../../theme';

export const useStyles = makeStyles({
  content: {
    position: 'relative',
    background: myColors.containerColor,
    padding: '2rem 1.5rem 1.5rem 1.5rem',
    borderRadius: '.25rem',
    boxShadow: '0 2px 4px rgba(0, 0, 0, .15)',
    transition: '.3s',
    '&:hover': {
      boxShadow: '0 4px 8px rgba(0, 0, 0, .15)'
    },
    '& h4': {
      wordWrap: true
    }
  },
  icon: {
    display: 'block',
    color: myColors.firstColor,
    marginBottom: myMarginBottom.mb1
  },
  title: {
    wordSpacing: '20rem',
    fontSize: myFonts.fontSize.h3,
    marginBottom: myMarginBottom.mb1
  }
});
