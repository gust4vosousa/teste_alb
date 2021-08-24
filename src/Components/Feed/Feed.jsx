import './Feed.css'
import React, {useState, useEffect} from 'react' //importa a biblioteca React
import {getPosts} from '../../APIs/post';
import AddPost from '../AddPost/AddPost';
import AddComment from '../AddComment/AddComment';
import userIconSmall from '../../Images/userSmall.png'
import userIconLarge from '../../Images/userLarge.png'
import newCommentIcon from '../../Images/newComment.png'
import newPostIcon from '../../Images/newPost.png'
import commentsIcon from '../../Images/comments.png'

export default () => { //exporta a função descrita abaixo
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {        
        getPosts()
        .then(response => setPosts(response))
    },[]);
    
    return <div className="feed">
        <div className='postBox'>
            <h1><img src={newPostIcon}/>Nova postagem</h1>
            <AddPost/>
        </div>
        {posts.map((post) =>
            <div className='postBox'>
                <div className='postNome'>
                    <div className="dropdown">
                        <img src={userIconSmall}/>
                        <div className='dropdownUser'>
                            <h1>Informações do Usuário</h1>
                            <img src={userIconLarge}/>
                            <div className='userInfo'>
                                <p>{post.user.name}</p><br/>
                                <p>{post.user.email}</p>
                            </div>
                        </div>
                    </div>
                    <a href='#'>@{post.user.username}</a>
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
                    <img src={userIconSmall}/>
                    <p>{post.comment.email}</p>
                    <p>{post.comment.body}</p>
                </div>
                <div className='newCommentHeader'>
                    <h2><img src={newCommentIcon}/>Novo Comentário</h2>
                    <AddComment/>
                </div>
            </div>
        )}
    </div>
}
