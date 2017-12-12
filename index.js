import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'


import BooksApp from './reducers/BooksApp'
import Books from './components/containers/Books'

window.React = React

class App extends Component {
  render(){
    return(
      <div>
	<Books store = { store } />
      </div>
    )
  }
}

let store =  createStore(BooksApp)
console.log(store.getState()) 


render(
  <Provider store = { store }>
    <App />
  </Provider>, 
  document.getElementById('app')
)
