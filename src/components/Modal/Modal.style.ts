import { makeStyles } from '@material-ui/core';

import { myColors, myZIndex } from '../../theme';

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
    background: 'rgba(0,0,0,.5)',
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
    borderRadius: '.5rem',
    '& a': {
      cursor: 'pointer'
    }
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  active: {
    transition: '.3s',
    opacity: 1,
    visibility: 'visible'
  }
});
