import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../css/user_type.css';


function UserType() {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <div className='d-flex justify-content-around align-items-center outer-box'>
        <div onClick={() => navigate('/employer_signup_details')} className='inner-box d-flex justify-content-center align-items-center'>
          <Link><h1>Sign Up As An Employer</h1></Link>
        </div>
        <div onClick={() => navigate('/employee_signup_details')} className='inner-box d-flex justify-content-center align-items-center'>
          <Link><h1>Sign Up As A job Seeker</h1></Link>
        </div>
      </div>
    </React.Fragment>
  )
}

export default UserType;