"use client"

import React, { useState, useEffect, useRef } from 'react';
import styles from './Maps.module.scss';
import InViewAnim from '../../utils/InViewAnim/InViewAnim';
import Image from 'next/image';
import USMap from './assets/map_usa.svg';
import UgandaMap from './assets/map_uganda.svg';
import Accordion from '@/utils/Accordion/Accordion';
import AccordionItem from '@/utils/Accordion/AccordionItem';

interface TapMapBranchesProps {
  region: string;
  content: { branch_id: string, branch_name: string, body: string }[];
}

interface PinProps {
  className: string;
  transitionDelay?: number;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

function Pin({ className, transitionDelay, onMouseEnter, onMouseLeave }: PinProps) {
  return (
    <div className={className} style={{ transitionDelay: `${transitionDelay}ms` }} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <svg stroke="#D00000" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="50px" width="50px" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
        <circle cx="12" cy="10" r="3"></circle>
      </svg>
    </div>
  )
}

interface Pin {
  className: string;
  spot: string;
  delay: number;
}

function renderPins(pins: Pin[], activeSpot: string, isLoaded: boolean, setActiveSpot: (spot: string) => void) {
  return pins.map(({ className, spot, delay }) => (
    <Pin
      key={spot}
      className={`${className} ${activeSpot === spot ? styles.isActive : ''}`}
      transitionDelay={isLoaded === false ? delay : 150}
      onMouseEnter={() => setActiveSpot(spot)}
      onMouseLeave={() => setActiveSpot('')}
    />
  ));
}

function renderList(content: { branch_id: string, branch_name: string, body: string }[], activeSpot: string, setActiveSpot: (spot: string) => void) {
  return content.map((branch, index) => (
    <Accordion key={index}>
      <AccordionItem
        className={styles.accordionItem}
        index={index}
        title={
          <li
            key={index}
            className={`${styles.list_each} ${activeSpot === branch.branch_id ? styles.isActive : ''}`}
            onMouseEnter={() => setActiveSpot(branch.branch_id)}
            onMouseLeave={() => setActiveSpot('')}
          >
            {branch.branch_name}
          </li>
        }
        content={branch.body}
        expandedIndex={0}
        isToggle={true}
        hasToggle={true}
        toggleAccordion={() => { }}
      />
    </Accordion>
  ));
}

export default function Maps({ region, content }: TapMapBranchesProps) {
  const [activeSpot, setActiveSpot] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
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

  const pinsUSA = [
    { className: styles.pin_az, spot: 'az', delay: 500 },
    { className: styles.pin_lincoln, spot: 'lincoln', delay: 550 },
    { className: styles.pin_omaha, spot: 'omaha', delay: 600 },
    { className: styles.pin_stc, spot: 'stc', delay: 650 },
    { className: styles.pin_desMoines, spot: 'desMoines', delay: 700 },
    { className: styles.pin_tx, spot: 'tx', delay: 750 },
    { className: styles.pin_nc, spot: 'nc', delay: 800 },
    { className: styles.pin_nh, spot: 'nh', delay: 850 },
  ];

  const pinsUganda = [
    { className: styles.pin_kampala, spot: 'kampala', delay: 500 },
  ];

  return (
    <InViewAnim>
      <div className={styles.component} ref={mapRef}>
        <div className={styles.map}>
          <Image
            src={region === 'USA' ? USMap : UgandaMap}
            alt='image'
            style={{
              objectFit: 'contain',
              objectPosition: 'center'
            }}
            sizes="100%"
          />
          {region === 'USA' ? renderPins(pinsUSA, activeSpot, isLoaded, setActiveSpot) : renderPins(pinsUganda, activeSpot, isLoaded, setActiveSpot)}
        </div>
        <ul className={styles.list}>
          {renderList(content, activeSpot, setActiveSpot)}
        </ul>
      </div>
    </InViewAnim>
  );
}