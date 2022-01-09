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
};

function Carrossel({ id, children }: CarrosselProps) {
  const classes = useStyles();

  return (
    <div id={id} className={`${classes.container} `}>
      <Swiper cssMode navigation pagination={{ clickable: true }} keyboard>
        {children}
      </Swiper>
    </div>
  );
}

export default Carrossel;
