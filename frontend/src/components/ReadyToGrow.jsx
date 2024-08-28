import React from 'react'
import { PiChartLineUpBold } from "react-icons/pi";
import {AiOutlineRight} from "react-icons/ai"
import { Link } from 'react-router-dom';
import style from '../styles';

{`${style.useCasesbg}`}

function ReadyToGrow() {
  return (
    <div className={`${style.ReadyToGrowContainer}`}>
          <div className={`${style.ReadyToGrowImageGradient}`}
              style={
                      {
                        backgroundImage: `url('src/assets/chess.jpg')`,
                        filter: 'brightness(0.6)'
                      }
                    }>
            </div>
            
          <div className={`${style.ReadyToGrowComponentsContainer}`}>

                  <PiChartLineUpBold size={40} color="#02437D" />

                  <h2 className={`${style.ReadyToGrowHeaderText}`}>Ready to grow?</h2>
                  <p className={`${style.ReadyToGrowDescription}`}> It takes just 5 minutes to create a Hugly Developer profile.</p>

                  <Link
                      to="/signin"
                      variant="gradient"
                      size="sm"
                      className= {`${style.ReadyToGrowButton}`}>
                        
                        <div className={`${style.ReadyToGrowButtonTextWrapper}`}>
                            <span className= {`${style.ReadyToGrowButtonText}`}>Get started</span>
                            <AiOutlineRight size={23} />
                        </div>
                  </Link>
          </div>
    </div>
  );
}

export default ReadyToGrow;