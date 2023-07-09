import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function EmployeeSignUpDetails() {

    const navigate = useNavigate();


    const [employeedetails, setEmployeedetails] = useState({
        date_birth: '',
        location: '',
        skill: '',
        phone_number: '',
        country: '',
        state: '',
        profile_pic: '',
        about_me: '',
        work_experience: '',
        education: ''
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setEmployeedetails({...employeedetails, [name]: value});
    };

    const getUser = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }

    const registerUser = async (url, data) => {
        const form = new FormData();
        form.append('user_id', data.id);

        for (const key in employeedetails) {
            form.append(key, employeedetails[key]);
        }

        const res = await fetch(url, {
            method: 'POST',
            body: form
        });
        const json_data = await res.json();
        console.log(json_data);
        navigate('/sign_up_success');
    };

    const handleForm =  async (e) => {
        e.preventDefault();
        const user = getUser('http://localhost:8000/api/users/latest/');
        user
        .then((data) => {
            const url = "http://localhost:8000/api/register-employee/";
            registerUser(url, data);
        })
        .catch((err) => console.log(err));
    };

    const handleFile = (e) => {
        const name = e.target.name;
        const file = e.target.files[0];
        setEmployeedetails({...employeedetails, [name]: file});
    };

  return (
    <div className="py-5 bg-padding-x">
            <h1>Complete Account Creation</h1>
            <h3>Set up your WorkConnect Job Seeker Account in seconds</h3>
            <h4>Fill the below details</h4>
            <br />
            <br />
            <form id='form' onSubmit={handleForm}>
                <div className="row mb-3">
                <label htmlFor="date_birth">DateBirth: 
                <div className="col-sm-10">
                    <input 
                    className='form-control'
                    type="date"
                    name="date_birth"
                    id="date_birth"
                    value={employeedetails.date_birth}
                    onChange={handleChange} />
                </div>
                </label>
                </div>

                <div className="row mb-3">
                <label htmlFor="location">Location: 
                <div className="col-sm-10">
                    <input 
                    className='form-control'
                    type="text"
                    name="location"
                    id="location"
                    value={employeedetails.location}
                    onChange={handleChange} />
                </div>
                </label>
                </div>

                <div className="row mb-3">
                <label htmlFor="skills">Skills: 
                <div className="col-sm-10">
                    <input 
                    className='form-control'
                    type="text"
                    name="skill"
                    id="skills"
                    value={employeedetails.skill}
                    onChange={handleChange} />
                </div> 
                </label>
                </div>

                <div className="row mb-3">
                <label htmlFor="phone_number">Phone Number: 
                <div className="col-sm-10">
                    <input 
                    className='form-control'
                    type="tel"
                    name="phone_number"
                    id="phone_number"
                    value={employeedetails.phone_number}
                    onChange={handleChange} />
                </div>
                </label>
                </div>

                <div className="row mb-3">
                <label htmlFor="country">Country: 
                <div className="col-sm-10">
                    <input 
                    className='form-control'
                    type="text"
                    name="country"
                    id="country"
                    value={employeedetails.country}
                    onChange={handleChange}/>
                </div>
                </label>
                </div>
                
                <div className="row mb-3">
                <label htmlFor="state">State: 
                <div className="col-sm-10">
                    <input 
                    className='form-control'
                    type="text"
                    name="state"
                    id="State"
                    value={employeedetails.state}
                    onChange={handleChange}/>
                </div>
                </label> 
                </div>

                <div className="row mb-3">
                <label htmlFor="education">Education: 
                <div className="col-sm-10">
                    <input 
                    className='form-control'
                    type="text"
                    name="education"
                    id="education"
                    value={employeedetails.education}
                    onChange={handleChange}/>
                </div>
                </label>
                </div>
                
                
                <div className="row mb-3">
                <label htmlFor="work_experience">Work experience: 
                <div className="col-sm-10">
                    <input 
                    className='form-control'
                    type="text"
                    name="work_experience"
                    id="work_experience"
                    value={employeedetails.work_experience}
                    onChange={handleChange}/>
                </div>
                </label>
                </div>
                
                
                <div className="row mb-3">
                <label htmlFor="aboutMe">About me: 
                <div className="col-sm-10">
                    <input 
                    className='form-control'
                    type="text"
                    name="about_me"
                    id="aboutMe"
                    value={employeedetails.about_me}
                    onChange={handleChange}/>
                </div>
                </label>
                </div>
                
                
                <div className="row mb-3">
                    <label htmlFor="profile_pic">Profile Picture: 
                <div className="col-sm-10">
                    <input 
                    className='form-control'
                    type="file"
                    name="profile_pic"
                    id="profile_pic"
                    accept="image/jpeg,image/png,image/gif"
                    onChange={handleFile}/>
                </div>
                </label>
                </div>
                <br />
                <input type="submit" className='btn btn-primary' value="Finish" />
            </form>
        </div>)
  }

export default EmployeeSignUpDetails;