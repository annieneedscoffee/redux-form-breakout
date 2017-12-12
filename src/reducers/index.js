import books from './books';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
const rootReducer = combineReducers({
    books,
    form: formReducer
});
export default rootReducer;
