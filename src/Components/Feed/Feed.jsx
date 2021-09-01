import './Feed.css';
import React, {useState, useEffect} from 'react';
import {getPosts} from '../../APIs/post';
import AddComment from '../AddComment/AddComment';
import commentsIcon from '../../Images/comments.png';

export default () => {
    const [posts, setPosts, newPost, setNewPost] = useState([]);
    
    useEffect(() => {        
        getPosts()
        .then(response => setPosts(response))
    },[]);
    
    return <div className='feed'>
        {posts.map((post) =>
            <div className='postBox'>
                <div className='postNome'>
                    <a href='#'>{post.user.username}</a>
                </div>
                <div className='postTitulo'> 
                    <h1>{post.title}</h1>
                </div>
                <div className='postCorpo'>
                    <p>{post.body}</p>
                </div>
                <div className='commentsHeader'>
                    <h2><img src={commentsIcon}/>Comentários</h2>
                </div>
                <div className='commentsBody'>
                    <p>{post.comment.email}</p>
                    <p>{post.comment.body}</p>
                </div>
                <div className='newCommentHeader'>
                    <AddComment/>
                </div>
            </div>
        )};
    </div>
};
