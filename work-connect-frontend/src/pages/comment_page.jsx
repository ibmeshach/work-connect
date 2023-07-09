import React, { useContext, useState, useRef} from 'react';
import { UserContext } from '../contexts/user.contexts';
import '../css/index.css';

const CommentPage = () => {

  const { isLoggedIn } = useContext(UserContext);

  if (isLoggedIn === true) {
  const { postObject, setPostObject } = useContext(UserContext);
  const [commentvalue, setCommentValue] = useState('');
  const buttonRef  = useRef(null);

  const { id } = postObject.post;

  const postComment = async () => {
    const response = await fetch(`http://localhost:8000/api/post/${id}/comments/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Token ${localStorage.getItem('token')}` },
        body: JSON.stringify({ content: commentvalue })
    });
    const data = await response.json();
    if (response.status === 201) { 
        setPostObject(() => {
            return {post: postObject.post, comments: [...postObject.comments, data] }
        })
        setCommentValue('');
    } else {
        console.log('error');
    }
  }

  const handleKey = (e) => {
    if (e.key === 'Enter') {
        buttonRef.current.click();
    }
  };


  
  return (
    <div className='container'>
        <div className='comment-post'>
            <div key={postObject.post.id}>
                <h2>{postObject.post.title}</h2>
                <p>{postObject.post.content}</p>
                <b><small>author: {postObject.post.author.username}</small></b>
                <hr></hr>
            </div>
            {postObject.comments.map((comment) => {
                const { id, content, created_at } = comment;
                return (<div key={id}>
                    <div className='display-comment mb-4'>
                        <p className='mb-2 fs-3'>{content}</p>
                        <small>posted at: {created_at}</small>
                    </div>
                </div>)
            })
            }
            <div className='row mb-3'>
                <div className='col-sm-10'>
                <input type='text' 
                className="form-control" 
                value={commentvalue}
                placeholder='Comment here'
                onChange={(e) => setCommentValue(e.target.value)}
                onKeyDown={handleKey}></input>
                </div>
                <button type='submit' onClick={postComment} className="btn btn-dark col-sm-2 col-form-label" ref={buttonRef}>Add comment</button>
            </div>
        </div>
    </div>
  )
} else {
    return (
        <div className='py-5 text-center'>
        <h1 className='my-2 fs-1'>No comments here</h1>
        <h2>Login to see comments</h2>
        </div>
    )
}
}

export default CommentPage