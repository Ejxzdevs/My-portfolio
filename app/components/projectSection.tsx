import React from 'react';
import styles from './component.module.css';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projects = {
  items: [
    {
      src: '/projects/Enrollment.png',
      alt: 'Enrollment System',
      name: 'BestLink Admission & Enrollment System',
      techstack: 'HTML CSS PHP JS MYSQL',
      description:
        'The Bestlink Enrollment and Admission System streamlines the process of applying, reviewing, and registering students into educational institutions by managing applications, tracking student data, and simplifying enrollment workflows.',
    },
    {
      src: '/projects/Payroll.png',
      alt: 'Payroll System',
      name: 'Generic Payroll System with Mobile Application',
      techstack: 'HTML CSS PHP JS JQUERY MYSQL JAVA',
      description:
        'The Generic Payroll System streamlines the payroll process for employees by integrating biometric data, featuring a user-friendly interface and a mobile application with a web view for easy time entry and salary check.',
    },
    {
      src: '/projects/POS.png',
      alt: 'Point of Sale',
      name: 'Point of Sale',
      techstack: 'HTML JS BOOTSTRAP',
      description:
        'A Simple Point of Sale (POS) system designed specifically for ordering, making it easy for customers to list and manage their orders efficiently.',
    },
    {
      src: '/projects/Enrollment.png',
      alt: 'Enrollment System',
      name: 'BestLink Admission & Enrollment System',
      techstack: 'HTML CSS PHP JS MYSQL',
      description:
        'The Bestlink Enrollment and Admission System streamlines the process of applying, reviewing, and registering students into educational institutions by managing applications, tracking student data, and simplifying enrollment workflows.',
    },
    {
      src: '/projects/Payroll.png',
      alt: 'Payroll System',
      name: 'Generic Payroll System with Mobile Application',
      techstack: 'HTML CSS PHP JS JQUERY MYSQL JAVA',
      description:
        'The Generic Payroll System streamlines the payroll process for employees by integrating biometric data, featuring a user-friendly interface and a mobile application with a web view for easy time entry and salary check.',
    },
    {
      src: '/projects/POS.png',
      alt: 'Point of Sale',
      name: 'Point of Sale',
      techstack: 'HTML JS BOOTSTRAP',
      description:
        'A Simple Point of Sale (POS) system designed specifically for ordering, making it easy for customers to list and manage their orders efficiently.',
    },
    
    
  ],
};

const ProjectSection = () => {
  return (
      <Swiper
        id="projects" 
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          // when window width is <= 640px
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          // when window width is <= 1024px
          1024: {
            slidesPerView: 3,
          },
        }}
        className={`${styles.projectContainer} h-screen` }
      >
        {projects.items.map((project, index) => (
          <SwiperSlide key={index}
         >
            <div data-aos="flip-up"
              className={` ${styles.cardContainer}   relative flex flex-col overflow-hidden rounded-xl bg-customBg bg-clip-border text-white shadow-md `}
            >
              <div className="relative">
                <Image
                  src={project.src}
                  alt={project.alt}
                  width={220}
                  height={220}
                  className={styles.imageStyle}
                />
              </div>
              <div className="p-6 h-60">
                <label className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  {project.name}
                </label>
                <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="h-10 flex items-center justify-between p-6">
                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                  {project.techstack}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    
  );
};

export default ProjectSection;
