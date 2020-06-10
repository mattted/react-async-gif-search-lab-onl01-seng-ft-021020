import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
  state = {
    images: []
  }

  search = (searchTerm) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          images: data.data.slice(0, 3).map(function (el) {return {title: el.title, url: el.images.original.url} })
        }, () => console.log(this.state))
      })
  }

  render() {
    return ([
      <GifSearch search={this.search} />,
      <GifList images={this.state.images}/>
    ])
  }
}

export default GifListContainer
