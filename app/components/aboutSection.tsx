"use client"
import React from 'react';
import { useState } from 'react';
import styles from './component.module.css';
import Image from 'next/image';

function AboutSection() {
 
  const [experiences, setExperieces] = useState<string>(`<label>Web Developer Intern</label>
                  <p><span>RACITELCOM, Inc.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>Date:</span>&nbsp;Feb - June&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Location:</span>&nbsp;MacArthur Hwy, Marilao, Bulacan</p>
                  <p>Racitelcom Inc. is a telecommunications company offering internet and telephone services for residential and business customers in Meycauayan, Marilao, Bocaue, and Sta. Maria, Bulacan.</p>
                  <p> - Developed a payroll system using PHP, HTML, CSS, JavaScript, and MySQL, ensuring smooth integration with existing systems and user-friendly website interfaces.</p>`);
  


  const handleClick = (text: string) => {
    setExperieces(text);
    
  };

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
              <a onClick={() => handleClick(` <label>Web Developer Intern</label>
                  <p><span>RACITELCOM, Inc.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>Date:</span>&nbsp;Feb - June&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>Location:</span>&nbsp;MacArthur Hwy, Marilao, Bulacan</p>
                  <p>Racitelcom Inc. is a telecommunications company offering internet and telephone services for residential and business customers in Meycauayan, Marilao, Bocaue, and Sta. Maria, Bulacan.</p>
                  <p> - Developed a payroll system using PHP, HTML, CSS, JavaScript, and MySQL, ensuring smooth integration with existing systems and user-friendly website interfaces.</p>`)}>Experiences</a> | 
              <a onClick={() => handleClick(`
                <p><span>AWS Cloud Quest: Cloud Practitioner</span>&nbsp;- Amazon Web Services Training and Certification<p>
                <p><span>Programming (JAVA) NC III</span>&nbsp;- Center for International Industries Competence Corp (CIICC)<p>
                <p><span>Fullstack web development: CSS JS and PHP Mastery</span>&nbsp;- Udemy<p>
                `)}>Certification</a> | 
            </div>
            <div className={`${styles.miniContainer} `}>
            <div className={`${styles.achievementContainer}`} dangerouslySetInnerHTML={{ __html: experiences }} />
            </div>
          </div>
       </div>
    </div>
  )
}

export default AboutSection
