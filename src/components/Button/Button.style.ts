import { makeStyles } from '@material-ui/core';

import { myColors, myFonts } from '../../theme';

export const useStyles = makeStyles({
  button: {
    display: 'inline-flex',
    background: myColors.firstColor,
    color: '#fff',
    padding: '1rem',
    borderRadius: '.5rem',
    fontWeight: myFonts.fontWeight.medium,
    alignItems: 'center',
    transition: '.3s',
    '& svg': {
      marginLeft: '0.3rem'
    },
    '&:hover': {
      background: myColors.firstColorAlt
    }
  }
});
