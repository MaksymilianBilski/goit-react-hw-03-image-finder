import { Component } from 'react';
import PropTypes from 'prop-types';

export class Button extends Component {
  render() {
    return (
      <div>
        <button type="button" onClick={this.props.handleClick}>
          <span>load more</span>
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func,
};
