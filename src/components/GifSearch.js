import React, {Component} from 'react'

class GifSearch extends Component {
  state = {
    searchTerm: ''
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    }, () => console.log(this.state))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.search(this.state.searchTerm)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input type='text' onChange={this.handleChange} value={this.state.searchTerm} />
        <input type='submit' />
      </form>
    )
  }
  
}

export default GifSearch
