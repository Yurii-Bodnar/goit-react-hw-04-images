import { Component } from 'react';
import './../styles.css';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';

export class App extends Component {
  state ={
    imagesName:''
    }
  handleFormSubmit = imagesName => {
    this.setState({imagesName})
  }

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit}/>
        <ImageGallery imagesName={this.state.imagesName}/>
      </div>
    );
  }
}
