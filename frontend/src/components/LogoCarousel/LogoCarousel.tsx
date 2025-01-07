"use client"

import styles from './LogoCarousel.module.scss';
import InViewAnim from './../../utils/InViewAnim/InViewAnim'

interface LogoCarouselProps {
  content: any; // Replace 'any' with the appropriate type
}

export default function LogoCarousel({content}: LogoCarouselProps) {
  return(
    <InViewAnim><div className={styles.component}>
      <div className={styles.wrapper}>
        <h5>LogoCarousel</h5>
      </div>
    </div></InViewAnim>
  );
}