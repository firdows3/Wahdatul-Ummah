"use client";
import Link from "next/link";
import { FiMenu, FiPhoneCall, FiX, FiLogIn } from "react-icons/fi";
import "./styles/header.css";
import { Athiti } from "next/font/google";
import { useState } from "react";
const athiti = Athiti({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={`${athiti.className} header-container`}>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </div>
      <div className="header-left">
        <Link href="/">Home</Link>
        <Link href="/aboutUs">About Us</Link>
        <Link href="/news">What's New</Link>
        <Link href="/ourCauses">Our Cause</Link>
        <Link href="/contacts">Contact US</Link>
      </div>
      <div>
        <img src="/logo.jpg" />
      </div>
      <div className="header-right">
        <FiLogIn className="header-login" size={24} />
        <div className="header-button">Register</div>
        <div className="header-button">Translate</div>
      </div>
      {menuOpen && (
        <div className="mobile-menu">
          <Link onClick={() => setMenuOpen(false)} href="/">
            Home
          </Link>
          <Link onClick={() => setMenuOpen(false)} href="/aboutUs">
            About Us
          </Link>
          <Link onClick={() => setMenuOpen(false)} href="/news">
            What's New
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
