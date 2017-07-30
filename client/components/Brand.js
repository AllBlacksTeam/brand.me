import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LikeButton from './LikeButton';
import DislikeButton from './DislikeButton';

class Brand extends Component {
  render() {
    const { name, id, likes, dislikes } = this.props;
    return (
      <div className="columns">
        <div className="column is-6 is-offset-3">
          <div className="card">
            <div className="card-content">
              <p className="title">
                <span className="is-pulled-right">
                  {likes - dislikes}
                </span>
                {name}
              </p>
            </div>
            <footer className="card-footer">
              <DislikeButton id={id} dislikes={dislikes} />
              <LikeButton id={id} likes={likes} />
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

Brand.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  dislikes: PropTypes.number.isRequired,
};

export default Brand;
