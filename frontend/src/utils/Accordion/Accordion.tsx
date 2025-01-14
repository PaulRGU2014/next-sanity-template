import React, { useState, useRef, ReactNode } from 'react';
import styles from './Accordion.module.scss';

interface AccordionProps {
  title?: string;
  children: ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isToggle, setIsToggle] = useState(false);

  const toggleAccordion = (index: number) => {
    if (expandedIndex === index && isToggle) {
      setIsToggle(false);
    } else if (expandedIndex === index && !isToggle) {
      setIsToggle(true);
    } else if (expandedIndex !== index && isToggle) {
      setExpandedIndex(index);
    } else {
      setExpandedIndex(index);
      setIsToggle(!isToggle);
    }
  };

  return (
    <div className={styles.component}>
      <div className={styles.wrapper}>
        {!!title && <h3>{title}</h3>}
        <div className={styles.accordionWrapper}>
          {React.Children.map(children, (child, index) =>
            React.cloneElement(child as React.ReactElement<any>, {
              index,
              expandedIndex,
              isToggle,
              toggleAccordion,
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordion;