"use client";

import React from 'react';
import styles from './RichText.module.scss';

interface RichTextProps {
  children?: React.ReactNode;
  html: any;
  className?: string;
  [key: string]: any;
}

export default function RichText({ children, html, className = "", ...props }: RichTextProps) {
  if (html) {
    if (typeof html === "string") {
      return (
        <div
          className={`${styles.component} ${className}`}
          {...props}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      );
    }

    return (
      <div className={`${styles.component} ${className}`} {...props}>
        {html}
      </div>
    );
  }

  return (
    <div className={`${styles.component} ${className}`} {...props}>
      {children}
    </div>
  );
}