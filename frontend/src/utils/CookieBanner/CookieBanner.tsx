"use client";

import React, { useState, useEffect } from 'react';
import styles from './CookieBanner.module.scss';

const CONSENT_COOKIE = 'cookieConsent';

const getConsentValue = () => {
  if (typeof document === 'undefined') {
    return null;
  }
  const cookie = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${CONSENT_COOKIE}=`));
  if (!cookie) {
    return null;
  }
  const value = cookie.split('=')[1];
  return value ? decodeURIComponent(value) : null;
};

const setConsentValue = (value: 'accepted' | 'denied') => {
  const maxAge = 60 * 60 * 24 * 365; // 1 year
  const secure = window.location.protocol === 'https:' ? '; Secure' : '';
  document.cookie = `${CONSENT_COOKIE}=${encodeURIComponent(
    value
  )}; Max-Age=${maxAge}; Path=/; SameSite=Lax${secure}`;
  window.dispatchEvent(new CustomEvent('cookie-consent', { detail: value }));
};

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = getConsentValue();
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setConsentValue('accepted');
    setIsVisible(false);
  };

  const handleDeny = () => {
    setConsentValue('denied');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.cookieBanner}>
      <p>เราใช้คุกกี้เพื่อปรับปรุงประสบการณ์ของคุณบนเว็บไซต์นี้ โดยการใช้งานเว็บไซต์นี้ถือว่าคุณยินยอมให้ใช้คุกกี้</p>
      <div className={styles.buttons}>
        <button onClick={handleAccept}>ยอมรับ</button>
        <button onClick={handleDeny}>ปฏิเสธ</button>
      </div>
    </div>
  );
};

export default CookieBanner;