import React from 'react'
import style from '../styles';

function Footer() {
  return (
    <footer className={`${style.footer}`}>
       
     <div className='p-1 '>
         <a href="#" className={`${style.linkHover} pr-2`}>Terms & Condition |</a>
         <a href="#" className={`${style.linkHover} pr-2`}>Privacy Policy |</a>
         <a href="#"className={`${style.linkHover}`} >Manage cookies </a>
     </div>

    <div className={`${style.linkHover}`}>  © Copyright {new Date().getFullYear()} Hugly Group (Pvt) Ltd </div>

</footer>
  )
}

export default Footer