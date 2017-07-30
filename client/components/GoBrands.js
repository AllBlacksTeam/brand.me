import React, { Component } from 'react';
import Scrollchor from 'react-scrollchor';

class GoBrand extends Component {
  render() {
    return (
      <nav className="has-text-centered">
        <Scrollchor to="#brand-list">
          <span className="icon is-large">
            <i className="fa fa-arrow-circle-down"></i>
          </span>
        </Scrollchor>
      </nav>
    )
  }
}

export default GoBrand;
