import { makeStyles } from '@material-ui/core';

import { myColors, myFonts, myMarginBottom } from '../../../theme';

export const useStyles = makeStyles({
  container: {},
  content: {
    position: 'relative',
    background: myColors.containerColor,
    padding: '2.5rem 2rem 1.75rem 1.5rem',
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
  title: {},
  description: {}
});
