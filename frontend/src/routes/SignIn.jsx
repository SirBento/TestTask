import React, { useState } from 'react';
import { Footer } from '../components'
import style from '../styles';
import { Link } from 'react-router-dom';

function SignIn() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Implement login logic here
  
  };



  return (
    <>
    <div className={`${style.form}`}>
    <h2 className={`${style.headings}`}>Hugly Pay Developer Portal</h2>

    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="form-group">
          <div className="relative">
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter username"
                className={`${style.inputs}`}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label htmlFor="username" className={`${style.inputLables}`}>
                Username:
              </label>
          </div>

      </div>

      <div className="form-group">
        <div className="relative">
              
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                className={`${style.inputs}`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <label htmlFor="password" className={`${style.inputLables}`}>
                Password:
              </label>
          </div>
      </div>
      
      <div className="form-group">
            <label htmlFor="otp" className={`${style.otpTextOne}`}>
                  Authenticator OTP
                </label>
          <div className="relative">
                <input
                  type="text"
                  id="otp"
                  name="otp"
                  placeholder="Enter OTP"
                  className={`${style.inputs}`}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
                <label htmlFor="otp" className={`${style.inputLables}`}>
                  One Time Password (OTP)
                </label>
            </div>

            <label htmlFor="otp" className={`${style.otpTextTwo}`}>
                Please check your authenticator for the OTP
            </label>
      </div>

      


      <div className="form-group">
        <label htmlFor="remember" className="flex items-center">
          <input
            type="checkbox"
            id="remember"
            name="remember"
            value="remember"
            className="ml-3  border-borderBlueSecond "
           
          />
          <span className= {`${style.samllText} ml-2`}>Remember me</span>
        </label>
      </div>


      <button
        type="submit"
        className={`${style.authButtons}`}>
        Log in
      </button>


    </form>


    <div className="text-center mt-4">
      <a href="#"  className={`${style.forgotPass} mt-2`}>
        Forgot your password?
      </a>
      <p className={`${style.samllText} mt-2`}>
        Don't have an account?{' '}
        <Link to ="/successful" className={`${style.links} ml-2`}>Sign up</Link>

        {/***fix this to signup */}
      
      </p>
    </div>
    </div>


    <Footer/>

    </>
  )
}

export default SignIn