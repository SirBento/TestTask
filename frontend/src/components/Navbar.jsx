import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineRight, AiOutlineMenu,AiOutlineClose } from 'react-icons/ai';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { FaUser } from 'react-icons/fa';
import { Axios } from '../config';
import style from '../styles';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await Axios.get('user');
        if (response.status === 200) {
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error("Error checking authentication status", error);
      }
    };

    checkAuthStatus();
  }, []);

  const handleLogout = async () => {
    try {
      await Axios.post('logout');
      setIsLoggedIn(false);
      window.location.reload();
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <nav className={`${style.navbarContainer}`}>
      <div className={`${style.navbarWrapper}`}>
        <div className={`${style.navbarIconWrapper}`}>
          <img src="src/assets/hugly_studio_logo.jpeg" alt="Hugly" className={`${style.navbarLogo}`} />
          <span className={`${style.navbarLogoText}`}>Hughly.dev</span>
        </div>
        
        {/* Menu icon for mobile view */}
        <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          <AiOutlineMenu size={24} />
        </div>

        {/* Buttons for login, signup, and logout */}
        <div className={`flex items-center space-x-2 lg:space-x-6 md:space-x-4  ${menuOpen ? 'flex-col justify-between gap-5 absolute bg-hoverbg mt-16 p-4 rounded-3xl right-6 top-0  shadow-lg md:hidden' : 'hidden md:flex'}`}>
          <div className="flex justify-between md:hidden items-center mb-2">
              <AiOutlineClose className="cursor-pointer" onClick={() => setMenuOpen(false)} />
            </div>

              {
                  isLoggedIn ? (
                  <button onClick={handleLogout} className= {`${style.navbarLogout}`}>
                    <span className="text-[14px] font-poppins">Log Out</span>
                    <RiLogoutCircleRLine size={23} color='#be6a15' />
                  </button>
                ) : (
                  <>
                    <Link to="/signin" className={`${style.navbarLoginButton} `}>
                      <span className="text-[14px] font-poppins">Log In</span>
                      <FaUser size={21} />
                    </Link>
                    <Link to="/signup" className={`${style.navbarSignupButon}`}>
                      <span className="text-[14px] font-poppins">Sign Up</span>
                      <AiOutlineRight size={23} />
                    </Link>
                  </>
              )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;