import React from 'react'

const Book = (props) => {
  let { title, author, pages } = props.book
  return (
    <li>
      <p>Title: {title}</p>
      <p>Author: {author}</p>
      <p>Pages: {pages}</p>
    </li>
  )
}

export default Book
