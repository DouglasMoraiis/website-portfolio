import React from 'react';

import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard
} from 'swiper';
// eslint-disable-next-line import/no-unresolved
import { Swiper } from 'swiper/react';

import { useStyles } from './Carrossel.style';

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

type CarrosselProps = {
  id?: string;
  children: React.ReactNode;
  navigation?: boolean;
  pagination?: boolean;
  breakpoints?: number;
};

function Carrossel({
  id,
  children,
  navigation = true,
  pagination = true,
  breakpoints
}: CarrosselProps) {
  const classes = useStyles();

  return (
    <div id={id} className={`${classes.container} container`}>
      <Swiper
        cssMode
        navigation={navigation}
        pagination={pagination && { clickable: true, dynamicBullets: true }}
        breakpoints={
          breakpoints
            ? {
                568: {
                  slidesPerView: breakpoints
                }
              }
            : undefined
        }
        keyboard
      >
        {children}
      </Swiper>
    </div>
  );
}

export default Carrossel;
