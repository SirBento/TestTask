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
    <div className="grid grid-rows-[1fr_auto] min-h-screen">
    
    <div className={`${style.form} flex flex-col items-center justify-center`}>

          <form className= {`${style.RistrationSucessContainer}`}>

                    <div className= {`${style.RistrationSucessLottie}`}>
                        <Lottie options={defaultOptions} height={240} width={240} />
                    </div>
                        
                    <div className={`${style.RistrationSucessTextWrapper}`}>

                          <span className= {`${style.lgText}`}>Success</span>
                          <span className= {`${style.samllText}`}>You have successfully registered your account</span>

                    </div>
                    <Link
                      to="/signin" 
                      variant ="gradient"
                      size="sm"
                      type="submit"
                      className= {` ${style.successButton} mt-8`}>
                      Continue to My Account
                    </Link>
                    
          </form>

    </div>

  <Footer/>

  </div>
  )
}

export default RegistrationSuccess