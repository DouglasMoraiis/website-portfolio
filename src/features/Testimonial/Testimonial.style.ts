import { makeStyles } from '@material-ui/core';

import { myColors, myFonts, myMarginBottom } from '../../theme';

export const useStyles = makeStyles({
  testimonial: {},
  testimonial__content: {
    marginBottom: '3rem'
  },
  testimonial__data: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    marginBottom: myMarginBottom.mb1
  },
  testimonial__header: {
    display: 'flex'
  },
  testimonial__img: {
    widht: '60px',
    height: '60px',
    borderRadius: '50%',
    marginRight: myMarginBottom.mb0_75
  },
  testimonial__name: {
    fontSize: myFonts.fontSize.h3,
    fontWeight: myFonts.fontWeight.medium
  },
  testimonial__client: {
    fontSize: myFonts.fontSize.small,
    color: myColors.textColorLight
  },
  testimonial__stars: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  testimonial__icon_star: {
    color: myColors.firstColor
  },
  testimonial__description: {}
});
