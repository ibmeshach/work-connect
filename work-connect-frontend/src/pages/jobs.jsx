import React, { useState, useEffect } from 'react';
import '../css/index.css';


const Jobs = () => {
  const [allJobs, setAllJobs] = useState([]);
  const [checkUser, setCheckuser] = useState('');


  async function getJobs (url) {
    const response = await fetch(url, {
        headers: { Authorization: `Token ${localStorage.getItem('token')}` }
    })
    const data = await response.json();
    console.log(data);
    if (response.status === 200) {
        setAllJobs(data);
    } else {
        console.log('error', data);
    }
  };


  useEffect(() => {
    getJobs('http://localhost:8000/api/jobs/');
    fetch('http://localhost:8000/api/check_user/', {
        headers: { Authorization: `Token ${localStorage.getItem('token')}` }
    })
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        setCheckuser(data.user);
    })
    .catch(error => console.log(error))

  }, []);

  return (
    <div className='container'>
        <div>{checkUser === 'employer' && <h2>create</h2>}
        </div>
        <div>
            Jobs
        </div>
        
    </div>
  )
}

export default Jobs