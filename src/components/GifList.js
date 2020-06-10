import React, {Component} from 'react'

class GifList extends Component {
  
  render() {
    return(
      <ul>
        {this.props.images.map(image => (
          <li>
            <p>{image.title}</p>
            <img src={image.url} alt=''/>
          </li>
        ))}
      </ul>
    )
  }
}

export default GifList
