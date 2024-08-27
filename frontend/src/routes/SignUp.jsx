import React, { useState } from 'react';
import { Footer } from '../components'
import style from '../styles';
import { Axios }from '../config';
import DatePicker from 'react-datepicker';
import { toast, ToastContainer } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import 'react-datepicker/dist/react-datepicker.css';
import { Link, useNavigate } from 'react-router-dom';



function SignUp() {

  const navigate = useNavigate();
  const [firstname, setFirstname] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [phoneNumber,  setPhoneNumber]  = useState('');
  const [physicalAddress, setPhysicalAddress]  = useState('');
  const [role, setRole]  = useState('');
  const [department, setDepartment]  = useState('');
  const [comapnyName, setCompanyName]  = useState('');
  const [companyAdress, setCompanyAddress]  = useState('');

  const [showPassword, setShowPassword] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
    const handleDateChange = (date) => {
      setDob(date);
    };

    const handleGenderChange = (event) => {
      setGender(event.target.value);
    };

 // Function to validate user input
 const validateInput = () => {
  return firstname.trim() !== '' && surname.trim() !== '' && email.trim() !== '' && idNumber.trim() !== '' && password.trim() !== '' && gender.trim() !== '' && dob.trim() !== '' && phoneNumber.trim() !== '' && physicalAddress.trim() !== '' && role.trim() !== '' && department.trim() !== '' && comapnyName.trim() !== '' && companyAdress.trim() !== '';
};

const handleSubmit = async (event) => {
  event.preventDefault();

  // Validate user input
  if (!validateInput()) {
    toast.error('Please fill in all required fields');
    return;
  }

  try {
    // Make an API call to create a new account
    const response = await Axios.post('/api/register', {
      firstname,
      surname,
      email,
      idNumber,
      password,
      gender,
      dob,
      phoneNumber,
      physicalAddress,
      role,
      department,
      comapnyName,
      companyAdress,
    });

      // If the registration is successful, navigate to the home screen
    if (response.data.success) {
      toast.success('Login successful!');
      navigate('/'); // Navigate to the home page
    } else {
      toast.error(response.data.error);
    }
  
  
  } catch (error) {
    // If there's an error, show an error toast message
    toast.error('An error occurred during accounnt registration. Please try again.');
      console.error('Login error:', error);
  }
};



  return (
    <>
    <ToastContainer />
    <div className={`${style.form}`}>
    <h2 className={`${style.headings}`}>Hugly Pay Developer Portal</h2>

    <form onSubmit={handleSubmit} className="flex flex-col gap-6">

    <span className={`${style.samllText} text-left ml-3 -mb-2 font-bold`}> Personal details</span>
      <div className="form-group">
          <div className="relative">
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="Enter firstname"
                className={`${style.inputs}`}
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
              <label htmlFor="firstname" className={`${style.inputLables}`}>
                First Name:
              </label>
           </div>
      </div>

      <div className="form-group">
        <div className="relative">
              
              <input
                type="text"
                id="surname"
                name="surname"
                placeholder="Enter your surname"
                className={`${style.inputs}`}
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />

              <label htmlFor="surname" className={`${style.inputLables}`}>
                Surname:
              </label>
          </div>
      </div>
      


      <div className="form-group">
        <div className="relative">
              
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                className={`${style.inputs}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="email" className={`${style.inputLables}`}>
                Email Address:
              </label>
          </div>
      </div>



      <div className="form-group">
        <div className="relative">
              
              <input
                type="text"
                id="idNumber"
                name="idNumber"
                placeholder="Enter your ID number"
                className={`${style.inputs}`}
                value={idNumber}
                onChange={(e) => setIdNumber(e.target.value)}
              />

              <label htmlFor="idNumber" className={`${style.inputLables}`}>
               ID Number:
              </label>
          </div>
      </div>
      

      <div className="form-group">
            <div className="relative">
              <select
                id="gender"
                name="gender"
                onChange={handleGenderChange}
                required
                className="appearance-none border border-borderBlue rounded-lg w-full py-4 px-3 text-white focus:outline-none focus:ring-2 focus:ring-borderBlueSecond bg-transparent hover:border-borderBlueSecond font-poppins text-[16px] h-[56px]">
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <label htmlFor="gender" className={`${style.inputLables}`}>
                Gender:
              </label>
            </div>
       </div>


       <div className="form-group">
          <div className="relative">
            <div className="text-left items-start w-full justify-start">
              <DatePicker
                id="dob"
                name="dob"
                selected={dob}
                onChange={handleDateChange}
                placeholderText="02/02/04"
                className={`${style.inputs}`}
                dateFormat="MM/dd/yy"
                wrapperClassName='w-full'
                showYearDropdown
                showMonthDropdown
                dropdownMode="select"
              />
            </div>
            <label htmlFor="dob" className={`${style.inputLables}`}>
              Date of Birth:
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

      <span className={`${style.samllText} text-left ml-3 -mb-2 font-bold mt-6`}> Contact details</span>


      <div className="form-group">
          <div className="relative">
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="0771 354 643"
                className={`${style.inputs}`}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <label htmlFor="phoneNumber" className={`${style.inputLables}`}>
                Cellphone Number:
              </label>
           </div>
      </div>

      <div className="form-group">
        <div className="relative">
              
              <input
                type="text"
                id="physicalAddress"
                name="physicalAddress"
                placeholder="Enter your physical address"
                className={`${style.inputs}`}
                value={physicalAddress}
                onChange={(e) => setPhysicalAddress(e.target.value)}
              />

              <label htmlFor="physicalAddress" className={`${style.inputLables}`}>
              Physical Address
              </label>
          </div>
      </div>





      <span className={`${style.samllText} text-left ml-3 -mb-2 font-bold mt-6`}> Organisation details</span>

        <div className="form-group">
            <div className="relative">
                <input
                  type="text"
                  id="role"
                  name="role"
                  placeholder="Enter your role"
                  className={`${style.inputs}`}
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                />
                <label htmlFor="role" className={`${style.inputLables}`}>
                  Role
                </label>
            </div>
        </div>

        <div className="form-group">
          <div className="relative">
                
                <input
                  type="text"
                  id="department"
                  name="department"
                  placeholder="Enter your department"
                  className={`${style.inputs}`}
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                />

                <label htmlFor="department" className={`${style.inputLables}`}>
                Department
                </label>
            </div>
        </div>


        <div className="form-group">
          <div className="relative">
                
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  placeholder="Enter your company name"
                  className={`${style.inputs}`}
                  value={comapnyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />

                <label htmlFor="companyName" className={`${style.inputLables}`}>
                Company Name
                </label>
            </div>
        </div>


        <div className="form-group">
          <div className="relative">
                
                <input
                  type="text"
                  id="companyAddress"
                  name="companyAddress"
                  placeholder="Enter your company address"
                  className={`${style.inputs}`}
                  value={companyAdress}
                  onChange={(e) => setCompanyAddress(e.target.value)}
                />

                <label htmlFor="companyAddress" className={`${style.inputLables}`}>
                Company Address
                </label>
            </div>
        </div>

      <div className="form-group">
        <label htmlFor="terms" className="flex items-center">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            value="terms"
            className="ml-3  border-borderBlueSecond "
           
          />

          <span 
          className= {`${style.samllText} ml-2`}>
            I accept the
            <Link to ="" className={`${style.links} mr-2 ml-2`}>terms</Link> 
            &
            <Link to ="" className={`${style.links} mr-2 ml-2`}>terms</Link> 
            </span>
           
        </label>
      </div>


      <button
        type="submit"
        className={`${style.authButtons}`}>
        Register
      </button>


    </form>


    <div className="text-center mt-4">
      <p className={`${style.samllText} mt-2`}>
        Already have an account?{' '}
        <Link to ="/signin" className={`${style.links} ml-2 `}>Login</Link>
      
      </p>
    </div>
  </div>

  
  <Footer/>



    </>
  )
}

export default SignUp