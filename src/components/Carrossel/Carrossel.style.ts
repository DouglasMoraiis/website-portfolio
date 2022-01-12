import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  container: {
    overflow: 'initial'
  },
  // '@global .swiper-button-prev': {
  //   left: '-.4rem',
  //   paddingLeft: '1.2rem'
  // },
  // '@global .swiper-button-next': {
  //   right: '-.4rem',
  //   paddingRight: '1.2rem'
  // },
  '@global .swiper-button-next::after, div.swiper-button-prev::after': {
    fontSize: '1.75rem',
    fontWeight: 'bold'
  }
});
