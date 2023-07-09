import React, { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../css/user_signup.css';
import { UserContext } from '../contexts/user.contexts';

function UserSignup() {
    const [userInfo, setUserInfo] = useState({
        username: '',
        email: '',
        password: '',
        confirmpassword: '',
        firstname: '',
        lastname: ''
    });
    // const [username, setUsername] = useState("");
    // const [firstname, setFirstname] = useState("");
    // const [lastname, setLastname] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [confirmpassword, setCofirmpassword] = useState("");
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState("");


    
    const navigate = useNavigate();

    const { setIsLoggedIn } = useContext(UserContext);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserInfo({...userInfo, [name]: value});
    };


    const handleSubmit = async (event) => {
        event.preventDefault();

        const url = 'http://localhost:8000/api/users/';
        const response = fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: userInfo.username,
                email: userInfo.email,
                password: userInfo.password,
                first_name: userInfo.firstname,
                last_name: userInfo.lastname,
                confirm_password: userInfo.confirmpassword
            })
        });
        const data = await response;
        const json_data = await data.json()
        if (data.status === 201) {
            console.log('success');
            localStorage.setItem('token', data.token);
            setIsError(false);
            setUserInfo({
                username: '',
                password: '',
                confirmpassword: '',
                firstname: '',
                lastname: '',
                email: ''
            })
            setIsLoggedIn(true);
            navigate('/user_type');
        } else {
            setIsError(true);
            setError(json_data.error);
        }
    }

    return (
        <React.Fragment>
        <div className="py-5 bg-padding-x">
            <h1>Create an Account</h1>
            <h3>Set up your WorkConnect App in seconds</h3>
            <small>We only need a few details</small>
            <br />
            <h3>{isError && error}</h3>
            <form className='_sign-up-form' onSubmit={handleSubmit}>
            <div className="row mb-3">
                <label htmlFor="name">UserName: 
                <div className="col-sm-10">
                    <input
                    className='form-control'
                    type="text"
                    name="username"
                    id="name"
                    value={userInfo.username}
                    onChange={handleChange}
                    required />
                </div>
                </label>
            </div>
                
                <div className="row mb-3">
                    <label htmlFor="firstname">FirstName: 
                <div className="col-sm-10">
                    <input
                    className='form-control'
                    type="text"
                    name="firstname"
                    id="email"
                    value={userInfo.firstname}
                    onChange={handleChange}
                    required />
                </div>
                </label>
                </div>

                <div className="row mb-3">
                    <label htmlFor="last_name">LastName: 
                <div className="col-sm-10">
                    <input
                    className='form-control'
                    type="text"
                    name="lastname"
                    id="last_name"
                    value={userInfo.lastname}
                    onChange={handleChange}
                    required />
                </div>
                </label>
                </div>

                <div className="row mb-3">
                    <label htmlFor="email">Email: 
                <div className="col-sm-10">
                    <input
                    className='form-control'
                    type="email"
                    name="email"
                    id="email"
                    value={userInfo.email}
                    onChange={handleChange}
                    required />
                </div>
                </label>
                </div>
                
                <div className="row mb-3">
                    <label htmlFor="pass">Password: 
                <div className="col-sm-10">
                <input 
                className='form-control'
                type="password"
                name="password"
                id="pass"
                value={userInfo.password}
                onChange={handleChange}
                required />
                </div>
                </label>
                </div>

                <div className="row mb-3">
                    <label htmlFor="pass_confirm">Confirm Password: 
                <div className="col-sm-10">
                    <input
                    type="password"
                    className='form-control'
                    name="confirmpassword"
                    id="pass_confirm"
                    value={userInfo.confirmpassword}
                    onChange={handleChange}
                    required />
                </div>
                </label>
                </div>
                <br />
                
                <input type="submit"  className='btn btn-primary' value="Sign Up" />
            </form>
            <br />

            <p>Already signed up?
            <Link to='/login' className='link-primary ms-2'>Login</Link>
            </p>
        </div>
        </React.Fragment>
    );
}

export default UserSignup;