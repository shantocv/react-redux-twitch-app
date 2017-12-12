import { Component } from 'react'
import { getState } from 'redux'

import { BookCard } from '../presentationals/BookCard'
import AddBook from '../../actions/AddBook'
import DeleteBook from '../../actions/DeleteBook'
import EditBook from '../../actions/EditBook'


class Books extends Component {

  componentWillMount(){
    this.props.store.subscribe(this.forceUpdate.bind(this))
  }

  dispatchAction (input) {
    switch (input) {
      case "TRASH":
	this.props.store.dispatch(DeleteBook());
	break;
      case "PLUS":
	this.props.store.dispatch(AddBook());
	break;
      case "EDIT":
        this.props.store.dispatch(EditBook());
        break;
    }
  }

  render(){
    const stateProps = this.props.store.getState()
    console.log(stateProps)

    const bookItems = stateProps.books.map((book, i) => 
      <BookCard key={i} stateProps = { stateProps } dispatchAction = { this.dispatchAction.bind(this) } />
    )

    return(
      <div className="books-container">
        { bookItems }
      </div>
    )
  }
}

export default Books
