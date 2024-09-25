import React from 'react'

const footer = () => {
  return (
    <div>
        <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by <strong>Ejhay Gofredo</strong>.</p>
            </aside>
        </footer>
    </div>
  )
}

export default footer
