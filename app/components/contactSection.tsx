import React from 'react'
import Image from 'next/image';

const contactSection = () => {
  return (
    <div id='contact' className='h-auto px-10  grid grid-cols-1 sm:grid sm:grid-cols-1 sm:h-screen lg:grid lg:grid-cols-1 lg:h-screen'>
        
        <section id="contact" className="py-16 ">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-white">Contact Us</h2>
            <p className="text-lg text-gray-300 mb-12">Feel free to reach out via any of the platforms below!</p>
            <div className="flex flex-row justify-center items-center gap-8 flex-wrap  ">

              <div className="contact-item transform hover:scale-105 transition duration-300 ease-in-out">
                  <a href="https://www.instagram.com/ejhayzxx" target="_blank" className="min-h-20 w-52 flex flex-row gap-2 justify-center items-center bg-gray-800 rounded-lg shadow-lg">
                  <Image
                          src="/icons/Socmed/Instagram.png"
                          alt='Instagram'
                          width={30}
                          height={30}
                    />
                    <h3 className="text-xl font-semibold mb-2 text-white">Gmail</h3>
                  </a>
                </div>

                <div className="contact-item transform hover:scale-105 transition duration-300 ease-in-out">
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=johnerickgofredo163@gmail.com&su=Hello%20Ejhay" target="_blank" className="min-h-20 w-52 flex flex-row gap-2 justify-center items-center bg-gray-800 rounded-lg shadow-lg">
                  <Image
                          src="/icons/Socmed/Gmail.png"
                          alt='Instagram'
                          width={30}
                          height={30}
                    />
                    <h3 className="text-xl font-semibold mb-2 text-white">Gmail</h3>
                  </a>
                </div>

                <div className="contact-item transform hover:scale-105 transition duration-300 ease-in-out">
                  <a href="https://www.facebook.com/IzoneGgbyt/" target="_blank" className="min-h-20 w-52 flex flex-row gap-2 justify-center items-center bg-gray-800 rounded-lg shadow-lg">
                  <Image
                          src="/icons/Socmed/Facebook.png"
                          alt='Facebook'
                          width={30}
                          height={30}
                    />
                    <h3 className="text-xl font-semibold mb-2 text-white">Facebook</h3>
                  </a>
                </div>
                
                <div className="contact-item transform hover:scale-105 transition duration-300 ease-in-out">
                  <a href="https://github.com/Ejxzdevs" target="_blank" className="min-h-20 w-52 flex flex-row gap-2 justify-center items-center bg-gray-800 rounded-lg shadow-lg">
                  <Image
                          src="/icons/Socmed/Github.png"
                          alt='Github'
                          width={30}
                          height={30}
                    />
                    <h3 className="text-xl font-semibold mb-2 text-white">GitHub</h3>
                  </a>
                </div>

                <div className="contact-item transform hover:scale-105 transition duration-300 ease-in-out">
                  <a href="https://www.linkedin.com/in/john-erick-gofredo-253304329/" target="_blank" className="min-h-20 w-52 flex flex-row gap-2 justify-center items-center bg-gray-800 rounded-lg shadow-lg">
                  <Image
                          src="/icons/Socmed/LinkedIn.png"
                          alt='Github'
                          width={30}
                          height={30}
                    />
                    <h3 className="text-xl font-semibold mb-2 text-white">LinkedIn</h3>
                  </a>
                </div>
            
            </div>
          </div>

        </section>
    </div>
  )
}

export default contactSection
