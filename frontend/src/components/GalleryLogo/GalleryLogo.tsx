"use client"

import styles from './GalleryLogo.module.scss';
import InViewAnim from './../../utils/InViewAnim/InViewAnim'

interface GalleryLogoProps {
  content: any; // Replace 'any' with the appropriate type
}

export default function GalleryLogo({content}: GalleryLogoProps) {
  return(
    <InViewAnim><div className={styles.component}>
      <div className={styles.wrapper}>
        <h5>GalleryLogo</h5>
      </div>
    </div></InViewAnim>
  );
}