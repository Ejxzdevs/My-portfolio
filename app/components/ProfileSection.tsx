import React from 'react'
import styles from './component.module.css';
import Image from 'next/image';


const ProfileSection = () => {
  return (
        <div className="grid grid-cols-1 sm:grid sm:grid-cols-1 lg:grid lg:grid-cols-2 min-h-full pt-8 ">
          <div className={ `${styles.welcomeContainer} flex flex-col py-5 gap-y-8 sm:gap-y-3 lg:gap-y-3`} >
            <h1 className={ `${styles.forte} `} >Web Developer</h1>
            <label className='text-3xl'><span><span className={styles.spanStyle} >Hello</span> I'm</span><strong>Ejhay Gofredo</strong></label>
            <p>I have a Bachelor's degree in Information Systems and a strong passion for 
              programming and technology. I have hands-on experience in developing web 
              systems and working on various projects.</p>
          </div>
          <div className={ `${styles.imageContainer} py-5`} >
              <Image
                src="/anime.jpg"
                alt='my image'
                width={250}
                height={220}
                className={styles.imageStyle}
              />
          </div>
        </div>
  )
}

export default ProfileSection
