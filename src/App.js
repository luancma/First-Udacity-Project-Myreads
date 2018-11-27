import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBook from './ListBook'
import Search from './Search'
import './App.css'

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((booksdata) => {
      this.setState({books: booksdata})
    })
  }

  updateBooks = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then((booksdata) => {
        this.setState({books: booksdata})
      })
    })
  }

  render() {
    return (
      <div className="app">

      <Route exact path="/search"
         render={({history}) => (
          <Search 
            onChange={this.updateBooks} 
            myBooks={this.state.books}
          />
          )}
      />

        <Route exact path="/" 
          render={() => (
            <ListBook 
              books={this.state.books} 
              onChange={this.updateBooks}
            />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
