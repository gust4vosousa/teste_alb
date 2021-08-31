import react, { Component } from "react";

export default class ShowNewPost extends Component {
    render() {
      return( 
      <div>
        <a href='#'>{this.props.username}</a>  
        <h1>{this.props.title}</h1>
        <p>{this.props.body}</p>
      </div>)
    }
  }