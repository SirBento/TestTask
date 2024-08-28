import React from 'react'
import {AiOutlineRight} from "react-icons/ai"
import { Link } from 'react-router-dom';
import style from '../styles';

function Hero() {
  return (
    <div className={`${style.heroWrapper}`}>
       <div className={`${style.heroGradient}`}></div>
          <div
              className={`${style.heroImagebg}`}
              style={{filter: 'brightness(0.6)'}}>
          </div>
        <div className={`${style.heroContentWrapper}`}>

              <div className={`${style.heroTextWrapper}`}>
                  <h2 className={`${style.heroHeadingText}`}>Connecting every corner of your business</h2>
                    <p className= {`${style.heroDescription}`}>
                      Join thousands of business owners using Hugly to get paid and grow. We've got industry-leading APIs for, online payments, business tools and expert 7-day support.
                    </p>
               </div>

              <div className={`${style.heroButtonWrapper}`}>
                      <Link
                        to="/signin"
                        variant="gradient"
                        size="sm"
                        className= {`${style.heroLearnMoreButton}`}>
                          <div className={`${style.heroLearnMoreButtonBorder}`}>
                              <span className={`${style.heroLearnMoreButtonText}`}>Learn more</span>
                              <AiOutlineRight size={23} />
                          </div>
                      </Link>

                      <Link
                        to="/signin"
                        variant="gradient"
                        size="sm"
                        className={`${style.heroContactsButton}`} >
                           <span className={`${style.heroContactsButtonText}`}>Contact Sales</span>
                      </Link>
              </div>
        </div>
    </div>
  );
}

export default Hero;