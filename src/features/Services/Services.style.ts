import { makeStyles } from '@material-ui/core';

import { myColors, myFonts, myHeights, myMarginBottom } from '../../theme';

export const useStyles = makeStyles({
  services: {},
  services__container: {
    gap: '1.5rem',
    gridAutoRows: 'column',
    gridTemplateColumns: 'repeat(auto-fill, minmax(9.5rem, 1fr))'
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
    justifyContent: 'start',
    transition: '.3s',
    '& svg': {
      transition: '.3s'
    },
    '&:hover svg': {
      transform: 'translateX(0.25rem)'
    }
  }
});
