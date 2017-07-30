import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import mutation from '../mutations/LikeBrand';

class Brand extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    mutate: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.onLike = this.onLike.bind(this);
  }
  onLike() {
    const { id } = this.props;
    this.props.mutate({
      variables: { id },
    });
  }
  render() {
    const { name, likes } = this.props;
    return (
      <div className="columns">
        <div className="column is-6 is-offset-3">
          <div className="card">
            <div className="card-content">
              <p className="title">
                <span className="is-pulled-right">
                  {likes}
                </span>
                {name}
              </p>
            </div>
            <footer className="card-footer">
              <a className="card-footer-item" onClick={this.onLike}>
                <span className="icon">
                  <i className="fa fa-thumbs-o-up"></i>
                </span>
              </a>
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default graphql(mutation)(Brand);
