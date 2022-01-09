import { makeStyles } from '@material-ui/core';

import { myColors, myFonts, myMarginBottom } from '../../../theme';

export const useStyles = makeStyles({
  container: {},
  content: {
    padding: '0 1.75rem 1.5rem 1.75rem',
    transition: '.3s',
    '& a': {
      '& svg': {
        transition: '.3s',
        transform: 'translateX(0)'
      }
    },
    '& a:hover': {
      '& svg': {
        transition: '.3s',
        transform: 'translateX(.25rem)'
      }
    }
  },
  img: {
    width: '265px',
    borderRadius: '.5rem',
    justifySelf: 'center'
  },
  title: {
    fontSize: myFonts.fontSize.h3,
    marginBottom: myMarginBottom.mb0_5
  },
  description: {
    marginBottom: myMarginBottom.mb0_75
  }
});
