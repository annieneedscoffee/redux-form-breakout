import React, { Component } from 'react';
import './App.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAllBooks } from './actions/books';

import BookEdit from './components/BookEdit'
import BookList from './components/BookList'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


export class App extends Component {

  componentDidMount() {
    this.props.getAllBooks()
  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>

          <hr/>

          <Route exact path="/" component={BookList}/>
          <Route exact path="/edit/:id" component={BookEdit}/>
        </div>
      </Router>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAllBooks: bindActionCreators(getAllBooks, dispatch),
  }
}

export default connect(null, mapDispatchToProps)(App);
