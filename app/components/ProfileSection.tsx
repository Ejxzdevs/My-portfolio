import React from 'react'
import styles from './component.module.css';
import Image from 'next/image';


const profileSection = () => {
  return (
        <div className= {`${styles.profileContainer} py-8 grid grid-cols-1 h-auto sm:grid sm:grid-cols-2 sm:h-screen lg:grid lg:grid-cols-2 lg:h-screen`}>
          <div className={ `${styles.welcomeContainer} `} >
            <h1 className={ `${styles.forte} `} >Web Developer</h1>
            <label className='text-3xl'><span><span className={styles.spanStyle} >Hello</span> I&apos;m</span><strong>Ejhay Gofredo</strong></label>
            <p>I have a Bachelor&apos;s degree in Information Systems and a strong passion for 
              programming and technology. I have hands-on experience in developing web 
              systems and working on various projects.</p>
          </div>
          <div className={ `${styles.imageContainer} flex items-center justify-center`} >
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
