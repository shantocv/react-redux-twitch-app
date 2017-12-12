import { Component } from 'react'

export class BookCard extends Component {
  render() {
    return (
      <div className="book-card">
        <img style={{width: 250, height: 323}} src={this.props.stateProps.cover} />
        <h2>{this.props.stateProps.title}</h2>
        <h3>{this.props.stateProps.author}</h3>
        <a href={this.props.stateProps.link}>{this.props.stateProps.link}</a>
        <br />
	<button onClick={() => this.props.dispatchAction("TRASH")}>MINUS</button>
	<button onClick={() => this.props.dispatchAction("PLUS")}>PLUS</button>
        <button onClick={() => this.props.dispatchAction("EDIT")}>EDIT</button>
      </div>
    )
  }
}
