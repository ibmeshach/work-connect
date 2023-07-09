import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../contexts/user.contexts';
import Posts from '../components/posts';
/* css import */
import '../css/home.css';
import '../css/index.css';




function Home() {
    const [posts, setPosts] = useState([]);
    const [searchpost, setSearchPost] = useState('');
    const [checkpost, setCheckpost] = useState('');

    // const {isLoggedIn } = useContext(UserContext);
    
    const getPost = async (url) => {
        const token = localStorage.getItem('token');
        if (token)
        {
            try {
                const response = await fetch(url, {
                    headers: {
                        Authorization: `Token ${token}`
                    }});
                const data = await response.json();
                if (response.status === 200) {
                    setPosts(data);
                } else {
                    console.log(data.error);
                }
            } catch (error) {
                console.log(error);
        }
    
    }};

    useEffect (() => {
        const url = 'http://localhost:8000/api/post/';
        getPost(url);

    }, [])

    useEffect(() => {}, [posts]);

    const handleSearch = async (e) => {
        e.preventDefault();
        const  response = await fetch(`http://localhost:8000/api/post/?title=${searchpost}`, {
            headers: {
                Authorization: `Token ${localStorage.getItem('token')}`
            }
        });
        const data = await response.json();
        if (data.length > 0) {
            setPosts(data);
            setCheckpost(false);
        } else {
            setCheckpost(true);
        }
    };
    return (
            <section className="py-5 bg-padding-x">
                <div className="text-center my-3">
                <form class="d-flex" role="search">
                    <input 
                    class="form-control me-2" 
                    type="search" 
                    name='search' 
                    value={searchpost} 
                    onChange={(e) => setSearchPost(e.target.value)} 
                    placeholder="Search Posts" 
                    aria-label="Search" />
                    <button class="btn btn-outline-success" onClick={handleSearch}>Search</button>
                </form>
                </div>
                {!checkpost? <Posts posts={posts} /> : <h3>no post found</h3>}
            </section>
            )
        
}

export default Home;