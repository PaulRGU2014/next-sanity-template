"use client"

import styles from './about-me.module.scss';
import ImageLoader from '@/utils/ImageLoader/ImageLoader';
import content from "./content.json";
import InViewAnim from '@/utils/InViewAnim/InViewAnim';
import Modal from '@/components/Modal/Modal';
import { useState, useEffect, useRef } from 'react';


export default function AboutMe() {
  const [isClient, setIsClient] = useState(false)
	const [modalOpen, setModalOpen] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState<number | undefined>();
	console.log('currentImageIndex', currentImageIndex);

	useEffect(()=>{
    setIsClient(typeof window !== 'undefined');
    return (()=>{
      setIsClient(false)
    })
  },[])

	return (
		<InViewAnim>
			<Modal isOpen={modalOpen} onClose={()=>setModalOpen(false)}>
				<h1>Modal Content</h1>
				<p>This is a modal</p>
			</Modal>
			<div className={styles.component}>
			<div className={styles.wrapper}>
				<div className={styles.inner}>
					{content.story.map((item, index) => (
						<ImageLoader className={styles.image} 
							key={index} 	
							style={{
								gridRow: item.isPortrait===true ? 'span 2' : 'span 1',
								paddingTop: item.isPortrait===true ? '200%' : '100%',
								transitionDelay: isClient ? `${Math.random() * 300 + 1000}ms` : '0s'        
							}}
							src={item.image.url} 
							alt={item.image.alt}
							onClick={()=>{
								setModalOpen(true);
								setCurrentImageIndex(index)
							}}
						/>
					))}
				</div>
			</div>
		</div></InViewAnim>
	);
}