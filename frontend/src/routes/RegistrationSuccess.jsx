import React from 'react';
import { Footer } from '../components'
import style from '../styles';
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';
const animationData = await import('../assets/success.json');

function RegistrationSuccess() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
  };
  
  
  return (
    <>
    <div className={`${style.form}`}>

        <form className="flex flex-col gap-6">

        <div className="flex flex-col items-center justify-center gap-1">
        <Lottie options={defaultOptions} height={240} width={240} />
        </div>
            


        <div className="flex flex-col items-center justify-center gap-1">
            <span className= {`${style.lgText}`}>Success</span>
                <span className= {`${style.samllText}`}>You have successfully registered your account</span>
          </div>
           
            
              <Link
              to="/signin" 
              variant ="gradient"
              size="sm"
              type="submit"
              className= {` ${style.successButton} mt-4`}>
              Continue to My Account
              </Link>


        </form>

    </div>


    <Footer/>

    </>
  )
}

export default RegistrationSuccess