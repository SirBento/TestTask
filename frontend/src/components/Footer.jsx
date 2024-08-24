import React from 'react'
import style from '../styles';

function Footer() {
  return (
    <footer className={`${style.footer}`}>
       
     <div className='p-1'>
         <a href="#" className='pr-2'>Terms & Condition |</a>
         <a href="#" className='pr-2'>Privacy Policy |</a>
         <a href="#" >Manage cookies </a>
     </div>

    <div>  © Copyright {new Date().getFullYear()} Hugly Group (Pvt) Ltd </div>

</footer>
  )
}

export default Footer