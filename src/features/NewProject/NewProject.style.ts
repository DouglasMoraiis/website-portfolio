import { makeStyles } from '@material-ui/core';

import { myColors, myFonts, myMarginBottom } from '../../theme';

export const useStyles = makeStyles({
  newProject: {
    textAlign: 'center'
  },
  project__bg: {
    backgroundColor: myColors.firstColorSecond,
    paddingTop: '3rem'
  },
  project__container: {},
  project__data: {},
  project__img: {
    width: '232px',
    justifySelf: 'center'
  },
  project__title: {
    fontSize: myFonts.fontSize.h2,
    color: '#fff',
    marginBottom: myMarginBottom.mb0_75
  },
  project__description: {
    color: '#fff',
    marginBottom: myMarginBottom.mb1_5
  },
  button_white: {
    backgroundColor: '#fff',
    color: myColors.firstColor,
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, .8)'
    }
  }
});
