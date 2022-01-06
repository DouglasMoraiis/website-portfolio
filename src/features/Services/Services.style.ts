import { makeStyles } from '@material-ui/core';

import { myColors, myFonts, myHeights, myMarginBottom } from '../../theme';

export const useStyles = makeStyles({
  services: {},
  services__container: {
    gap: '1.5rem',
    gridTemplateColumns: 'repeat(2, 1fr)'
  },
  services__modal_ul: {
    padding: 0,
    '& p': {
      margin: 0
    }
  },
  services__modal_li: {
    gap: '.3rem',
    padding: 0,
    display: 'flex',
    alignItems: 'center'
  },
  services__button: {
    display: 'flex',
    justifyContent: 'center',
    transition: '.3s',
    '& svg': {
      transition: '.3s'
    },
    '&:hover svg': {
      transform: 'translateX(0.25rem)'
    }
  }
});
