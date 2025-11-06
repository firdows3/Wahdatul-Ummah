"use client";
import styles from "./page.module.css";
import { Athiti, Inria_Sans, Reem_Kufi } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaDonate, FaHandsHelping, FaHeadset } from "react-icons/fa";
import { MdVolunteerActivism, MdSupportAgent } from "react-icons/md";

const Slider = dynamic(() => import("react-slick"), { ssr: false });
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1096,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
  ],
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50, scale: 0.95 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.6 } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50, scale: 0.95 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.6 } },
};

const reemKufi = Reem_Kufi({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
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

const events = [
  {
    img: "/event1.avif",
    title: "FUND RAISING",
    description:
      "Join us in empowering West Oromia by contributing to the Wahdatal Ummah platform, a transformative initiative uniting communities, advancing education, fostering economic growth, and amplifying local voices.",
  },
  {
    img: "/event2.avif",
    title: "VOLUNTEERING",
    description:
      "Become a part of the change—volunteer with Wahdatal Ummah to help unite communities, support education, drive economic growth, and amplify voices in East Oromia.",
  },
  {
    img: "/event3.avif",
    title: "HELP & SUPPORT",
    description:
      "Your help and support can make a lasting impact—join us in building a brighter future for East Oromia through unity, education, economic empowerment, and media outreach.",
  },
  {
    img: "/event4.avif",
    title: "VOLUNTEERING",
    description:
      "Become a part of the change—volunteer with Wahdatal Ummah to help unite communities, support education, drive economic growth, and amplify voices in East Oromia.",
  },
  {
    img: "/event5.avif",
    title: "HELP & SUPPORT",
    description:
      "Your help and support can make a lasting impact—join us in building a brighter future for East Oromia through unity, education, economic empowerment, and media outreach.",
  },
];

const teams = [
  {
    img: "/person1.avif",
    title: "Mohammed Khelil",
    description: "General Manager",
    icon: <FaDonate size={40} />,
  },
  { img: "/person2.avif", title: "Khalid Ahmed", description: "Vise Manager" },
  {
    img: "/person3.avif",
    title: "Ahmed Ymer",
    description: "Customer Service",
    icon: <FaHandsHelping size={40} />,
  },
  { img: "/person4.avif", title: "Ali Sabit", description: "General Manager" },
  {
    img: "/event1.avif",
    title: "Semir Ibrahim",
    description: "General Manager",
    icon: <MdSupportAgent size={40} />,
  },
];
export default function Home() {
  return (
    <div className={styles.page}>
      <motion.div
        className={`${styles.headers} ${athiti.className}`}
        variants={slideInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Image src="/unity2.avif" alt="Unity" />
        <div className={styles.header_text}>
          <div
            className={`${styles.home_header_text_bismillah} ${reemKufi.className}`}
          >
            بـسم الله الرحمان الرحيـم
          </div>
          <div className={styles.home_header_english_text}>
            “ The parable of those who spend their wealth in the way of Allah is
            that of a seed [of grain] which grows seven spikes, in each spike is
            a hundred grains. And Allah multiplies [His reward] for whom He
            wills. And Allah is all-Encompassing and Knowing. “
          </div>
        </div>
      </motion.div>

      <motion.div
        className={`${styles.home_two} ${athiti.className}`}
        variants={slideInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className={styles.home_two_text} style={{ fontSize: 20 }}>
          WE ARE HELPING PEOPLE AROUND WEST OROMIA{" "}
          <span style={{ fontSize: 14 }}>
            become part of us by being a member
          </span>
        </div>
        <div className={styles.home_two_btn}>Be a member</div>
      </motion.div>

      <motion.div
        className={`${styles.home_about} ${athiti.className}`}
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
          <Image src="/unity1.avif" />
        </div>
        <div className={styles.home_about_desc}>
          <div>
            Wahdatal Ummah is an Islamic organization dedicated to promoting
            unity, knowledge, and community development among Muslims. Our
            mission is to strengthen the bond of brotherhood within the Ummah
            through education, spiritual growth, and social support programs.
          </div>
          <div>
            We offer various membership options, including Normal and Special
            Members, allowing individuals to contribute to our shared vision of
            a strong, united, and informed Muslim community.
          </div>
          <div>
            At Wahdatal Ummah, we believe that true unity comes through
            understanding, compassion, and collective effort — working together
            for the sake of Allah and the betterment of our society.
          </div>
          <Link href="/aboutUs" className={styles.btn}>
            See More
          </Link>
        </div>
      </motion.div>

      <motion.div
        className={`${styles.home_three} ${athiti.className}`}
        variants={slideInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* <div
          style={{
            fontSize: 30,
            margin: "10px 0px 20px 10%",
            fontWeight: "900",
          }}
        >
          OUR SERVICES
        </div> */}
        <div className={styles.home_three_flex}>
          {["FUND RAISING", "VOLUNTEERING", "HELP & SUPPORT"].map(
            (title, index) => (
              <motion.div
                key={index}
                className={styles.home_three_box}
                variants={index % 2 === 0 ? slideInLeft : slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div style={{ marginBottom: "10px" }}>{events[index].icon}</div>
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
                <div>{events[index].description}</div>
              </motion.div>
            )
          )}
        </div>
      </motion.div>

      {/* <motion.div
        className={`${styles.home_four} ${athiti.className}`}
        variants={slideInRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div
          style={{
            fontSize: 30,
            margin: "10px 0px 20px 10%",
            fontWeight: "900",
          }}
        >
          UPCOMING EVENTS
        </div>
        <Slider {...sliderSettings} className={styles.home_four_flex}>
          {events.map((event, index) => (
            <motion.div
              key={index}
              className={styles.home_four_box}
              style={{ margin: 20 }}
              variants={index % 2 === 0 ? slideInLeft : slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img src={event.img} alt={event.title} />
              <div
                className={inriaSans.className}
                style={{
                  fontSize: "18px",
                  margin: "10px 5px",
                  fontWeight: "600",
                  textDecoration: "underline",
                }}
              >
                {event.title}
              </div>
              <div style={{ fontSize: "15px", margin: "0px 5px" }}>
                {event.description}
              </div>
            </motion.div>
          ))}
        </Slider>
      </motion.div> */}

      <motion.div
        className={`${styles.home_five} ${athiti.className}`}
        variants={slideInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div
          style={{
            fontSize: 30,
            margin: "10px 0px 20px 10%",
            fontWeight: "900",
          }}
        >
          VOLUNTEERS
        </div>
        <Slider {...sliderSettings} className={styles.home_five_flex}>
          {teams.map((team, index) => (
            <motion.div
              key={index}
              className={styles.home_five_box}
              style={{ margin: 20 }}
              variants={index % 2 === 0 ? slideInLeft : slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Image src={team.img} alt={team.title} />
              <div
                className={inriaSans.className}
                style={{
                  fontSize: "20px",
                  // margin: "10px 5px",
                  fontWeight: "600",
                  // textDecoration: "underline",
                }}
              >
                {team.title}
              </div>
              <div style={{ fontSize: "15px", margin: "0px 5px" }}>
                {team.description}
              </div>
            </motion.div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
}
