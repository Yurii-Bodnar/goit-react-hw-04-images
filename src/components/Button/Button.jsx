import { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {


  render() {
    if (this.props.images.length !== 0) {
      return (
        <button onClick={this.props.loadMore} className="Button" type="button">
          Load more
        </button>
      );
    }

    return;
  }
}

Button.propTypes = {
    loadMore: PropTypes.func.isRequired,
}

export default Button;

