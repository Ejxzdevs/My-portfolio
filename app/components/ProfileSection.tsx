"use client"
import React from 'react'
import styles from './component.module.css';
import Image from 'next/image';



const profileSection = () => {
  return (
        <div id='home' className= {`${styles.profileContainer} py-8 grid grid-cols-1 h-auto sm:grid sm:grid-cols-2 sm:h-screen lg:grid lg:grid-cols-2 lg:h-screen`}>
          <div className={ `${styles.welcomeContainer} order-2 sm:order-1 lg:order-1`} >
            <h1 className={ `${styles.forte} `} >
            Web Developer.          
            </h1>
            <label className='text-3xl'><span><span className={styles.spanStyle} >Hello</span> I&apos;m</span><strong>Ejhay Gofredo</strong></label>
            <p   >I am a web developer focused on creating dynamic, efficient, and scalable solutions for every project I work on.</p>
          </div>
          <div className={ `${styles.imageContainer} order-1 pt-16 sm:pt-0 lg:pt-0 sm:lg:order-2 lg:order-2 flex items-center justify-center`} >
                <Image
           
                  src="/anime.jpg"
                  alt='my image'
                  width={220}
                  height={220}
                  className={styles.imageStyle}
                />
              
          </div>
        </div>
  )
}

export default profileSection
