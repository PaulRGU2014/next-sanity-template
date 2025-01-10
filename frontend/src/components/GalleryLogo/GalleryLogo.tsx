"use client"

import styles from './GalleryLogo.module.scss';
import InViewAnim from './../../utils/InViewAnim/InViewAnim'
import Image from '@/utils/ImageLoader/ImageLoader';

interface GalleryLogoProps {
  content: any; // Replace 'any' with the appropriate type
}

export default function GalleryLogo({content}: GalleryLogoProps) {
  return(
    <InViewAnim><div className={`${styles.component} ${content.theme === 'dark' ? styles.dark : ''}`}>
      <div className={styles.wrapper}>
        {!!content?.logo?.asset?._ref && <Image
          className={styles.logo}
          src={content.logo.asset._ref}
          alt={content.logo.alt}
          objectFit="contain"
          objectPosition="center center"
        />}
        {content?.gallery?.map((item: any, index: number) => (
          <div className={styles.galleryImage_wrapper} key={index} >
            {!!item.image.asset._ref && <Image
              className={styles.galleryImage}
              src={item.image.asset._ref}
              alt={item.image.alt}
              objectFit="cover"
              objectPosition="center center"
            />}
            <div className={styles.galleryImage_text}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))} 
      </div>
    </div></InViewAnim>
  );
}