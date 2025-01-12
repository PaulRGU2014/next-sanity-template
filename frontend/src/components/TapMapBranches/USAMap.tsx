"use client"

import styles from './TapMapBranches.module.scss';
import React, { useEffect, useRef } from 'react';
import InViewAnim from './../../utils/InViewAnim/InViewAnim';
import Image from 'next/image';
import Map from './assets/map_usa.svg';
import { LuMapPin } from "react-icons/lu";


interface TapMapBranchesProps {
  content: any; // Replace 'any' with the appropriate type
}

function Pin({ className } : { className: string }) {
  return (
    <div className={className}>
      <svg stroke="#D00000" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="50px" width="50px" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    </div>
  )
}

export default function USAMap() {
  return (
    <div className={styles.map}>
      <Image
        src={Map}
        alt='image'
        objectFit="contain"
        objectPosition="center"
        // fill={true}
        sizes="100%"
      />
      <Pin className={styles.pin_az}/>
      <Pin className={styles.pin_desMoines}/>
      <Pin className={styles.pin_omaha}/>
      <Pin className={styles.pin_nc}/>
      <Pin className={styles.pin_nh}/>
      <Pin className={styles.pin_lincoln}/>
      <Pin className={styles.pin_stc}/>
      <Pin className={styles.pin_tx}/>
    </div>
  )

}