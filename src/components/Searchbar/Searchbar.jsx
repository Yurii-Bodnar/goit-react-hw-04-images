import { Component } from 'react';
import './../../styles.css';


class Searchbar extends Component {
  state = {
    imagesName:'',
  };

  handleSearch = (e) => {
    this.setState({imagesName:e.currentTarget.value.toLowerCase()})
  }
  handleSubmit = (e) => {
    e.preventDefault()
    if(this.state.imagesName.trim() === ''){
        return ;
    }
    this.setState({imagesName:""})
    this.props.onSubmit(this.state.imagesName)


  }
//   e.target.elements.imagesName.value
  render() {
    return (
      <header className="Searchbar">
        <form onSubmit={this.handleSubmit} className="SearchForm">
          <button type="submit" className="SearchForm-button ">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            onChange={this.handleSearch}
            className="SearchForm-input"
            name='imagesName'
            value={this.state.imagesName}
            type="text"
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
