import React, { useState, useRef, useEffect, useContext }from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/user.contexts';

const Comment = ({ props }) => {
  const { id } = props;
//   const [allComment, setAllComment] = useState([]);
  const token = localStorage.getItem('token');

  // const commentRef = useRef(null);
  const navigate = useNavigate();

  // const { postObject, setPostObject } = useContext(UserContext);

  const getComment = async () => {
    // setToggle((prev_toggle) => !prev_toggle);

    // if (toggle) {
    // commentRef.current.style.display = 'inline';
    const url = `http://localhost:8000/api/post/${id}/comments/`;
    const response = await fetch(url, {
        headers: { 'Authorization': `Token ${token}` }
    });
    const comment_data = await response.json();
    if (response.status === 200) {
        setPostObject({post: props, comments: comment_data});
        navigate('/comment-page');
    } else {
        console.log('error');
        console.log(comment_data)
    }
  };

//     } else {
//         commentRef.current.style.display = 'none';
//         setAllComment(() => []);
//     }
//   }
  
//   const postComment = async () => {
//     const response = await fetch(`http://localhost:8000/api/post/${id}/comments/`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json', 'Authorization': `Token ${token}` },
//         body: JSON.stringify(comment)
//     });
//     const data = await response.json();
//     setAllComment(() => {
//         return [...allComment, data]
//     })
//     setComment({ content: ''});
//   }

//   useEffect(() => {
//     commentRef.current.style.display = 'none';
//   }, []);


  return (
    <div className='comment'>
        <div className='all-comments'>
        </div>
        <div className='d-flex'>
            <div className='me-3'>
            <button className='btn btn-light px-3'>Like</button>
            </div>
            <div className=''>
              <button onClick={getComment} className='btn btn-dark px-3'>Comment</button>
            </div>
        </div>
    </div>
  )
}

export default Comment;