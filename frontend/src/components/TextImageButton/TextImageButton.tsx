"use client"

import styles from './TextImageButton.module.scss';
import InViewAnim from './../../utils/InViewAnim/InViewAnim'
import Image from '@/utils/ImageLoader/ImageLoader';
import Link from '@/utils/LinkWrapper/LinkWrapper';

interface TextImageButtonProps {
  content: any; // Replace 'any' with the appropriate type
}

export default function TextImageButton({content}: TextImageButtonProps) {
  return(
    <InViewAnim><div className={`${styles.component}`}>
      <div className={`${styles.wrapper} ${content.mediaPosition === 'right' ? styles.right : ''}`}>
        <Image
          className={styles.image}
          src={content.image.asset._ref}
          alt={content.image.alt}
          objectFit="cover"
          objectPosition="left center"
        />        
        <section className={styles.text}>
          <h3>{content.title}</h3>
          <p>{content.desc}</p>
          <Link className={styles.link} href={content.link.url} target={content.link.newTab === false ? "_self" : "_blank"}>{content.link.title}</Link>
        </section>
      </div>
    </div></InViewAnim>
  );
}