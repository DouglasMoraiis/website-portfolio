// eslint-disable-next-line import/no-unresolved
import { SwiperSlide } from 'swiper/react';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/bundle';

import modernWebsiteIMG from '../../assets/img/portfolio1.jpg';
import brandDesignIMG from '../../assets/img/portfolio2.jpg';
import onlineStoreIMG from '../../assets/img/portfolio3.jpg';
import { Section, Carrossel, CarrosselItem } from '../../components';
import { useStyles } from './Portfolio.style';

function Portfolio() {
  const classes = useStyles();
  useStyles();

  return (
    <Section
      id="portifolio"
      title="Portfolio"
      subtitle="My recents works"
      className={classes.portfolio}
    >
      <Carrossel id="carrossel">
        <SwiperSlide>
          <CarrosselItem
            id="modernWebsite"
            img={modernWebsiteIMG}
            title="Modern Website"
            description="Website adaptable to all devices, with and animated interactions"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarrosselItem
            id="brandDesign"
            img={brandDesignIMG}
            title="Brand Design"
            description="Website adaptable to all devices, with and animated interactions"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CarrosselItem
            id="onlineStore"
            img={onlineStoreIMG}
            title="Online Store"
            description="Website adaptable to all devices, with and animated interactions"
          />
        </SwiperSlide>
      </Carrossel>
    </Section>
  );
}

export default Portfolio;
