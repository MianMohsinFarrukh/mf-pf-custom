// "use client";

// import React, { useState } from "react";
// import { FaBars, FaTimes, FaHome, FaUserAlt, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
// import Link from "next/link";
// import styles from "./Header.module.css";
// import Image from "next/image";

// const Header: React.FC = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <header className={styles.header}>
//       <div className={styles.logo}>
//         <Link href="/"><Image className="headlogo" width={20} height={20} src="/images/j3.jpg" alt='image'></Image>My Portfolio</Link>
//       </div>
//       <button className={styles.hamburger} onClick={toggleMenu}>
//         {menuOpen ? <FaTimes /> : <FaBars />}
//       </button>
//       <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
//         <ul className={styles.navList}>
//           <li>
//             <Link href="/">
//               <FaHome className={styles.icon} /> Home
//             </Link>
//           </li>
//           <li>
//             <Link href="/about">
//               <FaUserAlt className={styles.icon} /> About
//             </Link>
//           </li>
//           <li>
//             <Link href="/projects">
//               <FaProjectDiagram className={styles.icon} /> Projects
//             </Link>
//           </li>
//           <li>
//             <Link href="/contact">
//               <FaEnvelope className={styles.icon} /> Contact
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;





"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaHome, FaUser, FaBriefcase, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo and Title */}
        <div className="logo-title">
        <Image className="profileimg" width={30} height={30} src="/images/logoss.png" alt='image'></Image>
          <h1 className="title">My Portfolio</h1>
        </div>

        {/* Navbar */}
        <nav className={`navbar ${isOpen ? 'navbar-open' : ''}`}>
          <Link href="/" className="nav-link">
            <FaHome className="nav-icon" />
            Home
          </Link>
          <Link href="/aboutus" className="nav-link">
            <FaUser className="nav-icon" />
            About
          </Link>
          <Link href="/services" className="nav-link">
            <FaBriefcase className="nav-icon" />
            Services
          </Link>
          <Link href="/projects" className="nav-link">
            <FaProjectDiagram className="nav-icon" />
            Projects
          </Link>
          <Link href="/contacts" className="nav-link">
            <FaEnvelope className="nav-icon" />
            Contact
          </Link>
        </nav>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="hamburger-button"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
