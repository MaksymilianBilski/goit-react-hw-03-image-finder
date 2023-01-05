import { Component } from 'react';
import css from '../Button/Button.module.css';
import PropTypes from 'prop-types';

export class Button extends Component {
  render() {
    return (
      <div className={css.btnWrapper}>
        <button
          type="button"
          className={css.btn}
          onClick={this.props.handleClick}
        >
          <span className={css.btnLabel}>load more</span>
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  handleClick: PropTypes.func,
};
