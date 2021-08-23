import './AddComment.css'
import React, { Component } from "react";
import axios from "axios";

export class AddComment extends Component {
    constructor(props) {
        super(props)

        this.state = {
            postId: '',
            email: '',
            body: ''
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/comments', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        const {postId, email, body} = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit} className='newComment'>
                    <div className='row'>
                        <label for='userId' className='col-15'>ID do post</label>
                        <input 
                        type='number'
                        name='postId'
                        placeholder='Insira aqui o ID do post...'
                        className='col-85'
                        value={postId}
                        onChange={this.handleChange}/>
                    </div>
                    <div className='row'>
                        <label for='email' className='col-15'>E-mail</label>
                        <input
                        type='email'
                        name='email'
                        placeholder='Insira aqui seu e-mail...'
                        className='col-85'
                        value={email} 
                        onChange={this.handleChange}/>
                    </div>
                    <div className='row'>
                        <label for='body' className='col-15'>Comentário</label>
                        <textarea
                        type='text'
                        name='body'
                        placeholder='Insira aqui sua postagem...'
                        className='col-85'
                        value={body}
                        onChange={this.handleChange}/>
                    </div>
                    <div className='row'>
                        <button type='submit'>Enviar</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddComment