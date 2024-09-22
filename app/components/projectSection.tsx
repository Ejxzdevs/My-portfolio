import React from 'react'
import styles from './component.module.css';
import Image from 'next/image';

const projects = {
    items : [
      { src: '/projects/Enrollment.png', alt: 'Enrollment System' },
      { src: '/projects/Payroll.png', alt: 'Payroll System' },
      { src: '/projects/POS.png', alt: 'Point of Sale' },
    ]
}

const projectSection = () => {
  return (
      <div id='projects' className={`${styles.projectContainer} min-h-screen`}>
         {projects.items.map((icon, index) => (
          <div className="max-w-[720px] mx-auto">
              <div className="relative flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-customBg bg-clip-border text-white shadow-md">
                  <div className="relative m-0 overflow-hidden  bg-transparent rounded-none shadow-none bg-clip-border">
                  <Image
                      key={index}
                      src={icon.src}
                      alt={icon.alt}
                      width={220}
                      height={220}
                      className={styles.imageStyle}
              />
                  </div>
                  <div className="p-6">
                      <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                          UI/UX Review Check
                      </h4>
                      <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
                          Because it&apos;s about motivating the doers. Because I&apos;m here to follow my dreams and inspire others.
                      </p>
                  </div>
                  <div className="flex items-center justify-between p-6">
                      <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                          January 10
                      </p>
                  </div>
              </div>
          </div>
            ))}
    </div>
  )
}

export default projectSection
