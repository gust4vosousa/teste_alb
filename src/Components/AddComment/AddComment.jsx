import './AddComment.css';
import React, { Component } from 'react';
import ShowNewComment from '../ShowNewComment/ShowNewComment';
import deleteIcon from '../../Images/delete.png';

export class AddComment extends Component {
    // recebe o e-mail e conteúdo do comentário e atribui os valores para exibição 
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            body: '',
            outputEmail: '',
            outputBody: '',
        };
    };

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            outputEmail: this.state.email,
            outputBody: this.state.body,
        });
    };

    deletePost = () => {
        this.setState({
            outputEmail: '',
            outputBody: ''
        });
    };

    render() {
        const {email, body} = this.state;
        return (
            <div>
                <div 
                className='commentsBody'
                style={{display:(this.state.outputBody? 'block':'none')}}
                > 
                    <div>
                        <button className='deleteBtn'
                        type='button'
                        onClick={() => this.deletePost()}
                        >
                            <img src={deleteIcon}/>
                        </button>
                    </div>
                    <ShowNewComment email={this.state.outputEmail}/>
                    <ShowNewComment body={this.state.outputBody}/>
                </div>
                <form className='newComment' onSubmit={this.handleSubmit}>
                    <div className='row'>
                        <label className='col-15'>E-mail</label>
                        <input
                        type='email'
                        name='email'
                        placeholder='Insira aqui seu e-mail...'
                        className='col-85'
                        value={email} 
                        onChange={this.handleChange}
                        required/>
                    </div>
                    <div className='row'>
                        <label className='col-15'>Comentário</label>
                        <textarea
                        type='text'
                        name='body'
                        placeholder='Insira aqui sua postagem...'
                        className='col-85'
                        value={body}
                        onChange={this.handleChange}
                        required/>
                    </div>
                    <div className='row'>
                        <button type='submit'>
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        );
    };
};

export default AddComment;