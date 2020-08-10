import React, { Component } from 'react';
import "./Input.css";

class Input extends Component {

  render() {
    return (
      <div className="container search-input mt-1 p-3">
        <form onSubmit={this.props.onSubmit}>
          <div className="fromGroup">
        
           
            <input 
              type="text" 
              className="form-control" 
              name="search"
              value={this.props.search}
              onChange={this.props.onChange}
              placeholder="Enter Book Name"
              required>
            </input>
          </div>
          <button type="submit" className="btn btn-primary mt-2">Search</button>
        </form>
      </div>
    )
  }
}

export default Input;