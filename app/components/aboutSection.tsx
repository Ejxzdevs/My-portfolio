import React from 'react'
import styles from './component.module.css';
import Image from 'next/image';

function AboutSection() {
  return (
    <div id='about' className={`${styles.aboutContainer} h-auto grid grid-cols-1 sm:grid sm:grid-cols-2 sm:h-screen lg:grid lg:grid-cols-2 lg:h-screen`}>
      <div className={ `${styles.aboutProfileContainer} p-10 flex items-center sm:flex sm:items-center sm:p-0 lg:flex lg:items-center lg:p-0 `}>
          <div className={`${styles.imgAboutContainer} bg-customBg p-8 h-auto sm:p-0 sm:h-72 sm:bg-transparent lg:h-96 lg:mt-5 lg:bg-transparent lg:p-0 `}>
          <Image
                 src="/about.jpg"
                 alt='my image'
                 width={500}
                 height={500}   
             />
          </div>
      </div>
       <div className={`${styles.infoContainer} px-20 `}>
          <h1>About Me</h1>
          <p>I have a Bachelor's degree in Information Systems and a strong passion for 
              programming and technology. I have hands-on experience in developing web 
              systems and working on various projects.</p>
          <div>
            <div className={`${styles.miniNav} `}>
              <a href="">Experience</a>
              <a href="">Certfication</a>
            </div>
            <div className={`${styles.miniContainer} `}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, quibusdam fugiat! Animi, repellat! Animi porro ipsam, ab quidem voluptatem deleniti possimus. Velit ab, magni nemo repellendus amet illo error incidunt?
                </p>
            </div>
          </div>
       </div>
    </div>
  )
}

export default AboutSection
