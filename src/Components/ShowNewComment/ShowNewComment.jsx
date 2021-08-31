import react, { Component } from "react";

export default class ShowNewComment extends Component {
    render() {
      return( 
      <div>  
        <p>{this.props.email}</p>
        <p>{this.props.body}</p>
      </div>)
    }
  }