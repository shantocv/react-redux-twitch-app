import { Component } from 'react'
import { render } from 'react-dom'


class StreamCard extends Component {
  render(){
    return(
      <div className="stream-cards">
        <a href={this.props.streamLink} target="_blank">
          <img 
            className="stream-cover"
            src={this.props.streamCover}
          />
        </a>
      </div>
    )
  } 
}

export default StreamCard
