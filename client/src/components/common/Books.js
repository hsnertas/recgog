import React, { Component } from 'react'
import Book from './Book';

class Books extends Component {
  
  renderBooks() {
    return (
      <div className="container">
        {
          this.props.books.map((book, i) => (
            <div key={i.toString()}>
              <Book
                book={book}
                buttonName={this.props.buttonName}
                onClick={() => this.props.onClick(i)}
              />
            </div>
          ))
        }
      </div>
    );
  }

 
  render() {
    return (
      <div className="container books mt-1 p-3">
        {this.renderBooks()}
      </div>
    )
  }
}

export default Books;