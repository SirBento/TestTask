import React, { useState } from 'react';
import { Footer } from '../components';
import style from '../styles';
import { Link, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Axios }from '../config';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignIn() {
  // Initialize state variables
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    // Validate user input
    if (!username.trim()) {
      toast.error('Please enter a username');
      return;
    }

    if (!password.trim()) {
      toast.error('Please enter a password');
      return;
    }

    if (!rememberMe) {
      toast.error('Please check the "Remember me" checkbox');
      return;
    }

    try {
      // Simulate login using Axios
      const response = await Axios.post('/api/login', {
        username,
        password,
      });

      if (response.data.success) {
        toast.success('Login successful!');
        navigate('/'); // Navigate to the home page
      } else {
        toast.error(response.data.error);
      }
    } catch (error) {
      toast.error('An error occurred during login. Please try again.');
      console.error('Login error:', error);
    }
  };

  return (
    <>
      <ToastContainer /> {/* Display toast notifications */}
      <div className={`${style.form}`}>
        <h2 className={`${style.headings}`}>Hugly Pay Developer Portal</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Username input */}
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

          {/* Password input */}
          <div className="form-group relative">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              placeholder="Enter password"
              className={`${style.inputs} pr-10`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="password" className={`${style.inputLables}`}>
              Password:
            </label>
            <button
              type="button"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300 focus:outline-none"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash className="w-5 h-5" /> : <FaEye className="w-5 h-5" />}
            </button>
          </div>

          {/* OTP input */}
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

          {/* Remember me checkbox */}
          <div className="form-group ">
            <label htmlFor="remember" className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                value="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="ml-3  border-borderBlueSecond "
              />
              <span className={`${style.samllText} ml-2`}>Remember me</span>
            </label>
          </div>

          {/* Login button */}
          <button type="submit" className={`${style.authButtons}`}>
            Log in
          </button>
        </form>

        <div className="text-center mt-4">
          <a href="#" className={`${style.forgotPass} mt-2`}>
            Forgot your password?
          </a>
          <p className={`${style.samllText} mt-2`}>
            Don't have an account?{' '}
            <Link to="/signup" className={`${style.links} ml-2`}>
              Sign up
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default SignIn;