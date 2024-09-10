import React from 'react'
import styles from './component.module.css';
import Image from 'next/image';


const ProfileSection = () => {
  return (
        <div className="grid grid-cols-1 sm:grid sm:grid-cols-1 lg:grid lg:grid-cols-2 min-h-full ">
          <div className={ `${styles.welcomeContainer} flex flex-col justify-center py-5 gap-y-5`} >
            <h1 className={ `${styles.forte} `} >Web Developer</h1>
            <label className='text-3xl'><span>Hello I'm</span><strong>Ejhay Gofredo</strong></label>
            <p>I have a Bachelor's degree in Information Systems and a strong passion for 
              programming and technology. I have hands-on experience in developing web 
              systems and working on various projects</p>
          </div>
          <div className={ `${styles.imageContainer} flex items-center justify-end`} >
              <Image
                src="/anime.jpg"
                alt='my image'
                width={300}
                height={100}
                className={styles.imageStyle}
              />
          </div>
        </div>
  )
}

export default ProfileSection
