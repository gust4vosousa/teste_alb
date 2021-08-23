import './AddPost.css'
import React, { Component } from "react";
import axios from "axios";

export class AddPost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        const {userId, title, body} = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit} className='newPost'>
                    <div className='row'>
                        <label for='userId' className='col-15'>ID do usuário</label>
                        <input 
                        type='number'
                        name='userId'
                        placeholder='Insira aqui seu ID de usuário...'
                        className='col-85'
                        value={userId}
                        onChange={this.handleChange}/>
                    </div>
                    <div className='row'>
                        <label for='title' className='col-15'>Título</label>
                        <input
                        type='text'
                        name='title'
                        placeholder='Insira aqui o título da postagem...'
                        className='col-85'
                        value={title} 
                        onChange={this.handleChange}/>
                    </div>
                    <div className='row'>
                        <label for='body' className='col-15'>Postagem</label>
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

export default AddPost