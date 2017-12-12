import {
GET_ALL_BOOKS_PENDING,
GET_ALL_BOOKS_SUCCESS,
EDIT_BOOK_PENDING,
EDIT_BOOK_SUCCESS
} from '../actions/books'

export default(state = [], action) => {
  switch (action.type) {
    case GET_ALL_BOOKS_PENDING:
      return state;
    case GET_ALL_BOOKS_SUCCESS:
      return [...action.payload.data];
    case EDIT_BOOK_PENDING:
      return state;
    case EDIT_BOOK_SUCCESS:
      return [...action.payload.data];
    default:
      return state;
  }
};
