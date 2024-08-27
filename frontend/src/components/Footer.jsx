import React from 'react'
import style from '../styles';

function Footer() {
  return (
    <footer className={`${style.footer}`}>
       
       <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 md:px-8">
        <div className="border-t border-borderBlue flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-2 sm:mb-0 mt-5">
            <a href="#" className={`${style.linkHover}`}>Terms & Condition |</a>
            <a href="#" className={`${style.linkHover}`}>Privacy Policy |</a>
            <a href="#"className={`${style.linkHover}`} >Manage cookies </a>
        </div>

        <div className={`${style.linkHover}`}>  © Copyright {new Date().getFullYear()} Hugly Group (Pvt) Ltd </div>
    </div>
    </div>
</footer>
  )
}

export default Footer




