import React from 'react'
import Link from 'next/link';
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <header className={`${styles.headerContainer} grid grid-cols-2`} >
      <div className='flex items-center'>
        <h1 className={`${styles.logo} font-bold`}>Ejhay</h1>
      </div>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/about">Services</Link>
        <Link href="/about">Project</Link>
        <Link href="/about">Contact</Link>
        <Link href="/about">Hire Me</Link>
      </nav>
    </header>
)}

export default Navbar
