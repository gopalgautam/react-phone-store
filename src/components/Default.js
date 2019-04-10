import React, { Component } from 'react'

export default class Default extends Component {
  render() {
    console.log(this.props); 
    return (
      <div className="container text-center py-5 text-title">
        <h1>404! </h1>
        <h5>error page not found.</h5>
        <p className="py-3">The request URL <span className="text-danger">{this.props.location.pathname}</span> was not found.</p>
      </div>
    )
  }
}
