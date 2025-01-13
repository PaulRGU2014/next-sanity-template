"use client"

import styles from './Maps.module.scss';
import React, { useState, useEffect, useRef } from 'react';
import InViewAnim from '../../utils/InViewAnim/InViewAnim';
import Image from 'next/image';
import Map from './assets/map_usa.svg';


interface TapMapBranchesProps {
  region: any; // Replace 'any' with the appropriate type
}

function Pin({ className, transitionDelay }: { className: string, transitionDelay?: number }) {
  return (
    <div className={className} style={{ transitionDelay: `${transitionDelay}ms` }}>
      <svg stroke="#D00000" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="50px" width="50px" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    </div>
  )
}

export default function Maps({ region }: TapMapBranchesProps) {
  const [activeSpot, setActiveSpot] = useState('')

  console.log(activeSpot)

  if (region === 'USA') {
    return (
      <InViewAnim><div className={styles.component}>
        <div className={styles.map}>
          <Image
            src={Map}
            alt='image'
            style={{
              objectFit: 'contain',
              objectPosition: 'center'
            }}
            sizes="100%"
          />
          <Pin className={`${styles.pin_az} ${activeSpot === 'az' ? styles.isActive : ''}`} transitionDelay={500} />
          <Pin className={`${styles.pin_lincoln} ${activeSpot === 'lincoln' ? styles.isActive : ''}`}  transitionDelay={550}/>
          <Pin className={`${styles.pin_omaha} ${activeSpot === 'omaha' ? styles.isActive : ''}`} transitionDelay={600} />
          <Pin className={`${styles.pin_stc} ${activeSpot === 'stc' ? styles.isActive : ''}`} transitionDelay={650}/>
          <Pin className={`${styles.pin_desMoines} ${activeSpot === 'desMoines' ? styles.isActive : ''}`} transitionDelay={700}/>
          <Pin className={`${styles.pin_tx} ${activeSpot === 'tx' ? styles.isActive : ''}`} transitionDelay={750}/>
          <Pin className={`${styles.pin_nc} ${activeSpot === 'nc' ? styles.isActive : ''}`} transitionDelay={800}/>
          <Pin className={`${styles.pin_nh} ${activeSpot === 'nh' ? styles.isActive : ''}`} transitionDelay={850}/>
        </div>
        <ul className={styles.list}>
          <li className={`${styles.list_each} ${activeSpot === 'omaha' ? styles.isActive : ''}`}
            onMouseEnter={() => setActiveSpot('omaha')}
            onMouseLeave={() => setActiveSpot('')}
          >
            Omaha, Nebraska
          </li>
          <li className={`${styles.list_each} ${activeSpot === 'lincoln' ? styles.isActive : ''}`}
            onMouseEnter={() => setActiveSpot('lincoln')}
            onMouseLeave={() => setActiveSpot('')}
          >
            Lincoln, Nebraska
          </li>
          <li className={`${styles.list_each} ${activeSpot === 'desMoines' ? styles.isActive : ''}`}
            onMouseEnter={() => setActiveSpot('desMoines')}
            onMouseLeave={() => setActiveSpot('')}
          >
            Des Moines, Iowa
          </li>
          <li className={`${styles.list_each} ${activeSpot === 'nh' ? styles.isActive : ''}`}
            onMouseEnter={() => setActiveSpot('nh')}
            onMouseLeave={() => setActiveSpot('')}
          >
            Manchester, New Hampshire
          </li>
          <li className={`${styles.list_each} ${activeSpot === 'az' ? styles.isActive : ''}`}
            onMouseEnter={() => setActiveSpot('az')}
            onMouseLeave={() => setActiveSpot('')}
          >
            Phoenix, Arizona
          </li>
          <li className={`${styles.list_each} ${activeSpot === 'nc' ? styles.isActive : ''}`}
            onMouseEnter={() => setActiveSpot('nc')}
            onMouseLeave={() => setActiveSpot('')}
          >
            Greensboro, North Carolina
          </li>
          <li className={`${styles.list_each} ${activeSpot === 'stc' ? styles.isActive : ''}`}
            onMouseEnter={() => setActiveSpot('stc')}
            onMouseLeave={() => setActiveSpot('')}
          >
            St. Cloud, Minnesota
          </li>
          <li className={`${styles.list_each} ${activeSpot === 'tx' ? styles.isActive : ''}`}
            onMouseEnter={() => setActiveSpot('tx')}
            onMouseLeave={() => setActiveSpot('')}
          >
            Dallas, Texas
          </li>
        </ul>
      </div></InViewAnim>
    )
  }

}