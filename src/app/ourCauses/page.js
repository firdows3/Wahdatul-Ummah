"use client";
import styles from "../page.module.css";
import { motion } from "framer-motion";
import { Athiti, Inria_Sans } from "next/font/google";
const athiti = Athiti({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});
const inriaSans = Inria_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
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

const focusArea = [
  {
    title: "UNITY",
    description:
      "Strengthen connections among communities in East Oromia by promoting collaboration, cultural understanding, and shared purpose.",
  },
  {
    title: "EDUCATION",
    description:
      "Provide accessible resources, tools, and opportunities to improve literacy, knowledge, and skills for personal and community growth.",
  },
  {
    title: "ECONOMIC & EMPOWERMENT",
    description:
      "Support local businesses, entrepreneurs, and job creation to foster sustainable economic development.",
  },
  {
    title: "MEDIA SUPPORT",
    description:
      "Amplify local voices, share stories, and raise awareness through effective media platforms to drive positive change and representation.",
  },
];
export default function OurCauses() {
  return (
    <div className={styles.page}>
      <motion.div
        className={`${styles.headers} ${athiti.className}`}
        variants={slideInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Image src="/unity.avif" alt="Unity" />
        <div className={styles.header_text}>
          <div style={{ fontSize: 45 }}>
            OUR CAUSES{" "}
            <div style={{ fontSize: 20 }}>
              Discover our ongoing causes and projects dedicated to empowering
              communities in the Welega and Shewa zones of Oromia.
            </div>
          </div>
        </div>
      </motion.div>
      {/* <motion.div
        className={`${styles.about_three} ${athiti.className}`}
        variants={slideInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ marginBottom: "5%" }}
      >
        <div
          style={{
            fontSize: 30,
            margin: "5% 0px 0px 10%",
            fontWeight: "900",
          }}
        >
          OUR PRINCIPLES
        </div>
        <div className={styles.about_four_flex}>
          {principles.map((title, index) => (
            <motion.div
              key={index}
              variants={index % 2 === 0 ? slideInLeft : slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={styles.about_four_each_line}
            >
              <div
                className={inriaSans.className}
                style={{
                  fontSize: "50px",
                  margin: "5px 0px",
                  fontWeight: "600",
                }}
              >
                0 {index + 1}
                {"        "} |
              </div>
              <div className={styles.about_four_desc}>{principles[index]}</div>
            </motion.div>
          ))}
        </div>
      </motion.div> */}

      <motion.div
        className={`${styles.about_three} ${athiti.className}`}
        variants={slideInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ marginBottom: "7%" }}
      >
        <div className={styles.about_three_flex}>
          {["UNITY", "EDUCATION", "ECONIMIC EMPOWERMENT", "MEDIA SUPPORT"].map(
            (title, index) => (
              <motion.div
                key={index}
                className={styles.ourCause_box}
                variants={index % 2 === 0 ? slideInLeft : slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div
                  className={inriaSans.className}
                  style={{
                    fontSize: "22px",
                    margin: "5px 0px",
                    fontWeight: "600",
                  }}
                >
                  {title}
                </div>
                <div>{focusArea[index].description}</div>
                <div className={styles.btn}>Donate</div>
              </motion.div>
            )
          )}
        </div>
      </motion.div>
    </div>
  );
}
