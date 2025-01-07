"use client"

import styles from './TextImageButton.module.scss';
import InViewAnim from './../../utils/InViewAnim/InViewAnim'

interface TextImageButtonProps {
  content: any; // Replace 'any' with the appropriate type
}

export default function TextImageButton({content}: TextImageButtonProps) {
  return(
    <InViewAnim><div className={styles.component}>
      <div className={styles.wrapper}>
        <h5>TextImageButton</h5>
      </div>
    </div></InViewAnim>
  );
}