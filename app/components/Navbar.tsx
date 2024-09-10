import React from 'react'
import Link from 'next/link';
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <header className={`${styles.headerContainer} grid grid-cols-2 lg:grid lg:grid-cols-2`} >
      <div className='flex items-center'>
        <h1 className={`${styles.logo} font-bold hidden sm:flex lg:flex`}>Ejhay</h1>
      </div>
      <nav className={`${styles.nav}`} >
        <Link href="/" className={`${styles.linkStyle} hidden sm:flex lg:flex`}>Home</Link>
        <Link href="/about" className={`${styles.linkStyle} hidden sm:flex lg:flex `}>Skills</Link>
        <Link href="/about" className={`${styles.linkStyle} hidden sm:flex lg:flex `}>Projects</Link>
        <Link href="/about" className={`${styles.linkStyle} hidden sm:flex lg:flex `}>Contact</Link>
        <Link href="/about" className={`${styles.linkStyle} hidden sm:flex lg:flex `}>Hire Me</Link>
      </nav>
    </header>
)}

export default Navbar
