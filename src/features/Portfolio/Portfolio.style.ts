import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  portfolio: {},
  portifolio__container: {},
  '@global div.swiper-button-next::after, div.swiper-button-prev::after': {
    fontSize: '2rem',
    fontWeight: 600
  },
  '@global div.swiper-button-prev': {
    left: '-.4rem',
    paddingLeft: '1.2rem'
  },
  '@global div.swiper-button-next': {
    right: '-.4rem',
    paddingRight: '1.2rem'
  }
});
