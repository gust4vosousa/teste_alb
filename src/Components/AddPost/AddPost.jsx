import './AddPost.css'
import React, { Component } from "react";
import newPostIcon from '../../Images/newPost.png'

export class AddPost extends Component {
    constructor(props) {
        super(props)
  
        this.state = {
            userName: '',
            title: '',
            body: ''
        }
    }

    handleChange = (e) => {
        
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value})
    }

    render() {
        const {userName, title, body} = this.state
        return (
            <div className='addPost'>
                <div className='addPostBox'>
                    <h1><img src={newPostIcon}/>Nova postagem</h1>
                    <form onSubmit={this.handleSubmit} className='newPostForm'>
                        <div className='row'>
                            <label className='col-15'>Nome de usuário</label>
                            <input 
                            type='text'
                            name='userName'
                            placeholder='Insira aqui seu nome de usuário...'
                            className='col-85'
                            value={userName}
                            onChange=''/>
                        </div>
                        <div className='row'>
                            <label className='col-15'>Título</label>
                            <input
                            type='text'
                            name='title'
                            placeholder='Insira aqui o título da postagem...'
                            className='col-85'
                            value={title} 
                            onChange=''/>
                        </div>
                        <div className='row'>
                            <label className='col-15'>Postagem</label>
                            <textarea
                            type='text'
                            name='body'
                            placeholder='Insira aqui sua postagem...'
                            className='col-85'
                            value={body}
                            onChange=''/>
                        </div>
                        <div className='row'>
                            <button type='submit'>Enviar</button>
                        </div>
                    </form>
                </div>
                <div className='postBox'>
                    <div className='postNome'>
                        <a href='#'>{userName}</a>
                    </div>
                    <div className='postTitulo'> 
                        <h1>{title}</h1>
                    </div>
                    <div className='postCorpo'>
                        <p>{body}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddPost