"use client";
import Image from "next/image";
import styles from "../page.module.css";
import { Inria_Serif, Klee_One } from "next/font/google";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaLocationArrow,
  FaPhone,
  FaTiktok,
} from "react-icons/fa";
import { Athiti } from "next/font/google";
const athiti = Athiti({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inriaSerif = Inria_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const kleeOne = Klee_One({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});
const slideInLeft = {
  hidden: { opacity: 0, x: -50, scale: 0.95 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.6 } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50, scale: 0.95 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.6 } },
};
export default function Contact() {
  return (
    <div className={styles.page}>
      {/* Header Section */}
      <motion.div
        className={`${styles.headers} ${athiti.className}`}
        variants={slideInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img src="/contact.avif" alt="Unity" />
        <div className={styles.header_text}>
          <div style={{ fontSize: 45 }}>
            OUR CONTACTS{" "}
            <div style={{ fontSize: 20 }}>
              CONTACT US For any information regarding Wahdatal Ummah you can
              contact through the contact information below.
            </div>
          </div>
        </div>
      </motion.div>

      {/* Contact Icons Section */}
      <div className={styles.contact_section_one}>
        {[
          {
            icon: <FaPhone className={styles.contact_icon} />,
            label: "+251-99-999-9999",
            link: "tel:+251-99-999-9999",
          },
          {
            icon: <FaEnvelope className={styles.contact_icon} />,
            label: "wahdaUmmata@gmail.com",
            link: "mailto:wahdaUmmata@gmail.com",
          },
          {
            icon: <FaFacebook className={styles.contact_icon} />,
            label: "@wahdaUmmata",
            link: "https://www.facebook.com/share/1BcK9wdK7j/",
          },
          {
            icon: <FaInstagram className={styles.contact_icon} />,
            label: "@wahdaUmmata ",
            link: "https://www.instagram.com/wahdaUmmata?igsh=MThsM2JjamtsNzY5MQ==",
          },
          {
            icon: <FaTiktok className={styles.contact_icon} />,
            label: "@wahdaUmmata",
            link: "https://www.tiktok.com/@wahdaUmmata?_t=ZM-8xjPhgPkLiS&_r=1",
          },
        ].map((item, index) => {
          return (
            <motion.div
              key={index}
              className={styles.contact_section_one_each_box}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  gap: "10px",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  wordBreak: "break-word",
                  textAlign: "center",
                }}
                className={inriaSerif.className}
              >
                {item.icon}
                <p>{item.label}</p>
              </a>
            </motion.div>
          );
        })}
      </div>

      {/* Location Section */}
      {/* <div className={styles.contact_location_section}>
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <FaLocationArrow style={{ fontSize: "40px" }} />
          <div className={inriaSerif.className}>
            <div>Our Location</div>
            <p className={kleeOne.className}>Anfo, Around Marina Mall</p>
          </div>
        </div>
        <div className={styles.map_container}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.9272733211625!2d36.8672979!3d8.1615026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1642c63aabb54f2f%3A0x9fdc72dbf191ce93!2sAnfo%2C%20Ethiopia!5e0!3m2!1sen!2set!4v1721037230000!5m2!1sen!2set"
            width="100%"
            height="300"
            style={{
              border: 0,
              borderRadius: "15px",
              width: "100%",
              maxHeight: "500px",
            }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>{" "}
        </div>
      </div> */}
    </div>
  );
}
