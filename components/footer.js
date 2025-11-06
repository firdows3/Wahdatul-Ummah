import "./styles/footer.css";
import { Klee_One } from "next/font/google";
import { FaEnvelope, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

const kleeOne = Klee_One({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});
export default function Footer() {
  return (
    <>
      <div className={`${kleeOne.className} footer-donate`}>
        <div className="footer-donate-title">GET IN TOUCH</div>
        <div className="footer-donate-desc">
          Support Wahdatal Ummah in spreading unity, knowledge, and community
          development. Every donation helps us sustain our programs, reach more
          people, and make a lasting impact.
        </div>
        <div className="footer-donate-btn">Donate</div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63046.90282014365!2d38.59736044863282!3d9.024349999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b87ec5836057b%3A0xc120aeb08c9cf876!2sanfo%20Adebaby!5e0!3m2!1sen!2set!4v1762430795761!5m2!1sen!2set"
          width="100%"
          height="100%"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className={`${kleeOne.className} footer-container`}>
        <div className="footer-top">
          <div className="footer-top-left">
            <Image src="/logo.jpg" />
            <div>
              Increase in the awareness among people about WAHDATAL UMMAH
            </div>
          </div>
          <div className="footer-top-middle">
            <a
              href="#"
              target="_blank"
              style={{ display: "flex", gap: "10px" }}
            >
              <FaFacebook className="footer-icon" />
            </a>
            <a
              href="#"
              target="_blank"
              style={{ display: "flex", gap: "10px" }}
            >
              <FaInstagram className="footer-icon" />
            </a>
            <a
              href="#"
              target="_blank"
              style={{ display: "flex", gap: "10px" }}
            >
              <FaTiktok className="footer-icon" />
            </a>
            <a href="" style={{ display: "flex", gap: "10px" }} target="_blank">
              <FaEnvelope className="footer-icon" />
            </a>
          </div>
          <div
            style={{
              display: "flex",
              gap: "5px",
              flexDirection: "column",
              fontSize: "12px",
            }}
          >
            <div>Contact Us</div>
            <div>wahdatalummah@gmail.com</div>
            <div>+251-99-999-9999</div>
          </div>
        </div>
        <div style={{ textAlign: "right", padding: "10px" }}>
          @copyright reserved 2025
        </div>
      </div>
    </>
  );
}
