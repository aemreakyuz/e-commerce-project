import React from 'react'
import NavBar from './NavBar'
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <>
    <div className="bg-[#252B42] py-3 px-[24px] text-white text-[14px] font-bold flex flex-wrap justify-between font-[Montserrat] gap-y-2">
        <div className='flex gap-4 items-center mr-4'>
          <div className='flex items-center gap-2'>
            <FontAwesomeIcon icon={faPhone} style={{color: "#ffffff", width:"16px"}} />
            <p>(225) 555-0118</p>
          </div>
          <div className='flex items-center gap-2'>
            <FontAwesomeIcon icon={faEnvelope} style={{color: "#ffffff", width: "16px"}} />
            <p>michelle.rivera@example.com</p>
            </div>
        </div>
        <div className='flex mr-4'>
            <p>Follow Us and get a chance to win 80% off</p>
        </div>
        <div className='flex items-center gap-2'>
            <p>Follow Us : </p>
            <a href="#"><FontAwesomeIcon icon={faInstagram} size="lg" style={{color: "#ffffff",}} /></a>
            <a href="#"><FontAwesomeIcon icon={faYoutube} size="lg" style={{color: "#ffffff",}} /></a>
            <a href="#"><FontAwesomeIcon icon={faFacebook} size="lg" style={{color: "#ffffff",}} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} size="lg" style={{color: "#ffffff",}} /></a>
        </div>
        
    </div>
    
    </>
  )
}

export default Header