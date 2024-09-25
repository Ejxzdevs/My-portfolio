import React from 'react'
import styles from './component.module.css';
import Image from 'next/image';

const icons = {
  webDev: [
    { src: '/icons/WebDev/html.png', alt: 'HTML' },
    { src: '/icons/WebDev/css.png', alt: 'CSS' },
    { src: '/icons/WebDev/php.png', alt: 'php' },
    { src: '/icons/WebDev/js.png', alt: 'JavaScript' },
    { src: '/icons/WebDev/sass.png', alt: 'sass' },
    { src: '/icons/WebDev/bootstrap.png', alt: 'bootstrap' },
    { src: '/icons/WebDev/tailwind.png', alt: 'tailwind' },
    { src: '/icons/WebDev/laravel.png', alt: 'laravel' },
    { src: '/icons/WebDev/react.png', alt: 'react' },
    { src: '/icons/WebDev/mysql.png', alt: 'mysql' },
   
  ],
  mobileDev: [
    { src: '/icons/Mobiledev/android.png', alt: 'Android' },
    { src: '/icons/Mobiledev/ios.png', alt: 'ios' },
  ],
  TaP: [
    { src: '/icons/Tools&Platform/git.png', alt: 'git' },
    { src: '/icons/Tools&Platform/github.png', alt: 'github' },
    { src: '/icons/Tools&Platform/npm.png', alt: 'npm' },
    { src: '/icons/Tools&Platform/composer.png', alt: 'composer' },
    { src: '/icons/Tools&Platform/vite.png', alt: 'vite' },
    { src: '/icons/Tools&Platform/laragon.png', alt: 'laragon' },
    { src: '/icons/Tools&Platform/xampp.png', alt: 'xampp' },
    { src: '/icons/Tools&Platform/hostinger.png', alt: 'hostinger' },
    
  ],
  DaC: [
    { src: '/icons/Desktop&Console/c.png', alt: 'c' },
    { src: '/icons/Desktop&Console/c++.png', alt: 'c++' },
    { src: '/icons/Desktop&Console/csharp.png', alt: 'csharp' },
    { src: '/icons/Desktop&Console/python.png', alt: 'python' },
    { src: '/icons/Desktop&Console/java.png', alt: 'java' },
  ],
};


const skillsSection = () => {
  return (
    <div id='skills' className={`${styles.skillsContainer} p-8 h-auto sm:h-screen lg:h-screen`} >
      <div className={`${styles.techstackContainer} bg-customBg gap-8 place-items-center h-auto grid grid-cols-1 sm:gap-x-44 sm:grid sm:grid-cols-2 sm:bg-transparent lg:grid lg:grid-cols-2 lg:gap-4 lg:bg-transparent`} >
          <div data-aos="zoom-out" data-aos-delay="100"  className='h-60 w-96 sm:h-52 sm:w-72 lg:h-52 lg:w-10/12 '>
            <h1>Web Development</h1>
            <div>
            {icons.webDev.map((icon, index) => (
              <Image
                key={index}
                src={icon.src}
                alt={icon.alt}
                width={220}
                height={220}
                className={styles.imageStyle}
              />
            ))}
            </div>
          </div>
          <div data-aos="zoom-out" data-aos-delay="300" className='h-60 w-96 sm:h-52 sm:w-72 lg:h-52 lg:w-10/12  '>
            <h1>tools & platform</h1>
            <div>
            {icons.TaP.map((icon, index) => (
              <Image
                key={index}
                src={icon.src}
                alt={icon.alt}
                width={220}
                height={220}
                className={styles.imageStyle}
              />
            ))}
       
            </div>
          </div>
          <div data-aos="zoom-out" data-aos-delay="400" className='h-60 w-96 sm:h-52 sm:w-72 lg:h-52 lg:w-10/12  '>
            <h1>Mobile Development</h1>
            <div>
       
            </div>
          </div>
          <div data-aos="zoom-out" data-aos-delay="600" className='h-60 w-96 sm:h-52 sm:w-72 lg:h-52 lg:w-10/12  '>
            <h1>Desktop GUI & Console Based</h1>
            <div>
            {icons.DaC.map((icon, index) => (
              <Image
                key={index}
                src={icon.src}
                alt={icon.alt}
                width={220}
                height={220}
                className={styles.imageStyle}
              />
            ))}
            </div>
          </div>
      </div>
    </div>
  )
}

export default skillsSection
