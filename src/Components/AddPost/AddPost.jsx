import './AddPost.css';
import React, { Component } from 'react';
import newPostIcon from '../../Images/newPost.png';
import ShowNewPost from '../ShowNewPost/ShowNewPost';
import AddComment from '../AddComment/AddComment';
import commentsIcon from '../../Images/comments.png';
import deleteIcon from '../../Images/delete.png';

export class AddPost extends Component {
    // recebe o nome de usuário, título e conteúdo da postagem e atribui os valores para exibição     
    constructor(props) {
        super(props);
  
        this.state = {
            username: '',
            title: '',
            body: '',
            outputBody: '',
            outputTitle: '',
            outputUsername: ''
        };
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            outputUsername: this.state.username,
            outputTitle: this.state.title,
            outputBody: this.state.body
        });
    };

    deletePost = () => {
        this.setState({
            outputUsername: '',
            outputTitle: '',
            outputBody: ''
        });
    };

    render() {
        const {username, title, body} = this.state;
        return (
            <div className='addPost'>
                <div className='addPostBox'>
                    <h1><img src={newPostIcon}/>Nova postagem</h1>
                    <form className='newPostForm' onSubmit={this.handleSubmit}>
                        <div className='row'>
                            <label className='col-15'>Nome de usuário</label>
                            <input 
                            type='text'
                            name='username'
                            placeholder='Insira aqui seu nome de usuário...'
                            className='col-85'
                            value={username}
                            onChange={this.handleChange}
                            required/>
                        </div>
                        <div className='row'>
                            <label className='col-15'>Título</label>
                            <input
                            type='text'
                            name='title'
                            placeholder='Insira aqui o título da postagem...'
                            className='col-85'
                            value={title} 
                            onChange={this.handleChange}
                            required/>
                        </div>
                        <div className='row'>
                            <label className='col-15'>Postagem</label>
                            <textarea
                            type='text'
                            name='body'
                            placeholder='Insira aqui sua postagem...'
                            className='col-85'
                            value={body}
                            onChange={this.handleChange}
                            required/>
                        </div>
                        <div>
                            <button type='submit'>
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
                <div 
                className='postBox'
                style={{display:(this.state.outputBody? 'inline-flex':'none')}}
                >
                    <div>
                        <button 
                        className='deleteBtn'
                        type='button'
                        onClick={() => this.deletePost()}
                        >
                            <img src={deleteIcon}/>
                        </button>
                    </div>
                    <div className='postNome'>
                        <ShowNewPost username={this.state.outputUsername}/>
                    </div>
                    <div className='postTitulo'>
                        <ShowNewPost title={this.state.outputTitle}/>
                    </div>
                    <div className='postCorpo'>
                        <ShowNewPost body={this.state.outputBody}/>
                    </div>                    
                    <div className='commentsHeader'>
                        <h2><img src={commentsIcon}/>Comentários</h2>
                    </div>
                    <div className='newCommentHeader'>
                        <AddComment/>
                    </div>
                </div>
            </div>
        );
    };
};

export default AddPost;