import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { editBook } from '../actions/books'

class BookEdit extends Component {
  editBook = (values) => {
    console.log('form values', values)
  }

  render () {
    const { handleSubmit } = this.props
    console.log('this.props in edit', this.props)
    return (
      <form onSubmit={ handleSubmit(this.editBook) }>
        <div>
          <label htmlFor="title">Title</label>
          <Field name="title" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <Field name="author" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="pages">Pages</label>
          <Field name="pages" component="input" type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

BookEdit = reduxForm({
  // a unique name for the form
  form: 'book_edit'
})(BookEdit)

function mapStateToProps(state, props) {
  return {
    initialValues: state.books.filter(book => book.id == props.match.params.id)[0]
  }
}

function mapDispatchToProps(dispatch) {
  return {
    editBook: bindActionCreators(editBook, dispatch),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(BookEdit)
