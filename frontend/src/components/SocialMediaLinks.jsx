// SocialMediaLinks.js
import React from 'react';
import { socialMediaData } from '../constants/data';
import style from '../styles';

const SocialMediaLinks = () => {
  return (
    <div className={`${style.SocialMediaLinksContainer}`}>

      {
          socialMediaData.map((data, index) => (

            <div key={index} className={`${style.SocialMediaLinksWrapper}`}>

                <div className={`${style.SocialMediaLinksIconWrapper}`}>
                    <data.icon className={`${style.SocialMediaLinksIcon}`}/>
                </div>

                <h3 className={`${style.samllText} font-medium mt-3`}>{data.title}</h3>

                <p className={`${style.SocialMediaLinksDescription}`} >
                    {data.description}
                </p>
            </div>
      
    ))}
    </div>
  );
};

export default SocialMediaLinks;