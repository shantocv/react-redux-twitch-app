import { Component } from 'react'
import { getState } from 'redux'
import { render } from 'react-dom'
import axios from 'axios'

import FetchRequest from '../../actions/FetchRequest'
import FetchSuccess from '../../actions/FetchSuccess'
import FetchFailure from '../../actions/FetchFailure'
import StreamCard from '../presentationals/StreamCard'

import Loader from '../presentationals/Loader'


class Streams extends Component {
    
    componentWillMount(){
      this.props.store.subscribe(this.forceUpdate.bind(this))
      this.apiRequest()
      setTimeout(() => {
        this.dispatchFetchRequest()
      }, 2000)
    }

    apiRequest(){
      axios.get("https://api.twitch.tv/kraken/streams/featured?client_id=0fs6z73mk4g38k2507cn3ysi5mixf6")
           .then(response => {
             const streams = response.data.featured.map(function(feat) {
               return feat.stream
             })
             this.dispatchFetchSuccess(streams)
             console.log(response) 
           })
           .catch(e => {
             this.dispatchFetchFailure(e)
             console.log(e)
           })

    }

    dispatchFetchRequest(){
      this.props.store.dispatch(FetchRequest())
    }

    dispatchFetchSuccess(streams){
      this.props.store.dispatch(FetchSuccess(streams))
    }

    dispatchFetchFailure(e){
      this.props.store.dispatch(FetchFailure(e))
    }
  
    render (){
      const stateProps = this.props.store.getState()
      const status = stateProps.status
      console.log(stateProps)
      const streamCardItems = stateProps.streams.map((stream) => 
	<StreamCard key={stream._id} streamCover={stream.preview.medium} streamLink={stream.channel.url} />
      )
      return(
        <div>
          {
            ( status == 'loading') ? ( <Loader /> ) :
            ( status == 'success') ? ( <div className='stream-cards'> {streamCardItems} </div> )  : (<div></div>) 
          }
        </div>
      )
    }
}

export default Streams
