import { makeStyles } from '@material-ui/core';

import {
  myColors,
  myFonts,
  myMarginBottom,
  myHeights,
  myZIndex
} from '../../theme';

export const useStyles = makeStyles({
  container: {
    padding: '2rem 0 4rem'
  },
  headerTitle: {
    fontSize: myFonts.fontSize.h1,
    textAlign: 'center',
    margin: '0'
  },
  headerSubtitle: {
    display: 'block',
    fontSize: myFonts.fontSize.small,
    textAlign: 'center',
    marginBottom: myMarginBottom.mb3
  }
});
