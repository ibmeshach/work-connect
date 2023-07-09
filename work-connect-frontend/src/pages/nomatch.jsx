import React from 'react';
import { Link } from 'react-router-dom';

function NoMatch() {
    return (
        <div className='py-5 text-center'>
            <h1 className='fs-1 mb-4'>No Page Found!</h1>
            <h3 className='mb-3'>Seems you visited the wrong route</h3>
            <p className='mb-3'>Check the URL for spelling errors</p>
            <Link to='/'>Home</Link>
        </div>
    )
}

export default NoMatch;