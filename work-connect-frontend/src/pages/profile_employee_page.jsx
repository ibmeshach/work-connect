import React, { useEffect, useState } from 'react'
import '../css/index.css';
import Profile from '../components/Profile';

const ProfileEmployeePage = () => {
  const [userInfo, setUserInfo] = useState({});

  const getUserInfo = async (url) => {
    const response  = await fetch(url, {
      headers : { Authorization:  `Token ${localStorage.getItem('token')}` }
    });
    const data = await response.json();
    if (response.status === 200) {
      setUserInfo(data);
    } else {
      console.log('error');
    }

  }

  useEffect (() => {
    getUserInfo('http://localhost:8000/api/user_info/?user=employee');
  }, [])

  return (
    <div className='container'>
        <Profile props={userInfo} />
    </div>
  )
}

export default ProfileEmployeePage;