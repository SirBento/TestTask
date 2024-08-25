import React, { useState } from 'react';
import { Footer } from '../components'
import style from '../styles';
import { Link } from 'react-router-dom';


function SignUp() {


  const [firstname, setFirstname] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [phoneNumber,  setPhoneNumber]  = useState('');
  const [physicalAddress, setPhysicalAddress]  = useState('');
  const [role, setRole]  = useState('');
  const [department, setDepartment]  = useState('');
  const [comapnyName, setCompanyName]  = useState('');
  const [companyAdress, setCompanyAddress]  = useState('');
//password 


  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Implement login logic here
  };



  return (
    <>
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
              
              <input
                type="text"
                id="gender"
                name="gender"
                placeholder="Select your gender"
                className={`${style.inputs}`}
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />

              <label htmlFor="gender" className={`${style.inputLables}`}>
                Gender:
              </label>
          </div>
      </div>


      <div className="form-group">
        <div className="relative">
              
              <input
                type="text"
                id="dob"
                name="dob"
                placeholder="02/02/04"
                className={`${style.inputs}`}
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />

              <label htmlFor="dob" className={`${style.inputLables}`}>
                Bate of Birth:
              </label>
          </div>
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
                  Role:
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