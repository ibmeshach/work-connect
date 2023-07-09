import React, { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Navbar from "./navbar";
/* css import */
import '../css/home.css';
import '../css/index.css';

function SignupSuccess () {
    const navigate = useNavigate();
    const name = '';

    useEffect(() => {
        const redirect = () => {
            navigate('/home')
        };
        const timer = setTimeout(redirect, 5000);
        return () => clearTimeout(timer);
      }, []);

    return (
        <React.Fragment>
        <div className="py-5 bg-padding-x text-center">
            <h1 className="fs-1 mb-4 text-primary">Welcome {name}</h1>
            <h4 className="fs-3">You have successfully created your WorkConnect account</h4>
            <p className="fs-4 mb-3">Don't worry; this page redirects authomatically.</p>
            <p className="fs-4">If it doesn't, please click <Link to='/'>here</Link>
            </p>
        </div>
        </React.Fragment>
    )
}

export default SignupSuccess;