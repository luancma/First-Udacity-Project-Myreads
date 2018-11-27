import React, {Component} from 'react'
import BookDetails from './BookDetails'
import {Link} from 'react-router-dom'


//STATLESS COMPONENT, PQ NÃO ESTÁ MANIPULANDO ESTADO
const ListBook = props => {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads by Luan Carlos</h1>
        </div>

        <div className="list-books-content">
          <div>
            <BookDetails 
              books={props.books.filter((book) => (
                book.shelf == "currentlyReading"))} 
                onChangeShelf={props.onChange}
                title="currently reading" 
            />

            <BookDetails 
              books={props.books.filter((book) => (
                book.shelf == "read"))} 
                onChangeShelf={props.onChange}
                title="read" 
            />

            <BookDetails 
              books={props.books.filter((book) => (
                book.shelf == "wantToRead"))} 
                onChangeShelf={props.onChange}
                title="want to read" 
            />
          </div>
        </div>
        
        <div className="open-search">
          <Link to='/search'>Add Book!</Link>
        </div>
      </div>
    )
}

export default ListBook;