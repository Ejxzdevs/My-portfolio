import React from 'react'
import styles from './component.module.css';
import Image from 'next/image';

const icons = {
  webDev: [
    { src: '/icons/Webdev/html.png', alt: 'HTML' },
    { src: '/icons/Webdev/css.png', alt: 'CSS' },
    { src: '/icons/Webdev/php.png', alt: 'php' },
    { src: '/icons/Webdev/js.png', alt: 'JavaScript' },
    { src: '/icons/Webdev/sass.png', alt: 'sass' },
    { src: '/icons/Webdev/bootstrap.png', alt: 'bootstrap' },
    { src: '/icons/Webdev/tailwind.png', alt: 'tailwind' },
    { src: '/icons/Webdev/laravel.png', alt: 'laravel' },
    { src: '/icons/Webdev/react.png', alt: 'react' },
    { src: '/icons/Webdev/mysql.png', alt: 'mysql' },
   
  ],
  mobileDev: [
    { src: '/icons/Mobiledev/android.png', alt: 'Android' },
    { src: '/icons/Mobiledev/ios.png', alt: 'iOS' },
  ],
  // Add more categories and icons here
};// Add more icons here


const skillsSection = () => {
  return (
    <div id='skills' className={`${styles.skillsContainer} p-8 h-auto sm:h-screen lg:h-screen`} >
      <div className={`${styles.techstackContainer} bg-customBg gap-8 place-items-center h-auto grid grid-cols-1 sm:gap-4 sm:grid sm:grid-cols-2 sm:bg-transparent lg:grid lg:grid-cols-2 lg:gap-4 lg:bg-transparent`} >
          <div className='h-60 w-96 sm:h-52 sm:w-60 lg:h-52 lg:w-10/12 '>
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
          <div className='h-60 w-96 sm:h-52 sm:w-60 lg:h-52 lg:w-10/12  '>
            <h1>tools & platform</h1>
            <div>
            <img src="https://img.icons8.com/color/48/git.png" alt="git"/>
            <img src="https://img.icons8.com/ios-filled/50/github.png" alt="github"/>
            <img src="https://img.icons8.com/color/48/visual-studio-code-2019.png" alt="visual-studio-code-2019"/>
            <img src="https://img.icons8.com/external-tal-revivo-bold-tal-revivo/24/external-npm-a-package-manager-for-the-javascript-programming-language-logo-bold-tal-revivo.png" alt="external-npm-a-package-manager-for-the-javascript-programming-language-logo-bold-tal-revivo"/>
            <img src="data:image/jpeg;base64,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"/>
            <img src="https://img.icons8.com/fluency/48/vite.png" alt="vite"/>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALAAAACUCAMAAAAEVFNMAAAAeFBMVEVnR8f///9hPsXr6PeikduIctJbNsRkQ8ZeOsSVg9ZiQMWomt3Z1O/QyuxZMsNdOMTz8fpyVsptT8nGvehVLML5+Pzv7Pizp+GEbdDk4PTg2/K8suRSJcG2q+J4Xsx1Wsuaidh/Z86uod/Kw+lJE79MHMCPfNSLd9NiiaRTAAADf0lEQVR4nO3c25KaQBAG4AZdZhgQAQE5eQAjvv8bBpNcbaAj63TRm+r/2lS+on5gdqYV4IUoz984FNkp9cr/D67qiz//5KXPA+h2W60IBsjcY7UEDBClJ/vk18GgsuRULwGD8bpjvB74CTj31QLw2CRzPqwIHsnuJVjy+bEX/qrgkWyWfV6vDV4aAQtYwAIWsIAFLGABC1jAAhawgAUsYAELWMACFrCArYAXbqivDg5N9L3ATnzdG8pWWAc7TtWB+63AjtOULlmVScBOcUqoqkwDHnsR3Gl6QQV28qq7U9x8ZOAxt1TbJ1OCnbxPrJNJwWOVr6lnGXwlBY/val9bvfvUObCQEBHHt0tmUwzGQhRarPj0Q1slvx+lM3RQJPdpFxhfSdbtcoQcfijCBcaXojVa5bwpI2YXWUXJqUDIG7oFxldjdIlWuQ4ibr0w6oFNHOb1uV2b+DnufYtdZOegXGZVBs89YON7eZBwI6to2KFV3sJ+beOn7GFbYxd5N2TU2wELo/aXHnuPWF9gvB/jntFexH3GboHRfqBD1fGguS0wdNtjrz5nV1LuYHwp2Rl/xDXlntlFdl0frfLmtLbwr+gU/35AvTbwr4zv4hMmXts3lSxFerE2bjImu86++ta2zSQyx5kqry2bi4rKw+TbGjyuyaJuqsqwZZzrxJ9QMH8/8oyAqSNg6giYOgKmjoCpI2DqTICLasM4E+A66MoPtpmqxPjXf+tyzXSHi4BkGMBKZrpdpRlT8uzt2CTcdgt/ZxY89iKxPAxgJfNgxwmvmts2MsAR26vPDyW7KpsS36tvNLczHOM90N+5iIeW2RkO6HuAksOz4kbO0gN6vNB0BCNab8V4ww0TVz1we8Rp8LGJCyf0uVVZ6XSLPuJ2CbdHnNKADw8dNbuT9fYcYle5GIDbq89t0ZN15/ZgN+8UpXPHC78SNx234SGlO/SkrOojdr1Q6DBAXtBMJ78TFT3wk/WU2zE16OiIkSmmk99NdkGHAeoru+Ehkw037Kl8GJSFWCVrmD/0HVOE76d+2B3JdtMAu/ksxLf8jPzXdDI78Ji2QxcY/MCg91t0rcwOPC4wkp7mpzqpwKC8sqHpBRH4+YWIkqQXZOCR3A62f6mTFvzcwWjQNRE78PMLGOgCgx8YtIvuxfEDg/lmYKUELGABC1jAAhawgAUsYAEL+H8F/wRglGrtYO2e0wAAAABJRU5ErkJggg=="/>
              <img src="https://cdn.worldvectorlogo.com/logos/laragon.svg" alt="laragon"/>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6yYRGHjklC-UYWk5lYbWokLl11Af2Rg12gw&s" alt="xampp" />
            </div>
          </div>
          <div className='h-60 w-96 sm:h-52 sm:w-60 lg:h-52 lg:w-10/12  '>
            <h1>Mobile Development</h1>
            <div>
              <img src="https://img.icons8.com/fluency/48/android-studio--v2.png" alt="android-studio--v2"/>
              <img src="https://img.icons8.com/fluency/48/flutter.png" alt="flutter"/>
            </div>
          </div>
          <div className='h-60 w-96 sm:h-52 sm:w-60 lg:h-52 lg:w-10/12  '>
            <h1>Desktop GUI & Console Based</h1>
            <div>
              <img src="https://img.icons8.com/fluency/48/java-coffee-cup-logo.png" alt="java-coffee-cup-logo"/>
              <img src="https://img.icons8.com/fluency/48/python.png" alt="python"/>
              <img src="https://img.icons8.com/fluency/48/c-programming.png" alt="c-programming"/>
              <img src="https://img.icons8.com/color/48/c-plus-plus-logo.png" alt="c-plus-plus-logo"/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default skillsSection
