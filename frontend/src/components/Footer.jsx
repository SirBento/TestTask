import React from 'react'
import style from '../styles';

function Footer() {
  return (
    <footer className={`${style.footerWraper}`}>
       
       <div className={`${style.footerBorderWrapper}`}>
        <div className={`${style.footerBorder}`}>
          <div className={`${style.footerLinkWrapper}`}>
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




