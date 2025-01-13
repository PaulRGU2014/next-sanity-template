"use client"

import styles from './TapMapBranches.module.scss';
import Maps from './Maps';
import { useState, useEffect, useRef} from 'react';

interface TapMapBranchesProps {
  content: any; // Replace 'any' with the appropriate type
}


export default function TapMapBranches({content}: TapMapBranchesProps) {
  return(
    <div className={styles.component}>
      <div className={styles.wrapper}>
        <div className={styles.tabs}>
          <div className={styles.tab}>USA</div>
          <div className={styles.tab}>Uganda</div>
        </div>
        <Maps region={'USA'} />
      </div>
    </div>
  )
}