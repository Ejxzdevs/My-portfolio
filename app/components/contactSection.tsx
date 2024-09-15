import React from 'react'

const contactSection = () => {
  return (
    <div id='contact' className='h-auto px-10  grid grid-cols-1 sm:grid sm:grid-cols-1 sm:h-screen lg:grid lg:grid-cols-1 lg:h-screen'>
        <section id="contact" className="py-16 ">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold mb-8 text-white">Get In Touch</h2>
    <p className="text-lg text-gray-300 mb-12">Feel free to reach out via any of the platforms below!</p>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      <div className="contact-item transform hover:scale-105 transition duration-300 ease-in-out">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=johnerickgofredo163@gmail.com&su=Hello%20Ejhay" className="block p-6 bg-gray-800 rounded-lg shadow-lg">
          <i className="fas fa-envelope text-4xl text-blue-400 mb-4"></i>
          <h3 className="text-xl font-semibold mb-2 text-white">Email</h3>
          <p className="text-gray-300">johnerickgofredo163@gmail.com</p>
        </a>
      </div>

      <div className="contact-item transform hover:scale-105 transition duration-300 ease-in-out">
        <a href="https://www.instagram.com/ejhayzxx" className="block p-6 bg-gray-800 rounded-lg shadow-lg">
          <i className="fas fa-phone-alt text-4xl text-green-400 mb-4"></i>
          <h3 className="text-xl font-semibold mb-2 text-white">Instagram</h3>
          <p className="text-gray-300">Ejhay Gofredo</p>
        </a>
      </div>

      <div className="contact-item transform hover:scale-105 transition duration-300 ease-in-out">
        <a href="https://www.facebook.com/IzoneGgbyt/" target="_blank" className="block p-6 bg-gray-800 rounded-lg shadow-lg">
          <i className="fab fa-linkedin text-4xl text-blue-500 mb-4"></i>
          <h3 className="text-xl font-semibold mb-2 text-white">Facebook</h3>
          <p className="text-gray-300">Ejhay Gofredo</p>
        </a>
      </div>

      <div className="contact-item transform hover:scale-105 transition duration-300 ease-in-out">
        <a href="https://github.com/Ejxzdevs" target="_blank" className="block p-6 bg-gray-800 rounded-lg shadow-lg">
          <i className="fab fa-github text-4xl text-gray-400 mb-4"></i>
          <h3 className="text-xl font-semibold mb-2 text-white">GitHub</h3>
          <p className="text-gray-300">Ejxzdevs</p>
        </a>
      </div>
      <div className="contact-item transform hover:scale-105 transition duration-300 ease-in-out">
        <a href="https://www.linkedin.com/in/john-erick-gofredo-253304329/" target="_blank" className="block p-6 bg-gray-800 rounded-lg shadow-lg">
          <i className="fab fa-twitter text-4xl text-blue-400 mb-4"></i>
          <h3 className="text-xl font-semibold mb-2 text-white">LinkedIn</h3>
          <p className="text-gray-300">John Erick Gofredo</p>
        </a>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default contactSection
