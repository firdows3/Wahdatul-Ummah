"use client";
import styles from "../page.module.css";
import { motion } from "framer-motion";
import { Athiti, Inria_Sans, Reem_Kufi } from "next/font/google";
import Image from "next/image";
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
const principles = [
  "Unity and Collaboration: Foster inclusivity and bring communities together to work toward shared goals.",
  "Empowerment: Enable individuals and communities to take control of their education, economy, and media narratives.",
  "Sustainability: Promote long-term, impactful solutions that benefit future generations.",
  "Transparency and Accountability: Operate with honesty, integrity, and responsibility in all actions and initiatives.",
  "Inclusivity: Ensure that all voices are heard, respected, and represented in the organization’s work.",
  "Innovation: Embrace creative and digital solutions to address challenges and achieve goals effectively.",
  "Community-Centered Approach: Focus on the needs, values, and aspirations of the people of West Oromia.",
];
export default function AboutUS() {
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
            ABOUT WAHDATAL UMMAH{" "}
            <div style={{ fontSize: 20 }}>Our goal is PARADISE !!</div>
          </div>
        </div>
      </motion.div>
      <motion.div
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
            margin: "10px 0px 20px 10%",
            fontWeight: "900",
          }}
        >
          HOW WE STARTED
        </div>
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div
            className={athiti.className}
            style={{
              fontSize: "20px",
              margin: "0px auto",
              width: "80%",
              lineHeight: "35px",
            }}
          >
            Wahdatal Ummah was born out of a shared vision to address the
            pressing challenges faced by communities in East Oromia. The
            founders, inspired by the region&apos;s rich culture and untapped
            potential, recognized the need for a united effort to bring about
            sustainable change. Observing the gaps in education, economic
            opportunities, and media representation, they envisioned a platform
            that could bridge these divides while fostering unity and
            collaboration. The organization began with grassroots discussions
            involving local leaders, educators, business owners, and media
            professionals. Through these conversations, it became clear that a
            centralized digital platform could serve as a catalyst for
            development and empowerment. With a strong commitment to inclusivity
            and community-driven solutions, Wahdatal Ummah was established to
            address these challenges holistically, bringing together people,
            resources, and ideas to build a brighter future for East Oromia. (TO
            BE CHANGED)
          </div>
        </motion.div>
      </motion.div>
      <motion.div
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
            margin: "10px 0px 20px 10%",
            fontWeight: "900",
          }}
        >
          OUR MISSION
        </div>
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div
            className={athiti.className}
            style={{
              fontSize: "20px",
              margin: "0px auto",
              width: "80%",
              lineHeight: "35px",
            }}
          >
            Our mission is to strengthen the unity of communities in East
            Oromia, empower individuals through accessible education, enhance
            economic opportunities for sustainable growth, and amplify local
            voices through effective media advocacy. By addressing these core
            areas, we aim to create a lasting impact, fostering collaboration,
            resilience, and progress for the people and future generations of
            the region.
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        className={`${styles.about_three} ${athiti.className}`}
        variants={slideInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ marginBottom: "7%" }}
      >
        <div
          style={{
            fontSize: 30,
            margin: "10px 0px 20px 10%",
            fontWeight: "900",
          }}
        >
          OUR FOCUS AREAS
        </div>
        <div className={styles.about_three_flex}>
          {["UNITY", "EDUCATION", "ECONIMIC EMPOWERMENT", "MEDIA SUPPORT"].map(
            (title, index) => (
              <motion.div
                key={index}
                className={styles.about_three_box}
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
              </motion.div>
            )
          )}
        </div>
      </motion.div>
      <motion.div
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
      </motion.div>
      <motion.div
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
            margin: "10px 0px 20px 10%",
            fontWeight: "900",
          }}
        >
          IMPACTS MADE
        </div>
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div
            className={athiti.className}
            style={{
              fontSize: "20px",
              margin: "0px auto",
              width: "80%",
              lineHeight: "35px",
            }}
          >
            Wahdatal Ummah has made a profound impact by fostering unity and
            collaboration among communities in West Oromia, creating a more
            harmonious and cooperative society. Through accessible educational
            tools and opportunities, individuals have been empowered with the
            knowledge and skills needed for personal and professional growth.
            The organization has also enhanced economic opportunities by
            supporting local businesses and entrepreneurs, leading to job
            creation and improved livelihoods. Additionally, it has amplified
            local voices through effective media advocacy, enabling communities
            to share their stories, raise awareness, and influence positive
            change. By addressing these core challenges holistically, Wahdatal
            Ummah has laid the foundation for sustainable development,
            benefiting current and future generations.
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className={`${styles.about_three} ${athiti.className}`}
        variants={slideInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ marginBottom: "7%" }}
      >
        <div
          style={{
            fontSize: 30,
            margin: "10px 0px 20px 10%",
            fontWeight: "900",
          }}
        >
          AWARDS
        </div>
        <div className={styles.about_three_flex}>
          {["UNITY", "EDUCATION", "ECONIMIC EMPOWERMENT", "MEDIA SUPPORT"].map(
            (title, index) => (
              <motion.div
                key={index}
                className={styles.about_awards_box}
                variants={index % 2 === 0 ? slideInLeft : slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div>
                  {index + 1 + ". "}
                  {focusArea[index].description}
                </div>
              </motion.div>
            )
          )}
        </div>
      </motion.div>
      {/* <motion.div
        className={`${styles.about_three} ${athiti.className}`}
        variants={slideInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          padding: "30px",
          backgroundColor: "#D4EFFF",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          width: "50%",
          margin: "3% auto 5%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className={athiti.className}
          style={{
            fontSize: "20px",
            margin: "0px auto",
            lineHeight: "35px",
          }}
        >
          Join us as a volunteer and use your skills, time, or expertise to
          bring positive change to the region.
        </div>
        <div
          style={{
            padding: "8px 10px",
            border: "3px solid #202020",
            width: "85px",
            fontWeight: "600",
            fontSize: 20,
            textAlign: "center",
          }}
        >
          Join
        </div>
      </motion.div> */}
    </div>
  );
}
