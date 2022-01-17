import { UilStar } from '@iconscout/react-unicons';
// eslint-disable-next-line import/no-unresolved
import { SwiperSlide } from 'swiper/react';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/bundle';

import testmonialImg1 from '../../assets/img/testimonial1.jpg';
import testmonialImg2 from '../../assets/img/testimonial2.jpg';
import testmonialImg3 from '../../assets/img/testimonial3.jpg';
import { Button, Carrossel, CarrosselItem, Section } from '../../components';
import { myIconSizes } from '../../theme';
import { useStyles } from './Testimonial.style';

function Testimonial() {
  const classes = useStyles();
  useStyles();

  return (
    <Section
      id="testimonial"
      title="Testimonial"
      subtitle="My client saying"
      className={classes.testimonial}
    >
      <Carrossel id="testimonial" navigation={false} breakpoints={2}>
        <SwiperSlide>
          <div className={classes.testimonial__content}>
            <div className={classes.testimonial__data}>
              <div className={classes.testimonial__header}>
                <img
                  src={testmonialImg1}
                  alt=""
                  className={classes.testimonial__img}
                />
                <div>
                  <h3 className={classes.testimonial__name}>Sara Smith</h3>
                  <span className={classes.testimonial__client}>Client</span>
                </div>
              </div>
              <div className={classes.testimonial__stars}>
                <UilStar
                  size={myIconSizes.small}
                  className={classes.testimonial__icon_star}
                />
                <UilStar
                  size={myIconSizes.small}
                  className={classes.testimonial__icon_star}
                />
                <UilStar
                  size={myIconSizes.small}
                  className={classes.testimonial__icon_star}
                />
                <UilStar
                  size={myIconSizes.small}
                  className={classes.testimonial__icon_star}
                />
                <UilStar
                  size={myIconSizes.small}
                  className={classes.testimonial__icon_star}
                />
              </div>
            </div>
            <div className={classes.testimonial__description}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Mollitia aspernatur sint sit, enim nihil explicabo ea totam
                aperiam consequuntur consectetur sed impedit rem illo qui!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.testimonial__content}>
            <div className={classes.testimonial__data}>
              <div className={classes.testimonial__header}>
                <img
                  src={testmonialImg2}
                  alt=""
                  className={classes.testimonial__img}
                />
                <div>
                  <h3 className={classes.testimonial__name}>Daniel Adams</h3>
                  <span className={classes.testimonial__client}>Client</span>
                </div>
              </div>
              <div className={classes.testimonial__stars}>
                <UilStar
                  size={myIconSizes.small}
                  className={classes.testimonial__icon_star}
                />
                <UilStar
                  size={myIconSizes.small}
                  className={classes.testimonial__icon_star}
                />
                <UilStar
                  size={myIconSizes.small}
                  className={classes.testimonial__icon_star}
                />
                <UilStar
                  size={myIconSizes.small}
                  className={classes.testimonial__icon_star}
                />
                <UilStar
                  size={myIconSizes.small}
                  className={classes.testimonial__icon_star}
                />
              </div>
            </div>
            <div className={classes.testimonial__description}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Mollitia aspernatur sint sit, enim nihil explicabo ea totam
                aperiam consequuntur consectetur sed impedit rem illo qui!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={classes.testimonial__content}>
            <div className={classes.testimonial__data}>
              <div className={classes.testimonial__header}>
                <img
                  src={testmonialImg3}
                  alt=""
                  className={classes.testimonial__img}
                />
                <div>
                  <h3 className={classes.testimonial__name}>Carlos Johnson</h3>
                  <span className={classes.testimonial__client}>Client</span>
                </div>
              </div>
              <div className={classes.testimonial__stars}>
                <UilStar
                  size={myIconSizes.small}
                  className={classes.testimonial__icon_star}
                />
                <UilStar
                  size={myIconSizes.small}
                  className={classes.testimonial__icon_star}
                />
                <UilStar
                  size={myIconSizes.small}
                  className={classes.testimonial__icon_star}
                />
                <UilStar
                  size={myIconSizes.small}
                  className={classes.testimonial__icon_star}
                />
                <UilStar
                  size={myIconSizes.small}
                  className={classes.testimonial__icon_star}
                />
              </div>
            </div>
            <div className={classes.testimonial__description}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Mollitia aspernatur sint sit, enim nihil explicabo ea totam
                aperiam consequuntur consectetur sed impedit rem illo qui!
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Carrossel>
    </Section>
  );
}

export default Testimonial;
