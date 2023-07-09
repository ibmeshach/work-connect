import React, { useEffect } from 'react'
import '../css/posts.css';
import '../css/index.css';
import '../css/home.css';
import Comment from  './Comment';


const Posts = ({ posts }) => {

  const postCount = posts.length;

  useEffect (() => {
  }, []);

  return (
    <React.Fragment>
    {postCount > 0?
    (<div className='py-5 bg-padding-x w-75'>
        {posts.map(post => (
                <div key={post.id} className='mb-5'>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                    <b><small>author: {post.author.username}</small></b>
                    <hr />
                    <Comment props={post} />
                </div>
            )
        )}
    </div>):
    (<div className='py-5 bg-padding-x w-75'>
          <h3>No post at this time</h3>
          <h4>Create a post or check back later.</h4>
    </div>)
    }
    </React.Fragment>
  )
}

export default Posts;
