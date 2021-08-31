import './AddComment.css'
import React, { Component } from "react";
import ShowNewComment from '../ShowNewComment/ShowNewComment';

export class AddComment extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            body: '',
            outputEmail: '',
            outputBody: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = () => {
        this.setState({
            outputEmail: this.state.email,
            outputBody: this.state.body,
        })
    }

    deletePost = () => {
        this.setState({
            outputEmail: '',
            outputBody: ''
        })
    }

    render() {
        const {email, body} = this.state
        return (
            <div>
                <div 
                className='commentsBody'
                style={{display:(this.state.outputBody? 'block':'none')}}
                >
                    <ShowNewComment email={this.state.outputEmail}/>
                    <ShowNewComment body={this.state.outputBody}/>
                    <div>
                        <button
                        type='button'
                        onClick={() => this.deletePost()}
                        >
                             Excluir
                        </button>
                    </div>
                </div>
                <form className='newComment'>
                    <div className='row'>
                        <label className='col-15'>E-mail</label>
                        <input
                        type='email'
                        name='email'
                        placeholder='Insira aqui seu e-mail...'
                        className='col-85'
                        value={email} 
                        onChange={this.handleChange}/>
                    </div>
                    <div className='row'>
                        <label className='col-15'>Comentário</label>
                        <textarea
                        type='text'
                        name='body'
                        placeholder='Insira aqui sua postagem...'
                        className='col-85'
                        value={body}
                        onChange={this.handleChange}/>
                    </div>
                    <div className='row'>
                        <button 
                        type='button'
                        onClick={() => this.handleSubmit(
                            this.state.email,
                            this.state.body 
                            )}
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddComment