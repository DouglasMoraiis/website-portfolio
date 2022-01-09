import { UilArrowRight } from '@iconscout/react-unicons';
// eslint-disable-next-line import/no-unresolved
import { SwiperSlide } from 'swiper/react';

// eslint-disable-next-line import/no-unresolved
import 'swiper/css/bundle';

import { Button } from '../..';
import { myIconSizes } from '../../../theme';
import { useStyles } from './CarrosselItem.style';

type CarrosselItemProps = {
  id: string;
  img: string;
  title: string;
  description: string;
};

function CarrosselItem({ id, img, title, description }: CarrosselItemProps) {
  const classes = useStyles();

  return (
    <SwiperSlide>
      <div className={`${classes.content} grid`}>
        <img src={img} className={classes.img} alt={title} />
        <div id={id} className={classes.content}>
          <h3 className={classes.title}>{title}</h3>
          <p className={classes.description}>{description}</p>
          <Button href="#">
            <span>Demo</span>
            <UilArrowRight size={myIconSizes.small} />
          </Button>
        </div>
      </div>
    </SwiperSlide>
  );
}

export default CarrosselItem;
