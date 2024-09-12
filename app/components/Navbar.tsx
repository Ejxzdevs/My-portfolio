import React from 'react'
import Link from 'next/link';
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <header className={`${styles.headerContainer} grid grid-cols-2 lg:grid lg:grid-cols-2`} >
      <div className='flex items-center'>
        <Link href="#home" className={`${styles.logo} font-bold hidden sm:flex lg:flex`}>Ejhay</Link>
      </div>
      <nav className={`${styles.nav}`} >
        <Link href="#about" className={`${styles.linkStyle} hidden sm:flex lg:flex`}>About</Link>
        <Link href="#skills" className={`${styles.linkStyle} hidden sm:flex lg:flex `}>Skills</Link>
        <Link href="#projects" className={`${styles.linkStyle} hidden sm:flex lg:flex `}>Projects</Link>
        <Link href="#contact" className={`${styles.linkStyle} hidden sm:flex lg:flex `}>Contact</Link>
      </nav>
    </header>
)}

export default Navbar
