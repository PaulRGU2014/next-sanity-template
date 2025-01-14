"use client"

import styles from './Maps.module.scss';
import React, { useState, useEffect, useRef } from 'react';
import InViewAnim from '../../utils/InViewAnim/InViewAnim';
import Image from 'next/image';
import USMap from './assets/map_usa.svg';
import UgandaMap from './assets/map_uganda.svg';


interface TapMapBranchesProps {
  region: any; // Replace 'any' with the appropriate type
}

function Pin({ className, transitionDelay, onMouseEnter, onMouseLeave }: { className: string, transitionDelay?: number, onMouseEnter?: () => void, onMouseLeave?: () => void }) {
  return (
    <div className={className} style={{ transitionDelay: `${transitionDelay}ms` }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <svg stroke="#D00000" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="50px" width="50px" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    </div>
  )
}

export default function Maps({ region }: TapMapBranchesProps) {
  const [activeSpot, setActiveSpot] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)
  const mapRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            setIsLoaded(true);
          }, 2000);
        } else {
          setIsLoaded(false);
        }
      },
      { threshold: 0.1 }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => {
      if (mapRef.current) {
        observer.unobserve(mapRef.current);
      }
    };
  }, []);

  if (region === 'USA') {
    return (
      <InViewAnim><div className={styles.component} ref={mapRef}>
        <div className={styles.map}>
          <Image
            src={USMap}
            alt='image'
            style={{
              objectFit: 'contain',
              objectPosition: 'center'
            }}
            sizes="100%"
          />
          {[
            { className: styles.pin_az, spot: 'az', delay: 500 },
            { className: styles.pin_lincoln, spot: 'lincoln', delay: 550 },
            { className: styles.pin_omaha, spot: 'omaha', delay: 600 },
            { className: styles.pin_stc, spot: 'stc', delay: 650 },
            { className: styles.pin_desMoines, spot: 'desMoines', delay: 700 },
            { className: styles.pin_tx, spot: 'tx', delay: 750 },
            { className: styles.pin_nc, spot: 'nc', delay: 800 },
            { className: styles.pin_nh, spot: 'nh', delay: 850 },
          ].map(({ className, spot, delay }) => (
            <Pin
              key={spot}
              className={`${className} ${activeSpot === spot ? styles.isActive : ''}`}
              transitionDelay={isLoaded === false ? delay : 0}
              onMouseEnter={() => setActiveSpot(spot)}
              onMouseLeave={() => setActiveSpot('')}
            />
          ))}
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
  } else if (region === 'Uganda') {
    return (
      <InViewAnim><div className={styles.component} ref={mapRef}>
        <div className={styles.map}>
          <Image
            src={UgandaMap}
            alt='image'
            style={{
              objectFit: 'contain',
              objectPosition: 'center'
            }}
            sizes="100%"
          />
          <Pin className={`${styles.pin_kampala} ${activeSpot === 'kampala' ? styles.isActive : ''}`} transitionDelay={500} />
        </div>
        <ul className={styles.list}>
          <li className={`${styles.list_each} ${activeSpot === 'kampala' ? styles.isActive : ''}`}
            onMouseEnter={() => setActiveSpot('kampala')}
            onMouseLeave={() => setActiveSpot('')}
          >
            Kampala, Uganda
          </li>
        </ul>
      </div></InViewAnim>
    )
  }
}
