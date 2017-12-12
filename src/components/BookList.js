import React, { Component } from 'react'
import { connect } from 'react-redux'

import Book from './Book'

class BookList extends Component {
  render () {
    let listOfBooks = this.props.books
    .map(book => {
      return (
        <div key={book.id}>
          <Book book={book} />
          <button
            onClick={() => this.props.history.push('/edit/' + book.id)}
          >Edit me</button>
        </div>

      )
    })
    return (
      <ul>{listOfBooks}</ul>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps, null)(BookList)
