import { makeStyles } from '@material-ui/core';

import { myColors } from '../../theme';

export const useStyles = makeStyles({
  button_flex: {
    display: 'inline-flex',
    alignItems: 'center',
    color: myColors.firstColor,
    cursor: 'pointer',
    '&:hover': {
      color: myColors.firstColorAlt
    }
  }
});
