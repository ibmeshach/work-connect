import React from 'react'
import '../css/profile.css';

const Profile = ({ props }) => {
    const firtname = props.firstname;
    const lastname = props.lastname;
    console.log(props)
    console.log(props.profile_picture);;
  return (
    <div className='container px-5'>
        <div>
            <h1 className='fs-1 text-center my-5'>{firtname} Firstname, Lastname {lastname}</h1>
        </div>
        <div className='upper'>
            {props.profile_picture?
            <p className='fs-1 text-white'> WorkConnect Profile</p>:
            <img src={props.profile_picture} alt="" className='fs-1 text-white profile-img rounded-circle' />}
        </div>

        <div className='my-3'>
        <div className='my-2'>
        <button className="btn btn-lg btn-light main py-5 fs-2 text-start" data-bs-toggle="collapse" data-bs-target="#about" aria-expanded="false" aria-controls="about">
            About:
        </button>
        </div>
        <div style={{}}>
        <div className="collapse" id="about">
            <div className="card card-body fs-4" style={{}}>
            About Me
            {props.about_me}
            </div>
        </div>
        </div>
        </div>
        <div className='my-3'>
        <div className='my-2'>
        <button className="btn btn-lg btn-light main py-5 fs-2 text-start" data-bs-toggle="collapse" data-bs-target="#work" aria-expanded="false" aria-controls="work">
            Work Experience:
        </button>
        </div>
        <div style={{}}>
        <div className="collapse" id="work">
            <div className="card card-body fs-4" style={{}}>
            My Work Experience
            {props.work_experience}
            </div>
        </div>
        </div>
        </div>

        <div className='my-3'>
        <div className='my-2'>
        <button className="btn btn-lg btn-light main py-5 fs-2 text-start" data-bs-toggle="collapse" data-bs-target="#edu" aria-expanded="false" aria-controls="edu">
            Education:
        </button>
        </div>
        <div style={{}}>
        <div className="collapse" id="edu">
            <div className="card card-body fs-4" style={{}}>
            My Education
            {props.education}
            </div>
        </div>
        </div>
        </div>

        <div className='my-3'>
        <div className='my-2'>
        <button className="btn btn-lg btn-light main py-5 fs-2 text-start" data-bs-toggle="collapse" data-bs-target="#skills" aria-expanded="false" aria-controls="skills">
            Skills:
        </button>
        </div>
        <div style={{}}>
        <div className="collapse" id="skills">
            <div className="card card-body fs-4" style={{}}>
            <ul className="list-unstyled">
                <li>Map</li>
                <li>Through</li>
                <li>The</li>
                <li>List</li>
                <li>Or maybe, save time and display everything in one line</li>
            </ul>
            {props.skills}
            </div>
        </div>
        </div>
        </div>

        <div className='my-3'>
        <div className='my-2'>
        <button className="btn btn-lg btn-light main py-5 fs-2 text-start" data-bs-toggle="collapse" data-bs-target="#country" aria-expanded="false" aria-controls="country">
            Country:
        </button>
        </div>
        <div style={{}}>
        <div className="collapse" id="country">
            <div className="card card-body fs-4" style={{}}>
            My Country
            {props.country}
            </div>
        </div>
        </div>
        </div>

        <div className='my-3'>
        <div className='my-2'>
        <button className="btn btn-lg btn-light main py-5 fs-2 text-start" data-bs-toggle="collapse" data-bs-target="#location" aria-expanded="false" aria-controls="location">
            Location:
        </button>
        </div>
        <div style={{}}>
        <div className="collapse" id="location">
            <div className="card card-body fs-4" style={{}}>
            My Location
            {props.location}
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Profile;