"use client";
import styles from "../page.module.css";
import { Athiti, Inria_Sans } from "next/font/google";
import { motion } from "framer-motion";

const slideInLeft = {
  hidden: { opacity: 0, x: -50, scale: 0.95 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.6 } },
};

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

// Array for news content
const newsContent = [
  {
    title: "Community Workshop in Welega",
    description: `Join us for an engaging workshop focused on youth education, skill development, 
    and community empowerment in the Welega zone. Participants will gain insights into leadership, 
    teamwork, and social responsibility, while connecting with like-minded individuals who are 
    passionate about driving positive change in their communities.`,
    image: "/event1.avif",
  },
  {
    title: "Health Awareness Campaign",
    description: `Our health awareness campaign in Shewa aims to educate the local community 
    about preventive healthcare, nutrition, and hygiene practices. The program includes interactive 
    sessions with health professionals, free medical check-ups, and distribution of educational materials 
    to ensure lasting impact on the well-being of all participants.`,
    image: "/event2.avif",
  },
  {
    title: "Islamic Education Seminar",
    description: `This seminar is dedicated to deepening knowledge and understanding of Islamic 
    teachings while promoting unity and brotherhood within the Ummah. Attendees will engage in 
    lectures, discussions, and workshops covering spiritual growth, Quranic studies, and community 
    service initiatives, fostering a strong and informed Muslim community.`,
    image: "/event3.avif",
  },
];

export default function News() {
  return (
    <div className={styles.page}>
      <motion.div
        className={`${styles.headers} ${athiti.className}`}
        variants={slideInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <img src="/event4.avif" alt="Unity" />
        <div className={styles.header_text}>
          <div style={{ fontSize: 45 }}>
            WHAT'S NEW
            <div style={{ fontSize: 20 }}>
              Explore our upcoming events aimed at driving positive change in
              the Welega and Shewa zones.
            </div>
          </div>
        </div>
      </motion.div>

      {newsContent.map((item, index) => (
        <motion.div
          className={`${styles.home_about} ${athiti.className}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          key={index}
        >
          <div>
            <img
              src={item.image}
              alt={item.title}
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </div>
          <div className={styles.new_content_desc}>
            <div
              className={inriaSans.className}
              style={{ fontSize: 22, fontWeight: 600, margin: "10px 0" }}
            >
              {item.title}
            </div>
            <div>{item.description}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
