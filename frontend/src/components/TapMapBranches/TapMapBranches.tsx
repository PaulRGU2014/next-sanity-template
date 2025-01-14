"use client"

import styles from './TapMapBranches.module.scss';
import Maps from './Maps';
import { useState, useEffect, useRef} from 'react';
import InViewAnim from '../../utils/InViewAnim/InViewAnim';

interface TapMapBranchesProps {
  content?: any; // Replace 'any' with the appropriate type
}


export default function TapMapBranches({content}: TapMapBranchesProps) {
  const [activeTab, setActiveTab] = useState('USA');
  console.log(activeTab)
  return(
    <div className={styles.component}>
      <div className={styles.wrapper}>
        <InViewAnim><div className={styles.tabs}>
          <div className={`${styles.tab} ${activeTab==='USA' ? styles.isActive : ""}`} onClick={()=>setActiveTab('USA')}>USA</div>
          <div className={`${styles.tab} ${activeTab==='Uganda' ? styles.isActive : ""}`} onClick={()=>setActiveTab('Uganda')}>Uganda</div>
        </div></InViewAnim>
        {activeTab === 'USA' && <Maps region={'USA'} />}
        {activeTab === 'Uganda' && <Maps region={'Uganda'} />}
      </div>
    </div>
  )
}