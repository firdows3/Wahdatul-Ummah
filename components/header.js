"use client";
import Link from "next/link";
import { FiMenu, FiPhoneCall, FiX, FiLogIn } from "react-icons/fi";
import "./styles/header.css";
import { useState } from "react";
import Image from "next/image";

import { FiChevronDown } from "react-icons/fi";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const switchLang = (lang) => {
    const segments = pathname.split("/").filter(Boolean);
    if (["en", "am", "ar", "om"].includes(segments[0])) segments.shift();
    const newPath =
      "/" + lang + (segments.length ? "/" + segments.join("/") : "");
    router.push(newPath);
  };

  const { t, i18n } = useTranslation();
  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className={`header-container`}>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </div>
      <div className="header-left">
        <Link href="/">{t("home")}</Link>
        <div className="dropdown">
          <span className="dropdown-title">
            Who we are
            <FiChevronDown className="dropdown-icon" />
          </span>

          <div className="dropdown-menu">
            <Link href="/aboutUs">About Us</Link>
            <Link href="/governance">Governance</Link>
            <Link href="/whereWeWork">Where We Work</Link>
          </div>
        </div>

        <Link href="/whatWeDo">What we do</Link>
        <Link href="/news">What&apos;s New</Link>
        <Link href="/ourCauses">Our Cause</Link>
        <Link href="/contacts">Contact US</Link>
      </div>
      <div>
        <img src="/logo.jpg" />
      </div>
      <div className="header-right">
        <FiLogIn className="header-login" size={24} />
        <div className="header-button">Register</div>
        <div className="translate-wrapper">
          <div className="header-button" onClick={() => setLangOpen(!langOpen)}>
            Translate
          </div>

          {langOpen && (
            <div className="translate-dropdown">
              <button onClick={() => handleLanguageChange("en")}>EN</button>
              <button onClick={() => handleLanguageChange("ar")}>AR</button>
              <button onClick={() => handleLanguageChange("om")}>OM</button>
              <button onClick={() => handleLanguageChange("am")}>AM</button>
            </div>
          )}
        </div>
      </div>
      {menuOpen && (
        <div className="mobile-menu">
          <Link onClick={() => setMenuOpen(false)} href="/">
            Home
          </Link>
          <div className="dropdown">
            <span className="dropdown-title">
              Who we are
              <FiChevronDown className="dropdown-icon" />
            </span>

            <div className="dropdown-menu">
              <Link href="/aboutUs">About Us</Link>
              <Link href="/governance">Governance</Link>
              <Link href="/whereWeWork">Where We Work</Link>
            </div>
          </div>

          <Link onClick={() => setMenuOpen(false)} href="/news">
            What&apos;s New
          </Link>
          <Link onClick={() => setMenuOpen(false)} href="/ourCauses">
            Our Cause
          </Link>
          <Link onClick={() => setMenuOpen(false)} href="/contacts">
            Contact US
          </Link>
        </div>
      )}
    </div>
  );
}
