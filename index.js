import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'


import TwitchApp from './reducers/TwitchApp'
import Streams from './components/containers/Streams'

window.React = React

class App extends Component {
  render(){
    return(
      <div className='app'>
	<Streams store = { store } />
      </div>
    )
  }
}

let store =  createStore(TwitchApp)


render(
  <Provider store = { store }>
    <App />
  </Provider>, 
  document.getElementById('app')
)
