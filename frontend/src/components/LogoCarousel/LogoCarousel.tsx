"use client"

import styles from './LogoCarousel.module.scss';
import InViewAnim from './../../utils/InViewAnim/InViewAnim'
import Image from '@/utils/ImageLoader/ImageLoader';
import Slider from 'react-slick';
import css from 'styled-jsx/css';

interface LogoCarouselProps {
  content: any; // Replace 'any' with the appropriate type
}

const settings1 = {
  className: styles.carousel,
  dots: false,
  arrows: false,
  infinite: true,
  speed: 3000,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 920,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};

const settings2 = {
  ...settings1,
  className: styles.carousel2,
  rtl: true, // Right to left
};


export default function LogoCarousel({ content }: LogoCarouselProps) {
  return (
    <InViewAnim><div className={styles.component}>
      <div className={styles.wrapper}>
        <h3>{content.title}</h3>
        <Slider {...settings1}>
          {content.logos?.slice(0, Math.ceil(content.logos.length / 2)).map((logo: any, index: number) => (
            <Image
              key={index}
              src={logo.logo.asset._ref}
              alt={logo.logo.alt}
              className={styles.logo}
              objectPosition='center'
              objectFit='contain'
            />
          ))}
        </Slider>
        <Slider {...settings2}>
          {content.logos?.slice(Math.ceil(content.logos.length / 2)).map((logo: any, index: number) => (
            <Image
              key={index}
              src={logo.logo.asset._ref}
              alt={logo.logo.alt}
              className={styles.logo}
              objectPosition='center'
              objectFit='contain'
            />
          ))}
        </Slider>
      </div>
    </div></InViewAnim>
  );
}