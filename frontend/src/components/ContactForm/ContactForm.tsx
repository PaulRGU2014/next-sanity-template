"use client"

import React, { useState, useCallback } from "react";
import styles from "./ContactForm.module.scss";
import InViewAnim from "../../utils/InViewAnim/InViewAnim";
import { GoogleReCaptchaProvider, GoogleReCaptcha } from "react-google-recaptcha-v3";

export default function ContactForm() {
  const [recaptchaValid, setRecaptchaValid] = useState(false);

  const handleRecaptchaVerify = useCallback((token: string) => {
    if (token) {
      setRecaptchaValid(true);
      console.log("reCAPTCHA verified successfully:", token);
    } else {
      setRecaptchaValid(false);
      console.log("reCAPTCHA verification failed");
    }
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!recaptchaValid) {
      console.log("reCAPTCHA not verified");
      return;
    }
    // Handle form submission logic here
    console.log("Form submitted successfully");
  };

  return (
    <InViewAnim>
      <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}>
        <div className={styles.component}>
          <div className={styles.wrapper}>
            <div className={styles.inner}>
              <section className={styles.form_wrapper}>
                <h3 className={styles.title}>Your Information</h3>
                <form className={styles.form} onSubmit={onSubmit} method="POST" action="https://formspree.io/f/xnqlwbzy">
                  <div className={styles.info}>
                    <div className={styles.info_wrapper}>
                      <input type="text" name="name" id="name" placeholder="Enter your name here" />
                      <label htmlFor="name">Name</label>
                    </div>
                    <div className={styles.info_wrapper}>
                      <input type="email" name="email" id="email" placeholder="Enter your email here" />
                      <label htmlFor="email">Email</label>
                    </div>
                    <div className={styles.info_wrapper}>
                      <input type="tel" name="phone" id="phone" placeholder="Enter phone number here" />
                      <label htmlFor="phone">Phone</label>
                    </div>
                  </div>
                  <div className={styles.project}>
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Enter your message here"
                      onInput={(e) => {
                        const target = e.target as HTMLTextAreaElement;
                        target.style.height = "auto";
                        target.style.height = target.scrollHeight + "px";
                      }}
                    />
                    <label htmlFor="message">A little information about your project</label>
                  </div>
                  <div className={styles.recapcha}>
                    <GoogleReCaptcha onVerify={handleRecaptchaVerify} />
                    <button type="submit" disabled={!recaptchaValid}>Get in Touch</button>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
      </GoogleReCaptchaProvider>
    </InViewAnim>
  );
}