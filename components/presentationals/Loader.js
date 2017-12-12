import { Component } from 'react';
import { render } from 'react-dom'

//Presentational React Component
class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <div className="box">
          <div className="line-1" />
          <div className="line-2">
            <div className="triangle">
              <div className="shine" />
            </div>
          </div>
          <div className="line-3">
            <div className="triangle-sm">
              <div className="shine" />
            </div>
          </div>
          <div className="line-4">
            <div className="triangle-sm">
              <div className="shine" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Loader
